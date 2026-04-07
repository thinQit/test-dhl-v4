export const dynamic = 'force-dynamic';

import HeroSpotlight from '@/components/HeroSpotlight'
import TrackingForm from '@/components/TrackingForm'
import CTABanner from '@/components/CTABanner'
import SectionReveal from '@/components/SectionReveal'

export default function TrackingPage() {
  return (
    <main className="bg-background text-foreground">
      <div className="animate-fade-in-up overflow-hidden">
        <HeroSpotlight
          title="Track your shipment in seconds."
          subtitle="Get the latest milestone updates and delivery status with a single tracking number."
          primaryCta={{ label: 'Track now', href: '#track-form' }}
          secondaryCta={{ label: 'Need help?', href: '/contact' }}
          imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576884/site-images/corporate/12703092.jpg"
        />
      </div>

      <SectionReveal>
        <div className="animate-fade-in-up py-20 md:py-24 bg-muted">
          <TrackingForm />
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
