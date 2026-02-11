"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { galleryItems } from "@/lib/data";

type Category = "All" | "Mechanical" | "Body Work" | "Paint" | "Detailing" | "Shop";

const filters: Category[] = ["All", "Mechanical", "Body Work", "Paint", "Detailing", "Shop"];

export function GalleryGrid() {
  const [active, setActive] = useState<Category>("All");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    if (active === "All") return galleryItems;
    return galleryItems.filter((item) => item.category === active);
  }, [active]);

  const selected = useMemo(
    () => galleryItems.find((item) => item.id === selectedId) ?? null,
    [selectedId]
  );

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <motion.button
            key={filter}
            type="button"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setActive(filter)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              active === filter
                ? "bg-autoRed text-white"
                : "border border-midGray/30 bg-white text-charcoal hover:border-autoRed hover:text-autoRed"
            }`}
            aria-pressed={active === filter}
          >
            {filter === "Body Work" ? "Body" : filter}
          </motion.button>
        ))}
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item, index) => (
          <motion.button
            key={item.id}
            type="button"
            whileHover={{ y: -2 }}
            onClick={() => setSelectedId(item.id)}
            className="group overflow-hidden rounded-xl border border-midGray/20 bg-white text-left shadow-card"
          >
            <div className="relative h-56">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                priority={index < 3}
                sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                className="object-cover transition duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-autoRed">{item.category}</p>
              <p className="mt-1 text-sm font-medium text-charcoal">{item.title}</p>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {selected ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-deepNavy/85 p-4"
            role="dialog"
            aria-modal="true"
          >
            <div className="mx-auto flex h-full max-w-5xl flex-col justify-center">
              <button
                type="button"
                onClick={() => setSelectedId(null)}
                className="mb-3 self-end rounded-full bg-autoRed px-4 py-2 text-sm font-semibold text-white"
              >
                Close
              </button>
              <motion.figure
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                className="overflow-hidden rounded-2xl bg-white"
              >
                <div className="relative h-[65vh]">
                  <Image
                    src={selected.src}
                    alt={selected.alt}
                    fill
                    sizes="90vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-autoRed">
                    {selected.category}
                  </p>
                  <p className="mt-1 text-charcoal">{selected.title}</p>
                </figcaption>
              </motion.figure>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
