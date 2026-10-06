import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Risk Management Services | Corporate & Retail Solutions",
  description:
    "Explore Fortune 5 corporate and retail risk management services: fire, employee benefits, transit, liability, health, vehicle, travel, life and more — with 75 years of claim advocacy.",
  alternates: { canonical: "https://fortune5.in/services/" },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
