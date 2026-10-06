import type { Metadata } from "next";
import TermsContent from "./TermsContent";

export const metadata: Metadata = {
  title: "Terms & Conditions | Fortune 5 Risk Management Solutions LLP",
  description:
    "Read the Terms & Conditions governing the use of Fortune 5 Risk Management Solutions LLP official website and services.",
  alternates: { canonical: "https://fortune5.in/terms/" },
};

export default function TermsAndConditionsPage() {
  return <TermsContent />;
}
