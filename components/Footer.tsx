"use client";

import Link from 'next/link'
import { Separator } from '@/components/ui/separator'

interface FooterProps {
  companyName?: string
}

export default function Footer({ companyName = 'DHL Express Logistics' }: Partial<FooterProps>) {
  return (
    <footer className="border-t-4 border-border bg-muted">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 md:grid-cols-3 md:px-6">
        <div>
          <h3 className="mb-4 text-lg font-semibold text-foreground">Services & Tools</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link href="/services#express-worldwide" className="hover:text-accent">Express Worldwide</Link></li>
            <li><Link href="/services#same-day" className="hover:text-accent">Same Day Express</Link></li>
            <li><Link href="/services#customs" className="hover:text-accent">Customs & Duties Support</Link></li>
            <li><Link href="/services#ecommerce" className="hover:text-accent">E-commerce Tools</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-semibold text-foreground">Company</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link href="/about" className="hover:text-accent">About DHL Express</Link></li>
            <li><Link href="/case-studies" className="hover:text-accent">Case Studies</Link></li>
            <li><Link href="/faq" className="hover:text-accent">FAQ</Link></li>
            <li><Link href="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-semibold text-foreground">Contact</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>24/7 Hotline: +1 (800) 225-5345</li>
            <li>Email: enterprise@dhl-express.com</li>
            <li>Address: 121 Logistics Parkway, Cincinnati, OH</li>
            <li>Mon - Sun: 24/7 Operations</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 pb-6 md:px-6">
        <Separator className="mb-4 bg-border" />
        <div className="flex flex-col gap-2 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {companyName}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-accent">Privacy Policy</Link>
            <Link href="#" className="hover:text-accent">Terms</Link>
            <Link href="#" className="hover:text-accent">Cookie Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
