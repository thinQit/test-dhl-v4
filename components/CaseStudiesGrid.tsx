"use client";

import Image from 'next/image'
import { Card } from '@/components/ui/card'

interface CaseStudy {
  title: string
  challenge: string
  solution: string
  results: string
  imageSrc: string
}

interface CaseStudiesGridProps {
  variant?: 'list' | 'featured'
  studies?: CaseStudy[]
}

export default function CaseStudiesGrid({
  variant = 'featured',
  studies = [
    {
      title: 'Medical Device Expansion to EU',
      challenge: 'Frequent customs holds for temperature-sensitive shipments.',
      solution: 'Introduced pre-clearance documents and dedicated lane routing.',
      results: '31% faster border processing and 18% lower spoilage incidents.',
      imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576911/site-images/corporate/1181610.jpg',
    },
    {
      title: 'Retail Peak Season Fulfillment',
      challenge: 'Unpredictable last-mile delays during holiday periods.',
      solution: 'Added proactive rerouting and dynamic pickup windows.',
      results: '97.8% on-time peak delivery across top 12 metro markets.',
      imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576884/site-images/corporate/12703092.jpg',
    },
  ],
}: Partial<CaseStudiesGridProps>) {
  return (
    <section id="case-studies" className="bg-[#F5F5F5] py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="mb-10 text-3xl font-bold text-[#333333] md:text-4xl">Case studies from real shipping operations</h2>
        <div className={variant === 'list' ? 'grid gap-6' : 'grid gap-6 md:grid-cols-2'}>
          {studies.map((study, idx) => (
            <Card key={study.title + idx} className="overflow-hidden rounded-xl border border-black/10 bg-white">
              <Image src={study.imageSrc} alt={study.title} width={1200} height={800} className="h-52 w-full object-cover" unoptimized />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#333333]">{study.title}</h3>
                <p className="mt-3 text-sm text-[#333333]/85"><span className="font-semibold">Challenge:</span> {study.challenge}</p>
                <p className="mt-2 text-sm text-[#333333]/85"><span className="font-semibold">Solution:</span> {study.solution}</p>
                <p className="mt-2 text-sm font-medium text-[#D40511]"><span className="font-semibold">Results:</span> {study.results}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
