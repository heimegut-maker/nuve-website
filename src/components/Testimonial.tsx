import FadeInSection from "./FadeInSection";

export default function Testimonial() {
  return (
    <section className="relative py-20 md:py-28 bg-white overflow-hidden">
      {/* Ghost text background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 font-[family-name:var(--font-space-grotesk)] text-[60px] md:text-[120px] font-bold text-[#141432] opacity-[0.02] scale-y-[-1] select-none pointer-events-none whitespace-nowrap">
        Det endret alt.
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12">
        <FadeInSection>
          <div className="max-w-[900px] mx-auto">
            {/* Quote mark */}
            <span className="font-[family-name:var(--font-space-grotesk)] text-7xl md:text-[96px] text-[#6366F1] leading-none block -mb-6">
              &laquo;
            </span>
            {/* Quote text */}
            <blockquote className="font-[family-name:var(--font-space-grotesk)] text-2xl md:text-[52px] font-bold text-[#141432] tracking-[-2px] leading-[1.2] mb-8">
              Nuve ga oss 1,240% ROAS p&aring; tre m&aring;neder. Det endret alt.
            </blockquote>
            {/* Attribution */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-0.5 bg-[#E42313]" />
              <span className="font-[family-name:var(--font-inter)] text-xs font-medium tracking-[2px] text-[#555555]">
                DAGLIG LEDER, NETTBUTIKK.NO
              </span>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
