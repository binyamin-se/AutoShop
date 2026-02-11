import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function MobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-midGray/30 bg-lightGray p-3 md:hidden">
      <div className="mx-auto flex max-w-md gap-3">
        <a
          href={`tel:${siteConfig.phoneTel}`}
          className="flex-1 rounded-lg bg-autoRed px-4 py-3 text-center text-sm font-semibold text-white"
          aria-label={`Call now at ${siteConfig.phoneDisplay}`}
        >
          Call Now
        </a>
        <Link
          href={siteConfig.estimateHref}
          className="flex-1 rounded-lg bg-deepNavy px-4 py-3 text-center text-sm font-semibold text-white"
        >
          Get Estimate
        </Link>
      </div>
    </div>
  );
}

