import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Fortune 5 Risk Management Solutions LLP",
  description:
    "Get in touch with Fortune 5 Risk Management Solutions LLP. Head office at 106-107, E-Square, 1st Floor, Subhash Road, Vile Parle (East), Mumbai. Cell: +91-98207 10067, Support: +91-98208 10067, Board: +91-22-2619 27 27, Email: insure@fortune5.in.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
