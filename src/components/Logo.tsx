import React from "react";
import Image from "next/image";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#" className={`flex items-center group cursor-pointer ${className}`}>
      <Image
        src="/logo.png"
        alt="Fortune 5 Risk Management Solutions LLP"
        width={240}
        height={70}
        priority
        quality={100}
        className="h-12 sm:h-14 md:h-16 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
      />
    </a>
  );
}
