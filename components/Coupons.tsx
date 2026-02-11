import Link from "next/link";

const offers = [
  {
    title: "Oil Change Special",
    detail: "Synthetic blend oil change + inspection. Starting at $XX (placeholder)."
  },
  {
    title: "Free Brake Inspection",
    detail: "Brake health check with repair estimate. Parts/labor extra."
  },
  {
    title: "Seasonal Safety Check",
    detail: "Battery, fluids, tires, and HVAC check before weather shifts."
  }
];

export function Coupons() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <h2 className="font-heading text-3xl font-bold text-charcoal">Specials & Offers</h2>
          <p className="mt-2 text-midGray">
            Limited time offers. Call to confirm current availability.
          </p>
        </div>
        <Link href="/maintenance" className="text-sm font-semibold text-autoRed hover:text-red-700">
          View all specials
        </Link>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {offers.map((offer) => (
          <article key={offer.title} className="rounded-2xl border border-midGray/30 bg-lightGray p-5 shadow-card">
            <h3 className="font-heading text-xl font-semibold text-charcoal">{offer.title}</h3>
            <p className="mt-3 text-sm text-midGray">{offer.detail}</p>
            <p className="mt-4 text-xs uppercase tracking-wide text-midGray">Limited time offer</p>
          </article>
        ))}
      </div>
    </section>
  );
}

