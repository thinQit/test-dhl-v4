import './globals.css'
import type { Metadata } from 'next'
import { Inter, IBM_Plex_Sans } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-heading' })
const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: 'DHL Express Logistics | International Shipping, Tracking & Business Pricing',
  description:
    'DHL Express Logistics website featuring express shipping services, real-time tracking, business pricing tiers, case studies, and a contact form for quotes and consultations.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Tracking', href: '/tracking' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibmPlexSans.variable} font-sans bg-background text-foreground`}>
        <Navbar
          logoText="DHL Express Logistics"
          links={navItems}
          ctaText="Get a quote"
          ctaHref="/pricing"
        />
        {children}
        <Footer companyName="DHL Express Logistics" />
      </body>
    </html>
  )
}
