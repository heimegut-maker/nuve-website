"use client";

import { Instagram, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero.jpg"
            alt="Norwegian mountain landscape"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#0A0A0A]/60" />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-[160px] pb-[180px]">
          <h1
            className="text-[56px] md:text-[88px] font-bold text-white leading-none tracking-[-2px]"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            nuve
          </h1>

          <div className="mt-[40px] w-[40px] h-[1px] bg-white/[0.27]" />

          <p
            className="mt-[40px] text-[15px] md:text-[17px] text-white/[0.73] leading-relaxed max-w-[500px] tracking-[0.2px]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Spesialisert innen betalt sok og datadrevet optimalisering.
          </p>
        </div>
      </section>

      {/* ─── SPECIALIZATION ─── */}
      <section className="bg-[#F7F6F3] px-8 md:px-[100px] py-[80px] md:py-[120px]">
        <div className="max-w-[960px]">
          <h2
            className="text-[32px] md:text-[48px] font-semibold text-[#1A1A1A] leading-[1.1]"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Spesialisert. Ikke generell.
          </h2>

          <p
            className="mt-[48px] text-[16px] md:text-[18px] text-[#6B6B6B] leading-[1.6] max-w-[560px]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Ikke alt. Kun det som fungerer:
            <br />
            betalt sok og datadrevet optimalisering.
          </p>

          <div className="mt-[48px] w-[48px] h-[1px] bg-[#1A1A1A]" />

          <div className="mt-[32px] grid grid-cols-1 sm:grid-cols-2 gap-y-[20px] gap-x-[80px] max-w-[600px]">
            {[
              "Transparent rapportering",
              "Ingen bindingstid",
              "Direkte kontakt \u2014 ingen mellomledd",
              "Fokus p\u00e5 ROI, ikke aktivitet",
            ].map((point) => (
              <p
                key={point}
                className="text-[15px] font-medium text-[#1A1A1A] leading-[1.4]"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {point}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section
        id="tjenester"
        className="bg-[#F7F6F3] px-8 md:px-[100px] py-[80px] md:py-[120px]"
      >
        <div className="max-w-[960px]">
          {/* Section label */}
          <div className="flex items-center gap-[12px] mb-[48px]">
            <div className="w-[24px] h-[1px] bg-[#1A1A1A]" />
            <span
              className="text-[12px] font-semibold text-[#6B6B6B] tracking-[3px]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              TJENESTER
            </span>
          </div>

          {/* Services */}
          <div className="flex flex-col">
            {[
              {
                title: "Betalt sok",
                desc: "Malrettet annonsering i Google Ads med fokus pa konvertering.",
              },
              {
                title: "Analyse og sporing",
                desc: "Korrekt datagrunnlag for presise beslutninger.",
              },
              {
                title: "Strategi og optimalisering",
                desc: "Kontinuerlig forbedring basert pa data.",
              },
            ].map((service, i) => (
              <div key={service.title}>
                {i > 0 && (
                  <div className="w-full h-[1px] bg-[#E0DED8]" />
                )}
                <div className="py-[48px] first:pt-0 last:pb-0">
                  <h3
                    className="text-[24px] font-semibold text-[#1A1A1A]"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="mt-[8px] text-[16px] text-[#6B6B6B] max-w-[600px]"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SELECTED CLIENTS ─── */}
      <section className="bg-[#F7F6F3] px-8 md:px-[100px] py-[80px] md:py-[100px]">
        <div className="max-w-[960px] mx-auto text-center">
          <h2
            className="text-[22px] font-medium text-[#1A1A1A] tracking-[-0.3px]"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Utvalgte kunder
          </h2>

          <div className="mt-[48px] flex flex-wrap items-center justify-center gap-[32px]">
            {/* Real logos */}
            <div className="relative h-[44px] w-[120px] rounded-[5px] overflow-hidden bg-[#EBEBEB] flex items-center justify-center p-2">
              <Image
                src="/images/logos/blst.jpeg"
                alt="BLST"
                fill
                className="object-contain p-2"
              />
            </div>
            <div className="relative h-[44px] w-[120px] rounded-[5px] overflow-hidden bg-[#EBEBEB] flex items-center justify-center p-2">
              <Image
                src="/images/logos/vpg.svg"
                alt="VPG"
                fill
                className="object-contain p-2"
              />
            </div>
            <div className="relative h-[50px] w-[140px] rounded-[5px] overflow-hidden bg-[#1A1A1A] flex items-center justify-center p-2">
              <Image
                src="/images/logos/hovedlogo.png"
                alt="Hovedlogo"
                fill
                className="object-contain p-2"
              />
            </div>

            {/* Placeholder logos */}
            {["Vipps", "Equinor", "Kahoot"].map((name) => (
              <div
                key={name}
                className="h-[44px] w-[96px] rounded-[5px] bg-[#EBEBEB] flex items-center justify-center"
              >
                <span
                  className="text-[14px] font-semibold text-[#8A8A8A]"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section
        id="kontakt"
        className="bg-[#F7F6F3] px-8 md:px-[100px] lg:px-[200px] py-[80px] md:py-[120px]"
      >
        <div className="max-w-[960px] mx-auto">
          {/* Header */}
          <div className="text-center">
            <h2
              className="text-[36px] md:text-[42px] font-medium text-[#1A1A1A] tracking-[-1px]"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Kontakt
            </h2>
            <p
              className="mt-[16px] text-[16px] text-[#6B6B6B]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Ta gjerne kontakt om det er relevant. Kapasiteten er begrenset.
            </p>
          </div>

          {/* Two columns */}
          <div className="mt-[64px] grid grid-cols-1 md:grid-cols-2 gap-[80px]">
            {/* Left — contact info */}
            <div className="flex flex-col gap-[28px] pt-[8px]">
              <div>
                <span
                  className="text-[12px] font-medium text-[#6B6B6B] tracking-[1px]"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  E-post
                </span>
                <p
                  className="mt-[6px] text-[16px] text-[#1A1A1A]"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  post@nuve.no
                </p>
              </div>
              <div>
                <span
                  className="text-[12px] font-medium text-[#6B6B6B] tracking-[1px]"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Telefon
                </span>
                <p
                  className="mt-[6px] text-[16px] text-[#1A1A1A]"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  +47 936 84 801
                </p>
              </div>
            </div>

            {/* Right — form */}
            <form
              className="flex flex-col gap-[20px]"
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <label
                  className="block text-[12px] font-medium text-[#7A7A7A] tracking-[0.5px] mb-[8px]"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Navn
                </label>
                <input
                  type="text"
                  className="w-full h-[48px] bg-white border border-[#E0DED8] rounded-[4px] px-[16px] text-[15px] text-[#1A1A1A] outline-none focus:border-[#5B8C9A] transition-colors"
                  style={{ fontFamily: "var(--font-inter)" }}
                />
              </div>
              <div>
                <label
                  className="block text-[12px] font-medium text-[#7A7A7A] tracking-[0.5px] mb-[8px]"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  E-post
                </label>
                <input
                  type="email"
                  className="w-full h-[48px] bg-white border border-[#E0DED8] rounded-[4px] px-[16px] text-[15px] text-[#1A1A1A] outline-none focus:border-[#5B8C9A] transition-colors"
                  style={{ fontFamily: "var(--font-inter)" }}
                />
              </div>
              <div>
                <label
                  className="block text-[12px] font-medium text-[#7A7A7A] tracking-[0.5px] mb-[8px]"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Melding
                </label>
                <textarea
                  className="w-full h-[140px] bg-white border border-[#E0DED8] rounded-[4px] px-[16px] py-[14px] text-[15px] text-[#1A1A1A] outline-none focus:border-[#5B8C9A] transition-colors resize-none"
                  style={{ fontFamily: "var(--font-inter)" }}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="px-[28px] py-[12px] bg-[#5B8C9A] text-white text-[14px] font-medium rounded-[4px] hover:bg-[#4e7a87] transition-colors"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-[#F7F6F3] border-t border-[#E0DED8] px-8 md:px-[100px] lg:px-[200px] py-[40px]">
        <div className="max-w-[960px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span
            className="text-[20px] font-bold text-[#1A1A1A] tracking-[-0.5px]"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            nuve
          </span>

          <span
            className="text-[13px] text-[#6B6B6B]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Orsta, Norge <span className="text-[#9A9A9A]">&middot;</span> &copy; 2026 Nuve
          </span>

          <div className="flex items-center gap-[16px]">
            <a
              href="#"
              className="text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="#"
              className="text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
