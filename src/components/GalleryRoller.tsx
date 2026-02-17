"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Reveal from "./Reveal";

const PHOTOS = [
  {
    src: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1400&q=80",
    alt: "Residence exterior with layered stone and glass",
    title: "Canopy Residence",
    style: "Contemporary Tropical",
    bedrooms: "4 Bedrooms",
    area: "420 sqm",
  },
  {
    src: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1400&q=80",
    alt: "Warm-toned interior corridor",
    title: "Timber Courtyard House",
    style: "Modern Asian",
    bedrooms: "5 Bedrooms",
    area: "510 sqm",
  },
  {
    src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80",
    alt: "Quiet modern living room composition",
    title: "Stone and Light Villa",
    style: "Minimal Luxe",
    bedrooms: "3 Bedrooms",
    area: "360 sqm",
  },
  {
    src: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1400&q=80",
    alt: "Architecture with large vertical openings",
    title: "Frame House",
    style: "Warm Industrial",
    bedrooms: "4 Bedrooms",
    area: "395 sqm",
  },
  {
    src: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1400&q=80",
    alt: "Concrete and timber detail in residence",
    title: "Garden Edge Residence",
    style: "Contemporary Zen",
    bedrooms: "6 Bedrooms",
    area: "640 sqm",
  },
];

export default function GalleryRoller() {
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const velocityRef = useRef(0);
  const targetVelocityRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const step = () => {
      const track = trackRef.current;
      if (track) {
        const half = track.scrollWidth / 2;
        velocityRef.current += (targetVelocityRef.current - velocityRef.current) * 0.08;
        offsetRef.current += velocityRef.current;

        if (offsetRef.current <= -half) offsetRef.current += half;
        if (offsetRef.current >= 0) offsetRef.current -= half;

        track.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
      }
      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    const centered = (ratio - 0.5) * 2;
    targetVelocityRef.current = centered * -2.3;
  }

  function onLeave() {
    targetVelocityRef.current = 0;
  }

  return (
    <section className="px-6 pb-24 md:px-14 md:pb-36">
      <Reveal className="mb-10 flex items-baseline justify-between pb-4 md:mb-14">
        <span className="text-[0.72rem] uppercase tracking-[0.2em] text-stone">
          Gallery Roller
        </span>
        <span className="font-display text-[1rem] text-stone italic">
          Hover left or right
        </span>
      </Reveal>

      <div
        className="overflow-hidden py-5"
        onMouseMove={onMove}
        onMouseLeave={onLeave}
      >
        <div ref={trackRef} className="flex w-max gap-5 will-change-transform">
          {[...PHOTOS, ...PHOTOS].map((photo, i) => (
            <div
              key={`${photo.src}-${i}`}
              className="group relative w-[64vw] max-w-[760px] min-w-[320px] overflow-hidden transition-transform duration-500 hover:z-10 hover:scale-[1.025]"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={1400}
                height={920}
                sizes="(max-width: 768px) 78vw, 56vw"
                className="block aspect-[16/10] w-full object-cover saturate-[0.45] brightness-[0.82] transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(23,20,16,0.68)] via-[rgba(23,20,16,0.14)] to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5 opacity-0 transition-opacity duration-400 group-hover:opacity-100 md:p-6">
                <p className="font-display text-[1.22rem] leading-none text-paper">{photo.title}</p>
                <p className="mt-2 text-[0.68rem] uppercase tracking-[0.14em] text-paper/85">
                  {photo.style}
                </p>
                <div className="mt-3 flex gap-4 text-[0.66rem] uppercase tracking-[0.12em] text-paper/80">
                  <span>{photo.bedrooms}</span>
                  <span>{photo.area}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
