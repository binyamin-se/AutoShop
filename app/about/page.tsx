import { ContactCta } from "@/components/ContactCta";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "About Our Shop",
  description:
    "Learn about our mechanical-first process, values, and commitment to transparent local service.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-heading text-4xl font-bold text-charcoal">About {siteConfig.name}</h1>
      <p className="mt-4 max-w-3xl text-midGray">
        We are a local, mechanical-first shop focused on honest diagnostics, preventive maintenance,
        and dependable repairs. Body and paint support is available for collision-related needs.
      </p>
      <section className="mt-8 grid gap-4 md:grid-cols-3">
        <article className="rounded-xl border border-midGray/30 bg-white p-5 shadow-card">
          <h2 className="font-heading text-2xl font-semibold text-charcoal">Our Mission</h2>
          <p className="mt-2 text-sm text-midGray">
            Keep your vehicle safe and reliable with straightforward communication and quality work.
          </p>
        </article>
        <article className="rounded-xl border border-midGray/30 bg-white p-5 shadow-card">
          <h2 className="font-heading text-2xl font-semibold text-charcoal">Our Promise</h2>
          <p className="mt-2 text-sm text-midGray">
            Transparent estimates, clear approvals, and no surprise repairs without your authorization.
          </p>
        </article>
        <article className="rounded-xl border border-midGray/30 bg-white p-5 shadow-card">
          <h2 className="font-heading text-2xl font-semibold text-charcoal">Our Process</h2>
          <p className="mt-2 text-sm text-midGray">
            Diagnose accurately, explain options, complete repairs right, and stand behind the result.
          </p>
        </article>
      </section>
      <ContactCta title="Have questions before booking? Speak directly with our team." />
    </div>
  );
}

