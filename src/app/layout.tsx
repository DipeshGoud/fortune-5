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
  title: "Fortune 5 | Risk Management Solutions LLP",
  description:
    "Protecting Businesses, Families & Futures through Intelligent Risk Management. Advice that works.",
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
    ],
    shortcut: "/logo.png",
    apple: "/logo.png",
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
        <link rel="apple-touch-icon" href="/logo.png" />
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
