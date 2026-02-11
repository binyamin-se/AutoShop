"use client";

import Image from "next/image";
import { siteConfig } from "@/lib/site";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src="/images/supercar-shop.jpg"
        alt="Premium auto shop floor with high-end vehicle"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-deepNavy/90 via-deepNavy/75 to-deepNavy/45" />
      <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="max-w-3xl space-y-6 text-white">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
            <span className="h-2 w-2 rounded-full bg-autoRed" />
            Trusted Local Shop
          </div>
          <h1 className="font-heading text-4xl font-bold leading-tight md:text-6xl">
            Trusted Auto Repair in {siteConfig.city}
            <span className="mt-1 block text-2xl md:text-4xl">
              Diagnostics, Maintenance, & Repairs
            </span>
          </h1>
          <p className="max-w-2xl text-lg text-white/90">
            Mechanical-first service by experienced technicians with honest estimates, same-day
            options, and transparent communication from inspection to handoff.
          </p>
          <div className="flex flex-wrap gap-3">
            <motion.a
              href={`tel:${siteConfig.phoneTel}`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-full bg-autoRed px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-autoRed/25"
            >
              Call Now
            </motion.a>
            <motion.a
              href={siteConfig.bookingHref}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-full bg-deepNavy px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/40"
            >
              Book Appointment
            </motion.a>
          </div>
          <div className="flex flex-wrap gap-2 pt-1">
            {["Same-day options", "Digital inspections", "Warranty-backed repairs"].map((chip) => (
              <span
                key={chip}
                className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white"
              >
                {chip}
              </span>
            ))}
          </div>
          <div className="inline-flex items-center gap-2 rounded-lg bg-white/15 px-3 py-2 text-sm font-semibold">
            <span className="text-autoRed">4.8 ★</span>
            <span className="text-white/90">Rating Placeholder</span>
          </div>
        </div>
      </div>
    </section>
  );
}

