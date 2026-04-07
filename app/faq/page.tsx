export const dynamic = 'force-dynamic';

import HeroSpotlight from '@/components/HeroSpotlight'
import FAQAccordion from '@/components/FAQAccordion'
import SectionReveal from '@/components/SectionReveal'

export default function FaqPage() {
  return (
    <main className="bg-background text-foreground">
      <div className="animate-fade-in-up overflow-hidden">
        <HeroSpotlight
          title="Shipping FAQs: documents, customs, and delivery timelines."
          subtitle="Quick answers to help you ship internationally with fewer delays."
          primaryCta={{ label: 'Contact support', href: '/contact' }}
          secondaryCta={{ label: 'Track shipment', href: '/tracking' }}
          imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576868/site-images/corporate/12274675.jpg"
        />
      </div>

      <SectionReveal>
        <div className="animate-fade-in-up py-20 md:py-24 bg-muted">
          <FAQAccordion />
        </div>
      </SectionReveal>
    </main>
  )
}
