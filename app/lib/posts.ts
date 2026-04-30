export type Post = {
  slug: string;
  title: string;
  tags: string[];
  excerpt: string;
  readTime: string;
  updated: string;
  content: Array<{ type: "heading" | "paragraph"; text: string }>;
};

export const posts: Post[] = [
  {
    slug: "security-audit-checklist",
    title: "Security Audit Checklist: What to Check First",
    tags: ["security", "it", "full stack"],
    excerpt: "A practical order for auditing systems without getting overwhelmed.",
    readTime: "5 min read",
    updated: "Updated: 2026",
    content: [
      { type: "heading", text: "1) Confirm your basics" },
      {
        type: "paragraph",
        text: "Start with the most common issues: account access, patch level, and basic configuration. Fixing these first reduces risk quickly.",
      },
      { type: "heading", text: "2) Check who can do what" },
      {
        type: "paragraph",
        text: "Review permissions and roles. If accounts have more access than they need, your attack surface grows.",
      },
      { type: "heading", text: "3) Look for exposed services" },
      {
        type: "paragraph",
        text: "Identify services that are reachable from the internet and verify they are secure and correctly configured.",
      },
      { type: "heading", text: "4) Document your results" },
      {
        type: "paragraph",
        text: "A short, clear log helps you track fixes and repeat audits later. Your checklist should be repeatable.",
      },
    ],
  },
  {
    slug: "ecommerce-ux-small-changes",
    title: "E-commerce UX: Small Changes That Improve Store Conversions",
    tags: ["e-commerce", "full stack", "ui-ux"],
    excerpt: "How to reduce friction: navigation, product cards, and CTA clarity.",
    readTime: "6 min read",
    updated: "Updated: 2026",
    content: [
      { type: "heading", text: "Make product cards obvious" },
      {
        type: "paragraph",
        text: "If customers can’t quickly understand price, availability, and key features, they leave. Keep the card layout consistent and highlight the important parts.",
      },
      { type: "heading", text: "Reduce clicks to the “next step”" },
      {
        type: "paragraph",
        text: "Make sure the path from browsing to checkout is short. If you have multiple CTAs, they should all lead to the same goal.",
      },
      { type: "heading", text: "Filter and search should feel instant" },
      {
        type: "paragraph",
        text: "Even with smaller catalogs, strong filtering improves trust. Use clear labels and friendly empty states.",
      },
      { type: "heading", text: "Use the theme to guide attention" },
      {
        type: "paragraph",
        text: "Your blue/gold palette can do more than look nice—use it for CTAs, highlights, and focus states so users always know where to look.",
      },
    ],
  },
  {
    slug: "helpdesk-dashboard-real-technicians",
    title: "Designing a Helpdesk Dashboard for Real Technicians",
    tags: ["it", "full stack", "productivity"],
    excerpt: "Layout patterns that make ticket triage faster and calmer.",
    readTime: "4 min read",
    updated: "Updated: 2026",
    content: [
      { type: "heading", text: "Triage must be obvious" },
      {
        type: "paragraph",
        text: "Technicians don’t want to hunt. Use strong hierarchy: priority and status first, details second. Reduce “visual noise” so decisions feel fast.",
      },
      { type: "heading", text: "Filters should match real workflows" },
      {
        type: "paragraph",
        text: "Use statuses that match your team’s process. Give quick filter buttons and keep the UI consistent across screen sizes.",
      },
      { type: "heading", text: "Make the interface friendly on mobile" },
      {
        type: "paragraph",
        text: "Many technicians work on the go. Make spacing generous and buttons tappable. Responsive typography reduces errors.",
      },
    ],
  },
];

