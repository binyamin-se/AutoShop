import { siteConfig } from "@/lib/site";

export function TrustStrip() {
  return (
    <section className="border-y border-midGray/30 bg-lightGray">
      <div className="mx-auto grid max-w-6xl gap-5 px-4 py-8 md:grid-cols-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-midGray">Rating</p>
          <p className="mt-1 text-lg font-semibold text-charcoal">4.9/5 Google (placeholder)</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-midGray">Warranty</p>
          <p className="mt-1 text-lg font-semibold text-charcoal">24-Month / 24k-mile placeholder</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-midGray">
            Service Area
          </p>
          <p className="mt-1 text-lg font-semibold text-charcoal">
            Serving {siteConfig.city} + surrounding areas
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-midGray">Badges</p>
          <p className="mt-1 text-lg font-semibold text-charcoal">
            ASE / I-CAR available if certified
          </p>
          {/* Official ASE and I-CAR logos require authorization before production use. */}
          <p className="mt-1 text-xs text-midGray">Use official logos only with authorization.</p>
        </div>
      </div>
    </section>
  );
}

