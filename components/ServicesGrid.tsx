'use client'

import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { Plane, Package, FileCheck2, Clock3, ShieldCheck, Globe } from 'lucide-react'

interface ServiceItem {
  title: string
  description: string
  icon: string
  highlight: string
}

interface ServicesGridProps {
  services?: ServiceItem[]
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Plane,
  Package,
  FileCheck2,
  Clock3,
  ShieldCheck,
  Globe,
}

export default function ServicesGrid({
  services = [
    { title: 'Express Worldwide', description: 'Time-definite international delivery across 220+ countries.', icon: 'Plane', highlight: 'Next possible business day' },
    { title: 'Domestic Priority', description: 'Reliable domestic lane coverage for urgent B2B shipments.', icon: 'Package', highlight: 'Morning delivery windows' },
    { title: 'Customs Clearance', description: 'Specialist brokerage support to reduce border delays.', icon: 'FileCheck2', highlight: 'Proactive document checks' },
    { title: 'On-Demand Pickup', description: 'Flexible pickups tailored to your warehouse dispatch cycle.', icon: 'Clock3', highlight: 'Book within minutes' },
    { title: 'Secure Shipping', description: 'Chain-of-custody and high-value goods handling processes.', icon: 'ShieldCheck', highlight: 'End-to-end visibility' },
    { title: 'Global Trade Support', description: 'Guidance on duties, taxes, and route optimization.', icon: 'Globe', highlight: 'Dedicated account specialists' },
  ],
}: Partial<ServicesGridProps>) {
  return (
    <section id="services" className="bg-muted py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">Logistics services built for speed and certainty</h2>
          <p className="mt-3 text-muted-foreground">From urgent parcels to enterprise freight lanes, DHL Express keeps your supply chain moving.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Package
            return (
              <Card
                key={service.title + index}
                className={cn(
                  'rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md'
                )}
              >
                <Icon className="mb-4 h-8 w-8 text-accent" />
                <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
                <p className="mt-4 text-sm font-medium text-accent">{service.highlight}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
