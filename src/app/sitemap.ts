import type { MetadataRoute } from "next";
import { articles } from "@/data/blog";

const SITE_URL = "https://fortune5.in";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: Array<{ path: string; priority: number; changeFrequency: "weekly" | "monthly" | "yearly" }> = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/about/", priority: 0.8, changeFrequency: "monthly" },
    { path: "/services/", priority: 0.9, changeFrequency: "weekly" },
    { path: "/blog/", priority: 0.8, changeFrequency: "weekly" },
    { path: "/contact/", priority: 0.8, changeFrequency: "monthly" },
    { path: "/gallery/", priority: 0.7, changeFrequency: "monthly" },
    { path: "/trophy/", priority: 0.6, changeFrequency: "monthly" },
    { path: "/testimonials/", priority: 0.6, changeFrequency: "monthly" },
    { path: "/privacy/", priority: 0.3, changeFrequency: "yearly" },
    { path: "/terms/", priority: 0.3, changeFrequency: "yearly" },
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((r) => ({
    url: `${SITE_URL}${r.path === "/" ? "/" : r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const articleEntries: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${SITE_URL}/blog/${a.slug}/`,
    lastModified: a.date ? new Date(a.date) : lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...articleEntries];
}
