'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Phone, Mail, MapPin } from 'lucide-react'

interface ContactSectionProps {
  showMap?: boolean
  mapEmbedUrl?: string
}

export default function ContactSection({
  showMap = true,
  mapEmbedUrl = 'https://maps.google.com/maps?q=Cincinnati%20OH&t=&z=13&ie=UTF8&iwloc=&output=embed',
}: Partial<ContactSectionProps>) {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [status, setStatus] = useState('')

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setStatus('Please complete required fields.')
      return
    }
    const res = await fetch('/api/contact', { method: 'POST', body: JSON.stringify(form) })
    setStatus(res.ok ? 'Thanks! Our logistics specialist will contact you shortly.' : 'Submission failed. Please try again.')
  }

  return (
    <section id="contact" className="bg-white py-20 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-2 md:px-6">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-[#333333] md:text-4xl">Talk to a DHL shipping specialist</h2>
          <Card className="rounded-xl border border-black/10 bg-[#F5F5F5] p-4 text-sm text-[#333333]">
            <p className="mb-2 flex items-center gap-2"><Phone className="h-4 w-4 text-[#D40511]" /> +1 (800) 225-5345</p>
            <p className="mb-2 flex items-center gap-2"><Mail className="h-4 w-4 text-[#D40511]" /> enterprise@dhl-express.com</p>
            <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[#D40511]" /> 121 Logistics Parkway, Cincinnati, OH</p>
          </Card>
          {showMap ? (
            <div className="overflow-hidden rounded-xl border border-black/10">
              <iframe title="DHL map" src={mapEmbedUrl} className="h-64 w-full" loading="lazy" />
            </div>
          ) : null}
        </div>

        <Card className="rounded-xl border border-black/10 bg-white p-6">
          <form onSubmit={submitForm} className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name*</Label>
              <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            </div>
            <div>
              <Label htmlFor="email">Business Email*</Label>
              <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </div>
            <div>
              <Label htmlFor="company">Company</Label>
              <Input id="company" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
            </div>
            <div>
              <Label htmlFor="message">Shipment Requirements*</Label>
              <Textarea id="message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
            </div>
            <Button type="submit" className="w-full bg-[#D40511] text-white hover:bg-[#b9040f]">Submit Inquiry</Button>
            {status ? <p className="text-sm text-[#333333]/80">{status}</p> : null}
          </form>
        </Card>
      </div>
    </section>
  )
}
