import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, Cinzel, Cormorant_Garamond } from "next/font/google";
import CustomCursor from "@/components/CustomCursor";
import SplashScreen from "@/components/SplashScreen";
import FloatingWidgets from "@/components/FloatingWidgets";
import ScrollToTopOnNav from "@/components/ScrollToTopOnNav";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fortune5.in"),
  title: {
    default: "Fortune 5 | Risk Management Solutions LLP",
    template: "%s | Fortune 5 Risk Management",
  },
  description:
    "Protecting Businesses, Families & Futures through Intelligent Risk Management. Over 75 years of trusted insurance advisory and claim-time advocacy.",
  keywords: [
    "Fortune 5",
    "Risk Management",
    "Insurance Consultant",
    "Corporate Insurance",
    "Health Insurance",
    "Claims Advocacy",
    "Kaushal Shah",
    "Mumbai",
  ],
  authors: [{ name: "Fortune 5 Risk Management Solutions LLP" }],
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Fortune 5 | Risk Management Solutions LLP",
    description:
      "Protecting Businesses, Families & Futures through Intelligent Risk Management. 75+ years of legacy.",
    siteName: "Fortune 5 Risk Management",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Fortune 5 Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fortune 5 | Risk Management Solutions LLP",
    description:
      "Protecting Businesses, Families & Futures through Intelligent Risk Management.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${cormorant.variable} ${cinzel.variable} ${jakarta.variable} antialiased`}
    >
      <head>
        <link rel="icon" href="/logo.png" type="image/png" sizes="any" />
        <link rel="shortcut icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta name="theme-color" content="#041735" />
      </head>
      <body className="min-h-screen bg-[#F9F8F6] text-slate-900 font-sans selection:bg-amber-100 selection:text-amber-900">
        <SplashScreen />
        <CustomCursor />
        <FloatingWidgets />
        <ScrollToTopOnNav />
        {children}
      </body>
    </html>
  );
}
