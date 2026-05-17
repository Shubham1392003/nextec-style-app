import { SmoothScrolling } from "@/components/SmoothScrolling";
import { AnimatedHeading } from "@/components/ui/animated-heading";
import { BrutalistButton } from "@/components/ui/brutalist-button";
import { BrutalistCard } from "@/components/ui/brutalist-card";
import { Section } from "@/components/ui/section";
import { ArrowRight, MoveUpRight, Sparkles } from "lucide-react";
import { Navbar } from "@/components/ui/navbar";
import { HeroSection } from "@/components/ui/hero-section";
import { PortfolioSection } from "@/components/ui/portfolio-section";
import { WhoWeAre } from "@/components/ui/who-we-are";
import { ProcessTimeline } from "@/components/ui/process-timeline";
import { GsapFooter } from "@/components/ui/gsap-footer";

export default function Home() {
  return (
    <SmoothScrolling>
      <main className="flex flex-col min-h-screen bg-background text-foreground">
        
        <Navbar />
        <HeroSection />
        <PortfolioSection />

        {/* Marquee Divider */}
        <div className="border-y-2 border-foreground bg-[var(--color-coral)] overflow-hidden flex whitespace-nowrap py-4">
          <div className="animate-[marquee_20s_linear_infinite] flex items-center gap-8 text-2xl font-heading font-bold uppercase text-background">
            <span>Awwwards Winning</span>
            <Sparkles size={24} />
            <span>Digital Product Studio</span>
            <Sparkles size={24} />
            <span>Creative Development</span>
            <Sparkles size={24} />
            <span>Experimental Design</span>
            <Sparkles size={24} />
            <span>Awwwards Winning</span>
            <Sparkles size={24} />
            <span>Digital Product Studio</span>
            <Sparkles size={24} />
          </div>
        </div>

        {/* Features / Services */}
        <Section grid className="bg-[var(--color-background)]">
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <h2 className="text-5xl font-heading mb-6">SERVICES</h2>
              <p className="font-mono text-sm uppercase tracking-widest max-w-xs mb-12">
                We craft unique digital identities that stand out in the modern web.
              </p>
            </div>
            <BrutalistButton variant="secondary" className="w-fit">
              All Services
            </BrutalistButton>
          </div>
          
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <BrutalistCard color="teal" className="flex flex-col gap-12 group hover:bg-[var(--color-blue)] cursor-pointer">
              <div className="flex justify-between items-start text-background">
                <span className="font-pixel text-xl">01</span>
                <MoveUpRight className="group-hover:rotate-45 transition-transform" />
              </div>
              <h3 className="text-3xl font-heading text-background">Strategy &<br/>Branding</h3>
            </BrutalistCard>

            <BrutalistCard color="default" className="flex flex-col gap-12 group hover:bg-[var(--color-coral)] hover:text-background cursor-pointer">
              <div className="flex justify-between items-start">
                <span className="font-pixel text-xl">02</span>
                <MoveUpRight className="group-hover:rotate-45 transition-transform" />
              </div>
              <h3 className="text-3xl font-heading">Digital<br/>Design</h3>
            </BrutalistCard>

            <BrutalistCard color="default" className="flex flex-col gap-12 group hover:bg-foreground hover:text-background cursor-pointer">
              <div className="flex justify-between items-start">
                <span className="font-pixel text-xl">03</span>
                <MoveUpRight className="group-hover:rotate-45 transition-transform" />
              </div>
              <h3 className="text-3xl font-heading">Creative<br/>Development</h3>
            </BrutalistCard>

            <BrutalistCard color="blue" className="flex flex-col gap-12 group hover:bg-[var(--color-teal)] cursor-pointer">
              <div className="flex justify-between items-start text-background">
                <span className="font-pixel text-xl">04</span>
                <MoveUpRight className="group-hover:rotate-45 transition-transform" />
              </div>
              <h3 className="text-3xl font-heading text-background">Motion &<br/>Interaction</h3>
            </BrutalistCard>
          </div>
        </Section>

        <WhoWeAre />
        <ProcessTimeline />
        <GsapFooter />
      </main>
    </SmoothScrolling>
  );
}
