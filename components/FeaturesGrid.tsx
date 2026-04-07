"use client";

import React from 'react';
import { BarChart3, Briefcase, Globe, Shield, Sparkles, Users, Zap, Clock, ShoppingCart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeaturesGridProps {
  badge?: string;
  headline: string;
  subheadline?: string;
  features: Feature[];
}

export default function FeaturesGrid({
  badge = 'Our Services',
  headline = 'Solutions built for modern business growth',
  subheadline = 'From strategy to execution, we help organizations scale with confidence and measurable outcomes.',
  features = [],
}: Partial<FeaturesGridProps>) {
  const iconMap: Record<string, React.ElementType> = { Clock, ShoppingCart, 
    Sparkles,
    Globe,
    Shield,
    Zap,
    Users,
    Briefcase,
    BarChart3,
  };

  const safeFeatures =
    features.length > 0
      ? features
      : [
          { icon: 'Briefcase', title: 'Business Consulting', description: 'Strategic advisory to align operations, people, and growth goals.' },
          { icon: 'BarChart3', title: 'Performance Analytics', description: 'Data-driven reporting to optimize decisions and improve ROI.' },
          { icon: 'Shield', title: 'Risk & Compliance', description: 'Proactive frameworks that protect your business and reputation.' },
          { icon: 'Globe', title: 'Market Expansion', description: 'Localized market-entry plans and execution support for new regions.' },
          { icon: 'Users', title: 'Team Enablement', description: 'Leadership coaching and capability-building across your organization.' },
          { icon: 'Zap', title: 'Process Optimization', description: 'Lean process redesign to reduce friction and accelerate delivery.' },
        ];

  return (
    <section className="py-20 md:py-24 bg-muted/50">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="animate-fade-in-up mx-auto max-w-2xl text-center">
          {badge && <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">{badge}</span>}
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <div className="animate-fade-in-up mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {safeFeatures.map(function (feature, index) {
            const Icon = iconMap[feature.icon] || Sparkles;
            return (
              <Card key={index} className="card-hover rounded-xl border border-border bg-card shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    {React.createElement(Icon, { className: 'h-6 w-6' })}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                  <p className="mt-2 text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
