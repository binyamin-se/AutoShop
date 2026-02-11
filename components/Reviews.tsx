import Link from "next/link";
import { testimonials } from "@/lib/data";

export function ReviewsPreview() {
  return (
    <section className="bg-lightGray">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-heading text-3xl font-bold text-charcoal">Real Customer Reviews</h2>
            <p className="mt-2 text-midGray">What local drivers say about our repairs and service.</p>
          </div>
          <Link
            href="/reviews"
            className="rounded-full bg-autoRed px-4 py-2 text-sm font-semibold text-white hover:bg-red-700"
          >
            See all reviews
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((quote, i) => (
            <blockquote key={quote} className="rounded-2xl border border-midGray/20 bg-white p-5 shadow-card">
              <p className="text-sm text-midGray">&ldquo;{quote}&rdquo;</p>
              <cite className="mt-4 block text-xs font-semibold uppercase tracking-wide text-midGray">
                Customer {i + 1}
              </cite>
            </blockquote>
          ))}
        </div>
        <div className="mt-8 rounded-2xl border border-dashed border-midGray/40 bg-white p-6 text-sm text-midGray">
          Google Reviews embed placeholder block
        </div>
      </div>
    </section>
  );
}

