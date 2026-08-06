"use client";

import { GraduationCap, Database, Cloud, GitMerge, Users } from "lucide-react";
import { Reveal, SectionHeading, StaggerGroup, StaggerItem } from "@/components/motion";
import { profile, education } from "@/lib/data";

const focus = [
  {
    icon: Database,
    title: "Lakehouse Architecture",
    text: "Databricks, Snowflake, Delta Lake, and Iceberg — modern warehouses built for scale.",
  },
  {
    icon: Cloud,
    title: "Multi-Cloud Migration",
    text: "Moving legacy platforms to cloud-native stacks on AWS, Azure, and GCP.",
  },
  {
    icon: GitMerge,
    title: "Real-Time Pipelines",
    text: "Kafka, Spark Streaming, and Airflow orchestration for streaming and batch.",
  },
  {
    icon: Users,
    title: "Team Leadership",
    text: "Mentoring distributed teams and standardizing engineering practices.",
  },
];

const terminalLines = [
  { prompt: true, text: "whoami" },
  { prompt: false, text: "fahad-mustafa · lead-data-engineer" },
  { prompt: true, text: "cat experience.yaml" },
  { prompt: false, text: "years: 8+  clouds: [aws, azure, gcp]" },
  { prompt: false, text: "stack: [spark, kafka, airflow, dbt]" },
  { prompt: true, text: "./deploy --env production" },
  { prompt: false, text: "✓ pipeline healthy · 0 failures" },
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="about"
          title="Turning raw data into reliable platforms"
        />

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">
          <div>
            <Reveal>
              <p className="text-base md:text-lg leading-relaxed text-muted">
                {profile.summary}
              </p>
            </Reveal>

            <Reveal delay={0.15} className="mt-8">
              <div className="card-glow flex items-center gap-4 rounded-2xl glass p-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <GraduationCap className="h-6 w-6" />
                </span>
                <div>
                  <p className="font-semibold text-foreground">{education.degree}</p>
                  <p className="text-sm text-muted">{education.school}</p>
                </div>
              </div>
            </Reveal>

            {/* Terminal card */}
            <Reveal delay={0.25} className="mt-8">
              <div className="overflow-hidden rounded-2xl border border-border-subtle bg-[#0d1526] shadow-2xl shadow-black/20">
                <div className="flex items-center gap-2 border-b border-border-subtle px-4 py-3">
                  <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                  <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                  <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                  <span className="ml-3 font-mono text-xs text-slate-400">
                    fahad@data-platform ~ zsh
                  </span>
                </div>
                <div className="p-5 font-mono text-[13px] leading-7">
                  {terminalLines.map((line, i) => (
                    <p key={i} className={line.prompt ? "text-slate-200" : "text-slate-400"}>
                      {line.prompt ? (
                        <span className="text-[#34d399]">❯ </span>
                      ) : (
                        <span className="text-slate-600">  </span>
                      )}
                      {line.text}
                    </p>
                  ))}
                  <p className="text-slate-200">
                    <span className="text-[#34d399]">❯ </span>
                    <span className="caret inline-block h-4 w-2 translate-y-0.5 bg-[#34d399]" />
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <StaggerGroup className="grid gap-4 sm:grid-cols-2">
            {focus.map((f) => (
              <StaggerItem key={f.title}>
                <div className="card-glow h-full rounded-2xl glass p-6">
                  <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                    <f.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mb-2 font-semibold text-foreground">{f.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{f.text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
