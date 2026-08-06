"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Briefcase, ChevronRight } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/motion";
import { experiences } from "@/lib/data";

export function Experience() {
  const lineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: lineRef,
    offset: ["start 65%", "end 65%"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });

  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="experience"
          title="Where I've built"
          description="Eight years of shipping data platforms — from hands-on pipeline engineering to leading enterprise modernization."
        />

        <div ref={lineRef} className="relative">
          {/* Timeline rail */}
          <div
            aria-hidden="true"
            className="absolute left-[19px] top-2 bottom-2 w-px bg-border-subtle md:left-[27px]"
          />
          <motion.div
            aria-hidden="true"
            className="absolute left-[19px] top-2 bottom-2 w-px origin-top bg-gradient-to-b from-accent to-accent-2 md:left-[27px]"
            style={{ scaleY }}
          />

          <ol className="space-y-10 md:space-y-14">
            {experiences.map((exp, i) => (
              <li key={exp.company} className="relative pl-14 md:pl-20">
                {/* Node dot */}
                <span className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full glass md:h-14 md:w-14">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent-soft text-accent md:h-9 md:w-9">
                    <Briefcase className="h-3.5 w-3.5 md:h-4.5 md:w-4.5" />
                  </span>
                </span>

                <Reveal delay={i * 0.08}>
                  <article className="card-glow rounded-2xl glass p-6 md:p-8">
                    <header className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2">
                      <h3 className="text-lg md:text-xl font-bold text-foreground">
                        {exp.role}
                      </h3>
                      <span className="font-mono text-sm text-accent">@ {exp.company}</span>
                      <span
                        className={
                          "ml-auto rounded-full px-3 py-1 font-mono text-xs " +
                          (exp.current
                            ? "bg-accent-soft text-accent"
                            : "border border-border-subtle text-muted")
                        }
                      >
                        {exp.period}
                      </span>
                    </header>

                    <ul className="space-y-2.5">
                      {exp.bullets.map((b) => (
                        <li key={b} className="flex gap-2.5 text-sm md:text-[15px] leading-relaxed text-muted">
                          <ChevronRight className="mt-1 h-3.5 w-3.5 shrink-0 text-accent" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    <footer className="mt-5 flex flex-wrap gap-2 border-t border-border-subtle pt-4">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-md bg-accent-soft px-2.5 py-1 font-mono text-xs text-accent"
                        >
                          {t}
                        </span>
                      ))}
                    </footer>
                  </article>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
