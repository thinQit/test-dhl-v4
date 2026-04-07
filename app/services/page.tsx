export const dynamic = 'force-dynamic';

import HeroSpotlight from '@/components/HeroSpotlight'
import FeaturesGrid from '@/components/FeaturesGrid'
import CTABanner from '@/components/CTABanner'
import SectionReveal from '@/components/SectionReveal'

export default function ServicesPage() {
  return (
    <main className="bg-background text-foreground">
      <div className="animate-fade-in-up overflow-hidden">
        <HeroSpotlight
          title="Choose the right DHL Express service for every shipment."
          subtitle="From documents to heavyweight freight, get time-definite delivery options with tracking and customs support."
          primaryCta={{ label: 'Get a quote', href: '/pricing' }}
          secondaryCta={{ label: 'Contact sales', href: '/contact' }}
          imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576911/site-images/corporate/1181610.jpg"
        />
      </div>

      <SectionReveal>
        <div className="animate-fade-in-up py-20 md:py-24 bg-muted">
          <FeaturesGrid
            headline="Service levels"
            subheadline="Compare delivery urgency, shipment type, and support options."
            features={[
              { icon: 'Plane', title: 'Express Worldwide', description: 'Time-definite international delivery for parcels and documents.' },
              { icon: 'Clock', title: 'Same Day Express', description: 'Fastest possible routing for urgent shipments.' },
              { icon: 'FileCheck', title: 'Customs & Compliance Support', description: 'Reduce delays with documentation and restricted-goods guidance.' },
              { icon: 'ShoppingCart', title: 'E-commerce Shipping Tools', description: 'Operational tools for labels, pickups, and tracking notifications.' },
            ]}
          />
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
