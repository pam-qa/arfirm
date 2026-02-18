import Reveal from "./Reveal";

const DETAILS = [
  { label: "Studio", value: "San Fernando, Pampanga" },
  { label: "Enquiries", value: "studio@arfirm.com" },
  { label: "Contact No.", value: "+33 1 42 60 00 00" },
];

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Facebook", href: "https://facebook.com" },
];

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-none stroke-current">
      <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4.1" strokeWidth="1.8" />
      <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-current">
      <path d="M13.4 20v-7.1h2.4l.4-2.8h-2.8V8.3c0-.8.2-1.4 1.4-1.4h1.5V4.4c-.3 0-1.1-.1-2.1-.1-2.1 0-3.5 1.2-3.5 3.6v2.1H8.4v2.8h2.3V20h2.7Z" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-28 md:px-14 md:py-40">
      <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-14 md:grid-cols-2 md:gap-24 items-end">
        <div>
          <Reveal>
            <h2
              className="font-display font-normal leading-[1.05] text-ink-soft"
              style={{ fontSize: "clamp(2.6rem, 6.3vw, 5.2rem)" }}
            >
              Begin a
              <br />
              <em>conversation</em>
            </h2>
          </Reveal>

          <Reveal delay={140} className="mt-10 border-b border-line pb-8">
            <p className="mb-3 text-[1rem] uppercase tracking-[0.09em] text-stone">
              Send Inquiry
            </p>
            <form className="space-y-3">
              <input
                type="email"
                name="email"
                placeholder="Your email"
                className="w-full border border-line bg-transparent px-4 py-3 text-[1rem] text-ink-soft placeholder:text-stone/75 outline-none focus:border-line focus:outline-none focus-visible:border-line focus-visible:outline-none"
              />
              <textarea
                name="message"
                rows={4}
                placeholder="Tell us about your project"
                className="w-full border border-line bg-transparent px-4 py-3 text-[1rem] text-ink-soft placeholder:text-stone/75 outline-none focus:border-line focus:outline-none focus-visible:border-line focus-visible:outline-none"
              />
              <button
                type="submit"
                className="border border-ink-soft px-5 py-2 text-[0.88rem] uppercase tracking-[0.12em] text-ink-soft transition-colors hover:bg-ink-soft hover:text-paper"
              >
                Send Inquiry
              </button>
            </form>
          </Reveal>
        </div>

        <div className="space-y-9">
          {DETAILS.map(({ label, value }, i) => (
            <Reveal key={label} delay={i * 80} className="border-b border-line pb-8">
              <p className="mb-2 text-[1rem] uppercase tracking-[0.09em] text-stone">
                {label}
              </p>
              <p className="font-display text-[1.32rem] text-ink-soft">{value}</p>
            </Reveal>
          ))}

          <Reveal delay={260} className="border-b border-line pb-8">
            <p className="mb-3 text-[1rem] uppercase tracking-[0.09em] text-stone">
              Social
            </p>
            <div className="flex gap-6">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  title={social.label}
                  className="text-ink-soft transition-opacity hover:opacity-70"
                >
                  {social.label === "Instagram" ? <InstagramIcon /> : <FacebookIcon />}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
