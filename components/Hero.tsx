import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Hero() {
  return (
    <section className="bg-gradient-to-b from-lightGray to-lightGray">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="max-w-3xl space-y-6">
          <p className="inline-flex rounded-full bg-lightGray px-3 py-1 text-xs font-semibold uppercase tracking-wide text-autoRed">
            Same-day options available
          </p>
          <h1 className="font-heading text-4xl font-bold leading-tight text-charcoal md:text-5xl">
            Trusted Auto Repair in {siteConfig.city} - Diagnostics, Maintenance, & Repairs
          </h1>
          <p className="text-lg text-midGray">
            ASE-certified techs, honest estimates, and clear communication so you can get back on
            the road confidently.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="rounded-full bg-autoRed px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
            >
              Call Now
            </a>
            <Link
              href={siteConfig.bookingHref}
              className="rounded-full border border-midGray/40 px-6 py-3 text-sm font-semibold text-charcoal transition hover:border-autoRed hover:text-autoRed"
            >
              Book Appointment
            </Link>
          </div>
          <p className="text-sm text-midGray">
            Transparent pricing. Secure handling. Fast turnaround.
          </p>
        </div>
      </div>
    </section>
  );
}

