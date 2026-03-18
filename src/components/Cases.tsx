import FadeInSection from "./FadeInSection";

const cases = [
  {
    tag: "E-COMMERCE",
    title: "312% inntektsøkning",
    stat: "1,240% ROAS",
    offset: "md:mt-5",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=300&fit=crop",
  },
  {
    tag: "B2B SAAS",
    title: "+580% organisk trafikk",
    stat: "Top 3 rangering",
    offset: "md:mt-0",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop",
  },
  {
    tag: "LOKAL BEDRIFT",
    title: "3x kundestrøm",
    stat: "#1 Google Maps",
    offset: "md:mt-10",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=300&fit=crop",
  },
];

export default function Cases() {
  return (
    <section id="resultater" className="relative py-20 md:py-28 bg-white overflow-hidden">
      {/* Big faded 847% */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-[family-name:var(--font-space-grotesk)] text-[120px] md:text-[240px] font-bold text-[#6366F106] rotate-[4deg] select-none pointer-events-none whitespace-nowrap">
        847%
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12">
        <FadeInSection>
          <p className="font-[family-name:var(--font-inter)] text-xs font-medium tracking-[2px] text-[#555555] mb-4">
            KUNDEHISTORIER
          </p>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {cases.map((c, i) => (
            <FadeInSection key={i}>
              <div
                className={`rounded-xl overflow-hidden border border-[#E5E7EB] bg-white hover:shadow-xl transition-shadow ${c.offset}`}
              >
                {/* Image with stripe */}
                <div className="relative h-[160px] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={c.image}
                    alt={c.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#E42313]" />
                </div>
                {/* Body */}
                <div className="p-6">
                  <span className="font-[family-name:var(--font-inter)] text-[10px] font-medium text-[#6366F1] tracking-wider">
                    {c.tag}
                  </span>
                  <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-bold text-[#141432] mt-2 mb-3">
                    {c.title}
                  </h3>
                  <p className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold text-[#6366F1]">
                    {c.stat}
                  </p>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>

        <FadeInSection>
          <div className="text-center">
            <a
              href="#kontakt"
              className="inline-flex items-center px-7 py-3.5 bg-[#6366F1] text-white font-[family-name:var(--font-inter)] text-sm font-medium rounded-lg purple-glow hover:bg-[#5558E8] transition-colors"
            >
              Se alle resultater →
            </a>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
