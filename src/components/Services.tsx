import Reveal from "./Reveal";

const SERVICES = [
  { no: "01", title: "New Residences" },
  { no: "02", title: "Renovations and Extensions" },
  { no: "03", title: "Interiors and Landscape" },
];

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-screen-xl px-6 py-28 md:px-14 md:py-40">
      <Reveal className="mb-12 border-b border-line pb-7 md:mb-14">
        <span className="text-[0.72rem] tracking-[0.2em] uppercase text-stone">
          03 - Scope
        </span>
      </Reveal>

      <div className="space-y-8">
        {SERVICES.map((item, i) => (
          <Reveal
            key={item.no}
            delay={i * 90}
            className="flex items-baseline justify-between border-b border-line pb-8"
          >
            <p className="text-[0.74rem] tracking-[0.18em] uppercase text-stone">{item.no}</p>
            <h3 className="font-display text-[1.5rem] text-ink-soft text-right">{item.title}</h3>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
