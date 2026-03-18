"use client";

import Image from "next/image";
import { Sun } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FFFFFFEE] backdrop-blur-sm border-b border-[#E5E7EB] shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        <a href="#" className="flex-shrink-0">
          <Image
            src="/images/Nuve_Logo_Black.png"
            alt="Nuve"
            width={80}
            height={28}
            priority
          />
        </a>
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#tjenester"
              className="font-[family-name:var(--font-inter)] text-sm text-[#141432] hover:text-[#6366F1] transition-colors"
            >
              Tjenester
            </a>
            <a
              href="#resultater"
              className="font-[family-name:var(--font-inter)] text-sm text-[#141432] hover:text-[#6366F1] transition-colors"
            >
              Resultater
            </a>
            <a
              href="#om-oss"
              className="font-[family-name:var(--font-inter)] text-sm text-[#141432] hover:text-[#6366F1] transition-colors"
            >
              Om oss
            </a>
            <a
              href="#kontakt"
              className="font-[family-name:var(--font-inter)] text-sm text-[#141432] hover:text-[#6366F1] transition-colors"
            >
              Kontakt
            </a>
          </nav>
          <div className="h-5 w-px bg-[#E5E7EB]" />
          <span className="text-xs text-[#888] font-[family-name:var(--font-inter)]">
            NO / EN
          </span>
          <button className="text-[#888] hover:text-[#141432] transition-colors">
            <Sun size={16} />
          </button>
        </div>
      </div>
    </header>
  );
}
