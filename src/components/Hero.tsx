"use client";

import Image from "next/image";
import { TrendingUp } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-[560px] md:h-[560px] overflow-hidden mt-16">
      {/* Background image */}
      <Image
        src="/images/hero-bg.jpg"
        alt=""
        fill
        className="object-cover"
        priority
      />
      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, #0D0D0DF0 0%, #0D0D0DC0 30%, #0D0D0D80 60%, #0D0D0D30 100%)",
        }}
      />

      {/* Corner brackets - decorative */}
      <div className="absolute top-8 left-8 w-10 h-10 border-t-2 border-l-2 border-[#6366F1] opacity-40 hidden md:block" />
      <div className="absolute top-8 right-8 w-10 h-10 border-t-2 border-r-2 border-[#6366F1] opacity-40 hidden md:block" />
      <div className="absolute bottom-8 left-8 w-10 h-10 border-b-2 border-l-2 border-[#6366F1] opacity-40 hidden md:block" />
      <div className="absolute bottom-8 right-8 w-10 h-10 border-b-2 border-r-2 border-[#6366F1] opacity-40 hidden md:block" />

      {/* Accent lines */}
      <div className="absolute top-0 left-[120px] w-px h-20 bg-gradient-to-b from-[#6366F1] to-transparent opacity-30 hidden md:block" />

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 pt-16 md:pt-20 flex flex-col h-full">
        {/* Badge */}
        <div className="inline-flex self-start items-center px-4 py-1.5 rounded-full border border-[#FFFFFF30] bg-[#FFFFFF10] mb-6">
          <span className="font-[family-name:var(--font-inter)] text-xs text-white/80">
            Est. 2025 — Performance Marketing
          </span>
        </div>

        {/* Headline */}
        <h1
          className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-[72px] font-bold text-white leading-[1.05] tracking-[-3px] max-w-[800px] mb-4"
        >
          Vi gjør søk om til salg
        </h1>

        {/* Subtext */}
        <p className="font-[family-name:var(--font-bebas-neue)] text-xl md:text-2xl text-[#FFFFFFBB] tracking-[2px] mb-4">
          SEARCH THAT CONVERTS
        </p>

        {/* Supporting text */}
        <p className="font-[family-name:var(--font-inter)] text-sm text-[#FFFFFF99] max-w-[520px] mb-8">
          Google Ads-spesialister med fokus på målbare resultater. Fra strategi
          til skalering.
        </p>

        {/* CTA */}
        <a
          href="#kontakt"
          className="inline-flex self-start items-center px-7 py-3.5 bg-[#6366F1] text-white font-[family-name:var(--font-inter)] text-sm font-medium rounded-lg purple-glow hover:bg-[#5558E8] transition-colors"
        >
          Ta kontakt →
        </a>

        {/* Floating stat cards */}
        <div className="flex flex-col md:flex-row justify-between items-end mt-auto pb-8 gap-4">
          {/* ROAS card */}
          <div className="relative rounded-xl border border-[#FFFFFF12] bg-[#1C1C3A] p-5 min-w-[180px] overflow-hidden">
            <div
              className="absolute inset-0 opacity-30"
              style={{
                background:
                  "radial-gradient(circle at 30% 70%, rgba(228,35,19,0.15), transparent 70%)",
              }}
            />
            <p className="font-[family-name:var(--font-inter)] text-xs text-white/50 mb-1 relative z-10">
              ROAS snitt
            </p>
            <p className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold text-[#6366F1] relative z-10">
              4.8&times;
            </p>
          </div>

          {/* Konvertering card */}
          <div className="relative rounded-xl border border-[#FFFFFF12] bg-[#1C1C3A] p-5 min-w-[180px] overflow-hidden">
            <div
              className="absolute inset-0 opacity-30"
              style={{
                background:
                  "radial-gradient(circle at 70% 70%, rgba(34,197,94,0.15), transparent 70%)",
              }}
            />
            <p className="font-[family-name:var(--font-inter)] text-xs text-white/50 mb-1 relative z-10">
              Konvertering
            </p>
            <div className="flex items-center gap-2 relative z-10">
              <p className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold text-[#22C55E]">
                +240%
              </p>
              <TrendingUp size={20} className="text-[#22C55E]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
