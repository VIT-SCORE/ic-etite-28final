import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conference Committees",
  description:
    "Meet the organizing, technical programme, publication, and event committees for ic-ETITE'28 at VIT Vellore.",
  alternates: {
    canonical: "/committees",
  },
};

export default function CommitteesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
