'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  faqs?: FAQItem[]
}

export default function FAQAccordion({
  faqs = [
    { question: 'How fast is DHL Express international delivery?', answer: 'Most major trade lanes are delivered by the next possible business day depending on destination and customs conditions.' },
    { question: 'Can DHL help with customs paperwork?', answer: 'Yes. Our customs specialists review documentation, HS classification, and clearance requirements before dispatch.' },
    { question: 'Do you offer tracking API integration?', answer: 'Yes, enterprise plans include API options for live shipment status updates in your internal systems.' },
  ],
}: Partial<FAQAccordionProps>) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <h2 className="mb-8 text-3xl font-bold text-[#333333] md:text-4xl">Frequently asked questions</h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const open = openIndex === i
            return (
              <Card key={faq.question + i} className="rounded-xl border border-black/10 bg-white p-0">
                <button
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left"
                >
                  <span className="font-medium text-[#333333]">{faq.question}</span>
                  <ChevronDown className={cn('h-5 w-5 text-[#D40511] transition-transform', open ? 'rotate-180' : 'rotate-0')} />
                </button>
                {open ? <div className="px-5 pb-5 text-sm text-[#333333]/85">{faq.answer}</div> : null}
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
