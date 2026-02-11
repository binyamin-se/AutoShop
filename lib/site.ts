export const siteConfig = {
  name: "[SHOP NAME] Auto Repair & Body",
  city: "[City]",
  phoneDisplay: "(555) 123-4567",
  phoneTel: "+15551234567",
  addressLine1: "123 Main Street",
  addressLine2: "[City], ST 12345",
  email: "service@shopdemo.com",
  hours: [
    "Mon-Fri: 7:30 AM - 6:00 PM",
    "Sat: 8:00 AM - 2:00 PM",
    "Sun: Closed"
  ],
  serviceAreas: [
    "[City]",
    "North [City]",
    "East [City]",
    "West [City]",
    "South [City]",
    "[Nearby City 1]",
    "[Nearby City 2]"
  ],
  siteUrl: "https://example-autoshop.vercel.app",
  bookingHref: "/contact",
  estimateHref: "/contact"
};

export const nap = `${siteConfig.name}, ${siteConfig.addressLine1}, ${siteConfig.addressLine2}, ${siteConfig.phoneDisplay}`;
