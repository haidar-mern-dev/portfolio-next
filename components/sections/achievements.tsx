"use client";

import { Quote } from "lucide-react";
import { SectionHeading, StaggerGroup, StaggerItem } from "@/components/motion";
import { achievements } from "@/lib/data";

export function Achievements() {
  return (
    <section id="achievements" className="relative py-24 md:py-32">
      <div
        aria-hidden="true"
        className="absolute right-0 top-1/3 h-[360px] w-[500px] rounded-full bg-accent-2/5 blur-[120px]"
      />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="impact"
          title="Key achievements"
          description="The outcomes that matter — modernized platforms, reliable pipelines, and teams that ship."
        />

        <StaggerGroup className="grid gap-4 sm:grid-cols-2" stagger={0.08}>
          {achievements.map((a) => (
            <StaggerItem key={a.title}>
              <figure className="card-glow relative h-full rounded-2xl glass p-7 md:p-8">
                <Quote
                  aria-hidden="true"
                  className="absolute right-6 top-6 h-8 w-8 text-accent opacity-15"
                />
                <figcaption className="mb-3 flex items-center gap-3">
                  <span className="h-px w-8 bg-gradient-to-r from-accent to-accent-2" />
                  <span className="font-mono text-sm font-semibold text-accent">
                    {a.title}
                  </span>
                </figcaption>
                <blockquote className="text-[15px] md:text-base leading-relaxed text-muted">
                  {a.text}
                </blockquote>
              </figure>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
