import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import type { Article } from "@/data/blog";
import { formatDate } from "@/data/blog";

interface BlogCardProps {
  article: Article;
  index?: number;
}

export default function BlogCard({ article, index = 0 }: BlogCardProps) {
  const isFeatured = index === 0;

  return (
    <Link
      href={`/blog/${article.slug}`}
      className={`group relative flex flex-col overflow-hidden rounded-[1.4rem] border bg-white shadow-[0_8px_28px_rgba(1,19,49,0.07)] transition-all hover:-translate-y-1 hover:border-[#C59B27]/30 hover:shadow-[0_18px_45px_rgba(1,19,49,0.13)] ${
        article.featured || isFeatured ? "border-amber-200/70" : "border-slate-200/80"
      }`}
    >
      {/* image */}
      <div className={`relative w-full overflow-hidden bg-slate-900 ${isFeatured ? "h-72 sm:h-80 lg:h-96" : "h-56 sm:h-60"}`}>
        <Image
          src={article.coverImage}
          alt={article.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition duration-700 group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#01327a]/80 via-[#01327a]/15 to-transparent" />

        {/* category pill */}
        <div className="absolute left-4 top-4 z-10 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center rounded-full border border-white/15 bg-[#01327a]/80 px-3 py-1.5 text-[10px] font-extrabold tracking-widest text-[#F5D77F] uppercase backdrop-blur">
            {article.categoryLabel}
          </span>
          {article.featured && (
            <span className="inline-flex items-center rounded-full bg-[#F5D77F] px-2.5 py-1 text-[10px] font-black tracking-widest text-[#01327a] uppercase shadow">
              Featured
            </span>
          )}
        </div>

        {/* read time badge */}
        <span className="absolute right-4 top-4 z-10 hidden items-center gap-1.5 rounded-full border border-white/15 bg-black/35 px-2.5 py-1.5 text-[11px] font-bold text-white backdrop-blur sm:inline-flex">
          <Clock className="h-3 w-3 text-[#F5D77F]" /> {article.readTime}
        </span>
      </div>

      {/* body */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-center gap-2.5 text-[11px] font-bold tracking-wide text-slate-500">
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5 text-[#C59B27]" />
            {formatDate(article.date)}
          </span>
          <span className="h-1 w-1 rounded-full bg-slate-300" />
          <span className="text-slate-400">{article.readTime}</span>
        </div>

        <h3
          className={`mt-3 font-cormorant font-bold leading-tight text-[#01327a] transition-colors group-hover:text-[#9A7A1A] ${
            isFeatured ? "text-2xl sm:text-3xl" : "text-[21px] sm:text-[23px]"
          }`}
        >
          {article.title}
        </h3>

        <p className="mt-2.5 line-clamp-3 text-[13px] leading-6 text-slate-600">{article.excerpt}</p>

        <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
          <div className="flex min-w-0 items-center gap-2.5">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#01327a] text-[11px] font-extrabold text-[#F5D77F]">
              {article.author.name
                .split(" ")
                .slice(0, 2)
                .map((n) => n[0])
                .join("")
                .toUpperCase()}
            </span>
            <div className="min-w-0">
              <p className="truncate text-xs font-extrabold text-[#01327a]">{article.author.name}</p>
              <p className="truncate text-[11px] font-medium text-slate-500">{article.author.role.split(",")[0]}</p>
            </div>
          </div>
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 text-[#01327a] transition-all group-hover:border-[#C59B27] group-hover:bg-[#01327a] group-hover:text-[#F5D77F]">
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
