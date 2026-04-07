export const dynamic = 'force-dynamic';

import HeroSpotlight from '@/components/HeroSpotlight'
import ServicesGrid from '@/components/ServicesGrid'
import AboutSplit from '@/components/AboutSplit'
import TeamGrid from '@/components/TeamGrid'
import TestimonialsGrid from '@/components/TestimonialsGrid'
import CaseStudiesGrid from '@/components/CaseStudiesGrid'
import CTABanner from '@/components/CTABanner'
import ContactSection from '@/components/ContactSection'
import SectionReveal from '@/components/SectionReveal'

export default function HomePage() {
  return (
    <main className="bg-background text-foreground">
      <div className="animate-fade-in-up overflow-hidden">
        <HeroSpotlight
          title="Ship worldwide in 1–3 business days with end-to-end tracking."
          subtitle="Express international delivery, customs-ready documentation, and proactive shipment visibility—built for businesses that can’t afford delays."
          primaryCta={{ label: 'Track a shipment', href: '/tracking' }}
          secondaryCta={{ label: 'Get a quote', href: '/pricing' }}
          imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576897/site-images/corporate/10041273.jpg"
        />
      </div>

      <SectionReveal>
        <div className="animate-fade-in-up py-20 md:py-24 bg-muted">
          <ServicesGrid />
        </div>
      </SectionReveal>

      <SectionReveal>
        <div className="animate-fade-in-up py-20 md:py-24 bg-background">
          <AboutSplit />
        </div>
      </SectionReveal>

      <SectionReveal>
        <div className="animate-fade-in-up py-20 md:py-24 bg-muted">
          <TeamGrid />
        </div>
      </SectionReveal>

      <SectionReveal>
        <div className="animate-fade-in-up py-20 md:py-24 bg-background">
          <TestimonialsGrid />
        </div>
      </SectionReveal>

      <SectionReveal>
        <div className="animate-fade-in-up py-20 md:py-24 bg-muted">
          <CaseStudiesGrid />
        </div>
      </SectionReveal>

      <SectionReveal>
        <div className="animate-fade-in-up py-20 md:py-24 bg-background">
          <CTABanner />
        </div>
      </SectionReveal>

      <SectionReveal>
        <div className="animate-fade-in-up py-20 md:py-24 bg-muted">
          <ContactSection />
        </div>
      </SectionReveal>
    </main>
  )
}
