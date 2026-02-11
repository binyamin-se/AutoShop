import Link from "next/link";
import { siteConfig } from "@/lib/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/maintenance", label: "Maintenance" },
  { href: "/reviews", label: "Reviews" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-midGray/30 bg-deepNavy backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <div className="min-w-0">
          <Link href="/" className="font-heading text-lg font-bold text-white">
            {siteConfig.name}
          </Link>
          <p className="text-xs text-white/80">Mechanical-first auto care</p>
        </div>
        <nav aria-label="Main navigation" className="hidden items-center gap-5 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/90 transition hover:text-autoRed"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={`tel:${siteConfig.phoneTel}`}
            className="rounded-full border border-white/40 px-3 py-2 text-sm font-semibold text-white transition hover:border-autoRed hover:text-autoRed"
            aria-label={`Call ${siteConfig.phoneDisplay}`}
          >
            {siteConfig.phoneDisplay}
          </a>
          <Link
            href={siteConfig.bookingHref}
            className="rounded-full bg-autoRed px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </header>
  );
}

