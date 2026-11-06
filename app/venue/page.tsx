import type { Metadata } from "next";
import VenueMap from "@/components/VenueMap";

export const metadata: Metadata = {
  title: "Conference Venue & Travel",
  description:
    "Conference venue details at Vellore Institute of Technology (VIT), Vellore, Tamil Nadu, India. Travel routes, Katpadi railway connectivity, and nearest airports.",
  alternates: {
    canonical: "/venue",
  },
};

import PageHeader from "@/components/PageHeader";

export default function VenuePage() {
  return (
    <div className="bg-white min-h-screen text-[#002147]">
      <PageHeader
        badge="Host University Campus & Arrival Guide"
        title="Conference Venue & Travel"
        subtitle="Vellore Institute of Technology (VIT), Vellore, Tamil Nadu, India. Immediate proximity to Katpadi Junction Railway Station with excellent regional and international transport connectivity."
        breadcrumb="Venue & Travel"
        bgImage="/images/frame_.webp"
      />

      <VenueMap />
    </div>
  );
}
