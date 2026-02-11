import { faqItems } from "@/lib/data";

export function FAQ() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <h2 className="font-heading text-3xl font-bold text-charcoal">FAQ</h2>
      <div className="mt-6 space-y-3">
        {faqItems.map((item) => (
          <details key={item.question} className="rounded-xl border border-midGray/30 bg-white p-5 shadow-card">
            <summary className="cursor-pointer font-semibold text-charcoal">{item.question}</summary>
            <p className="mt-3 text-sm text-midGray">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

