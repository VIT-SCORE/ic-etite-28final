import type { Metadata } from "next";
import RegistrationTable from "@/components/RegistrationTable";

export const metadata: Metadata = {
  title: "Registration Guidelines & Fees",
  description:
    "Official delegate and author registration fee structure, IEEE member discounts, payment options, and presentation guidelines for ic-ETITE'28.",
  alternates: {
    canonical: "/registration",
  },
};

import PageHeader from "@/components/PageHeader";

export default function RegistrationPage() {
  return (
    <div className="bg-white min-h-screen text-[#002147]">
      <PageHeader
        badge="Delegate Portal & Author Registration"
        title="Conference Registration & Fees"
        subtitle="Registration is mandatory for all attending delegates and presenting authors. Tariffs include access to all technical tracks, keynote addresses, and networking sessions."
        breadcrumb="Registration"
        bgImage="/images/frame_.webp"
      />

      <RegistrationTable />
    </div>
  );
}
