export const dynamic = 'force-dynamic';

import HeroSpotlight from '@/components/HeroSpotlight'
import CaseStudiesGrid from '@/components/CaseStudiesGrid'
import CTABanner from '@/components/CTABanner'
import SectionReveal from '@/components/SectionReveal'

export default function CaseStudiesPage() {
  return (
    <main className="bg-background text-foreground">
      <div className="animate-fade-in-up overflow-hidden">
        <HeroSpotlight
          title="Proof in performance: shipping outcomes that move the needle."
          subtitle="See how better service selection, documentation readiness, and tracking workflows improve delivery experience."
          primaryCta={{ label: 'Talk to a specialist', href: '/contact' }}
          secondaryCta={{ label: 'View pricing', href: '/pricing' }}
          imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576864/site-images/corporate/1181344.jpg"
        />
      </div>

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
    </main>
  )
}
