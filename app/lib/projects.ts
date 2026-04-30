export type ProjectCategory = "full stack" | "e-commerce" | "general it" | "security";

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  tags: string[];
  blurb: string;
  features: string[];
  meta: string[];
};

export const projects: Project[] = [
  {
    id: "helpdesk-dashboard",
    title: "IT Helpdesk Dashboard UI",
    category: "general it",
    tags: ["dashboard", "productivity", "ui-ux"],
    blurb: "A practical technician dashboard UI: organize tickets, track status, and keep workflows fast.",
    features: [
      "Ticket overview cards",
      "Status filters (open/in progress/resolved)",
      "Responsive layout for tablets & phones",
      "Clean component structure you can expand",
    ],
    meta: ["General IT", "Dashboard"],
  },
  {
    id: "ecommerce-front",
    title: "E-commerce Storefront Concept",
    category: "e-commerce",
    tags: ["e-commerce", "ui-ux", "productivity"],
    blurb: "A storefront concept focused on browsing UX: product grid, categories, and a smooth conversion flow.",
    features: [
      "Category browsing UI",
      "Product card hover details",
      "Responsive product grid",
      "CTA placement for conversion",
    ],
    meta: ["E-commerce", "UI/UX"],
  },
  {
    id: "security-audit-tool",
    title: "Security Audit Checklist Tool",
    category: "security",
    tags: ["security", "productivity", "ui-ux"],
    blurb: "A guided checklist tool for security reviews. It’s structured to make audits repeatable and easy to follow.",
    features: [
      "Checklist steps + completion states",
      "Clear section layout",
      "Export-ready structure (UI)",
      "Accessibility-first components",
    ],
    meta: ["Security", "UI/UX"],
  },
  {
    id: "portfolio-blog-ui",
    title: "Full Stack Portfolio Blog UI",
    category: "full stack",
    tags: ["ui-ux", "productivity"],
    blurb: "A portfolio/blog UI concept with polished cards, filters, and an easy reading experience.",
    features: [
      "Blog list cards + tag filtering",
      "Post layout templates",
      "Reusable design system patterns",
      "Responsive typography",
    ],
    meta: ["Full stack", "Productivity"],
  },
  {
    id: "admin-panel-ui",
    title: "Admin Panel UI for Small Business",
    category: "full stack",
    tags: ["dashboard", "ui-ux", "productivity"],
    blurb: "An admin panel UI concept with quick navigation, tables/cards, and consistent spacing.",
    features: [
      "Responsive grid-based layout",
      "Reusable cards + badges",
      "Friendly empty states (UI)",
      "Consistent header patterns",
    ],
    meta: ["Full stack", "Dashboard"],
  },
  {
    id: "it-setup-guides",
    title: "IT Setup & Troubleshooting Guides",
    category: "general it",
    tags: ["productivity", "ui-ux"],
    blurb: "Documentation-style pages to help users troubleshoot. Focused on readability and quick scanning.",
    features: [
      "Readable section layouts",
      "Quick tips + callouts (UI)",
      "Mobile-first typography",
      "Clear step-by-step structure",
    ],
    meta: ["General IT", "Productivity"],
  },
];

