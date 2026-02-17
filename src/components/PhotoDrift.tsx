"use client";

import { useRef } from "react";
import Image from "next/image";

const PHOTOS = [
  {
    src: "https://images.unsplash.com/photo-1618221469555-7f3ad97540d6?auto=format&fit=crop&w=1000&q=80",
    alt: "Interior — morning light",
    aspect: "aspect-[3/4]",
    w: "27%",
    mt: "0rem",
  },
  {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
    alt: "Garden elevation",
    aspect: "aspect-[2/3]",
    w: "21%",
    mt: "-7rem",
  },
  {
    src: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80",
    alt: "Kitchen — material study",
    aspect: "aspect-[4/5]",
    w: "24%",
    mt: "5rem",
  },
  {
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&q=80",
    alt: "Living space",
    aspect: "aspect-[3/4]",
    w: "21%",
    mt: "-3rem",
  },
];

function DriftPhoto({
  src,
  alt,
  aspect,
  w,
  mt,
}: (typeof PHOTOS)[0]) {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    // Fast tracking during movement
    el.style.transition = "transform 0.1s linear";
    const r = el.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - 0.5) * 28;
    const y = ((e.clientY - r.top) / r.height - 0.5) * 28;
    el.style.transform = `translate(${x}px, ${y}px)`;
  }

  function onLeave() {
    const el = ref.current;
    if (!el) return;
    // Slow, elegant return to rest
    el.style.transition = "transform 0.9s cubic-bezier(0.23, 1, 0.32, 1)";
    el.style.transform = "translate(0, 0)";
  }

  return (
    <div style={{ width: w, marginTop: mt, flexShrink: 0 }}>
      <div
        ref={ref}
        className={`relative overflow-hidden ${aspect}`}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="25vw"
          className="object-cover saturate-[0.4] brightness-[0.95]"
        />
      </div>
    </div>
  );
}

export default function PhotoDrift() {
  return (
    <section className="px-20 pb-44">
      {/* Section bar */}
      <div className="flex justify-between items-baseline pb-7 mb-16 border-b border-hairline">
        <span className="text-[0.62rem] tracking-[0.28em] uppercase text-gray">
          From the Houses
        </span>
        <span className="font-display text-[0.85rem] text-faint tracking-[0.05em]">
          Interiors &amp; Light
        </span>
      </div>

      {/* Drifting photo row */}
      <div className="flex items-start gap-8">
        {PHOTOS.map((photo, i) => (
          <DriftPhoto key={i} {...photo} />
        ))}
      </div>
    </section>
  );
}
