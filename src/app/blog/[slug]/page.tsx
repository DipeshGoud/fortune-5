import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Calendar,
  Clock,
  CheckCircle2,
  Sparkles,
  Lightbulb,
} from "lucide-react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import ShareBar from "@/components/ShareBar";
import ScrollReveal from "@/components/ScrollReveal";
import { articles, getArticle, getRelated, formatDate, type ArticleSection } from "@/data/blog";

// ─────────────────────────────────────────────────────────────
// Static paths — prerender every article at build time
// ─────────────────────────────────────────────────────────────
export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Article Not Found | Fortune 5" };
  return {
    title: `${article.title} | Fortune 5 Blog`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [article.coverImage],
    },
  };
}

function SectionRenderer({ section }: { section: ArticleSection }) {
  switch (section.type) {
    case "heading":
      return (
        <h2 className="mt-12 mb-5 font-cormorant text-2xl font-bold leading-tight tracking-tight text-[#01327a] sm:text-3xl">
          <span className="mr-2 inline-block h-6 w-1.5 translate-y-0.5 rounded-full bg-gradient-to-b from-[#F5D77F] to-[#C59B27]" />
          {section.text}
        </h2>
      );
    case "paragraph":
      return (
        <p className="mb-5 text-[15px] leading-[1.9] text-slate-600 sm:text-[16px] sm:leading-[1.95]">{section.text}</p>
      );
    case "list":
      return (
        <div className="mb-6 rounded-[1.2rem] border border-slate-200/80 bg-white p-5 sm:p-6">
          {section.title && (
            <p className="mb-3 inline-flex items-center gap-2 text-xs font-extrabold tracking-[0.12em] text-[#9A7A1A] uppercase">
              <BookOpen className="h-4 w-4 text-[#C59B27]" /> {section.title}
            </p>
          )}
          <ul className="space-y-3">
            {section.items?.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-[14px] leading-relaxed text-slate-700 sm:text-[15px]">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#C59B27]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      );
    case "quote":
      return (
        <blockquote className="relative my-8 overflow-hidden rounded-[1.4rem] bg-[#01327a] p-6 text-white sm:p-8">
          <span className="absolute -right-2 -top-6 font-cormorant text-[7rem] font-bold leading-none text-[#F5D77F]/15">
            &ldquo;
          </span>
          <svg viewBox="0 0 24 24" className="mb-4 h-8 w-8 fill-[#F5D77F]" aria-hidden>
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <p className="font-cormorant text-xl font-medium leading-snug text-white sm:text-2xl">{section.text}</p>
          {section.author && <p className="mt-4 text-sm font-extrabold tracking-wide text-[#F5D77F]">{section.author}</p>}
          {section.role && <p className="mt-0.5 text-xs font-medium text-slate-300">{section.role}</p>}
        </blockquote>
      );
    case "callout":
      return (
        <div className="relative my-7 overflow-hidden rounded-[1.4rem] border border-[#C59B27]/25 bg-gradient-to-br from-amber-50 to-[#F9F8F6] p-6 sm:p-7">
          <div className="absolute right-0 top-0 h-20 w-20 rounded-bl-full bg-[#C59B27]/10" />
          <div className="flex items-start gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#01327a] text-[#F5D77F]">
              <Lightbulb className="h-5 w-5" />
            </span>
            <div>
              {section.title && (
                <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#8A6A10]">{section.title}</p>
              )}
              <p className="mt-1.5 text-[14px] leading-relaxed text-[#3c3412] sm:text-[15px]">{section.text}</p>
            </div>
          </div>
        </div>
      );
    case "stats":
      return (
        <div className="my-7 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {section.stats?.map((s, i) => (
            <div key={i} className="rounded-[1.2rem] border border-slate-200/80 bg-white p-5 text-center shadow-sm">
              <p className="font-cormorant text-3xl font-bold text-[#9A7A1A]">{s.value}</p>
              <p className="mt-1.5 text-[11px] font-bold leading-snug tracking-wide text-slate-500 uppercase">{s.label}</p>
            </div>
          ))}
        </div>
      );
    default:
      return null;
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const related = getRelated(article);
  const authorInitials = article.author.name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F9F8F6] text-[#01327a] selection:bg-amber-100 selection:text-amber-900">
      <TopBar />
      <Navbar />

      {/* ── ARTICLE HERO ── */}
      <section className="relative isolate overflow-hidden bg-[#01327a] pt-[148px] sm:pt-[166px] lg:pt-[182px] pb-56 sm:pb-64 lg:pb-72">
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(197,155,39,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(197,155,39,0.5) 1px, transparent 1px)",
            backgroundSize: "52px 52px",
          }}
        />
        <div className="absolute -left-24 top-10 h-[26rem] w-[26rem] rounded-full bg-[#C59B27]/10 blur-3xl pointer-events-none" />
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C59B27]/40 to-transparent" />

        <div className="relative mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-10">
          <ScrollReveal variant="fadeUp" className="w-full">
          <nav aria-label="Breadcrumb" className="mb-8 inline-flex flex-wrap items-center gap-2 text-[11px] font-bold tracking-[0.14em] text-slate-300 uppercase">
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <span className="h-2 w-2 rounded-full bg-[#C59B27]/60" />
            <Link href="/blog" className="transition-colors hover:text-white">
              Blog
            </Link>
            <span className="h-2 w-2 rounded-full bg-[#C59B27]/60" />
            <span className="text-[#F5D77F]">{article.categoryLabel}</span>
          </nav>

          <div className="max-w-[820px]">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#C59B27]/25 bg-[#C59B27]/10 px-3.5 py-1.5 text-[10px] font-extrabold tracking-[0.16em] text-[#F5D77F] uppercase">
              <Sparkles className="h-3 w-3" /> {article.categoryLabel}
            </span>
            <h1 className="font-cormorant text-[2.2rem] font-bold leading-[1.02] tracking-[-0.03em] text-white sm:text-5xl lg:text-[3.4rem]">
              {article.title}
            </h1>
            <p className="mt-5 max-w-2xl text-[15px] leading-8 text-slate-300 sm:text-lg">{article.excerpt}</p>

            <div className="mt-7 flex flex-wrap items-center gap-4 border-t border-white/10 pt-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F5D77F] text-xs font-extrabold text-[#01327a]">
                {authorInitials}
              </span>
              <div>
                <p className="text-sm font-extrabold text-white">{article.author.name}</p>
                <p className="text-xs font-medium text-slate-400">{article.author.role}</p>
              </div>
              <div className="ml-1 hidden h-8 w-px bg-white/10 sm:block" />
              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-300">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5 text-[#C59B27]" /> {formatDate(article.date)}
                </span>
                <span className="h-1 w-1 rounded-full bg-slate-500" />
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-[#C59B27]" /> {article.readTime}
                </span>
              </div>
            </div>
          </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── COVER IMAGE (overlaps hero) ── */}
      <section className="relative z-20 px-5 sm:px-8 lg:px-10">
        <ScrollReveal variant="fadeUp" delay={0.1} className="w-full">
        <div className="mx-auto -mt-40 w-full max-w-[1180px] sm:-mt-48 lg:-mt-52">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[1.4rem] border border-white/10 bg-slate-800 shadow-[0_24px_70px_rgba(1,19,49,0.35)] sm:rounded-[1.6rem]">
            <Image src={article.coverImage} alt={article.alt} fill priority className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>
        </ScrollReveal>
      </section>

      {/* ── BODY ── */}
      <section className="pb-10 pt-10 sm:pt-12 lg:pb-16">
        <div className="mx-auto grid w-full max-w-[1180px] grid-cols-1 gap-10 px-5 sm:px-8 lg:grid-cols-[minmax(0,720px)_260px] lg:px-10 lg:gap-16">
          {/* Article content */}
          <ScrollReveal variant="fadeUp" className="w-full min-w-0">
          <article className="min-w-0 max-w-[720px]">
            {/* drop cap first paragraph styling via first-letter */}
            <div className="[&>p:first-of-type]:text-[17px] [&>p:first-of-type]:text-slate-800 [&>p:first-of-type]:first-letter:float-left [&>p:first-of-type]:first-letter:mr-3 [&>p:first-of-type]:first-letter:mt-1 [&>p:first-of-type]:first-letter:font-cormorant [&>p:first-of-type]:first-letter:text-[3.2rem] [&>p:first-of-type]:first-letter:font-bold [&>p:first-of-type]:first-letter:leading-[0.85] [&>p:first-of-type]:first-letter:text-[#C59B27]">
              {article.content.map((section, i) => (
                <SectionRenderer key={i} section={section} />
              ))}
            </div>

            {/* tags */}
            <div className="mt-10 flex flex-wrap items-center gap-2 border-t border-slate-200 pt-6">
              <span className="text-xs font-extrabold uppercase tracking-widest text-slate-500">Topics:</span>
              {article.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/blog?q=${encodeURIComponent(tag.toLowerCase())}`}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-[#01327a] transition hover:border-[#C59B27]/40 hover:text-[#9A7A1A]"
                >
                  {tag}
                </Link>
              ))}
            </div>

            {/* author card */}
            <div className="mt-8 flex flex-col gap-4 rounded-[1.4rem] border border-slate-200/80 bg-white p-6 sm:flex-row sm:items-center sm:p-7">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#01327a] text-sm font-extrabold text-[#F5D77F]">
                {authorInitials}
              </span>
              <div className="flex-1">
                <p className="text-sm font-extrabold text-[#01327a]">{article.author.name}</p>
                <p className="text-xs font-medium text-slate-500">{article.author.role} — 75 years of client trust.</p>
              </div>
              <ShareBar />
            </div>

            {/* prev / next */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/blog"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#01327a] px-6 py-3.5 text-xs font-extrabold tracking-widest text-white uppercase transition hover:bg-[#01327a]"
              >
                <ArrowLeft className="h-4 w-4 text-[#F5D77F]" /> All articles
              </Link>
              <Link
                href="/contact"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border-2 border-[#C59B27]/40 bg-white px-6 py-3.5 text-xs font-extrabold tracking-widest text-[#01327a] uppercase transition hover:border-[#C59B27] hover:text-[#9A7A1A]"
              >
                Discuss this topic <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
          </ScrollReveal>

          {/* Sidebar */}
          <ScrollReveal variant="fadeLeft" delay={0.15} className="hidden lg:block">
          <aside className="hidden lg:block">
            <div className="sticky top-40 space-y-5">
              <div className="rounded-[1.4rem] border border-slate-200/80 bg-white p-5 shadow-[0_8px_28px_rgba(1,19,49,0.06)]">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#9A7A1A]">In this article</p>
                <ul className="mt-3 space-y-2.5 text-sm font-semibold">
                  {article.content
                    .filter((s) => s.type === "heading")
                    .map((s, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-slate-700">
                        <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#C59B27]" />
                        <span>{s.text}</span>
                      </li>
                    ))}
                </ul>
              </div>

              <div className="rounded-[1.4rem] bg-[#01327a] p-5 text-white relative overflow-hidden">
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#C59B27]/20 blur-2xl" />
                <p className="relative text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#F5D77F]">Free consultation</p>
                <p className="relative mt-2 font-cormorant text-xl font-bold leading-snug">Get this applied to your portfolio.</p>
                <a
                  href="/contact"
                  className="relative mt-4 inline-flex items-center gap-2 rounded-full bg-[#F5D77F] px-4 py-2.5 text-[11px] font-extrabold uppercase tracking-widest text-[#01327a] transition hover:bg-white"
                >
                  Book a risk review <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </aside>
          </ScrollReveal>
        </div>
      </section>

      {/* ── RELATED ── */}
      <section className="border-t border-slate-200/80 bg-[#F9F8F6] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-10">
          <ScrollReveal variant="fadeUp" className="w-full">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#9A7A1A]">Keep reading</p>
              <h2 className="mt-2 font-cormorant text-3xl font-bold tracking-tight text-[#01327a] sm:text-4xl">
                Related <span className="font-light italic text-[#B8860B]">articles</span>
              </h2>
            </div>
            <Link href="/blog" className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#01327a] hover:text-[#9A7A1A]">
              View all articles <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          </ScrollReveal>
          <ScrollReveal variant="fadeUp" delay={0.1} className="w-full">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((a, i) => (
              <BlogCard key={a.slug} article={a} index={i + 1} />
            ))}
          </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}