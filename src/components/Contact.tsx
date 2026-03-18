"use client";

import { Phone, Send } from "lucide-react";
import FadeInSection from "./FadeInSection";

export default function Contact() {
  return (
    <section
      id="kontakt"
      className="relative py-20 md:py-28 bg-[#0D0D0D] overflow-hidden"
      style={{ minHeight: 520 }}
    >
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left side */}
          <FadeInSection>
            <div className="max-w-[480px]">
              {/* Tag */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#6366F160] mb-8">
                <div className="w-2 h-2 rounded-full bg-[#6366F1]" />
                <span className="font-[family-name:var(--font-inter)] text-xs text-[#6366F1]">
                  KLAR FOR VEKST?
                </span>
              </div>

              <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-[68px] font-extrabold text-white tracking-[-3px] leading-[1.05] mb-6">
                La oss snakke
                <br />
                om resultater.
              </h2>

              <p className="font-[family-name:var(--font-inter)] text-base text-white/50 max-w-[480px] mb-8">
                Book en uforpliktende strategisamtale og finn ut hvordan vi kan
                &oslash;ke din synlighet og konvertering.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="#kontakt"
                  className="inline-flex items-center justify-center px-7 py-3.5 bg-[#6366F1] text-white font-[family-name:var(--font-inter)] text-sm font-medium rounded-lg purple-glow hover:bg-[#5558E8] transition-colors"
                >
                  Book strategisamtale →
                </a>
                <a
                  href="mailto:post@nuve.no"
                  className="inline-flex items-center justify-center px-7 py-3.5 border border-[#FFFFFF30] text-white font-[family-name:var(--font-inter)] text-sm font-medium rounded-lg hover:border-white/50 transition-colors"
                >
                  post@nuve.no
                </a>
              </div>

              <div className="flex items-center gap-2 text-white/25">
                <Phone size={14} />
                <span className="font-[family-name:var(--font-inter)] text-[13px]">
                  +47 936 84 801 &middot; &Oslash;rsta, Norge
                </span>
              </div>
            </div>
          </FadeInSection>

          {/* Vertical accent line separator */}
          <div className="hidden lg:block absolute left-1/2 top-20 bottom-20 w-[3px]" style={{ background: "linear-gradient(to bottom, transparent, #6366F1, transparent)" }} />

          {/* Right side - Form */}
          <FadeInSection>
            <div
              className="relative rounded-2xl p-8 overflow-hidden"
              style={{
                background: "#1C1C3A",
              }}
            >
              {/* Subtle red radial */}
              <div
                className="absolute inset-0 opacity-30 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at 80% 20%, rgba(228,35,19,0.1), transparent 60%)",
                }}
              />

              <div className="relative z-10">
                <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold text-white mb-1">
                  Send oss en melding
                </h3>
                <p className="font-[family-name:var(--font-inter)] text-[13px] text-white/40 mb-8">
                  Vi svarer innen 24 timer.
                </p>

                <form
                  className="flex flex-col gap-4"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Fornavn"
                      className="w-full px-4 py-3 bg-[#FFFFFF08] border border-[#FFFFFF18] rounded-md text-white text-sm font-[family-name:var(--font-inter)] placeholder:text-white/30 outline-none focus:border-[#6366F1] transition-colors"
                    />
                    <input
                      type="text"
                      placeholder="Etternavn"
                      className="w-full px-4 py-3 bg-[#FFFFFF08] border border-[#FFFFFF18] rounded-md text-white text-sm font-[family-name:var(--font-inter)] placeholder:text-white/30 outline-none focus:border-[#6366F1] transition-colors"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="din@epost.no"
                    className="w-full px-4 py-3 bg-[#FFFFFF08] border border-[#FFFFFF18] rounded-md text-white text-sm font-[family-name:var(--font-inter)] placeholder:text-white/30 outline-none focus:border-[#6366F1] transition-colors"
                  />
                  <textarea
                    placeholder="Fortell oss litt om hva du trenger hjelp med..."
                    rows={4}
                    className="w-full px-4 py-3 bg-[#FFFFFF08] border border-[#FFFFFF18] rounded-md text-white text-sm font-[family-name:var(--font-inter)] placeholder:text-white/30 outline-none focus:border-[#6366F1] transition-colors resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-7 py-3.5 bg-[#6366F1] text-white font-[family-name:var(--font-inter)] text-sm font-medium rounded-lg purple-glow hover:bg-[#5558E8] transition-colors"
                  >
                    Send melding
                    <Send size={16} />
                  </button>
                </form>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
