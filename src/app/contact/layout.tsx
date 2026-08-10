import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Fortune 5 Risk Management Solutions LLP",
  description:
    "Get in touch with Fortune 5. Office at E-Square, Vile Parle (East), Mumbai. Call +91-98208 10067 or email insure@fortune5.in.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
