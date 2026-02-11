import Link from "next/link";
import { Hero } from "@/components/Hero";
import { ServicesGrid } from "@/components/ServicesGrid";
import { TrustStrip } from "@/components/TrustStrip";
import { Coupons } from "@/components/Coupons";
import { ReviewsPreview } from "@/components/Reviews";
import { FAQ } from "@/components/FAQ";
import { ContactCta } from "@/components/ContactCta";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Trusted Auto Repair and Diagnostics",
  description:
    "Trusted local auto repair with diagnostics, maintenance, brake, alignment, and body work quote support.",
  path: "/"
});

const whyChooseUs = [
  "Digital inspections with clear photos and notes",
  "Upfront estimates before work begins",
  "Local ownership and accountable service",
  "OEM-quality parts options based on budget",
  "ASE-certified tech placeholders and quality checks",
  "Same-day maintenance options when available"
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <TrustStrip />
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="font-heading text-3xl font-bold text-charcoal">Why Choose Us</h2>
        <ul className="mt-6 grid gap-3 md:grid-cols-2">
          {whyChooseUs.map((item) => (
            <li key={item} className="rounded-xl border border-midGray/30 bg-lightGray p-4 text-midGray shadow-card">
              {item}
            </li>
          ))}
        </ul>
      </section>
      <Coupons />
      <ReviewsPreview />
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="rounded-2xl border border-midGray/30 bg-lightGray p-7 shadow-card">
          <h2 className="font-heading text-3xl font-bold text-charcoal">Fleet Maintenance Available</h2>
          <p className="mt-3 max-w-2xl text-midGray">
            Keep vans and work vehicles road-ready with preventive service plans, priority scheduling,
            and transparent service records.
          </p>
          <Link
            href="/contact"
            className="mt-5 inline-block rounded-full bg-autoRed px-6 py-3 text-sm font-semibold text-white hover:bg-red-700"
          >
            Request Fleet Service
          </Link>
        </div>
      </section>
      <FAQ />
      <ContactCta />
    </>
  );
}

