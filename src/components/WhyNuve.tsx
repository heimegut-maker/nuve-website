import { Calendar, Globe, Award, Layers, Repeat } from "lucide-react";
import FadeInSection from "./FadeInSection";

const usps = [
  {
    icon: Calendar,
    title: "20 års erfaring",
    description:
      "To tiår med Google Ads-kompetanse og bevist track record.",
  },
  {
    icon: Globe,
    title: "Internasjonale kunder",
    description:
      "Kunder i flere land og markeder — vi forstår global digital vekst.",
  },
  {
    icon: Award,
    title: "Kun seniorer",
    description:
      "Ingen juniorer på teamet — kun erfarne spesialister.",
  },
  {
    icon: Layers,
    title: "Bred bransjeerfaring",
    description:
      "Fra ecom til SaaS, helse til finans — vi kjenner bransjen din.",
  },
  {
    icon: Repeat,
    title: "B2B og D2C",
    description:
      "Ekspertise i begge forretningsmodeller — vi tilpasser strategien.",
  },
];

export default function WhyNuve() {
  return (
    <section id="om-oss" className="relative py-20 md:py-28 bg-[#FAFAFA] overflow-hidden">
      {/* Big rotated text */}
      <div className="absolute -left-16 top-1/2 -translate-y-1/2 -rotate-90 font-[family-name:var(--font-space-grotesk)] text-[80px] md:text-[140px] font-bold text-[#141432] opacity-[0.02] select-none pointer-events-none whitespace-nowrap">
        HVORFOR
      </div>

      {/* Vertical accent bar */}
      <div className="absolute left-6 md:left-12 top-20 bottom-20 w-1.5 hidden md:block" style={{ background: "linear-gradient(to bottom, #E42313, transparent)" }} />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12">
        <FadeInSection>
          <p className="font-[family-name:var(--font-space-grotesk)] text-xs font-medium tracking-[2px] text-[#555555] mb-12">
            HVORFOR NUVE
          </p>
        </FadeInSection>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {usps.map((usp, i) => (
            <FadeInSection key={i}>
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-[#6366F118] flex items-center justify-center mb-4">
                  <usp.icon size={28} className="text-[#6366F1]" />
                </div>
                <h3 className="font-[family-name:var(--font-space-grotesk)] text-base font-semibold text-[#141432] mb-2">
                  {usp.title}
                </h3>
                <p className="font-[family-name:var(--font-inter)] text-sm text-[#555555] leading-relaxed">
                  {usp.description}
                </p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
