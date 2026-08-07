"use client";

import { BadgeCheck } from "lucide-react";
import { SectionHeading, StaggerGroup, StaggerItem } from "@/components/motion";
import { awards } from "@/lib/data";

export function Achievements() {
  return (
    <section id="awards" className="relative py-24 md:py-32">
      <div
        aria-hidden="true"
        className="absolute right-0 top-1/3 h-[360px] w-[500px] rounded-full bg-accent-2/5 blur-[120px]"
      />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="awards"
          title="Recognition"
          description="Awards and recognition highlighted on the resume."
        />

        <StaggerGroup className="grid gap-4 sm:grid-cols-2" stagger={0.08}>
          {awards.map((award) => (
            <StaggerItem key={award.title}>
              <article className="card-glow relative h-full rounded-2xl glass p-7 md:p-8">
                <BadgeCheck
                  aria-hidden="true"
                  className="absolute right-6 top-6 h-8 w-8 text-accent opacity-15"
                />
                <p className="mb-3 inline-flex items-center gap-2 font-mono text-sm font-semibold text-accent">
                  <span className="h-px w-8 bg-gradient-to-r from-accent to-accent-2" />
                  {award.title}
                </p>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {award.issuer}
                </h3>
                <p className="text-[15px] md:text-base leading-relaxed text-muted">
                  {award.note}
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
