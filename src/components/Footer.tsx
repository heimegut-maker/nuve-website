import Image from "next/image";
import { MapPin, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#0D0D0D] border-t border-[#1C1C3A] overflow-hidden">
      {/* Big faded NUVE */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-[family-name:var(--font-space-grotesk)] text-[120px] md:text-[180px] font-bold text-white/[0.02] select-none pointer-events-none">
        NUVE
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 py-12">
        {/* Red accent bar */}
        <div className="w-10 h-[3px] bg-[#E42313] mb-8" />

        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-4">
            <Image
              src="/images/Nuve_Logo_White.png"
              alt="Nuve"
              width={80}
              height={28}
            />
            <span className="font-[family-name:var(--font-inter)] text-sm text-white/30">
              Search that converts
            </span>
          </div>
          <nav className="flex items-center gap-6">
            <a
              href="#tjenester"
              className="font-[family-name:var(--font-inter)] text-sm text-white/50 hover:text-white transition-colors"
            >
              Tjenester
            </a>
            <a
              href="#kontakt"
              className="font-[family-name:var(--font-inter)] text-sm text-white/50 hover:text-white transition-colors"
            >
              Kontakt
            </a>
            <a
              href="#"
              className="font-[family-name:var(--font-inter)] text-sm text-white/50 hover:text-white transition-colors"
            >
              Personvern
            </a>
          </nav>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#1C1C3A] mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <span className="font-[family-name:var(--font-inter)] text-xs text-white/30">
              &copy; 2026 Nuve. Alle rettigheter reservert.
            </span>
            <div className="flex items-center gap-1.5 text-white/20">
              <MapPin size={12} />
              <span className="font-[family-name:var(--font-inter)] text-xs">
                &Oslash;rsta, Norge
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-[family-name:var(--font-inter)] text-xs text-white/30">
              🇳🇴 Norsk
            </span>
            <a
              href="#"
              className="text-white/20 hover:text-white/50 transition-colors"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="#"
              className="text-white/20 hover:text-white/50 transition-colors"
            >
              <Instagram size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
