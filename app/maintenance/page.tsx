import { ContactCta } from "@/components/ContactCta";
import { PrintButton } from "@/components/PrintButton";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Maintenance Plans and Specials",
  description:
    "Book preventive maintenance packages, seasonal checks, and local service specials to keep your vehicle reliable.",
  path: "/maintenance"
});

const packages = [
  {
    name: "Basic",
    includes: ["Oil & filter change", "Fluid top-off", "Visual safety check"]
  },
  {
    name: "Standard",
    includes: ["Everything in Basic", "Tire rotation", "Brake and battery test", "Digital inspection"]
  },
  {
    name: "Premium",
    includes: [
      "Everything in Standard",
      "Alignment check",
      "A/C performance check",
      "Priority same-day scheduling"
    ]
  }
];

const seasonalChecklist = [
  "Battery and charging health",
  "Tire condition and pressure",
  "Brake pad/rotor wear",
  "Coolant and heater performance",
  "Wipers, lighting, and visibility"
];

export default function MaintenancePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-heading text-4xl font-bold text-charcoal">Maintenance & Specials</h1>
      <p className="mt-3 max-w-3xl text-midGray">
        Preventive maintenance keeps repair costs down, extends vehicle life, and reduces emergency
        breakdown risk.
      </p>
      <section className="mt-8">
        <h2 className="font-heading text-3xl font-bold text-charcoal">Maintenance Packages</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {packages.map((pkg) => (
            <article key={pkg.name} className="rounded-2xl border border-midGray/30 bg-white p-5 shadow-card">
              <h3 className="font-heading text-2xl font-semibold text-charcoal">{pkg.name}</h3>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-midGray">
                {pkg.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
      <section className="mt-10 rounded-2xl border border-midGray/30 bg-white p-6 shadow-card">
        <h2 className="font-heading text-3xl font-bold text-charcoal">Seasonal Checklist</h2>
        <ul className="mt-4 grid list-disc gap-2 pl-5 text-midGray md:grid-cols-2">
          {seasonalChecklist.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
      <section className="mt-10 rounded-2xl border border-midGray/30 bg-white p-6 shadow-card print:border-black print:bg-white">
        <div className="flex items-center justify-between gap-4">
          <h2 className="font-heading text-3xl font-bold text-charcoal">Coupons (Print-Friendly)</h2>
          <PrintButton />
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <article className="rounded-xl border border-dashed border-midGray/40 bg-white p-4">
            <h3 className="font-heading text-xl font-semibold text-charcoal">Oil Service Deal</h3>
            <p className="mt-2 text-sm text-midGray">Save $XX on qualifying oil service. Limited time.</p>
          </article>
          <article className="rounded-xl border border-dashed border-midGray/40 bg-white p-4">
            <h3 className="font-heading text-xl font-semibold text-charcoal">Brake Inspection</h3>
            <p className="mt-2 text-sm text-midGray">Free brake inspection with any paid service. Limited time.</p>
          </article>
          <article className="rounded-xl border border-dashed border-midGray/40 bg-white p-4">
            <h3 className="font-heading text-xl font-semibold text-charcoal">Seasonal Readiness</h3>
            <p className="mt-2 text-sm text-midGray">Bundle savings on battery and coolant checks. Limited time.</p>
          </article>
        </div>
      </section>
      <ContactCta title="Book a maintenance check before your next long drive." />
    </div>
  );
}

