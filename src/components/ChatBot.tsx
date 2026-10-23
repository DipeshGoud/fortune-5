"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  X,
  Send,
  RotateCcw,
  Sparkles,
  Phone,
  ArrowUpRight,
  MessageSquare,
  ShieldCheck,
  CalendarCheck,
  MapPin,
} from "lucide-react";
import ConsultationModal from "./ConsultationModal";

const WA_LINK =
  "https://wa.me/919820810067?text=Hello%20Fortune%205%2C%20I%20would%20like%20to%20inquire%20about%20your%20risk%20management%20services.";

interface ChatMsg {
  from: "bot" | "user";
  text: string;
}

const STARTER_PROMPTS = [
  { label: "🏢 Corporate Risk & Cover", query: "What corporate insurance solutions do you offer?" },
  { label: "🛡️ Claims Process & Support", query: "How do I file or get assistance with an insurance claim?" },
  { label: "📋 Retail & Family Policies", query: "What retail and health insurance policies do you provide?" },
  { label: "📍 Office Address & Timings", query: "Where is your office located and what are your working hours?" },
];

const LINK_RE = /(\+?\d[\d\s-]{6,}\d|[\w.+-]+@[\w-]+\.[\w.]+|\[[^\]]+\]\([^)]+\))/g;

/**
 * Parses inline formatting like **bold text**, markdown links, and phone/email links.
 */
function renderInlineContent(
  text: string,
  onOpenConsultation: () => void
): React.ReactNode {
  // Split on bold markdown **...**
  const boldParts = text.split(/(\*\*[^*]+\*\*)/g);

  return boldParts.map((bPart, bIdx) => {
    if (bPart.startsWith("**") && bPart.endsWith("**")) {
      const inner = bPart.slice(2, -2);
      return (
        <strong key={bIdx} className="font-extrabold text-[#01327a]">
          {inner}
        </strong>
      );
    }

    // Split on phone, emails, and markdown links [text](url)
    const subParts = bPart.split(LINK_RE);
    return (
      <React.Fragment key={bIdx}>
        {subParts.map((part, pIdx) => {
          // Markdown link [Label](url)
          const mdLinkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
          if (mdLinkMatch) {
            const label = mdLinkMatch[1];
            const url = mdLinkMatch[2];
            if (/consult|contact/i.test(label) || /consult|contact/i.test(url)) {
              return (
                <button
                  key={pIdx}
                  type="button"
                  onClick={onOpenConsultation}
                  className="inline-flex items-center gap-1 font-bold text-[#01327a] underline decoration-[#C59B27] underline-offset-2 hover:text-[#9A7A1A] transition-colors cursor-pointer"
                >
                  <span>{label}</span>
                  <ArrowUpRight className="h-3 w-3" />
                </button>
              );
            }
            return (
              <a
                key={pIdx}
                href={url}
                target={url.startsWith("http") ? "_blank" : undefined}
                rel={url.startsWith("http") ? "noopener noreferrer" : undefined}
                className="font-bold text-[#01327a] underline decoration-[#C59B27] underline-offset-2 hover:text-[#9A7A1A] transition-colors"
              >
                {label}
              </a>
            );
          }

          // Phone numbers
          if (/^\+?\d[\d\s-]{6,}\d$/.test(part)) {
            const tel = "tel:+" + part.replace(/\D/g, "");
            return (
              <a
                key={pIdx}
                href={tel}
                className="inline-flex items-center gap-0.5 font-bold text-[#01327a] underline decoration-[#C59B27] underline-offset-2 hover:text-[#9A7A1A] transition-colors"
              >
                {part}
              </a>
            );
          }

          // Email addresses
          if (/^[\w.+-]+@[\w-]+\.[\w.]+$/.test(part)) {
            return (
              <a
                key={pIdx}
                href={`mailto:${part}`}
                className="inline-flex items-center gap-0.5 font-bold text-[#01327a] underline decoration-[#C59B27] underline-offset-2 hover:text-[#9A7A1A] transition-colors"
              >
                {part}
              </a>
            );
          }

          return <React.Fragment key={pIdx}>{part}</React.Fragment>;
        })}
      </React.Fragment>
    );
  });
}

/**
 * Rich message formatter that turns Markdown lists and paragraphs into
 * clean, scannable UI cards instead of walls of text.
 */
function FormattedBotMessage({
  text,
  onOpenConsultation,
}: {
  text: string;
  onOpenConsultation: () => void;
}) {
  const lines = text.split("\n").map((l) => l.trim()).filter(Boolean);

  const elements: React.ReactNode[] = [];
  let currentList: string[] = [];

  const flushList = (key: number) => {
    if (currentList.length > 0) {
      elements.push(
        <ul key={`ul-${key}`} className="my-2 space-y-2 pl-0.5">
          {currentList.map((item, liIdx) => (
            <li key={liIdx} className="flex items-start gap-2.5 text-[12.5px] leading-relaxed text-slate-700">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C59B27]" />
              <div className="flex-1">{renderInlineContent(item, onOpenConsultation)}</div>
            </li>
          ))}
        </ul>
      );
      currentList = [];
    }
  };

  lines.forEach((line, idx) => {
    // Detect bullet points: *, -, •
    const bulletMatch = line.match(/^([*\-•]|\d+\.)\s+(.+)$/);
    if (bulletMatch) {
      currentList.push(bulletMatch[2]);
    } else {
      flushList(idx);
      elements.push(
        <p key={`p-${idx}`} className="text-[13px] leading-relaxed text-slate-700 my-1 first:mt-0 last:mb-0">
          {renderInlineContent(line, onOpenConsultation)}
        </p>
      );
    }
  });

  flushList(lines.length);

  return <div className="space-y-1.5">{elements}</div>;
}

function hasContactMention(text: string): boolean {
  return /(call|phone|contact|reach|connect|consultation|quote|insure@|98208|desk|surveyor|apologize|busy)/i.test(text);
}

function isLocationMention(text: string): boolean {
  return /(office|address|location|where|vile parle|e-square|subhash road|locate|mumbai 400057|map|directions)/i.test(text);
}

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const [consultModalOpen, setConsultModalOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMsg[]>([
    {
      from: "bot",
      text: "Namaste! I am your Fortune 5 AI Assistant.\n\nHow can I help you today with corporate or retail insurance, claims advisory, or policy reviews?",
    },
  ]);
  const [typing, setTyping] = useState(false);
  const [input, setInput] = useState("");
  const [teaser, setTeaser] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const t = setTimeout(() => {
      if (!hasOpened) setTeaser(true);
    }, 8000);
    return () => clearTimeout(t);
  }, [hasOpened]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, typing, open]);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 250);
    }
  }, [open]);

  const resetChat = () => {
    setMessages([
      {
        from: "bot",
        text: "Namaste! I am your Fortune 5 AI Assistant.\n\nHow can I help you today with corporate or retail insurance, claims advisory, or policy reviews?",
      },
    ]);
    setInput("");
    setTyping(false);
  };

  const send = async (raw: string) => {
    const text = raw.trim();
    if (!text || typing) return;

    const userMsg: ChatMsg = { from: "user", text };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setInput("");
    setTyping(true);

    try {
      const historyPayload = updatedMessages.slice(-6).map((m) => ({
        role: m.from === "bot" ? "model" : "user",
        text: m.text,
      }));

      let replyText: string | null = null;

      const isTestEnv =
        typeof window !== "undefined" &&
        (window.location.hostname === "localhost" ||
          window.location.hostname === "127.0.0.1" ||
          window.location.hostname.startsWith("192.168.") ||
          window.location.hostname.endsWith(".vercel.app"));

      // 1. Production endpoint on Hostinger (PHP server)
      if (!isTestEnv) {
        try {
          const res = await fetch("/api/chat.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              message: text,
              history: historyPayload,
            }),
          });

          const contentType = res.headers.get("content-type") || "";
          if (contentType.includes("application/json")) {
            const data = await res.json();
            if (data?.reply) {
              replyText = data.reply;
            }
          }
        } catch {
          // Continue to fallback if PHP server is temporarily unreachable
        }
      }

      // 2. Direct AI handler (runs on localhost or Vercel test env using GEMINI_API_KEY)
      const clientApiKey = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY;
      if (!replyText && clientApiKey) {
        const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash-lite:generateContent?key=${clientApiKey}`;
        const contents = [
          ...historyPayload.map((h) => ({
            role: h.role,
            parts: [{ text: h.text }],
          })),
          { role: "user", parts: [{ text }] },
        ];

        const localRes = await fetch(geminiUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            system_instruction: {
              parts: [
                {
                  text: `You are the elite AI Assistant for Fortune 5 Risk Management & Insurance Advisors (75+ years legacy).
Managing Partner: Kaushal Shah.
Contact: Support: +91-98208 10067 | Board: +91-22-2619 2727 | Email: insure@fortune5.in
Office: 106-107, E-Square, Subhash Road, Vile Parle (East), Mumbai 400057.
Working Hours: Mon-Sat 10:00 AM - 7:30 PM IST.

Services:
1. Corporate: Property & Fire, Burglary, Group Health (GMC), Group Personal Accident (GPA), Group Term Life (GTL), Marine Cargo, Construction All-Risk (CAR), D&O Liability.
2. Retail: Health Insurance, Motor (Car & Two-Wheeler), International Travel Insurance, Personal Accident, Home, Term Life.
3. Claims Support: 24/7 assistance, surveyor coordination, documentation, and settlement.

MANDATORY RULES:
- BE EXTREMELY CONCISE: Maximum 40 to 60 words total per response. Never write long paragraphs.
- If listing options, provide ONLY 2 to 3 bullet points maximum.
- Format each bullet point as: * **Title**: 1 short sentence description.
- End with a single short sentence inviting them to book a consultation or call us.
- Never invent fixed prices.`,
                },
              ],
            },
            contents,
            generationConfig: {
              temperature: 0.4,
              maxOutputTokens: 200,
            },
          }),
        });

        if (localRes.ok) {
          const localData = await localRes.json();
          replyText = localData?.candidates?.[0]?.content?.parts?.[0]?.text || null;
        } else {
          // If Gemini returns 503 (server busy) or rate limit
          replyText =
            "We apologize, our advisory server is currently experiencing high demand and is temporarily busy.\n\nPlease try again in a moment, or reach our advisory team directly:\n* **Claims & Direct Desk**: +91-98208 10067\n* **WhatsApp**: Available Mon-Sat 10:00 AM - 7:30 PM IST\n* **Email**: insure@fortune5.in";
        }
      }

      if (replyText) {
        setMessages((m) => [...m, { from: "bot", text: replyText! }]);
      } else {
        throw new Error("No response received");
      }
    } catch {
      // Graceful apology response for server busy or network errors
      setMessages((m) => [
        ...m,
        {
          from: "bot",
          text: "We apologize, our advisory server is currently experiencing high demand and is temporarily busy.\n\nPlease try again in a moment, or reach our advisory team directly:\n* **Claims & Direct Desk**: +91-98208 10067\n* **WhatsApp**: Available Mon-Sat 10:00 AM - 7:30 PM IST\n* **Email**: insure@fortune5.in",
        },
      ]);
    } finally {
      setTyping(false);
    }
  };

  const toggle = () => {
    setOpen((o) => {
      if (!o) {
        setHasOpened(true);
        setTeaser(false);
      }
      return !o;
    });
  };

  const isFirstPrompt = messages.filter((m) => m.from === "user").length === 0;

  return (
    <>
      {/* Floating trigger button */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        <AnimatePresence>
          {teaser && !open && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-[220px] rounded-2xl rounded-br-md border border-[#C59B27]/40 bg-white p-3 pr-8 shadow-xl"
            >
              <p className="text-xs font-bold leading-snug text-[#01327a]">
                Need help? Chat with our AI assistant instantly.
              </p>
              <button
                onClick={() => setTeaser(false)}
                aria-label="Dismiss chat prompt"
                className="absolute right-1.5 top-1.5 rounded-full p-1 text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggle}
          aria-label={open ? "Close chat" : "Open chat"}
          className="relative flex h-14 w-14 items-center justify-center rounded-full border border-[#C59B27] bg-[#01327a] text-[#F5D77F] shadow-[0_4px_20px_rgba(1,50,122,0.45)] transition-colors duration-300 hover:bg-[#01255e] cursor-pointer"
        >
          {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
          {!open && !hasOpened && (
            <span className="absolute -right-0.5 -top-0.5 h-4 w-4 animate-pulse rounded-full border-2 border-white bg-emerald-400" />
          )}
        </motion.button>
      </div>

      {/* Main chat modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-24 right-4 z-50 flex h-[560px] max-h-[80vh] w-[calc(100vw-2rem)] max-w-[400px] flex-col overflow-hidden rounded-3xl border border-[#C59B27]/30 bg-[#F9F8F6] shadow-2xl sm:right-6"
          >
            {/* Header */}
            <div className="flex items-center gap-3 bg-[#01327a] px-4 py-3.5 text-white shadow-sm">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F5D77F] text-sm font-black text-[#01327a] shadow-inner ring-2 ring-white/20">
                F5
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5">
                  <p className="text-sm font-extrabold tracking-tight">Fortune 5 AI</p>
                  <Sparkles className="h-3.5 w-3.5 text-[#F5D77F]" />
                </div>
                <p className="flex items-center gap-1.5 text-[11px] font-medium text-slate-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Online • Advisory Assistant
                </p>
              </div>

              {/* Reset / New Chat Button */}
              <button
                onClick={resetChat}
                title="Restart conversation"
                aria-label="Restart conversation"
                className="rounded-full p-2 text-slate-300 hover:bg-white/10 hover:text-[#F5D77F] transition-colors cursor-pointer"
              >
                <RotateCcw className="h-4 w-4" />
              </button>

              {/* Close Button */}
              <button
                onClick={toggle}
                aria-label="Close chat"
                className="rounded-full p-2 text-slate-300 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Direct Desk Strip */}
            <div className="flex items-center justify-between border-b border-slate-200/80 bg-amber-50/70 px-4 py-2 text-[11px] font-medium text-slate-700">
              <span className="flex items-center gap-1 text-[#01327a] font-semibold">
                <ShieldCheck className="h-3.5 w-3.5 text-[#9A7A1A]" />
                Claim Desk:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="tel:+919820810067"
                  className="font-bold text-[#01327a] hover:text-[#9A7A1A] underline transition-colors"
                >
                  +91-98208 10067
                </a>
                <span className="text-slate-300">|</span>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-0.5 font-bold text-emerald-700 hover:text-emerald-800 transition-colors"
                >
                  <span>WhatsApp</span>
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              </div>
            </div>

            {/* Messages Scroll Area */}
            <div className="flex-1 space-y-3.5 overflow-y-auto px-4 py-4">
              {messages.map((m, i) =>
                m.from === "bot" ? (
                  <div key={i} className="flex items-start gap-2.5">
                    {/* Bot avatar icon */}
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#01327a] text-[10px] font-black text-[#F5D77F] shadow-xs">
                      F5
                    </span>
                    <div className="flex max-w-[85%] flex-col gap-1.5">
                      {/* Structured message card */}
                      <div className="rounded-2xl rounded-tl-xs border border-slate-200/80 bg-white p-3.5 shadow-xs transition-shadow">
                        <FormattedBotMessage
                          text={m.text}
                          onOpenConsultation={() => setConsultModalOpen(true)}
                        />

                        {/* Interactive Mini Google Map Card for Location inquiries */}
                        {isLocationMention(m.text) && (
                          <div className="mt-3 overflow-hidden rounded-xl border border-[#C59B27]/40 bg-white shadow-2xs">
                            <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/90 px-2.5 py-1.5">
                              <span className="flex items-center gap-1 text-[11px] font-extrabold text-[#01327a]">
                                <MapPin className="h-3 w-3 text-[#C59B27]" />
                                Fortune 5 Head Office
                              </span>
                              <a
                                href="https://www.google.com/maps/search/E-Square+Subhash+Road+Vile+Parle+East+Mumbai"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-0.5 text-[10.5px] font-extrabold text-[#9A7A1A] hover:underline"
                              >
                                <span>Open Maps</span>
                                <ArrowUpRight className="h-2.5 w-2.5" />
                              </a>
                            </div>
                            <a
                              href="https://www.google.com/maps/search/E-Square+Subhash+Road+Vile+Parle+East+Mumbai"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group relative block h-28 w-full overflow-hidden cursor-pointer bg-slate-100"
                              title="Click to locate on Google Maps"
                            >
                              <iframe
                                title="Fortune 5 Office Map"
                                src="https://maps.google.com/maps?q=E-Square+Subhash+Road+Vile+Parle+East+Mumbai+400057&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                className="pointer-events-none h-full w-full border-0"
                                loading="lazy"
                              />
                              <div className="absolute inset-0 flex items-center justify-center bg-[#01327a]/30 opacity-0 backdrop-blur-[0.5px] transition-opacity group-hover:opacity-100">
                                <span className="inline-flex items-center gap-1 rounded-full bg-[#01327a] px-3 py-1 text-[11px] font-bold text-[#F5D77F] shadow-md">
                                  <MapPin className="h-3 w-3" />
                                  Locate on Google Maps
                                </span>
                              </div>
                            </a>
                            <div className="bg-slate-50/50 px-2.5 py-1.5 text-[10.5px] leading-snug text-slate-600">
                              106-107, E-Square, Subhash Road, Vile Parle (E), Mumbai 400057
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Smart Quick Action Buttons */}
                      {(hasContactMention(m.text) || isLocationMention(m.text)) && (
                        <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                          <button
                            type="button"
                            onClick={() => setConsultModalOpen(true)}
                            className="inline-flex items-center gap-1 rounded-full border border-[#01327a] bg-[#01327a] px-3 py-1.5 text-[11px] font-bold text-[#F5D77F] shadow-2xs hover:bg-[#01255e] transition-all cursor-pointer"
                          >
                            <CalendarCheck className="h-3 w-3" />
                            <span>Book Consultation</span>
                          </button>
                          {isLocationMention(m.text) && (
                            <a
                              href="https://www.google.com/maps/search/E-Square+Subhash+Road+Vile+Parle+East+Mumbai"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 rounded-full border border-[#C59B27]/60 bg-amber-50/70 px-2.5 py-1 text-[11px] font-bold text-[#9A7A1A] shadow-2xs hover:border-[#01327a] hover:bg-[#01327a] hover:text-[#F5D77F] transition-all cursor-pointer"
                            >
                              <MapPin className="h-3 w-3 text-[#C59B27]" />
                              <span>Locate on Maps</span>
                            </a>
                          )}
                          <a
                            href="tel:+919820810067"
                            className="inline-flex items-center gap-1 rounded-full border border-[#C59B27]/50 bg-white px-2.5 py-1 text-[11px] font-bold text-[#01327a] shadow-2xs hover:border-[#01327a] hover:bg-slate-50 transition-all cursor-pointer"
                          >
                            <Phone className="h-3 w-3" />
                            <span>Call Us</span>
                          </a>
                          <a
                            href={WA_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 rounded-full border border-emerald-300 bg-emerald-50/80 px-2.5 py-1 text-[11px] font-bold text-emerald-800 shadow-2xs hover:bg-emerald-600 hover:text-white transition-all cursor-pointer"
                          >
                            <MessageSquare className="h-3 w-3" />
                            <span>WhatsApp</span>
                          </a>
                        </div>
                      )}

                    </div>
                  </div>
                ) : (
                  <div key={i} className="flex justify-end">
                    <div className="max-w-[85%] rounded-2xl rounded-tr-xs bg-linear-to-r from-[#01327a] to-[#01255e] px-4 py-2.5 text-[13px] leading-relaxed text-white shadow-sm">
                      {m.text}
                    </div>
                  </div>
                )
              )}

              {typing && (
                <div className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#01327a] text-[10px] font-black text-[#F5D77F] shadow-xs">
                    F5
                  </span>
                  <div className="flex items-center gap-1.5 rounded-2xl rounded-tl-xs border border-slate-200/80 bg-white px-4 py-3 shadow-xs">
                    {[0, 1, 2].map((d) => (
                      <span
                        key={d}
                        className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#C59B27]"
                        style={{ animationDelay: `${d * 0.15}s` }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Starter Prompt Chips (only shown before the user sends their first question) */}
              {isFirstPrompt && !typing && (
                <div className="pt-2 pl-9">
                  <p className="mb-2 text-[11px] font-bold tracking-wide text-slate-400 uppercase">
                    Suggested topics:
                  </p>
                  <div className="flex flex-col gap-1.5">
                    {STARTER_PROMPTS.map((p, idx) => (
                      <button
                        key={idx}
                        onClick={() => send(p.query)}
                        className="flex items-center justify-between rounded-xl border border-[#C59B27]/40 bg-white px-3.5 py-2 text-left text-xs font-semibold text-[#01327a] shadow-2xs transition-all duration-150 hover:border-[#01327a] hover:bg-[#01327a] hover:text-[#F5D77F] cursor-pointer"
                      >
                        <span>{p.label}</span>
                        <ArrowUpRight className="h-3 w-3 opacity-60" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="flex items-center gap-2 border-t border-slate-200/80 bg-white p-3"
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask anything about insurance, claims…"
                aria-label="Ask a question"
                disabled={typing}
                className="min-w-0 flex-1 rounded-full border border-slate-200 bg-[#F9F8F6] px-4 py-2.5 text-[13px] text-slate-800 placeholder:text-slate-400 focus:border-[#C59B27] focus:bg-white focus:outline-none transition-all disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={typing || !input.trim()}
                aria-label="Send message"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#01327a] text-[#F5D77F] shadow-sm transition-all hover:bg-[#01255e] disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Consultation Popup Form Modal */}
      <ConsultationModal
        isOpen={consultModalOpen}
        onClose={() => setConsultModalOpen(false)}
      />
    </>
  );
}
