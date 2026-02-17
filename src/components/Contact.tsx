import Reveal from "./Reveal";

const DETAILS = [
  { label: "Studio", value: "San Fernando, Pampanga" },
  { label: "Enquiries", value: "studio@arfirm.com" },
  { label: "Projects", value: "+33 1 42 60 00 00" },
];

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Facebook", href: "https://facebook.com" },
];

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-28 md:px-14 md:py-40">
      <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-14 md:grid-cols-2 md:gap-24 items-end">
        <div>
          <Reveal>
            <h2
              className="font-display font-light leading-[1.03] text-ink-soft"
              style={{ fontSize: "clamp(2.4rem, 6vw, 4.9rem)" }}
            >
              Begin a
              <br />
              <em>conversation</em>
            </h2>
          </Reveal>
        </div>

        <div className="space-y-9">
          {DETAILS.map(({ label, value }, i) => (
            <Reveal key={label} delay={i * 80} className="border-b border-line pb-8">
              <p className="mb-2 text-[0.68rem] uppercase tracking-[0.2em] text-stone">
                {label}
              </p>
              <p className="font-display text-[1.32rem] text-ink-soft">{value}</p>
            </Reveal>
          ))}

          <Reveal delay={260} className="border-b border-line pb-8">
            <p className="mb-3 text-[0.68rem] uppercase tracking-[0.2em] text-stone">
              Social
            </p>
            <div className="flex gap-6">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-display text-[1.1rem] text-ink-soft transition-opacity hover:opacity-70"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
