<?php
/**
 * Fortune 5 - Gemini AI Chatbot Proxy
 * Securely calls Google Gemini API without exposing the API key to the client.
 */

// Headers & Security
header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle CORS preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Only accept POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method Not Allowed']);
    exit;
}

// --------------------------------------------------------------------------
// API KEY CONFIGURATION
// Loads from:
// 1. config.php (private config file, excluded from git)
// 2. Environment variable GEMINI_API_KEY
// --------------------------------------------------------------------------
if (file_exists(__DIR__ . '/config.php')) {
    include_once __DIR__ . '/config.php';
}

$HARDCODED_API_KEY = defined('GEMINI_API_KEY') ? GEMINI_API_KEY : "YOUR_GEMINI_API_KEY";
$apiKey = getenv('GEMINI_API_KEY') ?: $HARDCODED_API_KEY;

if (empty($apiKey) || $apiKey === 'YOUR_GEMINI_API_KEY') {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error' => 'Gemini API key is not configured. Please set the API key in config.php or environment variable'
    ]);
    exit;
}

// Read and decode JSON input
$rawInput = file_get_contents('php://input');
$input = json_decode($rawInput, true);

if (!$input || empty(trim($input['message'] ?? ''))) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Message is required']);
    exit;
}

$userMessage = trim($input['message']);

// Limit input message length to prevent abuse
if (mb_strlen($userMessage) > 1000) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Message too long (max 1000 characters)']);
    exit;
}

$history = $input['history'] ?? [];

// Fortune 5 Knowledge System Instruction
$systemInstruction = <<<TEXT
You are the elite AI Assistant for Fortune 5 Risk Management & Insurance Advisors.
Company Facts:
- 75+ years of trusted advisory and claims advocacy in Mumbai, India.
- Managing Partner: Kaushal Shah.
- Direct Desk: +91-98208 10067 | Board: +91-22-2619 2727 | Email: insure@fortune5.in
- Office: 106-107, E-Square, Subhash Road, Vile Parle (East), Mumbai 400057.
- Working Hours: Mon-Sat 10:00 AM - 7:30 PM IST.

Services:
1. Corporate: Property & Fire, Burglary, Group Health (GMC), Group Personal Accident (GPA), Group Term Life (GTL), Marine Cargo, Construction All-Risk (CAR), D&O Liability.
2. Retail: Health Insurance, Motor (Car & Two-Wheeler), International Travel Insurance, Personal Accident, Home, Term Life.
3. Claims Support: 24/7 assistance, surveyor coordination, documentation, and insurer advocacy.

MANDATORY RULES:
- BE EXTREMELY CONCISE: Maximum 40 to 60 words total per response. Never write long paragraphs.
- If listing options, provide ONLY 2 to 3 bullet points maximum.
- Format each bullet point as: * **Title**: 1 short sentence description.
- End with a single short sentence inviting them to book a consultation or call us.
- Never invent fixed prices.
TEXT;

// Format messages for Gemini API
$contents = [];

// Append sanitized history (keep last 6 turns for context and speed)
if (is_array($history)) {
    $slicedHistory = array_slice($history, -6);
    foreach ($slicedHistory as $item) {
        $role = ($item['role'] ?? '') === 'model' ? 'model' : 'user';
        $text = trim($item['text'] ?? '');
        if (!empty($text)) {
            $contents[] = [
                'role' => $role,
                'parts' => [['text' => mb_substr($text, 0, 800)]]
            ];
        }
    }
}

// Append current user message
$contents[] = [
    'role' => 'user',
    'parts' => [['text' => $userMessage]]
];

$geminiPayload = [
    'system_instruction' => [
        'parts' => [
            ['text' => $systemInstruction]
        ]
    ],
    'contents' => $contents,
    'generationConfig' => [
        'temperature' => 0.4,
        'maxOutputTokens' => 200
    ]
];

// Call Gemini API (using gemini-3.5-flash-lite with fallback to gemini-3.5-flash)
$model = 'gemini-3.5-flash-lite';
$url = "https://generativelanguage.googleapis.com/v1beta/models/{$model}:generateContent?key=" . urlencode($apiKey);

$ch = curl_init($url);
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => json_encode($geminiPayload),
    CURLOPT_HTTPHEADER => [
        'Content-Type: application/json'
    ],
    CURLOPT_TIMEOUT => 15,
    CURLOPT_SSL_VERIFYPEER => true
]);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$curlError = curl_error($ch);
curl_close($ch);

$data = $response ? json_decode($response, true) : null;

// If model failed or quota exceeded on 3.5-flash-lite, fallback to gemini-3.5-flash
if ($httpCode !== 200 || empty($data['candidates'][0]['content']['parts'][0]['text'])) {
    if ($httpCode === 404 || (isset($data['error']['message']) && stripos($data['error']['message'], 'not found') !== false)) {
        $fallbackUrl = "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent?key=" . urlencode($apiKey);
        $ch2 = curl_init($fallbackUrl);
        curl_setopt_array($ch2, [
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_POST => true,
            CURLOPT_POSTFIELDS => json_encode($geminiPayload),
            CURLOPT_HTTPHEADER => ['Content-Type: application/json'],
            CURLOPT_TIMEOUT => 15,
            CURLOPT_SSL_VERIFYPEER => true
        ]);
        $response = curl_exec($ch2);
        $httpCode = curl_getinfo($ch2, CURLINFO_HTTP_CODE);
        curl_close($ch2);
        $data = $response ? json_decode($response, true) : null;
    }
}

if ($httpCode === 200 && !empty($data['candidates'][0]['content']['parts'][0]['text'])) {
    $reply = trim($data['candidates'][0]['content']['parts'][0]['text']);
    echo json_encode([
        'success' => true,
        'reply' => $reply
    ]);
} else {
    // Graceful apology for server busy or API errors
    echo json_encode([
        'success' => false,
        'isBusy' => true,
        'reply' => "We apologize, our advisory server is currently experiencing high demand and is temporarily busy.\n\nPlease try again in a moment, or reach our advisory team directly:\n* **Claims & Direct Desk**: +91-98208 10067\n* **WhatsApp**: Available Mon-Sat 10:00 AM - 7:30 PM IST\n* **Email**: insure@fortune5.in"
    ]);
}
