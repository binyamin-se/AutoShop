import Image from "next/image";
import { Hero } from "@/components/Hero";
import { ServicesGrid } from "@/components/ServicesGrid";
import { ReviewsPreview } from "@/components/Reviews";
import { FAQ } from "@/components/FAQ";
import { ContactCta } from "@/components/ContactCta";
import { FadeInSection } from "@/components/FadeInSection";
import { createPageMetadata } from "@/lib/seo";
import Link from "next/link";

const processSteps = [
  "Call/Book",
  "Inspect/Diagnose",
  "Approve Estimate",
  "Repair + Warranty"
];

const galleryPreview = [
  { src: "/images/white-car.jpg", category: "Mechanical" },
  { src: "/images/shop-interior.jpg", category: "Diagnostics" },
  { src: "/images/supercar-shop.jpg", category: "Body Work" },
  { src: "/images/mechanic-portrait.jpg", category: "Paint" },
  { src: "/images/wash-bay.jpg", category: "Detailing" },
  { src: "/images/shop-interior.jpg", category: "Shop" }
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <FadeInSection>
        <ServicesGrid />
      </FadeInSection>

      <FadeInSection className="mx-auto max-w-6xl px-4 py-16">
        <div className="rounded-3xl border border-midGray/20 bg-white p-8 shadow-card">
          <h2 className="font-heading text-3xl font-bold text-charcoal md:text-4xl">How It Works</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {processSteps.map((step, index) => (
              <article key={step} className="rounded-2xl bg-lightGray p-5">
                <p className="text-sm font-semibold uppercase tracking-wide text-autoRed">
                  Step {index + 1}
                </p>
                <h3 className="mt-2 font-heading text-xl font-bold text-charcoal">{step}</h3>
              </article>
            ))}
          </div>
        </div>
      </FadeInSection>

      <FadeInSection className="mx-auto grid max-w-6xl gap-8 px-4 py-16 lg:grid-cols-2">
        <div className="overflow-hidden rounded-3xl border border-midGray/20 bg-white shadow-card">
          <Image
            src="/images/mechanic-portrait.jpg"
            alt="Mechanic team portrait"
            width={1200}
            height={900}
            className="h-full w-full object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
        <article className="rounded-3xl border border-midGray/20 bg-white p-8 shadow-card">
          <p className="text-sm font-semibold uppercase tracking-wide text-autoRed">Meet the Team</p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-charcoal">Honest. Local. Transparent.</h2>
          <p className="mt-4 text-midGray">
            Our technicians explain findings clearly, document recommendations, and help you choose
            the right repair path without pressure.
          </p>
          <p className="mt-4 rounded-xl bg-lightGray p-4 text-sm text-midGray">
            ASE / I-CAR badges available if certified. Official logos require authorization.
          </p>
          <Link
            href="/about"
            className="mt-6 inline-flex rounded-full bg-deepNavy px-5 py-2 text-sm font-semibold text-white"
          >
            Learn More About Us
          </Link>
        </article>
      </FadeInSection>

      <FadeInSection className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h2 className="font-heading text-3xl font-bold text-charcoal md:text-4xl">Gallery Preview</h2>
            <p className="mt-2 text-midGray">Recent work across diagnostics, body, and detailing.</p>
          </div>
          <Link href="/gallery" className="text-sm font-semibold text-autoRed hover:text-red-700">
            View full gallery
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryPreview.map((item, index) => (
            <figure
              key={`${item.category}-${index}`}
              className="group overflow-hidden rounded-2xl border border-midGray/20 bg-white shadow-card"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={item.src}
                  alt={`${item.category} preview`}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
              <figcaption className="p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-autoRed">
                  {item.category}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </FadeInSection>

      <FadeInSection>
        <ReviewsPreview />
      </FadeInSection>
      <FadeInSection>
        <FAQ />
      </FadeInSection>
      <FadeInSection>
        <ContactCta />
      </FadeInSection>
    </>
  );
}

export const metadata = createPageMetadata({
  title: "Trusted Auto Repair and Diagnostics",
  description:
    "Trusted local auto repair with diagnostics, maintenance, brake, alignment, and body work quote support.",
  path: "/"
});

