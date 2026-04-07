"use client";

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CheckCircle2 } from 'lucide-react'

interface CTABannerProps {
  title?: string
  subtitle?: string
}

export default function CTABanner({
  title = 'Need guaranteed international delivery performance?',
  subtitle = 'Get a tailored DHL Express shipping strategy with lane-specific pricing and onboarding support.',
}: Partial<CTABannerProps>) {
  return (
    <section className="bg-[#333333] py-20 md:py-24">
      <div className="mx-auto max-w-7xl rounded-2xl border border-[#FFCC00]/30 bg-[#333333] px-6 py-10 md:px-10">
        <h2 className="text-3xl font-bold text-white md:text-4xl">{title}</h2>
        <p className="mt-3 max-w-3xl text-white/90">{subtitle}</p>
        <div className="mt-6 grid gap-3 text-sm text-white md:grid-cols-3">
          <p className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#FFCC00]" /> Dedicated account onboarding</p>
          <p className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#FFCC00]" /> Customs and compliance advisory</p>
          <p className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#FFCC00]" /> Real-time tracking integration support</p>
        </div>
        <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
          <Button asChild className="bg-[#D40511] text-white hover:bg-[#b9040f]">
            <Link href="#contact">Get a quote</Link>
          </Button>
          <p className="text-sm text-[#FFCC00]">Typical response time: under 2 business hours</p>
        </div>
      </div>
    </section>
  )
}
