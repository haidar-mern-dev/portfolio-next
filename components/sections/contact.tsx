"use client";

import { useState } from "react";
import { Check, Copy, Mail, MapPin, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { Reveal } from "@/components/motion";
import { profile } from "@/lib/data";

function CopyEmail() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable — no-op
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? "Email copied" : "Copy email address"}
      className="cursor-pointer group inline-flex items-center gap-3 rounded-2xl glass px-5 py-4 font-mono text-sm md:text-base text-foreground transition-all duration-200 hover:border-accent/40 hover:-translate-y-0.5 active:scale-[0.98]"
    >
      <Mail className="h-5 w-5 text-accent" />
      {profile.email}
      <span className="text-muted transition-colors group-hover:text-accent">
        {copied ? <Check className="h-4 w-4 text-accent" /> : <Copy className="h-4 w-4" />}
      </span>
      <span aria-live="polite" className="sr-only">
        {copied ? "Email address copied to clipboard" : ""}
      </span>
    </button>
  );
}

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 md:py-32">
      <div
        aria-hidden="true"
        className="absolute left-1/2 bottom-0 h-[420px] w-[800px] -translate-x-1/2 rounded-full bg-accent/8 blur-[140px]"
      />
      <div className="relative mx-auto max-w-4xl px-5 md:px-8 text-center">
        <Reveal>
          <p className="mb-4 font-mono text-sm tracking-widest uppercase text-accent">
            <span aria-hidden="true">{"// "}</span>contact
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            Let&apos;s build your next
            <span className="text-gradient"> data platform</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base md:text-lg leading-relaxed text-muted">
            Open to lead data engineering roles, platform modernization
            initiatives, and consulting. Reach out — I usually reply within a day.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-10 flex flex-col items-center gap-4">
          <CopyEmail />
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-[#0b1120] shadow-lg shadow-accent/25 transition-all duration-200 hover:shadow-accent/40 hover:-translate-y-0.5 active:scale-[0.97]"
            >
              <Mail className="h-4 w-4" />
              Send an Email
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold text-foreground transition-all duration-200 hover:border-accent/40 hover:-translate-y-0.5 active:scale-[0.97]"
            >
              <LinkedinIcon className="h-4 w-4 text-accent" />
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold text-foreground transition-all duration-200 hover:border-accent/40 hover:-translate-y-0.5 active:scale-[0.97]"
            >
              <GithubIcon className="h-4 w-4 text-accent" />
              GitHub
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.25} className="mt-8">
          <p className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-sm text-muted">
            <span className="inline-flex items-center gap-2">
              <Phone className="h-4 w-4 text-accent" />
              {profile.phone}
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-accent" />
              {profile.location}
            </span>
          </p>
        </Reveal>
      </div>

      <footer className="relative mt-20 border-t border-border-subtle pt-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 md:flex-row md:px-8">
          <p className="font-mono text-xs text-muted">
            © {new Date().getFullYear()} Fahad Mustafa. All rights reserved.
          </p>
          <p className="font-mono text-xs text-muted">
            Built with Next.js · Tailwind CSS · Framer Motion
          </p>
        </div>
      </footer>
    </section>
  );
}
