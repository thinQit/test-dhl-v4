'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { PackageCheck } from 'lucide-react'

interface TrackingEvent {
  time: string
  status: string
  location: string
}

interface TrackingFormProps {
  defaultTrackingNumber?: string
}

export default function TrackingForm({
  defaultTrackingNumber = '1234567890', // use 10 digits to match schema
}: Partial<TrackingFormProps>) {
  const [trackingNumber, setTrackingNumber] = useState(defaultTrackingNumber)
  const [events, setEvents] = useState<TrackingEvent[]>([])
  const [status, setStatus] = useState<string | undefined>()
  const [estimatedDelivery, setEstimatedDelivery] = useState<string | undefined>()
  const [error, setError] = useState<string | undefined>()

  const fetchTracking = async () => {
    setError(undefined)
    setEvents([])
    setStatus(undefined)
    setEstimatedDelivery(undefined)
    if (!trackingNumber) return
    try {
      const res = await fetch('/api/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ trackingNumber }),
      })
      const json = await res.json()
      if (!json.success) {
        setError(
          json.errors?.formErrors?.join(', ') ||
          json.errors?.fieldErrors?.trackingNumber?.join(', ') ||
          json.message ||
          'Unable to track this shipment.'
        )
        return
      }
      const data = json?.data
      setStatus(data?.status)
      setEstimatedDelivery(data?.estimatedDelivery)
      setEvents(
        (data?.events || []).map((e: any) => ({
          time: e.time,
          status: e.message,
          location: e.location,
        }))
      )
    } catch (e: any) {
      setError('Tracking unavailable. Please try again.')
    }
  }

  return (
    <section id="tracking" className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <h2 className="mb-6 text-3xl font-bold text-[#333333] md:text-4xl">Track your shipment in real time</h2>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Input
            value={trackingNumber}
            onChange={e => setTrackingNumber(e.target.value)}
            placeholder="Enter tracking number (10–12 digits)"
            inputMode="numeric"
            pattern="\d*"
          />
          <Button onClick={fetchTracking} className="bg-[#D40511] text-white hover:bg-[#b9040f]">Track</Button>
        </div>
        {error ? (
          <div className="mt-4 rounded-lg border border-destructive bg-destructive/10 px-4 py-2 text-destructive">
            {error}
          </div>
        ) : null}
        {status && (
          <div className="mt-6 flex flex-wrap gap-6">
            <div className="rounded-lg bg-[#FFCC00]/40 px-6 py-3 text-[#333333] text-base font-medium shadow-sm flex-1">
              Status: <span className="font-bold">{status}</span>
            </div>
            <div className="rounded-lg bg-[#FFCC00]/20 px-6 py-3 text-[#333333] text-base font-medium shadow-sm flex-1">
              Estimated Delivery: <span className="font-bold">{estimatedDelivery}</span>
            </div>
          </div>
        )}
        <div className="mt-6 space-y-3">
          {events.map((event, idx) => (
            <Card key={event.time + idx} className="rounded-xl border border-black/10 bg-[#F5F5F5] p-4">
              <div className="flex items-start gap-3">
                <PackageCheck className="mt-1 h-4 w-4 text-[#D40511]" />
                <div>
                  <p className="text-sm font-medium text-[#333333]">{event.status}</p>
                  <p className="text-xs text-[#333333]/75">{event.time} • {event.location}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
