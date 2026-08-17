"use client";

import { useState } from "react";
import { Copy, Share2, Check } from "lucide-react";

export default function ShareBar() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({ title: document.title, url: window.location.href });
        return;
      }
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* cancelled or failed */
    }
  };

  return (
    <div className="flex items-center gap-3">
      <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-slate-500">
        <Share2 className="h-4 w-4 text-[#C59B27]" /> Share
      </span>
      <button
        onClick={handleShare}
        className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-[#01327a] transition hover:border-[#C59B27]/40 hover:text-[#9A7A1A]"
      >
        {copied ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
        {copied ? "Copied!" : "Copy link"}
      </button>
    </div>
  );
}