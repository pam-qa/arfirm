"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Reveal from "./Reveal";

const PROJECTS = [
  {
    name: "Meridian House",
    year: "2024",
    type: "Tokyo",
    src: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=1800&q=80",
  },
  {
    name: "The Orchard",
    year: "2023",
    type: "Provence",
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80",
  },
  {
    name: "Stone Garden House",
    year: "2022",
    type: "Kyoto",
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1800&q=80",
  },
];

function ProjectBlock({
  project,
  delay = 0,
}: {
  project: (typeof PROJECTS)[0];
  delay?: number;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.18, rootMargin: "0px 0px -36px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={ref}
      className="project-block"
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      <div className="project-frame">
        <Image
          src={project.src}
          alt={project.name}
          width={1800}
          height={1200}
          sizes="100vw"
          className="block w-full aspect-[16/10] object-cover brightness-[0.97] saturate-[0.3]"
        />
      </div>
      <div className="mt-6 flex flex-wrap items-baseline justify-between gap-3 border-b border-line pb-7">
        <h3 className="font-display text-[1.55rem] text-ink-soft">{project.name}</h3>
        <p className="text-[0.74rem] uppercase tracking-[0.15em] text-stone">
          {project.type} - {project.year}
        </p>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="work" className="px-6 pb-24 md:px-14 md:pb-40">
      <Reveal className="mb-16 flex items-baseline justify-between border-b border-line pb-7 md:mb-20">
        <span className="text-[0.72rem] uppercase tracking-[0.2em] text-stone">
          Selected Houses
        </span>
        <span className="font-display text-[1rem] text-stone">2019 - 2025</span>
      </Reveal>

      <div className="mx-auto flex max-w-screen-xl flex-col gap-20 md:gap-28">
        {PROJECTS.map((project, i) => (
          <ProjectBlock key={project.name} project={project} delay={i * 110} />
        ))}
      </div>
    </section>
  );
}
