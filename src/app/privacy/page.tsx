import type { Metadata } from "next";
import PrivacyContent from "./PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy Policy | Fortune 5 Risk Management Solutions LLP",
  description:
    "Learn how Fortune 5 Risk Management Solutions LLP collects, uses, and protects your personal and corporate insurance data.",
};

export default function PrivacyPolicyPage() {
  return <PrivacyContent />;
}
