import Link from "next/link";
import { quickServices } from "@/lib/data";

export function ServicesGrid() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <div className="mb-8">
        <h2 className="font-heading text-3xl font-bold text-charcoal">Quick Services</h2>
        <p className="mt-2 text-midGray">
          Mechanical services are our core focus, with body work available when needed.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {quickServices.map((service) => (
          <Link
            key={service.title}
            href={service.href}
            className="group rounded-2xl border border-midGray/30 bg-lightGray p-5 shadow-card transition hover:-translate-y-0.5 hover:border-autoRed"
          >
            <h3 className="font-heading text-xl font-semibold text-charcoal">{service.title}</h3>
            <p className="mt-3 text-sm font-medium text-autoRed transition group-hover:text-red-700">
              View service details
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}

