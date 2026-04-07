export const dynamic = 'force-dynamic';

import HeroSpotlight from '@/components/HeroSpotlight'
import ContactSection from '@/components/ContactSection'
import SectionReveal from '@/components/SectionReveal'

export default function ContactPage() {
  return (
    <main className="bg-background text-foreground">
      <div className="animate-fade-in-up overflow-hidden">
        <HeroSpotlight
          title="Talk to a DHL Express shipping specialist."
          subtitle="Get help choosing services, estimating costs, and setting up tracking workflows for your business."
          primaryCta={{ label: 'Send a request', href: '#contact-form' }}
          secondaryCta={{ label: 'Call now', href: 'tel:+18002255345' }}
          imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576897/site-images/corporate/10041267.jpg"
        />
      </div>

      <SectionReveal>
        <div className="animate-fade-in-up py-20 md:py-24 bg-muted">
          <ContactSection />
        </div>
      </SectionReveal>
    </main>
  )
}
