"use client";

import {
  Activity,
  BarChart3,
  Boxes,
  Brain,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Layers,
  Lock,
  Plug,
  Server,
  ShieldCheck,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading, StaggerGroup, StaggerItem } from "@/components/motion";
import { skillCategories } from "@/lib/data";

const icons: Record<string, LucideIcon> = {
  code: Code2,
  workflow: Workflow,
  cloud: Cloud,
  server: Server,
  database: Database,
  layers: Layers,
  boxes: Boxes,
  "shield-check": ShieldCheck,
  brain: Brain,
  "bar-chart": BarChart3,
  "git-branch": GitBranch,
  plug: Plug,
  lock: Lock,
  activity: Activity,
};

export function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      {/* Ambient accent */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-accent/5 blur-[120px]"
      />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="skills"
          title="Core Competencies"
          description="The frontend, backend, database, cloud, and collaboration tools that support my MERN stack work."
        />

        <StaggerGroup
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.05}
        >
          {skillCategories.map((cat) => {
            const Icon = icons[cat.icon] ?? Code2;
            return (
              <StaggerItem key={cat.title}>
                <div className="card-glow group h-full rounded-2xl glass p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-6deg]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="font-semibold text-foreground">
                      {cat.title}
                    </h3>
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <li
                        key={skill}
                        className="cursor-default rounded-full border border-border-subtle bg-card/50 px-3 py-1 font-mono text-xs text-muted transition-all duration-200 hover:border-accent/50 hover:text-accent hover:bg-accent-soft hover:scale-105"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
