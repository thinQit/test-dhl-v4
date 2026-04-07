"use client";

import Image from 'next/image'
import { CheckCircle2, Clock3, MapPin } from 'lucide-react'
import { Card } from '@/components/ui/card'

interface AboutSplitProps {
  imageSrc?: string
}

export default function AboutSplit({
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576897/site-images/corporate/10041273.jpg',
}: Partial<AboutSplitProps>) {
  return (
    <section id="about" className="bg-white py-20 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-2 md:items-center md:px-6">
        <div>
          <h2 className="text-3xl font-bold text-[#333333] md:text-4xl">Our mission: deliver confidence at global scale</h2>
          <p className="mt-4 text-[#333333]/80">
            DHL Express helps businesses ship faster, clearer, and smarter with trusted global infrastructure and local expertise.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-[#333333]">
            <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-[#D40511]" /> Customer-first service with proactive shipment updates</li>
            <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-[#D40511]" /> Compliance-led customs support for smoother cross-border flow</li>
            <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-[#D40511]" /> Enterprise lane optimization to reduce transit time and cost</li>
          </ul>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Card className="rounded-xl border border-black/10 bg-[#F5F5F5] p-4">
              <Clock3 className="mb-2 h-5 w-5 text-[#D40511]" />
              <p className="text-sm font-semibold text-[#333333]">Operating Hours</p>
              <p className="text-sm text-[#333333]/80">24/7 Shipment Operations</p>
            </Card>
            <Card className="rounded-xl border border-black/10 bg-[#F5F5F5] p-4">
              <MapPin className="mb-2 h-5 w-5 text-[#D40511]" />
              <p className="text-sm font-semibold text-[#333333]">Core Hubs</p>
              <p className="text-sm text-[#333333]/80">Cincinnati, Leipzig, Hong Kong</p>
            </Card>
          </div>
        </div>
        <div className="overflow-hidden rounded-xl border border-black/10">
          <Image src={imageSrc} alt="DHL team planning logistics routes" width={1200} height={800} className="h-full w-full object-cover" unoptimized />
        </div>
      </div>
    </section>
  )
}
