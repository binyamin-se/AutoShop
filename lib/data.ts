export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  symptoms: string[];
  ctaLabel: string;
  href: string;
};

export const quickServices = [
  { title: "Diagnostics / Check Engine", href: "/services#diagnostics" },
  { title: "Brakes", href: "/services#brakes" },
  { title: "Oil Change & Maintenance", href: "/services#maintenance" },
  { title: "Tires & Alignment", href: "/services#alignment" },
  { title: "A/C & Heating", href: "/services#ac-heating" },
  { title: "Engine & Transmission", href: "/services#engine-transmission" }
];

export const mechanicalServices: ServiceItem[] = [
  {
    id: "diagnostics",
    title: "Diagnostics / Check Engine",
    description:
      "We use scan tools and real-world testing to identify root causes quickly and avoid unnecessary replacements.",
    symptoms: [
      "Check engine light is on",
      "Rough idle or stalling",
      "Reduced fuel economy"
    ],
    ctaLabel: "Book diagnostics",
    href: "/contact"
  },
  {
    id: "brakes",
    title: "Brake Service & Repair",
    description:
      "From pads and rotors to hydraulic inspections, we restore stopping power with safety-first workmanship.",
    symptoms: ["Squealing or grinding", "Longer stopping distance", "Brake pedal vibration"],
    ctaLabel: "Call for brake quote",
    href: "tel:+15551234567"
  },
  {
    id: "maintenance",
    title: "Oil Change & Factory Maintenance",
    description:
      "Routine service based on mileage and vehicle history to keep your car reliable and protect long-term value.",
    symptoms: ["Overdue service interval", "Dashboard maintenance light", "Dark or low engine oil"],
    ctaLabel: "Book maintenance",
    href: "/maintenance"
  },
  {
    id: "alignment",
    title: "Tires, Suspension & Alignment",
    description:
      "We inspect wear patterns, suspension components, and alignment angles to improve handling and tire life.",
    symptoms: ["Vehicle pulls to one side", "Uneven tire wear", "Steering feels loose"],
    ctaLabel: "Get alignment estimate",
    href: "/contact"
  },
  {
    id: "ac-heating",
    title: "A/C & Heating",
    description:
      "Full climate-control diagnostics, leak checks, and component replacement for comfort in every season.",
    symptoms: ["Weak airflow", "No cold air", "Cabin odor or fogging"],
    ctaLabel: "Call for A/C service",
    href: "tel:+15551234567"
  },
  {
    id: "engine-transmission",
    title: "Engine & Transmission Repairs",
    description:
      "Advanced troubleshooting and repair planning for major drivability issues, with clear estimates before work begins.",
    symptoms: ["Hard shifting", "Loss of power", "Fluid leaks under vehicle"],
    ctaLabel: "Schedule inspection",
    href: "/contact"
  }
];

export const bodyServices: ServiceItem[] = [
  {
    id: "collision",
    title: "Collision Repair",
    description:
      "Structural and cosmetic repairs after accidents, with clear updates throughout the process.",
    symptoms: ["Panel damage", "Misaligned doors/trunk", "Post-collision drivability concerns"],
    ctaLabel: "Get collision estimate",
    href: "/contact"
  },
  {
    id: "paint",
    title: "Paint & Refinishing",
    description:
      "Color-matched refinishing and spot blending designed to restore factory appearance.",
    symptoms: ["Paint scratches", "Faded clear coat", "Panel repaint needed"],
    ctaLabel: "Request paint quote",
    href: "/contact"
  },
  {
    id: "dent",
    title: "Dent, Bumper & Cosmetic Repair",
    description:
      "Targeted cosmetic restoration for dents, cracked bumpers, and minor exterior damage.",
    symptoms: ["Minor dents", "Scuffed bumpers", "Cracked trim pieces"],
    ctaLabel: "Call for quote",
    href: "tel:+15551234567"
  }
];

export const testimonials = [
  "Fast check-engine diagnosis and fair pricing. No upsell pressure.",
  "They explained my brake estimate in plain language and finished same day.",
  "Best local shop for maintenance. Clean office and clear communication.",
  "My A/C was fixed before a heat wave. Honest people.",
  "Collision repair looked factory-perfect and they kept me updated.",
  "Fleet van downtime dropped after switching our maintenance here."
];

export const faqItems = [
  {
    question: "How much does a diagnostic cost?",
    answer:
      "Diagnostic pricing depends on symptoms and testing time. We share the fee upfront before any work starts."
  },
  {
    question: "Do I need an appointment or can I walk in?",
    answer:
      "Appointments are recommended for fastest turnaround, but we accept limited walk-ins based on bay availability."
  },
  {
    question: "How quickly can repairs be completed?",
    answer:
      "Many maintenance and light repairs are same-day. Larger repairs depend on parts availability and scope."
  },
  {
    question: "Do you provide written estimates?",
    answer:
      "Yes. We provide clear digital or printed estimates with parts, labor, and next-step recommendations."
  },
  {
    question: "What should I bring to my appointment?",
    answer:
      "Bring your keys, registration, and any recent repair records if available. This helps us diagnose faster."
  },
  {
    question: "Is there a warranty on repairs?",
    answer:
      "Most repairs include warranty coverage. Terms vary by job and are listed on your final invoice."
  },
  {
    question: "Do you work with extended warranties?",
    answer:
      "Yes, for many providers. We can help with documentation and approval steps when needed."
  },
  {
    question: "Can I request a collision quote online?",
    answer:
      "Yes. Use our estimate form and add photos for a faster preliminary body-work quote."
  }
];
