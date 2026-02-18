import Image from "next/image";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="studio" className="px-6 py-28 md:px-14 md:py-40">
      <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-14 md:grid-cols-[1.05fr_1fr] md:gap-20 items-start">
        <Reveal>
          <div className="aspect-[4/5] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
              alt="ARFIRM Studio"
              width={1200}
              height={1500}
              sizes="(max-width: 900px) 100vw, 55vw"
              className="h-full w-full object-cover brightness-[0.84] saturate-[0.2]"
            />
          </div>
        </Reveal>

        <div className="pt-1 md:pt-5">
          <Reveal>
            <p className="mb-10 text-[1.04rem] uppercase tracking-[0.1em] text-stone">
              02 - The Studio
            </p>
            <h2
              className="font-display text-ink-soft leading-[1.18] font-normal"
              style={{ fontSize: "clamp(2.2rem, 4.2vw, 3.6rem)" }}
            >
              A studio devoted
              <br />
              to the private
              <br />
              <em>house</em>
            </h2>
          </Reveal>

          <Reveal delay={110} className="mt-10">
            <p className="max-w-[52ch] text-[1.05rem] leading-[1.8] text-stone">
              We work exclusively on residential projects - new houses, renovations,
              extensions, and interiors. Our process is intentionally measured, with
              each decision guided by daily rituals, climate, and material quietness.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
