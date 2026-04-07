"use client";

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'

interface Tier {
  name: string
  price: string
  features: string[]
  laneEstimate: string
  featured?: boolean
}

interface PricingTiersProps {
  tiers?: Tier[]
}

export default function PricingTiers({
  tiers = [
    { name: 'Starter', price: '$29/shipment', features: ['Standard international express', 'Basic tracking updates', 'Email support'], laneEstimate: 'US → Canada: 1-2 days' },
    { name: 'Business', price: '$59/shipment', features: ['Priority handling', 'Customs advisory', 'API tracking access'], laneEstimate: 'US → Germany: 2-3 days', featured: true },
    { name: 'Enterprise', price: 'Custom', features: ['Dedicated account manager', 'Volume lane pricing', 'SLA-backed performance'], laneEstimate: 'Global lanes by contract' },
  ],
}: Partial<PricingTiersProps>) {
  return (
    <section id="pricing" className="bg-[#F5F5F5] py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="mb-10 text-3xl font-bold text-[#333333] md:text-4xl">Transparent plans for growing shipment volumes</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <Card key={tier.name} className={tier.featured ? 'rounded-xl border-2 border-[#D40511] bg-white p-6' : 'rounded-xl border border-black/10 bg-white p-6'}>
              <p className="text-sm font-medium text-[#333333]/80">{tier.name}</p>
              <p className="mt-2 text-3xl font-bold text-[#333333]">{tier.price}</p>
              <p className="mt-1 text-sm text-[#D40511]">{tier.laneEstimate}</p>
              <ul className="mt-5 space-y-2 text-sm text-[#333333]">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2"><Check className="h-4 w-4 text-[#D40511]" /> {f}</li>
                ))}
              </ul>
              <Button className={tier.featured ? 'mt-6 w-full bg-[#D40511] text-white hover:bg-[#b9040f]' : 'mt-6 w-full bg-[#FFCC00] text-[#333333] hover:bg-[#e6b800]'}>
                Choose {tier.name}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
