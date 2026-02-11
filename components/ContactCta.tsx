import Link from "next/link";
import { siteConfig } from "@/lib/site";

type ContactCtaProps = {
  title?: string;
};

export function ContactCta({
  title = "Need answers fast? Talk to a technician now."
}: ContactCtaProps) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="rounded-2xl bg-deepNavy p-7 text-white">
        <h2 className="font-heading text-2xl font-bold">{title}</h2>
        <p className="mt-2 text-sm text-white">
          Call now for diagnostics, maintenance booking, or collision estimate requests.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href={`tel:${siteConfig.phoneTel}`}
            className="rounded-full bg-autoRed px-5 py-2 text-sm font-semibold text-white hover:bg-red-700"
          >
            Call {siteConfig.phoneDisplay}
          </a>
          <Link
            href="/contact"
            className="rounded-full border border-midGray/60 px-5 py-2 text-sm font-semibold text-white hover:border-autoRed"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </section>
  );
}

