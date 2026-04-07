export const dynamic = 'force-dynamic';

import HeroSpotlight from '@/components/HeroSpotlight'
import AboutSplit from '@/components/AboutSplit'
import CTABanner from '@/components/CTABanner'
import SectionReveal from '@/components/SectionReveal'

export default function AboutPage() {
  return (
    <main className="bg-background text-foreground">
      <div className="animate-fade-in-up overflow-hidden">
        <HeroSpotlight
          title="Built for international delivery performance."
          subtitle="Our approach combines reliable routing, customs readiness, and proactive visibility to keep shipments on schedule."
          primaryCta={{ label: 'Explore services', href: '/services' }}
          secondaryCta={{ label: 'Contact', href: '/contact' }}
          imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576857/site-images/corporate/1181408.jpg"
        />
      </div>

      <SectionReveal>
        <div className="animate-fade-in-up py-20 md:py-24 bg-muted">
          <AboutSplit />
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
