"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { ArrowDown, ArrowRight, Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { Particles } from "@/components/particles";
import { EASE } from "@/components/motion";
import { profile, stats } from "@/lib/data";

function RotatingTitle() {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % profile.titles.length);
    }, 3200);
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <span className="relative inline-flex h-[1.4em] overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={profile.titles[index]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.3, ease: EASE }}
          className="text-gradient font-semibold whitespace-nowrap"
        >
          {profile.titles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export function Hero() {
  const reduce = useReducedMotion();

  const enter = (delay: number) => ({
    initial: { opacity: 0, y: reduce ? 0 : 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: EASE },
  });

  return (
    <section
      id="top"
      className="relative flex min-h-dvh flex-col justify-center overflow-hidden"
    >
      {/* Layered background: grid + particles + ambient blobs */}
      <div className="absolute inset-0 bg-grid" aria-hidden="true" />
      <Particles className="absolute inset-0 h-full w-full" />
      <div
        aria-hidden="true"
        className="blob absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full bg-accent/12 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="blob absolute -bottom-40 -right-24 h-[480px] w-[480px] rounded-full bg-accent-2/10 blur-[130px]"
        style={{ animationDelay: "-9s" }}
      />

      <div className="relative mx-auto w-full max-w-6xl px-5 md:px-8 pt-28 pb-16">
        <motion.p
          {...enter(0.05)}
          className="mb-5 inline-flex items-center gap-2 rounded-full glass px-4 py-2 font-mono text-xs md:text-sm text-muted"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Available for new opportunities
        </motion.p>

        <motion.h1
          {...enter(0.15)}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground"
        >
          Fahad Mustafa
        </motion.h1>

        <motion.p
          {...enter(0.25)}
          className="mt-4 text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-muted"
        >
          <RotatingTitle />
        </motion.p>

        <motion.p
          {...enter(0.35)}
          className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-muted"
        >
          I design and modernize enterprise data platforms across{" "}
          <span className="text-foreground font-medium">AWS</span>,{" "}
          <span className="text-foreground font-medium">Azure</span>, and{" "}
          <span className="text-foreground font-medium">GCP</span> — scalable
          pipelines, cloud-native warehouses, and real-time processing with
          Spark, Kafka, Databricks, Snowflake, and dbt.
        </motion.p>

        <motion.div {...enter(0.45)} className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="#experience"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm md:text-base font-semibold text-[#0b1120] shadow-lg shadow-accent/25 transition-all duration-200 hover:shadow-accent/40 hover:-translate-y-0.5 active:scale-[0.97]"
          >
            View Experience
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm md:text-base font-semibold text-foreground transition-all duration-200 hover:border-accent/40 hover:-translate-y-0.5 active:scale-[0.97]"
          >
            <Mail className="h-4 w-4 text-accent" />
            Get in Touch
          </a>
          <div className="flex items-center gap-2">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border-subtle text-muted transition-all duration-200 hover:text-accent hover:border-accent/40 hover:-translate-y-0.5"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border-subtle text-muted transition-all duration-200 hover:text-accent hover:border-accent/40 hover:-translate-y-0.5"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
          </div>
        </motion.div>

        <motion.p {...enter(0.5)} className="mt-6 flex items-center gap-2 font-mono text-sm text-muted">
          <MapPin className="h-4 w-4 text-accent" />
          {profile.location}
        </motion.p>

        {/* Stats */}
        <motion.dl
          {...enter(0.6)}
          className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="card-glow rounded-2xl glass px-5 py-4"
            >
              <dt className="order-2 text-xs md:text-sm text-muted">{s.label}</dt>
              <dd className="order-1 font-mono text-2xl md:text-3xl font-bold text-accent">
                {s.value}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted hover:text-accent transition-colors"
      >
        <motion.span
          animate={reduce ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="block"
        >
          <ArrowDown className="h-5 w-5" />
        </motion.span>
      </motion.a>
    </section>
  );
}
