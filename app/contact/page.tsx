import { ContactForm } from "@/components/ContactForm";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Contact and Booking",
  description:
    "Call now, request service, or submit a body estimate inquiry with optional photo upload.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-heading text-4xl font-bold text-charcoal">Contact</h1>
      <p className="mt-3 max-w-3xl text-midGray">
        Fastest response is by phone. You can also submit a booking or estimate request below.
      </p>
      <section className="mt-8 grid gap-4 md:grid-cols-2">
        <article className="rounded-xl border border-midGray/30 bg-white p-5 shadow-card">
          <h2 className="font-heading text-2xl font-semibold text-charcoal">Phone</h2>
          <a href={`tel:${siteConfig.phoneTel}`} className="mt-2 block text-lg font-semibold text-autoRed">
            {siteConfig.phoneDisplay}
          </a>
        </article>
        <article className="rounded-xl border border-midGray/30 bg-white p-5 shadow-card">
          <h2 className="font-heading text-2xl font-semibold text-charcoal">Email</h2>
          <p className="mt-2 text-midGray">{siteConfig.email}</p>
        </article>
        <article className="rounded-xl border border-midGray/30 bg-white p-5 shadow-card">
          <h2 className="font-heading text-2xl font-semibold text-charcoal">Address</h2>
          <p className="mt-2 text-midGray">{siteConfig.addressLine1}</p>
          <p className="text-midGray">{siteConfig.addressLine2}</p>
        </article>
        <article className="rounded-xl border border-midGray/30 bg-white p-5 shadow-card">
          <h2 className="font-heading text-2xl font-semibold text-charcoal">Hours</h2>
          <ul className="mt-2 space-y-1 text-midGray">
            {siteConfig.hours.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </article>
      </section>
      <section className="mt-8 rounded-2xl border border-dashed border-midGray/40 bg-white p-8 text-center">
        <h2 className="font-heading text-2xl font-bold text-charcoal">Map Placeholder</h2>
        <p className="mt-2 text-sm text-midGray">Embed Google Map here for final launch.</p>
      </section>
      <div className="mt-8">
        <ContactForm />
      </div>
    </div>
  );
}

