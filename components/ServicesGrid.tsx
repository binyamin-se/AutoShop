import Link from "next/link";
import Image from "next/image";
import { quickServices } from "@/lib/data";

const iconMap = ["🧰", "🛑", "🛢️", "🛞", "❄️", "⚙️"];

export function ServicesGrid() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="mb-8">
        <h2 className="font-heading text-3xl font-bold text-charcoal md:text-4xl">
          Mechanical Services
        </h2>
        <p className="mt-2 text-midGray">
          Mechanical repair is our primary focus, with body services available as an add-on when
          needed.
        </p>
      </div>
      <div className="grid items-start gap-6 lg:grid-cols-5">
        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-3">
          {quickServices.map((service, index) => (
            <Link
              key={service.title}
              href={service.href}
              className="group rounded-2xl border border-midGray/20 bg-white p-5 shadow-card transition hover:-translate-y-0.5 hover:border-autoRed"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-lightGray text-lg">
                  {iconMap[index] ?? "🔧"}
                </span>
                <h3 className="font-heading text-xl font-semibold text-charcoal">{service.title}</h3>
              </div>
              <p className="mt-3 text-sm font-medium text-autoRed transition group-hover:text-red-700">
                View service details
              </p>
            </Link>
          ))}
        </div>
        <article className="overflow-hidden rounded-2xl border border-midGray/20 bg-white shadow-card lg:col-span-2">
          <Image
            src="/images/white-car.jpg"
            alt="White vehicle in service bay"
            width={900}
            height={1200}
            sizes="(min-width: 1024px) 32vw, 100vw"
            className="h-72 w-full object-cover"
          />
          <div className="p-5">
            <h3 className="font-heading text-2xl font-bold text-charcoal">High-Confidence Diagnostics</h3>
            <p className="mt-2 text-sm text-midGray">
              We prioritize accurate mechanical diagnostics first, so you approve only what your car
              actually needs.
            </p>
            <a
              href="/services#diagnostics"
              className="mt-4 inline-flex rounded-full bg-deepNavy px-4 py-2 text-sm font-semibold text-white"
            >
              Explore Mechanical Work
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

