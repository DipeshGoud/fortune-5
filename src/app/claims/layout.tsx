import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insurance Claim Assistance Guide | Fortune 5 Risk Management Solutions LLP",
  description:
    "Comprehensive insurance claim guide for Motor, Travel, Health, Personal Accident, and Life insurance. Direct insurer helplines, documentation checklists, IRDAI timelines, and Fortune 5 claims advocacy.",
  alternates: { canonical: "https://fortune5.in/claims/" },
  openGraph: {
    title: "Insurance Claim Assistance Guide | Fortune 5",
    description:
      "Step-by-step guidance, insurer directory, IRDAI timelines, and documentation checklists for Motor, Travel, Health, Accident & Life insurance claims.",
    url: "https://fortune5.in/claims/",
    siteName: "Fortune 5 Risk Management Solutions LLP",
    type: "website",
  },
};

export default function ClaimsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

