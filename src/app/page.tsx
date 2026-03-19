"use client";

import {
  Target,
  BarChart3,
  Zap,
  TrendingUp,
  LockOpen,
  Phone,
  ArrowRight,
  Send,
  Instagram,
  Linkedin,
  MapPin,
} from "lucide-react";

/* ──────────────────────────────────────────────
   Sparkle dots – reusable across dark sections
   ────────────────────────────────────────────── */
const sparkles = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  size: 2 + Math.random() * 4,
  dur: `${2 + Math.random() * 4}s`,
  delay: `${Math.random() * 4}s`,
}));

function Sparkles() {
  return (
    <>
      {sparkles.map((s) => (
        <span
          key={s.id}
          className="sparkle absolute rounded-full bg-white pointer-events-none"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            "--dur": s.dur,
            "--delay": s.delay,
          } as React.CSSProperties}
        />
      ))}
    </>
  );
}

/* ──────────────────────────────────────────────
   Accent gradient lines (indigo + blue)
   ────────────────────────────────────────────── */
function AccentLines() {
  return (
    <>
      <div
        className="accent-line-pulse absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 h-[2px] w-[min(1040px,90%)]"
        style={{
          background:
            "linear-gradient(to right, transparent, #6366F1, transparent)",
          opacity: 0.6,
        }}
      />
      <div
        className="accent-line-pulse-slow absolute left-1/2 -translate-x-1/2 top-[52%] h-[1px] w-[min(880px,75%)]"
        style={{
          background:
            "linear-gradient(to right, transparent, #38BDF8, transparent)",
          opacity: 0.4,
        }}
      />
    </>
  );
}

/* ══════════════════════════════════════════════
   PAGE
   ══════════════════════════════════════════════ */
export default function Home() {
  return (
    <>
      {/* ─── HEADER ─── */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.03]" style={{ background: "#08081AEE" }}>
        <div className="mx-auto max-w-[1440px] flex items-center justify-between px-6 md:px-20 py-4">
          <a href="#" className="font-[var(--font-space)] text-xl font-bold text-white tracking-[-1px]" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            nuve
          </a>
          <nav className="flex items-center gap-6">
            <a href="#tjenester" className="hidden sm:inline text-sm text-white/50 hover:text-white transition" style={{ fontFamily: "var(--font-inter)" }}>Tjenester</a>
            <a href="#resultater" className="hidden sm:inline text-sm text-white/50 hover:text-white transition" style={{ fontFamily: "var(--font-inter)" }}>Resultater</a>
            <a href="#om-oss" className="hidden sm:inline text-sm text-white/50 hover:text-white transition" style={{ fontFamily: "var(--font-inter)" }}>Om oss</a>
            <a
              href="#kontakt"
              className="text-[13px] font-semibold text-white rounded-md px-5 py-2"
              style={{ fontFamily: "var(--font-inter)", background: "#5B8C9A" }}
            >
              Kontakt
            </a>
          </nav>
        </div>
      </header>

      {/* ─── HERO ─── */}
      <section className="relative w-full h-[700px] bg-[#08081A] overflow-hidden flex items-center justify-center">
        <Sparkles />
        <AccentLines />

        <div className="relative z-10 text-center px-4">
          <h1
            className="text-[80px] sm:text-[120px] md:text-[180px] font-bold text-white leading-none"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            nuve
          </h1>
          <p className="mt-4 text-lg sm:text-2xl text-white/80" style={{ fontFamily: "var(--font-inter)" }}>
            Vi gjor sok om til salg
          </p>
          <p
            className="mt-2 text-[14px] text-white/25 tracking-[4px] uppercase"
            style={{ fontFamily: "var(--font-bebas-neue)" }}
          >
            Search that converts
          </p>
          <a
            href="#kontakt"
            className="inline-block mt-8 px-9 py-3.5 rounded-lg text-base font-semibold text-white bg-[#6366F1] hover:bg-[#5558E6] transition"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Book strategisamtale
          </a>
        </div>

        {/* bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-[200px] pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent, #08081A)" }} />
      </section>

      {/* ─── SERVICES ─── */}
      <section id="tjenester" className="bg-[#F7F6F3] py-16 md:py-20 px-6 md:px-20">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="text-4xl md:text-5xl font-bold text-[#6366F1] mb-12" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            TJENESTER
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { Icon: Target, title: "Google Ads", desc: "Målrettet annonsering som treffer riktig publikum og maksimerer avkastningen på hver krone." },
              { Icon: BarChart3, title: "Tracking & Analytics", desc: "Dyp innsikt i brukeratferd og konverteringer med avansert sporing og datadrevne analyser." },
              { Icon: Zap, title: "Performance Strategy", desc: "Skreddersydde strategier som driver vekst og sikrer bærekraftige resultater over tid." },
              { Icon: TrendingUp, title: "Optimization & Scaling", desc: "Kontinuerlig optimalisering og skalering for å ta markedsføringen din til neste nivå." },
            ].map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="bg-[#F7F6F3] rounded-b-lg p-7 flex flex-col gap-4 border border-[#E0DED8] border-t-[3px] border-t-[#6366F1]"
                style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}
              >
                <Icon size={32} className="text-[#6366F1]" />
                <h3 className="text-xl font-semibold text-[#1A1A1A]" style={{ fontFamily: "var(--font-space-grotesk)" }}>{title}</h3>
                <p className="text-sm text-[#6B6B6B] leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STATS BAR ─── */}
      <section className="relative bg-[#08081A] h-auto md:h-[180px] overflow-hidden flex items-center">
        <div className="diagonal-lines absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-[1440px] w-full grid grid-cols-2 md:grid-cols-4 gap-8 px-6 md:px-20 py-10 md:py-0">
          {[
            { value: "847%", label: "Gjennomsnittlig ROAS" },
            { value: "-43%", label: "Lavere CPA i snitt" },
            { value: "2.4x", label: "Økning i konverteringer" },
            { value: "100%", label: "Kunder med positiv ROI" },
          ].map(({ value, label }) => (
            <div key={value} className="text-center">
              <div className="text-3xl md:text-[44px] font-bold text-[#6366F1]" style={{ fontFamily: "var(--font-space-grotesk)" }}>{value}</div>
              <div className="mt-1 text-[13px] text-[#999]" style={{ fontFamily: "var(--font-inter)" }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── TESTIMONIAL ─── */}
      <section id="resultater" className="relative bg-[#F7F6F3] py-16 md:py-20 px-6 md:px-20 overflow-hidden">
        {/* mirrored decorative text */}
        <div className="mirror-text absolute top-8 right-10 text-[80px] md:text-[120px] font-bold text-[#0D0D0D]/[0.03] leading-none select-none" style={{ fontFamily: "var(--font-space-grotesk)" }}>
          Det endret alt.
        </div>

        <div className="relative mx-auto max-w-[1440px]">
          <span className="text-[96px] font-bold text-[#6366F1] leading-none block -mb-6" style={{ fontFamily: "var(--font-space-grotesk)" }}>&laquo;</span>
          <blockquote
            className="text-3xl sm:text-4xl md:text-[52px] font-bold text-[#141432] leading-[1.15] max-w-4xl"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Nuve ga oss 1,240% ROAS på tre måneder. Det endret alt.
          </blockquote>
          <p className="mt-8 text-[13px] text-[#999] tracking-[2px] uppercase" style={{ fontFamily: "var(--font-inter)" }}>
            DAGLIG LEDER, NETTBUTIKK.NO
          </p>
        </div>
      </section>

      {/* ─── CTA / CONTACT ─── */}
      <section id="kontakt" className="relative bg-[#08081A] min-h-[500px] overflow-hidden py-16 md:py-20 px-6 md:px-20">
        <Sparkles />
        <AccentLines />

        {/* mirrored decorative text */}
        <div className="mirror-text absolute bottom-10 left-10 text-[80px] md:text-[120px] font-bold text-white/[0.03] leading-none select-none" style={{ fontFamily: "var(--font-space-grotesk)" }}>
          Resultater.
        </div>

        <div className="relative z-10 mx-auto max-w-[1440px] grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div className="flex flex-col gap-6">
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold text-[#5B8C9A] tracking-[2px] uppercase border border-[#6366F1]/40 rounded-full px-4 py-1.5 w-fit" style={{ fontFamily: "var(--font-inter)" }}>
              <span className="w-2 h-2 rounded-full bg-[#5B8C9A]" />
              KLAR FOR VEKST?
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-[64px] font-extrabold text-white leading-[1.05] tracking-[-3px]" style={{ fontFamily: "var(--font-space-grotesk)" }}>
              La oss snakke om resultater.
            </h2>
            <p className="text-base text-white/50 leading-relaxed max-w-lg" style={{ fontFamily: "var(--font-inter)" }}>
              Book en uforpliktende strategisamtale og finn ut hvordan vi kan hjelpe deg med å vokse.
            </p>
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 mt-2 px-7 py-3.5 rounded-lg text-base font-semibold text-white bg-[#5B8C9A] hover:bg-[#4e7a87] transition w-fit shadow-lg"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Book strategisamtale <ArrowRight size={18} />
            </a>
          </div>

          {/* Right — contact form */}
          <div className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-8 md:p-10">
            <h3 className="text-[22px] font-semibold text-white mb-6" style={{ fontFamily: "var(--font-space-grotesk)" }}>
              Send oss en melding
            </h3>
            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="flex flex-col gap-1">
                  <span className="text-xs font-medium text-white/90 tracking-[0.5px]" style={{ fontFamily: "var(--font-inter)" }}>Fornavn</span>
                  <input className="bg-white/[0.06] border border-white/[0.1] rounded-md px-3.5 py-3 text-sm text-white placeholder:text-white/30 outline-none focus:border-[#5B8C9A] transition" />
                </label>
                <label className="flex flex-col gap-1">
                  <span className="text-xs font-medium text-white/90 tracking-[0.5px]" style={{ fontFamily: "var(--font-inter)" }}>Etternavn</span>
                  <input className="bg-white/[0.06] border border-white/[0.1] rounded-md px-3.5 py-3 text-sm text-white placeholder:text-white/30 outline-none focus:border-[#5B8C9A] transition" />
                </label>
              </div>
              <label className="flex flex-col gap-1">
                <span className="text-xs font-medium text-white/90 tracking-[0.5px]" style={{ fontFamily: "var(--font-inter)" }}>E-post</span>
                <input type="email" className="bg-white/[0.06] border border-white/[0.1] rounded-md px-3.5 py-3 text-sm text-white placeholder:text-white/30 outline-none focus:border-[#5B8C9A] transition" />
              </label>
              <label className="flex flex-col gap-1">
                <span className="text-xs font-medium text-white/90 tracking-[0.5px]" style={{ fontFamily: "var(--font-inter)" }}>Melding</span>
                <textarea rows={4} className="bg-white/[0.06] border border-white/[0.1] rounded-md px-3.5 py-3 text-sm text-white placeholder:text-white/30 outline-none focus:border-[#5B8C9A] transition resize-none" />
              </label>
              <button
                type="submit"
                className="flex items-center justify-center gap-2 w-full mt-2 px-6 py-3.5 rounded-lg text-base font-semibold text-white bg-[#5B8C9A] hover:bg-[#4e7a87] transition"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Send melding <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ─── SPESIALISERT (Why Nuve) ─── */}
      <section id="om-oss" className="relative bg-[#08081A] py-16 md:py-20 px-6 md:px-20 overflow-hidden">
        <Sparkles />
        <AccentLines />

        {/* mirrored decorative text */}
        <div className="mirror-text absolute top-10 right-10 text-[80px] md:text-[120px] font-bold text-white/[0.03] leading-none select-none" style={{ fontFamily: "var(--font-space-grotesk)" }}>
          SPESIALISERT
        </div>

        <div className="relative z-10 mx-auto max-w-[1440px]">
          <span className="text-[13px] font-semibold text-[#5B8C9A] tracking-[2px] uppercase" style={{ fontFamily: "var(--font-inter)" }}>
            HVORFOR NUVE
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl md:text-[64px] font-bold text-[#F7F6F3] leading-[1.05]" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            Spesialisert. Ikke generell.
          </h2>
          <p className="mt-6 text-lg text-[#F7F6F3]/70 leading-relaxed max-w-2xl" style={{ fontFamily: "var(--font-inter)" }}>
            Vi driver ikke med alt mulig. Vi er spesialister på betalt sokeannonsering, og det er det eneste vi gjor. Det betyr at du far et team som lever og puster Google Ads hver eneste dag.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {[
              { Icon: BarChart3, title: "Transparent rapportering" },
              { Icon: LockOpen, title: "Ingen bindingstid" },
              { Icon: Phone, title: "Direkte kontakt — ingen mellomledd" },
              { Icon: Target, title: "Fokus på ROI, ikke aktivitet" },
            ].map(({ Icon, title }) => (
              <div
                key={title}
                className="bg-[#1C1C3A] rounded-xl p-8 flex flex-col gap-5 border-t-2 border-t-[#5B8C9A]"
              >
                <Icon size={32} className="text-[#5B8C9A]" />
                <h3 className="text-lg font-semibold text-[#F7F6F3]" style={{ fontFamily: "var(--font-space-grotesk)" }}>{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-[#08081A] border-t border-white/[0.03] px-6 md:px-20 py-10">
        <div className="mx-auto max-w-[1440px]">
          {/* top row */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <span className="text-xl font-bold text-white tracking-[-1px]" style={{ fontFamily: "var(--font-space-grotesk)" }}>nuve</span>
              <p className="text-xs text-white/25 tracking-[2px] uppercase mt-1" style={{ fontFamily: "var(--font-bebas-neue)" }}>Search that converts</p>
            </div>
            <nav className="flex flex-wrap items-center gap-6 text-sm text-white/50" style={{ fontFamily: "var(--font-inter)" }}>
              <a href="#tjenester" className="hover:text-white transition">Tjenester</a>
              <a href="#resultater" className="hover:text-white transition">Resultater</a>
              <a href="#om-oss" className="hover:text-white transition">Om oss</a>
              <a href="#kontakt" className="hover:text-white transition">Kontakt</a>
            </nav>
            <div className="flex items-center gap-4">
              <a href="#" className="text-white/40 hover:text-white transition"><Instagram size={20} /></a>
              <a href="#" className="text-white/40 hover:text-white transition"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* divider */}
          <div className="border-t border-white/[0.03] my-8" />

          {/* bottom row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[13px]" style={{ fontFamily: "var(--font-inter)" }}>
            <span className="text-[#555]">&copy; 2026 Nuve. Alle rettigheter reservert.</span>
            <span className="flex items-center gap-1.5 text-white/[0.18]">
              <MapPin size={14} /> Orsta, Norge
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
