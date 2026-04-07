"use client";

import Image from 'next/image'
import { Card } from '@/components/ui/card'

interface TeamMember {
  name: string
  role: string
  bio: string
  expertise: string[]
  photo: string
}

interface TeamGridProps {
  members?: TeamMember[]
}

export default function TeamGrid({
  members = [
    { name: 'Elena Richter', role: 'Regional Operations Director', bio: 'Leads multi-country express network performance and SLA delivery.', expertise: ['Hub Operations', 'Last-mile Planning'], photo: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577325/site-images/team-people/10347164.jpg' },
    { name: 'Marcus Chen', role: 'Global Customs Lead', bio: 'Designs compliance workflows for high-volume cross-border shipping.', expertise: ['Customs Brokerage', 'Regulatory Compliance'], photo: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577363/site-images/team-people/12903169.jpg' },
    { name: 'Ava Thompson', role: 'Enterprise Account Manager', bio: 'Partners with B2B clients on route optimization and cost forecasting.', expertise: ['Account Strategy', 'Lane Pricing'], photo: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577370/site-images/team-people/1181405.jpg' },
  ],
}: Partial<TeamGridProps>) {
  return (
    <section id="team" className="bg-[#F5F5F5] py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="mb-10 text-3xl font-bold text-[#333333] md:text-4xl">Meet the logistics experts behind your shipments</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {members.map((member, idx) => (
            <Card key={member.name + idx} className="rounded-xl border border-black/10 bg-white p-5">
              <Image src={member.photo} alt={member.name} width={1200} height={800} className="mb-4 h-52 w-full rounded-lg object-cover" unoptimized />
              <h3 className="text-lg font-semibold text-[#333333]">{member.name}</h3>
              <p className="text-sm font-medium text-[#D40511]">{member.role}</p>
              <p className="mt-2 text-sm text-[#333333]/80">{member.bio}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {member.expertise.map((chip) => (
                  <span key={chip} className="rounded-full bg-[#FFCC00] px-3 py-1 text-xs font-medium text-[#333333]">
                    {chip}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
