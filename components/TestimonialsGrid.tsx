"use client";

import { Card } from '@/components/ui/card'
import { Star } from 'lucide-react'

interface Testimonial {
  quote: string
  name: string
  title: string
  company: string
}

interface TestimonialsGridProps {
  testimonials?: Testimonial[]
}

export default function TestimonialsGrid({
  testimonials = [
    { quote: 'DHL cut our average Europe transit time by 22% while improving scan visibility.', name: 'Renee Collins', title: 'Supply Chain Director', company: 'MedCore Devices' },
    { quote: 'The customs advisory team helped us avoid repeated paperwork delays in APAC.', name: 'Victor Hall', title: 'Logistics Manager', company: 'Nexa Components' },
    { quote: 'Predictable delivery windows made our retail replenishment far more reliable.', name: 'Sofia Mendes', title: 'Operations Lead', company: 'Urban Axis Retail' },
  ],
}: Partial<TestimonialsGridProps>) {
  return (
    <section className="bg-white py-20 md:py-24" id="testimonials">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="text-3xl font-bold text-[#333333] md:text-4xl">Trusted by global teams with urgent delivery needs</h2>
          <Card className="rounded-xl border border-black/10 bg-[#F5F5F5] p-4">
            <p className="text-sm font-semibold text-[#333333]">Customer Rating</p>
            <div className="mt-1 flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="h-4 w-4 fill-[#FFCC00] text-[#FFCC00]" />)}
              <span className="ml-2 text-sm text-[#333333]/80">4.9/5 from enterprise clients</span>
            </div>
          </Card>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item, idx) => (
            <Card key={item.name + idx} className="rounded-xl border border-black/10 bg-white p-6">
              <p className="text-sm italic text-[#333333]/90">“{item.quote}”</p>
              <p className="mt-5 font-semibold text-[#333333]">{item.name}</p>
              <p className="text-sm text-[#333333]/80">{item.title}, {item.company}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
