"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

type Item = {
  src: string;
  title: string;
  tag: "Brakes" | "Suspension" | "Diagnostics" | "Body work" | "Paint";
};

const items: Item[] = [
  { src: "/gallery/brakes-before.svg", title: "Brake overhaul", tag: "Brakes" },
  { src: "/gallery/suspension-before.svg", title: "Suspension refresh", tag: "Suspension" },
  { src: "/gallery/diagnostic-before.svg", title: "Electrical diagnostics", tag: "Diagnostics" },
  { src: "/gallery/body-before.svg", title: "Collision panel repair", tag: "Body work" },
  { src: "/gallery/paint-before.svg", title: "Paint correction", tag: "Paint" },
  { src: "/gallery/brakes-after.svg", title: "Brake upgrade complete", tag: "Brakes" }
];

const filters: Array<Item["tag"] | "All"> = [
  "All",
  "Brakes",
  "Suspension",
  "Diagnostics",
  "Body work",
  "Paint"
];

export function GalleryGrid() {
  const [active, setActive] = useState<typeof filters[number]>("All");
  const filtered = useMemo(
    () => (active === "All" ? items : items.filter((item) => item.tag === active)),
    [active]
  );

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActive(filter)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              active === filter
                ? "bg-autoRed text-white"
                : "border border-midGray/40 bg-lightGray text-charcoal hover:border-autoRed hover:text-autoRed"
            }`}
            aria-pressed={active === filter}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => (
          <figure key={`${item.src}-${item.title}`} className="overflow-hidden rounded-xl border border-midGray/30 bg-lightGray">
            <Image
              src={item.src}
              alt={item.title}
              width={640}
              height={420}
              className="h-auto w-full object-cover"
            />
            <figcaption className="p-3 text-sm text-midGray">
              {item.title} <span className="text-midGray">({item.tag})</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

