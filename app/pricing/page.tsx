export const dynamic = 'force-dynamic';

import HeroSpotlight from '@/components/HeroSpotlight'
import PricingTiers from '@/components/PricingTiers'
import FAQAccordion from '@/components/FAQAccordion'
import SectionReveal from '@/components/SectionReveal'

export default function PricingPage() {
  return (
    <main className="bg-background text-foreground">
      <div className="animate-fade-in-up overflow-hidden">
        <HeroSpotlight
          title="Transparent pricing for express shipping—built for businesses."
          subtitle="Estimate costs by urgency and shipment type. For high-volume shipping, request a tailored rate card."
          primaryCta={{ label: 'Request business rates', href: '/contact' }}
          secondaryCta={{ label: 'Track shipment', href: '/tracking' }}
          imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576903/site-images/corporate/1313534.jpg"
        />
      </div>

      <SectionReveal>
        <div className="animate-fade-in-up py-20 md:py-24 bg-muted">
          <PricingTiers />
        </div>
      </SectionReveal>

      <SectionReveal>
        <div className="animate-fade-in-up py-20 md:py-24 bg-background">
          <FAQAccordion />
        </div>
      </SectionReveal>
    </main>
  )
}
