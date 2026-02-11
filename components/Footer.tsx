import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-midGray/30 bg-deepNavy text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-4">
        <div>
          <h3 className="font-heading text-lg font-semibold text-white">{siteConfig.name}</h3>
          <p className="mt-3 text-sm">{siteConfig.addressLine1}</p>
          <p className="text-sm">{siteConfig.addressLine2}</p>
          <a href={`tel:${siteConfig.phoneTel}`} className="mt-2 block text-sm text-white hover:text-autoRed">
            {siteConfig.phoneDisplay}
          </a>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Hours</h3>
          <ul className="mt-3 space-y-1 text-sm">
            {siteConfig.hours.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Service Areas</h3>
          <ul className="mt-3 space-y-1 text-sm">
            {siteConfig.serviceAreas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Links</h3>
          <ul className="mt-3 space-y-1 text-sm">
            <li>
              <Link href="/services" className="hover:text-autoRed">
                Services
              </Link>
            </li>
            <li>
              <Link href="/maintenance" className="hover:text-autoRed">
                Maintenance
              </Link>
            </li>
            <li>
              <Link href="/reviews" className="hover:text-autoRed">
                Reviews
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-autoRed">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-midGray/50 px-4 py-4 text-center text-xs text-white/80">
        Privacy note: Demo website content and offers are placeholders. Verify legal notices before
        production launch.
      </div>
    </footer>
  );
}

