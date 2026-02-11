import type { Metadata } from "next";
import Script from "next/script";
import { Rajdhani, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { MobileCTA } from "@/components/MobileCTA";
import { Footer } from "@/components/Footer";
import { createAutoRepairSchema } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

const headingFont = Rajdhani({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["600", "700"]
});

const bodyFont = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.name} | Auto Repair in ${siteConfig.city}`,
    template: `%s | ${siteConfig.name}`
  },
  description:
    "Mechanical-first local auto repair shop offering diagnostics, maintenance, and body work quote support.",
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Auto Repair in ${siteConfig.city}`,
    description:
      "Trusted local diagnostics, maintenance, brake, and repair services with clear estimates.",
    url: siteConfig.siteUrl
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${headingFont.variable} ${bodyFont.variable} ${bodyFont.className} pb-20 md:pb-0`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <MobileCTA />
        <Script
          id="auto-repair-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(createAutoRepairSchema()) }}
        />
      </body>
    </html>
  );
}

