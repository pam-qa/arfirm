const ITEMS = [
  "Custom Homes",
  "Renovations",
  "Extensions",
  "Private Villas",
  "Courtyard Houses",
  "Rural Retreats",
  "Waterfront Residences",
];

const ALL = [...ITEMS, ...ITEMS];

export default function Marquee() {
  return (
    <div className="overflow-hidden border-y border-hairline py-6 bg-tissue">
      <div className="marquee-track">
        {ALL.map((item, i) => (
          <span
            key={i}
            className="flex-shrink-0 flex items-center font-display italic text-[1.05rem] text-faint pr-10"
          >
            {item}
            <span className="not-italic ml-10">&mdash;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
