import type { Metadata } from "next";
import ClaimsPage from "../claims/page";

export const metadata: Metadata = {
  title: "Insurance Claim Assistance Guide | Fortune 5 Risk Management Solutions LLP",
  description:
    "Comprehensive claim assistance guide for Motor, Health, Travel, Personal Accident, and Life insurance.",
  alternates: { canonical: "https://fortune5.in/claims/" },
  robots: { index: false, follow: true },
};

export default ClaimsPage;

