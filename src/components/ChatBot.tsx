"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  X,
  Send,
  ChevronLeft,
  ArrowUpRight,
} from "lucide-react";

const WA_LINK =
  "https://wa.me/919820810067?text=Hello%20Fortune%205%2C%20I%20would%20like%20to%20inquire%20about%20your%20risk%20management%20services.";

interface ChatOption {
  label: string;
  next?: string;
  href?: string;
  external?: boolean;
}

interface ChatNode {
  text: string[];
  options: ChatOption[];
}

interface ChatMsg {
  from: "bot" | "user";
  text: string;
}

const MENU: ChatOption = { label: "Main Menu", next: "start" };

const NODES: Record<string, ChatNode> = {
  start: {
    text: [
      "Namaste! I am the Fortune 5 assistant.",
      "How can I help you today? Tap an option below.",
    ],
    options: [
      { label: "Explore Our Services", next: "services" },
      { label: "Claims Assistance", next: "claims" },
      { label: "Renewals & Policies", next: "renewals" },
      { label: "FAQs", next: "faqs" },
      { label: "Talk to Our Team", next: "human" },
    ],
  },
  services: {
    text: [
      "We offer 9 Corporate and 6 Retail risk solutions, backed by 75 years of advisory and claim-time advocacy.",
    ],
    options: [
      { label: "Retail Solutions", next: "svc-retail" },
      { label: "Corporate Solutions", next: "svc-corporate" },
      { label: "View All Services", href: "/services" },
      MENU,
    ],
  },
  "svc-retail": {
    text: [
      "Retail cover for individuals and families: Health, Vehicle, Travel, Personal Accident, Householder and Life insurance.",
    ],
    options: [
      { label: "Get a Free Quote", href: "/contact" },
      { label: "Corporate Solutions", next: "svc-corporate" },
      MENU,
    ],
  },
  "svc-corporate": {
    text: [
      "Corporate cover: Fire / Burglary, Employee Benefits (GMC, GPA, GTL), Transit, Construction All-Risk, Liability and Office Packages.",
    ],
    options: [
      { label: "Get a Free Quote", href: "/contact" },
      { label: "Retail Solutions", next: "svc-retail" },
      MENU,
    ],
  },
  claims: {
    text: [
      "For claim assistance:\n1) Call us immediately\n2) Keep bills, photos and FIR (if applicable) ready\n3) Our team coordinates survey and settlement with the insurer.",
    ],
    options: [
      { label: "Call Claims Desk", href: "tel:+919820810067", external: true },
      { label: "WhatsApp Us", href: WA_LINK, external: true },
      MENU,
    ],
  },
  renewals: {
    text: [
      "We review your existing portfolio for gaps, overlaps and better terms before every renewal — across all insurers we work with.",
    ],
    options: [
      { label: "Book Renewal Review", href: "/contact" },
      { label: "Talk to Our Team", next: "human" },
      MENU,
    ],
  },
  pricing: {
    text: [
      "Premiums depend on cover, sum insured and risk profile, so we prepare tailored quotes instead of fixed prices. Share your requirement and we will revert with options.",
    ],
    options: [
      { label: "Get a Free Quote", href: "/contact" },
      { label: "Talk to Our Team", next: "human" },
      MENU,
    ],
  },
  faqs: {
    text: ["Pick a topic:"],
    options: [
      { label: "Working Hours", next: "faq-hours" },
      { label: "Office Address", next: "faq-where" },
      { label: "Claim Documents", next: "faq-docs" },
      MENU,
    ],
  },
  "faq-hours": {
    text: ["We are open Monday to Saturday, 10:00 AM to 7:30 PM IST."],
    options: [
      { label: "More FAQs", next: "faqs" },
      MENU,
    ],
  },
  "faq-where": {
    text: [
      "106-107, E-Square, 1st Floor, Subhash Road, Vile Parle (East), Mumbai 400057.",
    ],
    options: [
      { label: "Contact Page", href: "/contact" },
      { label: "More FAQs", next: "faqs" },
      MENU,
    ],
  },
  "faq-docs": {
    text: [
      "Usually: policy copy, KYC, bills and receipts, photos of damage, and FIR for theft or accident cases. Our team will confirm the exact list for your claim.",
    ],
    options: [
      { label: "Talk to Our Team", next: "human" },
      MENU,
    ],
  },
  human: {
    text: [
      "Reach us directly:\nSupport: +91-98208 10067\nBoard: +91-22-2619 2727\nEmail: insure@fortune5.in",
    ],
    options: [
      { label: "Call Now", href: "tel:+919820810067", external: true },
      { label: "WhatsApp Us", href: WA_LINK, external: true },
      { label: "Contact Page", href: "/contact" },
      MENU,
    ],
  },
  thanks: {
    text: ["You are most welcome! Anything else I can help with?"],
    options: [
      { label: "Talk to Our Team", next: "human" },
      MENU,
    ],
  },
};

function matchNode(text: string): string | null {
  const t = text.toLowerCase();
  if (/(claim|settlement|surveyor)/.test(t)) return "claims";
  if (/(renew|renewal|expir)/.test(t)) return "renewals";
  if (/(price|cost|premium|quote|charge|fee)/.test(t)) return "pricing";
  if (/(contact|human|call|phone|talk|person|agent|callback)/.test(t))
    return "human";
  if (/(time|timing|hour|open|when|close)/.test(t)) return "faq-hours";
  if (/(where|address|location|office|reach|vile|parle)/.test(t))
    return "faq-where";
  if (/(document|doc|paper|fir|proof)/.test(t)) return "faq-docs";
  if (/(thank|shukriya|dhanyavad)/.test(t)) return "thanks";
  if (
    /(health|vehicle|car|bike|travel|life|home|shop|fire|transit|liability|service|insurance|corporate|retail|employee|gmc)/.test(
      t
    )
  )
    return "services";
  if (/(faq|question|help|info)/.test(t)) return "faqs";
  if (/^(hi|hii+|hello|hey|namaste|good (morning|afternoon|evening))[^a-z]*$/.test(t))
    return "start";
  return null;
}

const LINK_RE = /(\+?\d[\d\s-]{6,}\d|[\w.+-]+@[\w-]+\.[\w.]+)/g;

function renderBotText(text: string) {
  return text.split("\n").map((line, li, arr) => (
    <React.Fragment key={li}>
      {line.split(LINK_RE).map((part, pi) => {
        if (/^\+?\d[\d\s-]{6,}\d$/.test(part)) {
          const tel = "tel:+" + part.replace(/\D/g, "");
          return (
            <a key={pi} href={tel} className="font-bold text-[#01327a] underline hover:text-[#9A7A1A]">
              {part}
            </a>
          );
        }
        if (/^[\w.+-]+@[\w-]+\.[\w.]+$/.test(part)) {
          return (
            <a key={pi} href={`mailto:${part}`} className="font-bold text-[#01327a] underline hover:text-[#9A7A1A]">
              {part}
            </a>
          );
        }
        return <React.Fragment key={pi}>{part}</React.Fragment>;
      })}
      {li < arr.length - 1 && <br />}
    </React.Fragment>
  ));
}

const DEMO_PROMPTS = [
  "What are your working hours?",
  "I need help with a claim",
  "Show me corporate services",
];

function OptionButton({ option }: { option: ChatOption }) {
  const cls =
    "inline-flex items-center gap-1.5 rounded-full border border-[#C59B27]/50 bg-white px-3.5 py-2 text-[11px] font-extrabold tracking-wide text-[#01327a] uppercase transition-colors duration-200 hover:bg-[#01327a] hover:text-[#F5D77F] cursor-pointer";
  if (option.href) {
    if (option.external || option.href.startsWith("http") || option.href.startsWith("tel:")) {
      return (
        <a
          href={option.href}
          target={option.href.startsWith("http") ? "_blank" : undefined}
          rel={option.href.startsWith("http") ? "noopener noreferrer" : undefined}
          className={cls}
        >
          <span>{option.label}</span>
          <ArrowUpRight className="h-3 w-3" />
        </a>
      );
    }
    return (
      <Link href={option.href} prefetch={false} className={cls}>
        <span>{option.label}</span>
      </Link>
    );
  }
  return null;
}

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const [nodeId, setNodeId] = useState("start");
  const [history, setHistory] = useState<string[]>([]);
  const [messages, setMessages] = useState<ChatMsg[]>([]);
  const [typing, setTyping] = useState(false);
  const [input, setInput] = useState("");
  const [teaser, setTeaser] = useState(false);
  const shownFor = useRef<string | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => {
      if (!hasOpened) setTeaser(true);
    }, 10000);
    return () => clearTimeout(t);
  }, [hasOpened]);

  useEffect(() => {
    if (!open || shownFor.current === nodeId) return;
    shownFor.current = nodeId;
    const node = NODES[nodeId];
    setTyping(true);
    const t = setTimeout(() => {
      setMessages((m) => [...m, ...node.text.map((text) => ({ from: "bot" as const, text }))]);
      setTyping(false);
    }, 650);
    return () => clearTimeout(t);
  }, [open, nodeId]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, typing, open]);

  const goTo = (id: string) => {
    setHistory((h) => [...h, nodeId]);
    setNodeId(id);
  };

  const goBack = () => {
    setHistory((h) => {
      if (h.length === 0) return h;
      setNodeId(h[h.length - 1]);
      return h.slice(0, -1);
    });
  };

  const choose = (option: ChatOption) => {
    if (option.href || !option.next) return;
    setMessages((m) => [...m, { from: "user", text: option.label }]);
    goTo(option.next as string);
  };

  const send = (raw: string) => {
    const text = raw.trim();
    if (!text) return;
    setMessages((m) => [...m, { from: "user", text }]);
    setInput("");
    const target = matchNode(text);
    if (target && target !== nodeId) {
      setHistory((h) => [...h, nodeId]);
      setNodeId(target);
    } else if (!target) {
      setTyping(true);
      const t = setTimeout(() => {
        setMessages((m) => [
          ...m,
          {
            from: "bot",
            text: "I can help with services, claims, renewals, timings, or connecting you to our team — tap an option below.",
          },
        ]);
        setTyping(false);
      }, 650);
      void t;
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

  const node = NODES[nodeId];

  return (
    <>
      {/* Floating button — bottom RIGHT, WhatsApp sits on the left */}
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
                Need help? Chat with us — we reply instantly.
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

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-24 right-4 z-50 flex max-h-[70vh] h-[520px] w-[calc(100vw-2rem)] max-w-[380px] flex-col overflow-hidden rounded-3xl border border-[#C59B27]/40 bg-[#F9F8F6] shadow-2xl sm:right-6"
          >
            {/* Header */}
            <div className="flex items-center gap-3 bg-[#01327a] px-4 py-3.5">
              {history.length > 0 && (
                <button
                  onClick={goBack}
                  aria-label="Go back"
                  className="rounded-full p-1.5 text-[#F5D77F] hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
              )}
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F5D77F] text-sm font-black text-[#01327a]">
                F5
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-extrabold text-white">F5 Assistant</p>
                <p className="flex items-center gap-1.5 text-[11px] font-medium text-slate-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Online — replies instantly
                </p>
              </div>
              <button
                onClick={toggle}
                aria-label="Close chat"
                className="rounded-full p-1.5 text-slate-300 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {messages.map((m, i) =>
                m.from === "bot" ? (
                  <div
                    key={i}
                    className="max-w-[85%] rounded-2xl rounded-tl-md border border-slate-200/80 bg-white px-3.5 py-2.5 text-[13px] leading-relaxed text-slate-700 shadow-sm"
                  >
                    {renderBotText(m.text)}
                  </div>
                ) : (
                  <div key={i} className="flex justify-end">
                    <div className="max-w-[85%] rounded-2xl rounded-tr-md bg-[#01327a] px-3.5 py-2.5 text-[13px] leading-relaxed text-white shadow-sm">
                      {m.text}
                    </div>
                  </div>
                )
              )}
              {typing && (
                <div className="flex w-fit items-center gap-1.5 rounded-2xl rounded-tl-md border border-slate-200/80 bg-white px-4 py-3 shadow-sm">
                  {[0, 1, 2].map((d) => (
                    <span
                      key={d}
                      className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#C59B27]"
                      style={{ animationDelay: `${d * 0.15}s` }}
                    />
                  ))}
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Quick replies */}
            {!typing && (
              <div className="flex flex-wrap gap-2 border-t border-slate-200/70 bg-white/60 px-4 py-3">
                {node.options.map((o, i) =>
                  o.href ? (
                    <OptionButton key={i} option={o} />
                  ) : (
                    <button
                      key={i}
                      onClick={() => choose(o)}
                      className="inline-flex items-center gap-1.5 rounded-full border border-[#C59B27]/50 bg-white px-3.5 py-2 text-[11px] font-extrabold tracking-wide text-[#01327a] uppercase transition-colors duration-200 hover:bg-[#01327a] hover:text-[#F5D77F] cursor-pointer"
                    >
                      <span>{o.label}</span>
                    </button>
                  )
                )}
              </div>
            )}

            {/* Demo prompts — shown until the visitor interacts */}
            {messages.filter((m) => m.from === "user").length === 0 && !typing && (
              <div className="flex flex-wrap gap-2 border-t border-slate-200/70 bg-white/60 px-4 py-2.5">
                <span className="w-full text-[10px] font-extrabold tracking-widest text-slate-400 uppercase">
                  Try asking:
                </span>
                {DEMO_PROMPTS.map((p) => (
                  <button
                    key={p}
                    onClick={() => send(p)}
                    className="rounded-full border border-dashed border-[#C59B27]/60 bg-amber-50/60 px-3 py-1.5 text-[11px] font-bold text-[#8A6A10] transition-colors duration-200 hover:bg-[#01327a] hover:text-[#F5D77F] cursor-pointer"
                  >
                    {p}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="flex items-center gap-2 border-t border-slate-200/70 bg-white px-3 py-3"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your question…"
                aria-label="Type your question"
                className="min-w-0 flex-1 rounded-full border border-slate-200 bg-[#F9F8F6] px-4 py-2.5 text-[13px] text-slate-800 placeholder:text-slate-400 focus:border-[#C59B27] focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Send message"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#01327a] text-[#F5D77F] transition-colors hover:bg-[#01255e] cursor-pointer"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
