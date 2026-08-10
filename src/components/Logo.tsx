import React from "react";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
  imgClassName?: string;
}

export default function Logo({ className = "", imgClassName = "h-10 sm:h-12 md:h-14" }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center group cursor-pointer ${className}`}>
      <Image
        src="/logo.png"
        alt="Fortune 5 Risk Management Solutions LLP"
        width={300}
        height={90}
        priority
        quality={100}
        className={`${imgClassName} w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]`}
      />
    </Link>
  );
}
