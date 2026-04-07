"use client";
import React from "react";
import { Vortex } from "@/components/ui/backgrounds/vortex";
import { Button } from "@/components/ui/button";

interface CTAVortexProps {
  headline: string;
  description?: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
}

export default function CTAVortex({
  headline = "Ready to accelerate your business performance?",
  description = "Partner with our consultants to turn strategy into execution and unlock sustainable growth.",
  ctaLabel = "Schedule a Strategy Call",
  ctaHref = "#contact",
  secondaryCtaLabel = "View Case Studies",
  secondaryCtaHref = "#case-studies",
}: Partial<CTAVortexProps>) {
  return (
    <section className="w-full mx-auto rounded-md h-[30rem] overflow-hidden">
      <Vortex
        backgroundColor="hsl(var(--muted))"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full animate-fade-in-up"
      >
        <h2 className="text-foreground text-2xl md:text-6xl font-bold text-center">{headline}</h2>
        {description && <p className="text-muted-foreground text-sm md:text-xl max-w-xl mt-6 text-center">{description}</p>}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
          <Button size="lg" className="px-8 py-6 text-lg transition-all duration-200 hover:scale-105" asChild>
            <a href={ctaHref}>{ctaLabel}</a>
          </Button>
          {secondaryCtaLabel && secondaryCtaHref && (
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-6 text-lg border-border text-foreground hover:bg-muted transition-all duration-200 hover:scale-105"
              asChild
            >
              <a href={secondaryCtaHref}>{secondaryCtaLabel}</a>
            </Button>
          )}
        </div>
      </Vortex>
    </section>
  );
}
