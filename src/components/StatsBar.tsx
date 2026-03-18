import FadeInSection from "./FadeInSection";

const stats = [
  {
    value: "847%",
    label: "Gjennomsnittlig ROAS",
    ghosts: ["560%", "280%"],
  },
  {
    value: "-43%",
    label: "Lavere CPA i snitt",
    ghosts: ["-28%", "-14%"],
  },
  {
    value: "2.4x",
    label: "Økning i konverteringer",
    ghosts: ["1.6x", "0.8x"],
  },
  {
    value: "100%",
    label: "Kunder med positiv ROI",
    ghosts: ["66%", "33%"],
  },
];

export default function StatsBar() {
  return (
    <section className="relative h-auto md:h-[140px] bg-[#0D0D0D] overflow-hidden diagonal-lines">
      {/* Mesh gradient glows */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 20% 50%, rgba(99,102,241,0.08), transparent 40%), radial-gradient(circle at 80% 50%, rgba(99,102,241,0.06), transparent 40%)",
        }}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 h-full flex items-center">
        <FadeInSection className="w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 py-6 md:py-0 w-full">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center relative border-l-2 border-[#6366F1] pl-4 md:pl-0 md:border-l-2"
              >
                {/* Ghost trail numbers */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none">
                  <span className="font-[family-name:var(--font-space-grotesk)] text-xs text-[#6366F1] opacity-0 ghost-trail-delay">
                    {stat.ghosts[1]}
                  </span>
                  <span className="font-[family-name:var(--font-space-grotesk)] text-sm text-[#6366F1] opacity-0 ghost-trail">
                    {stat.ghosts[0]}
                  </span>
                </div>
                <span className="font-[family-name:var(--font-space-grotesk)] text-2xl md:text-[44px] font-bold text-[#6366F1] red-text-glow">
                  {stat.value}
                </span>
                <span className="font-[family-name:var(--font-inter)] text-xs md:text-[13px] text-white/50 text-center mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
