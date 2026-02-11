import Link from "next/link";
import { ContactCta } from "@/components/ContactCta";
import { testimonials } from "@/lib/data";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Customer Reviews",
  description:
    "Read local customer feedback on diagnostics, maintenance, brake repairs, and collision support.",
  path: "/reviews"
});

export default function ReviewsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-heading text-4xl font-bold text-charcoal">Reviews</h1>
      <p className="mt-3 max-w-3xl text-midGray">
        Drivers choose us for clear communication, honest estimates, and dependable repairs.
      </p>
      <section className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((quote, i) => (
          <article key={quote} className="rounded-xl border border-midGray/30 bg-white p-5 shadow-card">
            <p className="text-midGray">&ldquo;{quote}&rdquo;</p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-midGray">
              Verified customer #{i + 1}
            </p>
          </article>
        ))}
      </section>
      <section className="mt-8 rounded-2xl border border-dashed border-midGray/40 bg-white p-8 text-center">
        <h2 className="font-heading text-2xl font-bold text-charcoal">Google Reviews Embed Placeholder</h2>
        <p className="mt-2 text-sm text-midGray">
          Replace with approved embed snippet in production.
        </p>
        <Link
          href="https://google.com"
          className="mt-4 inline-block rounded-full bg-autoRed px-5 py-2 text-sm font-semibold text-white hover:bg-red-700"
        >
          Leave a Google Review
        </Link>
      </section>
      <ContactCta title="Need help now? Call for same-day diagnostic availability." />
    </div>
  );
}

