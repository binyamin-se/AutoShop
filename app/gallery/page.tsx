import { ContactCta } from "@/components/ContactCta";
import { GalleryGrid } from "@/components/GalleryGrid";
import { FadeInSection } from "@/components/FadeInSection";
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
      <FadeInSection className="mx-auto max-w-6xl px-4 pt-12">
        <h1 className="font-heading text-4xl font-bold text-charcoal md:text-5xl">Gallery</h1>
        <p className="mt-3 max-w-3xl text-midGray">
          Explore recent examples across mechanical service, body repair, paint, detailing, and
          shop work. Tap any tile to open the full-size view.
        </p>
      </FadeInSection>
      <FadeInSection>
        <GalleryGrid />
      </FadeInSection>
      <ContactCta title="Want an estimate like these results? Send your vehicle details now." />
    </div>
  );
}

