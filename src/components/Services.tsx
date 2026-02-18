"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const SERVICES = [
  {
    no: "01",
    title: "New Residences",
    summary:
      "Ground-up homes composed around climate, movement, and long-term living patterns.",
    src: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1800&q=80",
    alt: "Modern new residential build",
  },
  {
    no: "02",
    title: "Renovations and Extensions",
    summary:
      "Transforming existing houses with precise additions that feel inevitable, not attached.",
    src: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1800&q=80",
    alt: "Residential renovation detail",
  },
  {
    no: "03",
    title: "Interiors and Landscape",
    summary:
      "Integrated interior and outdoor sequences designed as one continuous domestic atmosphere.",
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=80",
    alt: "Interior and landscape composition",
  },
];

export default function Services() {
  const itemRefs = useRef<Array<HTMLElement | null>>([]);
  const [visible, setVisible] = useState<boolean[]>(
    Array.from({ length: SERVICES.length }, () => false)
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const idx = Number((entry.target as HTMLElement).dataset.index || -1);
          if (idx < 0) return;
          setVisible((prev) => {
            if (prev[idx]) return prev;
            const next = [...prev];
            next[idx] = true;
            return next;
          });
        });
      },
      { threshold: 0.32, rootMargin: "0px 0px -12% 0px" }
    );

    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="px-6 py-24 md:px-14 md:py-32">
      <div className="mb-10 pb-5 md:mb-14">
        <span className="text-[1.04rem] uppercase tracking-[0.1em] text-stone">
          03 - Scope
        </span>
      </div>

      <div className="space-y-10 md:space-y-14">
        {SERVICES.map((item, i) => (
          <article
            key={item.no}
            ref={(el) => {
              itemRefs.current[i] = el;
            }}
            data-index={i}
            className="grid min-h-[82svh] grid-cols-1 gap-5 overflow-hidden md:grid-cols-[0.98fr_1.02fr] md:gap-8"
            style={{
              opacity: visible[i] ? 1 : 0,
              transform: `translateY(${visible[i] ? 0 : 42}px)`,
              transition: "opacity 1100ms ease, transform 1100ms ease",
              transitionDelay: `${i * 70}ms`,
            }}
          >
              <div
                className={`relative overflow-hidden ${i % 2 === 1 ? "md:order-2" : ""}`}
                style={{
                  opacity: visible[i] ? 1 : 0,
                  transform: `translateY(${visible[i] ? 0 : 36}px)`,
                  transition: "opacity 1200ms ease, transform 1200ms ease",
                  transitionDelay: `${140 + i * 70}ms`,
                }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 900px) 100vw, 62vw"
                  className="object-cover brightness-[0.84] saturate-[0.64]"
                />
              </div>

              <div
                className={`flex h-full flex-col justify-between p-6 md:p-10 ${
                  i % 2 === 1 ? "md:order-1" : ""
                }`}
                style={{
                  opacity: visible[i] ? 1 : 0,
                  transform: `translateY(${visible[i] ? 0 : 48}px)`,
                  transition: "opacity 1200ms ease, transform 1200ms ease",
                  transitionDelay: `${220 + i * 70}ms`,
                }}
              >
                <div>
                  <p
                    className="mb-3 text-[1rem] uppercase tracking-[0.1em] text-stone"
                    style={{
                      opacity: visible[i] ? 1 : 0,
                      transform: `translateY(${visible[i] ? 0 : 28}px)`,
                      transition: "opacity 1000ms ease, transform 1000ms ease",
                      transitionDelay: `${290 + i * 70}ms`,
                    }}
                  >
                    {item.no}
                  </p>
                  <h3
                    className="font-display text-[clamp(2.2rem,3.6vw,3.5rem)] leading-[1.06] text-ink-soft"
                    style={{
                      opacity: visible[i] ? 1 : 0,
                      transform: `translateY(${visible[i] ? 0 : 24}px)`,
                      transition: "opacity 1100ms ease, transform 1100ms ease",
                      transitionDelay: `${340 + i * 70}ms`,
                    }}
                  >
                    {item.title}
                  </h3>
                </div>

                <p
                  className="max-w-[34ch] text-[1.06rem] leading-[1.78] text-stone"
                  style={{
                    opacity: visible[i] ? 1 : 0,
                    transform: `translateY(${visible[i] ? 0 : 28}px)`,
                    transition: "opacity 1200ms ease, transform 1200ms ease",
                    transitionDelay: `${420 + i * 70}ms`,
                  }}
                >
                  {item.summary}
                </p>
              </div>
            </article>
        ))}
      </div>
    </section>
  );
}
