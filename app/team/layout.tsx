import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Development Team",
  description:
    "Meet the IEEE Information Theory Society Student Chapter web development team at VIT Vellore.",
  alternates: {
    canonical: "/team",
  },
};

export default function TeamLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
