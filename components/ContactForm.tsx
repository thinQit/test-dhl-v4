'use client';

import React from 'react';
import { Mail, MapPin, Phone, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';

interface ContactInfo {
  icon: string;
  label: string;
  value: string;
}

interface ContactFormProps {
  headline: string;
  subheadline?: string;
  contactInfo?: ContactInfo[];
}

export default function ContactForm({
  headline = 'Let’s discuss your next business milestone',
  subheadline = 'Tell us about your goals and our team will get back to you with a tailored plan.',
  contactInfo = [],
}: Partial<ContactFormProps>) {
  const iconMap: Record<string, React.ElementType> = {
    Mail,
    Phone,
    MapPin,
    Sparkles,
  };

  const safeContactInfo =
    contactInfo.length > 0
      ? contactInfo
      : [
          { icon: 'Phone', label: 'Phone', value: '+1 (800) 555-0142' },
          { icon: 'Mail', label: 'Email', value: 'hello@yourbusiness.com' },
          { icon: 'MapPin', label: 'Office', value: '1200 Business Ave, Suite 400, New York, NY' },
        ];

  return (
    <section className="py-20 md:py-24 bg-muted/50">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="animate-fade-in-up mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <div className="animate-fade-in-up mt-12 grid gap-8 md:grid-cols-2">
          <Card className="card-hover rounded-xl border border-border bg-card shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <form className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="How can we help?" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Tell us more..." rows={5} />
                </div>
                <Button type="submit" className="w-full transition-all duration-200 hover:scale-105">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          {safeContactInfo.length > 0 && (
            <div className="flex flex-col justify-center space-y-8">
              {safeContactInfo.map(function (info, i) {
                const Icon = iconMap[info.icon] || Sparkles;
                return (
                  <div key={i} className="flex items-start gap-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      {React.createElement(Icon, { className: 'h-5 w-5' })}
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">{info.label}</p>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
