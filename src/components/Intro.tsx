import Reveal from "./Reveal";

export default function Intro() {
  return (
    <section className="mx-auto grid max-w-screen-xl grid-cols-1 gap-14 px-6 py-32 md:grid-cols-2 md:gap-24 md:px-14 md:py-48 items-end">
      <div>
        <Reveal>
          <p className="mb-10 text-[0.72rem] tracking-[0.2em] uppercase text-stone md:mb-14">
            01 - Philosophy
          </p>
          <h2
            className="font-display font-light leading-[1.18] text-ink-soft"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            Residences shaped
            <br />
            by the way
            <br />
            <em>people truly live</em>
          </h2>
        </Reveal>
      </div>

      <Reveal delay={150} className="pt-4 md:pt-10">
        <div className="mb-8 h-px w-8 bg-line" />
        <p className="mb-6 max-w-[50ch] text-[1rem] leading-[1.9] text-stone">
          A home is not a building type - it is the most intimate
          expression of how a family inhabits the world. We design houses that
          are particular to their owners, their site, and the quality of light
          that moves through the rooms across each season.
        </p>
        <p className="max-w-[50ch] text-[1rem] leading-[1.9] text-stone">
          ARFIRM works exclusively in the residential field. We take on a small
          number of projects each year so that every house receives the full
          attention it deserves - from the first sketch to the moment the
          keys are handed over.
        </p>
      </Reveal>
    </section>
  );
}
