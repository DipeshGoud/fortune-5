import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Testimonials | Trusted by Businesses & Families",
  description:
    "Read verified Fortune 5 client testimonials across corporate risk, claims advocacy, employee benefits and personal cover — 75 years of trust in Mumbai and pan-India.",
  alternates: { canonical: "https://fortune5.in/testimonials/" },
};

export default function TestimonialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
