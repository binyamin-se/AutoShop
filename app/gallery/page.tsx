import { ContactCta } from "@/components/ContactCta";
import { GalleryGrid } from "@/components/GalleryGrid";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Repair Gallery",
  description:
    "Before and after examples across brakes, suspension, diagnostics, and body work results.",
  path: "/gallery"
});

export default function GalleryPage() {
  return (
    <div className="bg-lightGray">
      <div className="mx-auto max-w-6xl px-4 pt-12">
        <h1 className="font-heading text-4xl font-bold text-charcoal">Gallery</h1>
        <p className="mt-3 max-w-3xl text-midGray">
          Before-and-after examples from common mechanical and body repairs.
        </p>
      </div>
      <GalleryGrid />
      <ContactCta title="Want an estimate like these results? Send your vehicle details now." />
    </div>
  );
}

