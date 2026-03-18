import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import StatsBar from "@/components/StatsBar";
import Cases from "@/components/Cases";
import Testimonial from "@/components/Testimonial";
import WhyNuve from "@/components/WhyNuve";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />

      {/* Services */}
      <Services />

      {/* Transition: light to dark */}
      <div
        className="h-[160px]"
        style={{
          background: "linear-gradient(to bottom, #FFFFFF, #0D0D0D)",
        }}
      />

      {/* Stats bar */}
      <StatsBar />

      {/* Transition: dark to light */}
      <div
        className="h-[80px]"
        style={{
          background: "linear-gradient(to bottom, #0D0D0D, #FFFFFF)",
        }}
      />

      {/* Cases */}
      <Cases />

      {/* Accent divider */}
      <div className="h-[3px] mx-auto" style={{ background: "linear-gradient(to right, transparent, #E42313, transparent)", maxWidth: 600 }} />

      {/* Testimonial */}
      <Testimonial />

      {/* Transition: light to fafafa */}
      <div
        className="h-[60px]"
        style={{
          background: "linear-gradient(to bottom, #FFFFFF, #FAFAFA)",
        }}
      />

      {/* Why Nuve */}
      <WhyNuve />

      {/* Transition: light to dark with diagonal */}
      <div
        className="h-[100px] relative overflow-hidden"
        style={{
          background: "linear-gradient(to bottom, #FAFAFA, #0D0D0D)",
        }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(20deg, transparent, transparent 40px, white 40px, white 41px)",
          }}
        />
      </div>

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />
    </>
  );
}
