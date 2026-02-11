import Link from "next/link";
import { ContactCta } from "@/components/ContactCta";
import { bodyServices, mechanicalServices } from "@/lib/data";
import type { ServiceItem } from "@/lib/data";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Mechanical Repair and Body Services",
  description:
    "Mechanical-first services including diagnostics, brakes, maintenance, tires, A/C, engine repair, plus collision/body work support.",
  path: "/services"
});

function ServiceList({
  heading,
  items
}: {
  heading: string;
  items: ServiceItem[];
}) {
  return (
    <section>
      <h2 className="font-heading text-3xl font-bold text-charcoal">{heading}</h2>
      <div className="mt-6 grid gap-4">
        {items.map((service) => (
          <article id={service.id} key={service.id} className="rounded-xl border border-midGray/30 bg-lightGray p-5 shadow-card">
            <h3 className="font-heading text-2xl font-semibold text-charcoal">{service.title}</h3>
            <p className="mt-2 text-midGray">{service.description}</p>
            <h4 className="mt-4 text-sm font-semibold uppercase tracking-wide text-midGray">Symptoms</h4>
            <ul className="mt-2 list-disc pl-5 text-sm text-midGray">
              {service.symptoms.map((symptom) => (
                <li key={symptom}>{symptom}</li>
              ))}
            </ul>
            <Link
              href={service.href}
              className="mt-4 inline-block rounded-full bg-autoRed px-5 py-2 text-sm font-semibold text-white hover:bg-red-700"
            >
              {service.ctaLabel}
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <div className="bg-lightGray">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="font-heading text-4xl font-bold text-charcoal">Services</h1>
        <p className="mt-3 max-w-3xl text-midGray">
          We prioritize mechanical repair and maintenance to keep your vehicle reliable. Collision and
          paint services are available as secondary offerings.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <a href="#mechanical" className="rounded-full bg-autoRed px-4 py-2 text-sm font-semibold text-white">
            Mechanical Repair & Maintenance
          </a>
          <a href="#body" className="rounded-full border border-midGray/40 px-4 py-2 text-sm font-semibold text-charcoal">
            Collision/Body & Paint
          </a>
        </div>
      </div>
      <div className="mx-auto max-w-6xl space-y-12 px-4 pb-12">
        <section id="mechanical">
          <ServiceList heading="A) Mechanical Repair & Maintenance" items={mechanicalServices} />
        </section>
        <section id="body">
          <ServiceList heading="B) Collision/Body & Paint" items={bodyServices} />
        </section>
        <section className="rounded-2xl border border-midGray/30 bg-lightGray p-7 shadow-card">
          <h2 className="font-heading text-3xl font-bold text-charcoal">What to Expect</h2>
          <ol className="mt-4 grid gap-3 text-midGray md:grid-cols-2">
            <li>1. Call/Book</li>
            <li>2. Inspection/diagnostics</li>
            <li>3. Approve estimate</li>
            <li>4. Repair + warranty</li>
          </ol>
        </section>
        <section className="rounded-2xl border border-midGray/30 bg-lightGray p-7 shadow-card">
          <h2 className="font-heading text-3xl font-bold text-charcoal">Service Area</h2>
          <p className="mt-3 text-midGray">{siteConfig.serviceAreas.join(", ")}</p>
        </section>
      </div>
      <ContactCta title="Need a mechanical quote or collision estimate?" />
    </div>
  );
}

