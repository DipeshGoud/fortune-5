import {
  ShieldCheck,
  FileSearch,
  Users,
  Building2,
  HeartPulse,
  Compass,
} from "lucide-react";

export const blogCategories = [
  { id: "all", label: "All Articles", icon: Compass },
  { id: "risk-management", label: "Risk Management", icon: ShieldCheck },
  { id: "claims", label: "Claims", icon: FileSearch },
  { id: "employee-benefits", label: "Employee Benefits", icon: Users },
  { id: "corporate", label: "Corporate Insurance", icon: Building2 },
  { id: "health-personal", label: "Health & Personal", icon: HeartPulse },
] as const;

export type BlogCategoryId = (typeof blogCategories)[number]["id"];

export interface ArticleSection {
  type: "paragraph" | "heading" | "list" | "quote" | "callout" | "stats";
  text?: string;
  title?: string;
  items?: string[];
  author?: string;
  role?: string;
  stats?: { value: string; label: string }[];
}

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: Exclude<BlogCategoryId, "all">;
  categoryLabel: string;
  coverImage: string;
  alt: string;
  date: string;
  readTime: string;
  author: { name: string; role: string };
  tags: string[];
  featured?: boolean;
  content: ArticleSection[];
  related?: string[];
}

const img = (id: string) =>
  `https://images.unsplash.com/${id}?w=1400&auto=format&fit=crop&q=80`;

export const articles: Article[] = [
  {
    slug: "annual-risk-review-checklist",
    title: "The Annual Risk Review: A Practical Checklist for Indian Businesses",
    excerpt:
      "A structured, field-tested checklist to audit your insurance portfolio every year — and close the gaps that most companies quietly carry into renewal season.",
    category: "risk-management",
    categoryLabel: "Risk Management",
    coverImage: img("photo-1460925895917-afdab827c52f"),
    alt: "Business team reviewing financial risk charts and insurance documents",
    date: "2026-01-18",
    readTime: "7 min read",
    author: { name: "Kaushal Shah", role: "Principal Consultant, Fortune 5" },
    tags: ["Risk Audit", "Renewals", "Coverage Gaps"],
    featured: true,
    content: [
      {
        type: "paragraph",
        text: "Most businesses only look at their insurance twice a year — once when the premium invoice arrives, and once when a claim is rejected. The first is a bad moment to think about cover, and the second is a worse one. In our 75 years of advising companies across Maharashtra, the most expensive gaps we have found were almost always silent: the cover lapsed, the valuation drifted, the new line of business was simply never added to the policy.",
      },
      {
        type: "heading",
        text: "Why a once-a-year audit beats a once-a-decade review",
      },
      {
        type: "paragraph",
        text: "Insurance is not a purchase, it is a portfolio. Like any portfolio, it drifts. Sums insured are set against last year's balance sheet. New machinery arrives and is not declared. A product line is added, but the liability policy still describes the old one. An annual review — done properly, not as a formality — catches each of these before a claim ever tests them.",
      },
      {
        type: "list",
        title: "The 30-minute checklist we run with every client",
        items: [
          "Re-state every sum insured against the current year's asset register and book value — underinsurance is the single most common silent gap.",
          "Confirm every location is listed: rented warehouses, temporary storage, contractor premises and co-working space included.",
          "Review the policy wording for new perils in your region — flood zones change, and named-peril wordings do not update themselves.",
          "Check that your declared turnover drives the business interruption sum — an incorrect gross profit figure quietly caps your recovery.",
          "Verify all statutory covers — Workmen's Compensation, third-party motor, and shop/factory act compliance — before renewal.",
          "List every vehicle, employee and key person that should appear on a schedule, and remove the ones that should not.",
        ],
      },
      {
        type: "callout",
        title: "The underinsurance trap",
        text: "Many policies carry an 'average clause' — if you insure a ₹10 crore building for ₹7 crore, a claim is settled at only 70% of the loss, not ₹7 crore. This single clause is responsible for more business disappointment than any other we handle.",
      },
      {
        type: "quote",
        text: "Insurance should be reviewed the way you review your balance sheet — annually, with a pencil, and with someone who will tell you the truth.",
        author: "Kaushal Shah",
        role: "Principal Consultant, Fortune 5",
      },
      {
        type: "heading",
        text: "Do it before renewal, not after the claim",
      },
      {
        type: "paragraph",
        text: "The best time to negotiate a broader policy is before you have a loss. Once a claim is in the pipeline, insurers hold most of the cards. Running this checklist 45–60 days ahead of your renewal date leaves room to renegotiate sums, add covers and fix wordings — at the price of last year's risk profile, not next year's.",
      },
      {
        type: "callout",
        text: "Book a free risk audit with a Fortune 5 advisor at any point in your policy year. Our audits have uncovered recoverable coverage gaps in over 200 corporate portfolios.",
      },
    ],
  },
  {
    slug: "seven-claims-mistakes",
    title: "7 Claims Mistakes That Cost Policyholders Money",
    excerpt:
      "Late intimation, DIY documentation, and 'verbal only' reporting are just three of the errors that shrink settlements. Here is how to avoid all seven.",
    category: "claims",
    categoryLabel: "Claims",
    coverImage: img("photo-1554224155-6726b3ff858f"),
    alt: "Close-up of insurance claim documents with calculator",
    date: "2025-12-09",
    readTime: "6 min read",
    author: { name: "Priya Nair", role: "Head of Claims Advocacy, Fortune 5" },
    tags: ["Claims", "Settlements", "Documentation"],
    content: [
      {
        type: "paragraph",
        text: "A claim is when insurance stops being paperwork and becomes a promise. It is also when most mistakes get made — not out of dishonesty, but out of haste and confusion. Having handled thousands of settlements — from a ₹4.2 crore flood loss to a family health claim of a few lakh — we can tell you that most disputes begin exactly where the policyholder had a chance to do something different.",
      },
      {
        type: "heading",
        text: "The seven mistakes, in the order people make them",
      },
      {
        type: "list",
        title: "From the first phone call to the final cheque",
        items: [
          "Late intimation — many policies require intimation within a specific period; delaying even 48 hours invites scrutiny.",
          "Relying on a verbal report — no intimation exists until it is in writing, with a reference number.",
          "Clearing the site before photos and a surveyor's inspection — evidence is gone before the case begins.",
          "Not keeping the damaged item — insurers have a right to inspect the very thing you are claiming for.",
          "Fixing first, asking later — repairs carried out before approval can be treated as admitted loss.",
          "Sparse documentation — missing invoices, ledger extracts and proof of loss postpone settlement by weeks.",
          "Signing anything under pressure — including 'full and final settlement' letters before your loss is fully quantified.",
        ],
      },
      {
        type: "callout",
        title: "The golden hour",
        text: "In the first 24 hours after a loss: secure the site, take dated photos from multiple angles, list everything damaged, and put your intimation in writing. Do these four things and you have already won half the dispute.",
      },
      {
        type: "quote",
        text: "Insurers settle what is provable. Our job is to make your claim provable from minute one — and to push back when the provable is undervalued.",
        author: "Priya Nair",
        role: "Head of Claims Advocacy, Fortune 5",
      },
      {
        type: "stats",
        stats: [
          { value: "45", label: "days — average settlement on well-documented claims" },
          { value: "98%", label: "of our claims settle without legal escalation" },
          { value: "6 hrs", label: "— typical surveyor on-site response in Mumbai" },
        ],
      },
      {
        type: "heading",
        text: "When to call in an advocate",
      },
      {
        type: "paragraph",
        text: "If a surveyor's report undervalues your loss, or an insurer raises a clause dispute, do not argue over email. An independent claims advocate reads the policy language, the surveyor's methodology and the loss calculation together — and usually finds a defect in at least one of the three.",
      },
    ],
  },
  {
    slug: "group-health-insurance-employee-wellbeing",
    title: "Group Health Insurance Beyond the Tender: Designing Benefits Your People Actually Use",
    excerpt:
      "A group mediclaim policy is not a commodity. Here is how corporates can move from cheapest-cover to a benefits design that retains talent and lowers claims friction.",
    category: "employee-benefits",
    categoryLabel: "Employee Benefits",
    coverImage: img("photo-1521737604893-d14cc237f11d"),
    alt: "Colleagues collaborating in a modern office meeting",
    date: "2025-11-24",
    readTime: "8 min read",
    author: { name: "Rajesh Kulkarni", role: "Senior Advisor, Employee Benefits" },
    tags: ["Group Mediclaim", "HR", "Talent Retention"],
    featured: true,
    content: [
      {
        type: "paragraph",
        text: "Most corporates buy group health the way they buy stationery — a tender, a spreadsheet, a sign-off. The result is a policy that wins the procurement table but loses the people. The employees who should feel protected do not know their coverage, and HR spends the year managing escalations that a well-designed plan would never generate.",
      },
      {
        type: "heading",
        text: "The difference between cover and coverage",
      },
      {
        type: "paragraph",
        text: "Cover is the number printed in the certificate. Coverage is what an employee can actually access — which hospitals are in the network, whether pre-existing conditions are handled fairly, how quickly a cashless card works at midnight in a city your TPA barely knows. We have seen ₹10 lakh plans feel worse than ₹3 lakh plans simply because of network depth and claims behaviour.",
      },
      {
        type: "list",
        title: "Five design choices that move the needle",
        items: [
          "Corporate buffer pools that absorb high-cost chronic cases without penalising healthy employees.",
          "Maternity and newborn cover that matches your workforce demographics, not the minimum statutory line.",
          "Tele-consultation and wellness riders that turn a sick-care policy into a health benefit employees use monthly.",
          "A parent-inclusive variant — for a generation that supports ageing parents, this alone can shift an offer decision.",
          "A named claims contact per company, so an employee's question never gets lost in a TPA queue.",
        ],
      },
      {
        type: "callout",
        title: "What our clients measure",
        text: "After restructuring corporate buffer pools for a 4,500-employee technology firm, premium cost fell 16% while employee satisfaction rose — because the design changed, not just the price.",
      },
      {
        type: "quote",
        text: "The cheapest policy is only cheap until the first employee's claim is delayed. After that, it is the most expensive thing your employer brand can buy.",
        author: "Rajesh Kulkarni",
        role: "Senior Advisor, Employee Benefits, Fortune 5",
      },
      {
        type: "heading",
        text: "An annual design review, not an annual auction",
      },
      {
        type: "paragraph",
        text: "Instead of re-tendering your group policy each year, run a claims-data review with your advisor: which treatments drive your claim ratio, which hospitals your people actually use, where cashless approvals stall. Design next year's plan around that evidence. It is the same budget, spent where employees feel it.",
      },
    ],
  },
  {
    slug: "cyber-insurance-for-smes",
    title: "Cyber Insurance for Indian SMEs: What a Real Policy Covers (and What It Doesn't)",
    excerpt:
      "Ransomware is no longer a large-corporate problem. A practical guide to the cyber covers every mid-size business should carry — and the exclusions to read carefully.",
    category: "corporate",
    categoryLabel: "Corporate Insurance",
    coverImage: img("photo-1563986768609-322da13575f3"),
    alt: "Digital security concept with locks and data streams",
    date: "2025-10-30",
    readTime: "9 min read",
    author: { name: "Kaushal Shah", role: "Principal Consultant, Fortune 5" },
    tags: ["Cyber", "SME", "Liability"],
    content: [
      {
        type: "paragraph",
        text: "The most dangerous myth in Indian business insurance today is that cyber attacks happen to banks and airlines. In our experience, the typical target is a 60-person manufacturing firm with a server room, an ERP system and a list of suppliers' bank details. The attacker does not need to break in loudly — they only need a phishing click and one unprotected backup.",
      },
      {
        type: "heading",
        text: "What a modern cyber policy should cover",
      },
      {
        type: "list",
        title: "The five pillars of a serious cyber policy",
        items: [
          "First-party response: forensics, legal counsel, notification costs and credit monitoring for affected customers.",
          "Business interruption from a cyber event — including the period you cannot bill clients.",
          "Ransom and extortion costs, with a proper negotiation and crypto-payment process in place.",
          "Third-party liability for data breaches, privacy violations and network security failure.",
          "Regulatory defence and fines assistance, including PCI-DSS and data protection obligations.",
        ],
      },
      {
        type: "callout",
        title: "Read the exclusions",
        text: "Standard wordings exclude 'war-like' acts and often require specific security controls to be in place. A cyber policy that is not paired with basics — patched systems, MFA, tested backups — is a policy waiting for a rejection letter.",
      },
      {
        type: "quote",
        text: "Insurers underwrite cyber risk based on your hygiene as much as your premium. The business that fixes its backups first buys the best cover at the best price.",
        author: "Kaushal Shah",
        role: "Principal Consultant, Fortune 5",
      },
      {
        type: "heading",
        text: "Where Indian SMEs usually start",
      },
      {
        type: "paragraph",
        text: "Begin with a cyber-liability audit: map your data (what do you hold, from whom, on what systems), identify single points of failure, and test one restore. Then insure what remains after the basics are fixed. The premium will be lower, the cover stronger, and the insurer far more willing to pay a claim.",
      },
    ],
  },
  {
    slug: "family-health-insurance-buying-guide",
    title: "How to Buy Family Health Insurance in 2026: A Buyer's Guide",
    excerpt:
      "Floater or individual? Which riders justify their premium? And why the hospital network matters more than the sum insured. A plain-language guide for Indian families.",
    category: "health-personal",
    categoryLabel: "Health & Personal",
    coverImage: img("photo-1631549916768-4119b2e5f926"),
    alt: "Happy Indian family at home in good health",
    date: "2026-01-05",
    readTime: "8 min read",
    author: { name: "Dr. Ananya Merchant", role: "Advisor, Health & Personal Lines" },
    tags: ["Health Insurance", "Family Floater", "Buying Guide"],
    featured: true,
    content: [
      {
        type: "paragraph",
        text: "Every January, families across India open renewal notices, glance at the premium, and click pay. That is not buying insurance — that is re-buying last year's decision without a second look. Health insurance is the one policy most families rely on most and understand least. This guide walks through the choices that actually matter in 2026.",
      },
      {
        type: "heading",
        text: "Floater or individual policies?",
      },
      {
        type: "paragraph",
        text: "A family floater shares one sum insured across members. It is efficient while claims are small and rare — one member can draw the full amount when needed. But if a parent has a chronic condition, that same shared pool can be exhausted by a single hospitalisation. Many families now buy a floater for routine care plus a small individual top-up for the parent most likely to need it. The maths changes every year; review it annually.",
      },
      {
        type: "list",
        title: "Riders worth their premium",
        items: [
          "Restoration benefit — the sum insured 'renews' if exhausted by one illness, protecting a second claim in the same year.",
          "No-claim bonus protection — pays to keep your accumulated bonus even after you finally make a claim.",
          "OPD and consultation cover — small per-claim value, but for young families it pays for itself in doctor visits.",
          "Maternity benefit with newborn cover — if you are planning a family, compare this carefully; sub-limits vary wildly.",
          "Critical illness lump sum — a fixed payout on diagnosis, distinct from hospitalisation cover.",
        ],
      },
      {
        type: "callout",
        title: "Network beats sum insured",
        text: "A ₹5 lakh policy in a city where your hospital is 'out of network' can cost you lakhs in out-of-pocket. Check the TPA's hospital list for the hospitals you would actually use — before you buy, not during a crisis.",
      },
      {
        type: "stats",
        stats: [
          { value: "10,000+", label: "cashless hospitals reachable via top network TPAs" },
          { value: "₹10L", label: "floater sum insured now typical for a Mumbai family of four" },
          { value: "24/7", label: "claim desk support we provide to every family client" },
        ],
      },
      {
        type: "quote",
        text: "Buy for the worst hospitalisation your family could face, in the best hospital within your reach — then let the premium fight for itself.",
        author: "Dr. Ananya Merchant",
        role: "Advisor, Health & Personal Lines, Fortune 5",
      },
    ],
  },
  {
    slug: "mumbai-monsoon-flood-insurance",
    title: "Mumbai Monsoon 2026: Why Flood Cover Is Not Automatic",
    excerpt:
      "The fine print between 'storm' and 'flood' has cost Mumbai businesses crores. What to check in your policy before the rain returns.",
    category: "risk-management",
    categoryLabel: "Risk Management",
    coverImage: img("photo-1518770660439-4636190af475"),
    alt: "Heavy monsoon rain over Mumbai city skyline",
    date: "2025-11-12",
    readTime: "5 min read",
    author: { name: "Fortune 5 Editorial", role: "Risk Advisory Team" },
    tags: ["Flood", "Monsoon", "Property"],
    content: [
      {
        type: "paragraph",
        text: "Every monsoon, we take calls from businesses discovering that their 'fire and allied perils' policy does not actually cover the water rising up their street. The word on the certificate says 'storm' — and the loss was a flood. In insurance, those are two different perils with two very different claims outcomes.",
      },
      {
        type: "heading",
        text: "Storm, flood, inundation: the fine print",
      },
      {
        type: "paragraph",
        text: "A standard fire policy lists named perils. Storm, cyclone and tempest are usually covered; 'flood' and 'inundation' may require a separate extension or a specific inclusion in the wording. For a city that floods annually, that distinction is not theoretical — it is the difference between a settled claim and a disputed one.",
      },
      {
        type: "list",
        title: "Five monsoon checks before the season",
        items: [
          "Confirm 'flood and inundation' is named in your wording — do not assume the broker added it.",
          "Verify each location's flood history is declared; non-disclosure of a known risk can void cover.",
          "Review your sum insured against current reconstruction cost — the average clause bites hardest in water claims.",
          "Keep stock valuation records current — flood claims are disputed most on inventory valuation.",
          "Photograph premises and machinery at season start; dated evidence strengthens every water claim.",
        ],
      },
      {
        type: "quote",
        text: "Mumbai's risk is not a secret — but many policies are written as if it were. Read the wording before the rain.",
        author: "Fortune 5 Risk Advisory Team",
      },
      {
        type: "callout",
        text: "Send us your policy wording before this monsoon. We will mark every water-related clause in plain language — free, and without obligation.",
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getRelated(article: Article, count = 3): Article[] {
  const pool = articles.filter((a) => a.slug !== article.slug);
  const scored = pool
    .map((a) => ({
      article: a,
      score:
        (a.category === article.category ? 2 : 0) +
        a.tags.filter((t) => article.tags.includes(t)).length,
    }))
    .sort((x, y) => y.score - x.score);
  return scored.slice(0, count).map((s) => s.article);
}

export function formatDate(iso: string): string {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
