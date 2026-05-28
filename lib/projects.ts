export type GalleryItem = {
  src: string;
  alt: string;
  type?: "image" | "video";
};

/**
 * A single visual row inside a project's gallery.
 * All items share the same aspect ratio and lay out in a clean horizontal strip —
 * no staggering, no cropping. On mobile, large rows collapse to 2 columns.
 */
export type GalleryRow = {
  /** Optional small caption label above the row (e.g. "Social Campaign", "Brand Kit"). */
  label?: string;
  /** CSS aspect-ratio string applied to every tile in the row (e.g. "4/5", "16/9"). */
  aspect: string;
  /** "cover" crops to fit (use when images already match the aspect); "contain" never crops. */
  fit?: "cover" | "contain";
  /** Background color behind contain images. Defaults to a soft tint of the project accent. */
  bg?: string;
  items: GalleryItem[];
};

export type PdfAsset = {
  label: string;
  href: string;
};

export interface Project {
  slug: string;
  title: string;
  client: string;
  category: string;
  shortDescription: string;
  whatIDid: string[];
  tags: string[];
  accentColor: string;
  year: string;
  caseStudyAvailable: boolean;
  heroImage?: string;
  /** When true, the hero image renders at a smaller max-width (max-w-3xl) instead of full-width. */
  heroCompact?: boolean;
  challenge?: string;
  approach?: string;
  results?: { value: string; label: string }[];
  resultsCaption?: string;
  gallery?: GalleryRow[];
  pdfs?: PdfAsset[];
}

export const projects: Project[] = [
  {
    slug: "gymrise",
    title: "GYMRISE",
    client: "GYMRISE",
    category: "Brand, Web Design & Growth",
    shortDescription:
      "Designed and built the GYMRISE website end-to-end — plus the full brand system, social campaigns, sales creative, and email signature suite that all live around it.",
    whatIDid: [
      "Designed & built the GYMRISE website end-to-end",
      "Social media campaigns & content production",
      "Sales creative, pricing sheets & email signatures",
    ],
    tags: ["Web Design & Build", "Brand Systems", "Content & Social"],
    accentColor: "#FF4FD8",
    year: "2026",
    caseStudyAvailable: true,
    heroImage: "/work/gymrise/hero.png",
    heroCompact: true,
    challenge:
      "GYMRISE was scaling fast in the fitness industry and needed a brand presence that matched the ambition.\n\nThe website, marketing assets, and content needed to feel unified — built around a single visual system that could ship at the speed the program was growing.",
    approach:
      "I designed and built the entire GYMRISE website myself — every page, every interaction, every section — then extended the same visual system across the brand kit, social campaigns, sales creative, and email signatures.\n\nEverything lives together: the same typography, the same energy, the same point of view. Owners, members, and prospects all see one brand, no matter where they meet it.",
    results: [
      { value: "$224M+", label: "In Client PT Sales" },
      { value: "360+", label: "Active Operators" },
      { value: "40+", label: "Markets Covered" },
      { value: "1 System", label: "End-to-End Brand" },
    ],
    resultsCaption: "Focus: A single brand engine powering web, social, and sales.",
    gallery: [
      // Row 1 — THE BUILD: the GYMRISE website pages, full-width sequence
      {
        label: "Designed & Built — The GYMRISE Website",
        aspect: "3/4",
        fit: "cover",
        items: [
          { src: "/work/gymrise/site-01.jpg", alt: "GYMRISE website — homepage hero & client highlights" },
          { src: "/work/gymrise/site-02.jpg", alt: "GYMRISE website — system & member testimonials" },
          { src: "/work/gymrise/site-03.jpg", alt: "GYMRISE website — university, FAQs & next-step CTA" },
        ],
      },
      // Row 2 — Brand kit + email signature bundle (the identity system)
      {
        label: "Brand Kit & Email Signature System",
        aspect: "3/4",
        fit: "contain",
        items: [
          { src: "/work/gymrise/brand-kit.png", alt: "GYMRISE Brand Kit — iPad mockup" },
          { src: "/work/gymrise/email-mockup.png", alt: "GYMRISE Email Signature Design Bundle — iPad mockup" },
        ],
      },
      // Row 3 — Social media campaign strip
      {
        label: "Social Campaign — Top Performers & Testimonials",
        aspect: "4/5",
        fit: "cover",
        items: [
          { src: "/work/gymrise/04-top-clubs.jpg", alt: "Top Club Owners — monthly leaderboard" },
          { src: "/work/gymrise/06-marketing.jpg", alt: "Club Owner Spotlight — Todd Adamson" },
          { src: "/work/gymrise/1.jpg", alt: "Club Hall of Fame — monthly winners" },
          { src: "/work/gymrise/02-testimonial.jpg", alt: "Client Testimonial — Michael Scaff" },
          { src: "/work/gymrise/7.jpg", alt: "Client Testimonial — Patrick Flynn" },
        ],
      },
      // Row 4 — Sales / marketing creative
      {
        label: "Sales & Promo Creative",
        aspect: "4/3",
        fit: "cover",
        items: [
          { src: "/work/gymrise/03-pricing.jpg", alt: "Program Pricing Sheet" },
          { src: "/work/gymrise/05-offer.png", alt: "Vitals 2026 Conference Offer" },
        ],
      },
    ],
    pdfs: [
      { label: "Brand Guide", href: "/work/gymrise/brand-guide.pdf" },
    ],
  },
  {
    slug: "social-mulli",
    title: "Social Mulli",
    client: "Social Mulli",
    category: "Brand & Web Design",
    shortDescription:
      "Designed and built the Social Mulli website from scratch — plus the brand identity, OG visuals, and email signature system that complete the system.",
    whatIDid: [
      "Designed & built the Social Mulli website end-to-end",
      "Meta ad creative for Anytime Fitness campaigns",
      "Email signature system (dark + light modes)",
      "OG visuals, audit deliverables & sales collateral",
    ],
    tags: ["Web Design & Build", "Brand Identity", "Meta Ads", "Marketing Systems"],
    accentColor: "#3B6EFF",
    year: "2026",
    caseStudyAvailable: true,
    heroImage: "/work/social-mulli/hero.png",
    heroCompact: true,
    challenge:
      "Social Mulli was launching as a no-nonsense marketing partner for gyms and local businesses. The brand had to feel grown-up, confident, and refreshingly direct — opposite of the over-promising agency stereotype.\n\nIt needed a complete identity, a website that converted on first read, and assets the team could ship the day they went live.",
    approach:
      "I designed and built the Social Mulli website end-to-end — every page, every interaction, every section. Then I extended the same visual system across the OG image, email signatures, and audit deliverables.\n\nEverything reinforces one point of view: \"Marketing isn't a magic pill. It's the reps.\" The site, signatures, and pitch assets all share one voice — a brand that feels confident and consistent everywhere it shows up.",
    results: [
      { value: "1 Voice", label: "Across every touchpoint" },
      { value: "Full Stack", label: "Brand, web & systems" },
      { value: "Live", label: "Day one ready" },
      { value: "On-Brand", label: "Every team handoff" },
    ],
    resultsCaption: "Focus: One identity, shipped across web, email, and pitch.",
    gallery: [
      // Row 1 — THE BUILD: full Social Mulli website (three full-page screenshots)
      {
        label: "Designed & Built — The Social Mulli Website",
        aspect: "3/4",
        fit: "cover",
        items: [
          { src: "/work/social-mulli/site-01.jpg", alt: "Social Mulli website — homepage & marketing system pillars" },
          { src: "/work/social-mulli/site-02.jpg", alt: "Social Mulli website — services & client transformations" },
          { src: "/work/social-mulli/site-03.jpg", alt: "Social Mulli website — FAQs, results & next-step CTA" },
        ],
      },
      // Row 2 — Dashboard mockup + laptop website mockup, side by side
      {
        label: "Live Site & Device Mockup",
        aspect: "4/3",
        fit: "contain",
        items: [
          { src: "/work/social-mulli/05-concept.png", alt: "Social Mulli — marketing audit dashboard mockup" },
          { src: "/work/social-mulli/site-mockup.png", alt: "Social Mulli — site shown on device" },
        ],
      },
      // Row 3 — Brand touchpoints
      {
        label: "Brand Touchpoints",
        aspect: "1.91/1",
        fit: "cover",
        items: [
          { src: "/work/social-mulli/02-og.png", alt: "Social Mulli — brand positioning card" },
        ],
      },
      // Row — Meta ads campaigns (Anytime Fitness)
      {
        label: "Meta Ads — Anytime Fitness Campaigns",
        aspect: "4/5",
        fit: "contain",
        bg: "transparent",
        items: [
          { src: "/work/social-mulli/meta-ad-busy-mom.png", alt: "Anytime Fitness Meta ad — Busy Mom 40+ program" },
          { src: "/work/social-mulli/meta-ad-stay-strong.png", alt: "Anytime Fitness Meta ad — Stay Strong, Stay Steady (Ageless 65+)" },
          { src: "/work/social-mulli/meta-ad-franklin-moms.png", alt: "Anytime Fitness Meta ad — Franklin Moms: This Is Your Reset" },
        ],
      },
      // Row 3 — Email signature design bundle (iPad mockup)
      {
        label: "Email Signature Design Bundle",
        aspect: "3/4",
        fit: "contain",
        items: [
          { src: "/work/social-mulli/email-signature-bundle.png", alt: "Social Mulli Email Signature Design Bundle — iPad mockup" },
        ],
      },
      // Row 4 — Email signature system (dark + light modes)
      {
        label: "Email Signature System — Dark + Light",
        aspect: "2.4/1",
        fit: "cover",
        items: [
          { src: "/work/social-mulli/03-signature-dark.png", alt: "Email signature — dark mode" },
          { src: "/work/social-mulli/04-signature-light.png", alt: "Email signature — light mode" },
        ],
      },
    ],
    pdfs: [
      { label: "Marketing Audit Sample", href: "/work/social-mulli/marketing-audit.pdf" },
    ],
  },
  {
    slug: "rekmed",
    title: "RekMed",
    client: "RekMed",
    category: "Product & Content Marketing",
    shortDescription:
      "End-to-end marketing for a healthcare education brand, including product promotion, social content, and visual campaigns designed to build trust and drive engagement.",
    whatIDid: [
      "Product marketing and promotional campaign execution",
      "Social media content and visual assets across platforms",
      "Brand messaging and copy aligned with audience needs",
      "Structured content calendars for consistency and output",
    ],
    tags: ["Product Marketing", "Content Strategy", "Social Video"],
    accentColor: "#2DB891",
    year: "2025",
    caseStudyAvailable: true,
    heroImage: "/rekmed-hero.jpg",
    heroCompact: true,
    challenge:
      "RekMed was scaling its presence in the healthcare education space and needed a more elevated, cohesive digital experience to match its growth.\n\nThe opportunity: enhance social, refine visual consistency, and elevate product presentation — creating a more polished, trustworthy, and engaging experience for nursing students and their educators.",
    approach:
      "I focused on elevating the brand's overall digital presence through a strategy-first approach to content and design.\n\nThis included enhancing social media content, refining visual consistency, and improving product presentation across the website. I built structured content calendars and created cohesive visuals that aligned both educational value and product promotion.\n\nEvery touchpoint was designed to feel polished, intentional, and aligned with the brand's growth.",
    results: [
      { value: "5x/Week", label: "Consistent Content Execution" },
      { value: "Multi-Platform", label: "Content System Implementation" },
      { value: "Stronger", label: "Brand Consistency & Positioning" },
      { value: "Improved", label: "Engagement & Audience Trust" },
    ],
    resultsCaption: "Focus: Building consistency, trust, and conversion through strategic content.",
    gallery: [
      {
        label: "Product & Brand Photography",
        aspect: "3/2",
        fit: "cover",
        items: [
          { src: "/work/rekmed/01-product.jpg", alt: "RekMed branded product photography" },
        ],
      },
      {
        label: "Social Video Content",
        aspect: "9/16",
        fit: "cover",
        items: [
          { src: "/work/rekmed/video-01.mp4", alt: "RekMed social video", type: "video" },
          { src: "/work/rekmed/video-02.mp4", alt: "RekMed Instagram video", type: "video" },
          { src: "/work/rekmed/video-03.mp4", alt: "RekMed promo video", type: "video" },
          { src: "/work/rekmed/video-04.mp4", alt: "Nurses Week carousel video", type: "video" },
        ],
      },
      {
        label: "Promotional Stills",
        aspect: "3/4",
        fit: "cover",
        items: [
          { src: "/work/rekmed/02-poster.png", alt: "RekMed promotional poster" },
          { src: "/work/rekmed/03-photo.png", alt: "RekMed product detail" },
          { src: "/work/rekmed/04-photo.png", alt: "RekMed lifestyle photo" },
        ],
      },
    ],
  },
  {
    slug: "explorations",
    title: "Explorations",
    client: "Personal",
    category: "Concept Work & Creative Experiments",
    shortDescription:
      "A collection of concept-driven visuals, mockups, and creative explorations across branding, advertising, and digital design.",
    whatIDid: [
      "Brand concept development",
      "Mockup and visual design",
      "Advertising concept exploration",
      "Experimental digital design",
    ],
    tags: ["Mockups", "Concept Design", "Visual Experiments"],
    accentColor: "#F4A261",
    year: "Ongoing",
    caseStudyAvailable: true,
    heroImage: "/work/explorations/02-concept.png",
    heroCompact: true,
    challenge:
      "A running sketchbook of ideas — campaigns I'd ship if the brief existed, brand systems I'd want to build, type and layout experiments.\n\nLess a project, more a feed of thinking.",
    approach:
      "I treat exploration as practice. Anything that catches my eye — a phrase, a layout, a typographic moment — gets a mockup. Some become campaigns. Some stay studies. All of them sharpen the work I ship at the companies I work for.",
    gallery: [
      {
        label: "Campaign Concept",
        aspect: "16/9",
        fit: "cover",
        items: [
          { src: "/work/explorations/01-glove.jpg", alt: "Boxing concept campaign — Don't Fear the Fight" },
        ],
      },
      {
        label: "Email Marketing Mockups — Brand Studies",
        aspect: "3/5",
        fit: "cover",
        items: [
          { src: "/work/explorations/email-01-glossier.jpg", alt: "Glossier — email design study" },
          { src: "/work/explorations/email-02-quizlet.jpg", alt: "Quizlet — email design study" },
          { src: "/work/explorations/email-03-notion.jpg", alt: "Notion — email design study" },
        ],
      },
      {
        label: "Concept Studies",
        aspect: "1/1",
        fit: "cover",
        items: [
          { src: "/work/explorations/03-concept.png", alt: "Concept exploration" },
        ],
      },
    ],
  },
];
