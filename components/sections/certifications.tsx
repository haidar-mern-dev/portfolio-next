"use client";

import { ArrowUpRight } from "lucide-react";
import { SectionHeading, StaggerGroup, StaggerItem } from "@/components/motion";
import { projects } from "@/lib/data";

export function Certifications() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="projects"
          title="Featured Projects"
          description="A few representative products from the resume, showing product breadth and delivery scope."
        />

        <StaggerGroup
          className="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
          stagger={0.08}
        >
          {projects.map((project) => (
            <StaggerItem key={project.title}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="card-glow group relative block h-full rounded-2xl glass p-6 transition-transform duration-200 hover:-translate-y-1"
              >
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="mb-2 font-semibold leading-snug text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted">
                      {project.description}
                    </p>
                  </div>
                  <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-accent transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>

                <ul className="flex flex-wrap gap-2">
                  {project.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="rounded-full border border-border-subtle bg-card/50 px-3 py-1 font-mono text-xs text-muted"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
                <span className="mt-5 inline-flex items-center gap-2 font-mono text-xs font-semibold text-accent">
                  Visit Live Site
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </a>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
