import { Target, BarChart3, Zap, TrendingUp } from "lucide-react";
import FadeInSection from "./FadeInSection";

const services = [
  {
    icon: Target,
    title: "Google Ads",
    description:
      "Søkekampanjer som leverer målbare resultater og høy avkastning.",
  },
  {
    icon: BarChart3,
    title: "Tracking & Analytics",
    description:
      "Datadrevet innsikt med korrekt sporing og rapportering.",
  },
  {
    icon: Zap,
    title: "Performance Strategy",
    description:
      "Skreddersydde strategier for vekst og konvertering.",
  },
  {
    icon: TrendingUp,
    title: "Optimization & Scaling",
    description:
      "Kontinuerlig optimalisering for maksimal skalerbarhet.",
  },
];

export default function Services() {
  return (
    <section
      id="tjenester"
      className="relative py-20 md:py-28 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.06) 0%, transparent 60%), #FFFFFF",
      }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <FadeInSection>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-5xl font-bold text-[#6366F1] tracking-[-1px] mb-12">
            TJENESTER
          </h2>
        </FadeInSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <FadeInSection key={i}>
              <div className="border border-[#E5E7EB] border-t-[3px] border-t-[#6366F1] rounded-lg p-7 flex flex-col gap-4 h-full hover:shadow-lg transition-shadow bg-white">
                <service.icon size={24} className="text-[#141432]" />
                <h3 className="font-[family-name:var(--font-space-grotesk)] text-sm font-medium text-[#141432]">
                  {service.title}
                </h3>
                <p className="font-[family-name:var(--font-inter)] text-[13px] text-[#555555] leading-relaxed">
                  {service.description}
                </p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
