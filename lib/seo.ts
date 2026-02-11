import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
};

export function createPageMetadata({
  title,
  description,
  path = "/"
}: MetadataInput): Metadata {
  const url = new URL(path, siteConfig.siteUrl).toString();
  return {
    metadataBase: new URL(siteConfig.siteUrl),
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      title,
      description,
      url,
      siteName: siteConfig.name
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    }
  };
}

export function createAutoRepairSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: siteConfig.name,
    telephone: siteConfig.phoneDisplay,
    url: siteConfig.siteUrl,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.addressLine1,
      addressLocality: siteConfig.city,
      addressRegion: "ST",
      postalCode: "12345",
      addressCountry: "US"
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        opens: "07:30",
        closes: "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "08:00",
        closes: "14:00"
      }
    ],
    areaServed: siteConfig.serviceAreas,
    priceRange: "$$",
    sameAs: ["https://www.google.com/maps"]
  };
}
