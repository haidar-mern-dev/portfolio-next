"use client";

import { BadgeCheck } from "lucide-react";
import { SectionHeading, StaggerGroup, StaggerItem } from "@/components/motion";
import { certifications } from "@/lib/data";

export function Certifications() {
  return (
    <section id="certifications" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="certifications"
          title="Certified across the stack"
          description="Vendor certifications covering the platforms I work with daily."
        />

        <StaggerGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {certifications.map((cert) => (
            <StaggerItem key={cert.title}>
              <div className="card-glow group relative h-full overflow-hidden rounded-2xl glass p-6">
                {/* Brand accent wash */}
                <div
                  aria-hidden="true"
                  className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-15 blur-2xl transition-opacity duration-300 group-hover:opacity-30"
                  style={{ background: cert.color }}
                />
                <span
                  className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${cert.color}1f`, color: cert.color }}
                >
                  <BadgeCheck className="h-6 w-6" />
                </span>
                <h3 className="mb-2 font-semibold leading-snug text-foreground">
                  {cert.title}
                </h3>
                <p className="font-mono text-xs text-muted">{cert.issuer}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
