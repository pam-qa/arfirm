"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = () => {
      const y = window.scrollY;
      if (wrapRef.current && y < window.innerHeight) {
        wrapRef.current.style.transform = `translateY(${y * 0.15}px)`;
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <section className="relative h-[100svh] overflow-hidden">
      <div ref={wrapRef} className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=2200&q=80"
          alt="ARFIRM Architecture"
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-[0.72] saturate-[0.6] sepia-[0.12] scale-[1.06]"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(32,28,24,0.18)] via-[rgba(32,28,24,0.2)] to-[rgba(32,28,24,0.58)]" />

      <div className="absolute bottom-[10vh] left-6 md:left-14">
        <p className="hero-eyebrow mb-5 text-[0.86rem] tracking-[0.18em] uppercase text-paper/75 md:mb-7">
          Residential Architecture
        </p>
        <h1
          className="hero-title font-display font-normal leading-[1.05] text-paper/95"
          style={{ fontSize: "clamp(2.5rem, 7vw, 6.2rem)" }}
        >
          Homes composed for
          <br />
          <em>the way you live</em>
        </h1>
      </div>

      <div className="hero-aside absolute bottom-[10vh] right-6 md:right-14">
        <p className="font-display text-[1rem] italic text-paper/75">
          Paris 2026
        </p>
      </div>
    </section>
  );
}
