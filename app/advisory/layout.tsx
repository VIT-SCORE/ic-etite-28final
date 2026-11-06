import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advisory Board & Technical Committee",
  description:
    "Explore the international and national advisory boards and technical committee for ic-ETITE'28.",
  alternates: {
    canonical: "/advisory",
  },
};

export default function AdvisoryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
