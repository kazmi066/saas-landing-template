import { Hero } from "@/components/ui/animated-hero";
import { CTA } from "@/components/ui/call-to-action";
import { Feature } from "@/components/ui/feature-section-with-bento-grid";
import { Footerdemo } from "@/components/ui/footer-section";
import NavHeader from "@/components/ui/nav-header";
import { Pricing } from "@/components/ui/pricing-section-with-comparison";
import { Testimonials } from "@/components/ui/testimonials";

export default function Home() {
  return (
    <main className="min-h-screen pt-4">
      <div className="container mx-auto px-2">
        <NavHeader />
        <Hero />
        <div className="flex flex-col gap-20 md:gap-32 pt-24">
          <Feature />
          <Testimonials />
          <Pricing />
          <CTA />
          <Footerdemo />
        </div>
      </div>
    </main>
  );
}
