import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import {
  Hotel,
  AlertCircle,
  Building2,
  Train,
  Car,
  ShieldCheck,
  CheckCircle2,
  Navigation,
  Mail,
  ChevronRight,
  Info,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Hotels & Accommodation | ic-ETITE'28",
  description:
    "Accommodation guidance, university guest house policies, and local transit information for ic-ETITE'28 conference delegates visiting VIT Vellore.",
};

export default function HotelsPage() {
  return (
    <div className="bg-[#FAFBFD] min-h-screen text-[#002147]">
      {/* Page Header */}
      <PageHeader
        badge="Conference Hospitality & Accommodation Guide"
        title="Hotels & Accommodation"
        subtitle="Accommodation guidance, university guest house policies, and local transit tips for ic-ETITE'28 delegates and invited guests in Vellore."
        breadcrumb="Hotels & Accommodation"
        bgImage="/images/frame_.webp"
      />

      <div className="container-x py-12 sm:py-16 space-y-16">
        {/* Important Advisory Banner */}
        <div className="bg-gradient-to-br from-[#001733] to-[#002B5B] text-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#FFB81C]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFB81C]/20 border border-[#FFB81C]/40 text-[#FFB81C] text-xs font-bold uppercase tracking-wider">
                <AlertCircle className="w-3.5 h-3.5" />
                Delegate Travel Advisory
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                Plan &amp; Reserve Your Stay in Advance
              </h2>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-3xl">
                Vellore attracts significant academic and medical visitors throughout the year due to VIT and CMC Vellore. 
                Delegates are strongly advised to secure their hotel bookings <strong>at least 3 to 4 weeks prior</strong> to the 
                conference dates to avoid peak availability surcharges.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="flex items-center gap-3 bg-white/10 p-3 rounded-xl border border-white/10">
                  <Train className="w-5 h-5 text-[#FFB81C] shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-white">Katpadi Jn (KPD)</p>
                    <p className="text-[11px] text-slate-300">3 km from VIT Campus</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/10 p-3 rounded-xl border border-white/10">
                  <Car className="w-5 h-5 text-[#84E320] shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-white">Local Commute</p>
                    <p className="text-[11px] text-slate-300">10–15 min auto/cab ride</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/10 p-3 rounded-xl border border-white/10">
                  <Building2 className="w-5 h-5 text-[#38BDF8] shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-white">Conference Halls</p>
                    <p className="text-[11px] text-slate-300">Anna Auditorium &amp; SJT</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-center flex flex-col items-center justify-center space-y-3">
              <Hotel className="w-10 h-10 text-[#FFB81C]" />
              <h3 className="font-serif font-bold text-lg text-white">Need Booking Assistance?</h3>
              <p className="text-xs text-slate-200">
                Contact our Conference Hospitality Committee for group inquiries or official recommendation letters.
              </p>
              <a
                href="mailto:icetiteconference@vit.ac.in?subject=Accommodation%20Inquiry%20-%20ic-ETITE'28"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#FFB81C] text-[#002147] font-bold text-xs hover:bg-white transition-all shadow-md"
              >
                <Mail className="w-3.5 h-3.5" />
                Email Hospitality Desk
              </a>
            </div>
          </div>
        </div>

        {/* VIT University Campus Guest House Special Notice */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border-2 border-[#002147]/10 shadow-sm relative">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-slate-100 pb-6 mb-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#002147] text-[#FFB81C] flex items-center justify-center shadow-md shrink-0">
                <Building2 className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#004B87]">
                  On-Campus Facility
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#002147]">
                  VIT University Guest House Accommodation
                </h3>
              </div>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold">
              <ShieldCheck className="w-4 h-4 text-amber-600" />
              Restricted / Institutional Protocol
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-700">
            <div className="space-y-2">
              <h4 className="font-bold text-[#002147] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Invited Dignitaries &amp; Speakers
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Guest house suites inside the VIT Vellore campus are primarily allocated for <strong>Keynote Speakers</strong>, <strong>Session Chairs</strong>, and international invited academics via direct administrative coordination.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-[#002147] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Delegates &amp; Co-Authors
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Registered paper presenters, co-authors, and student participants are advised to book accommodation at nearby commercial hotels in Vellore city.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-[#002147] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Campus Facilities &amp; Meals
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Conference registration packages include luncheon, refreshments, and high tea within the university food court on conference presentation days.
              </p>
            </div>
          </div>
        </div>

        {/* Hotel Sponsorship Notice */}
        <div className="bg-[#F7F9FC] rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#004B87] flex items-center justify-center shrink-0 mt-0.5">
              <Info className="w-5 h-5" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg sm:text-xl font-serif font-bold text-[#002147]">
                Hotel Partner Listings — Coming Soon
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed max-w-3xl">
                Official hotel partner listings with negotiated conference tariffs will be published here once hospitality sponsorship arrangements are finalized. 
                In the meantime, delegates may independently explore hotels in Vellore city (within 5–10 km of VIT campus) via popular booking platforms.
              </p>
              <p className="text-xs text-slate-500 pt-1">
                Hotels interested in partnering with ic-ETITE&apos;28 as an accommodation sponsor may contact the organizing committee at{" "}
                <a
                  href="mailto:icetiteconference@vit.ac.in?subject=Hotel%20Sponsorship%20Inquiry%20-%20ic-ETITE'28"
                  className="text-[#004B87] font-semibold hover:underline"
                >
                  icetiteconference@vit.ac.in
                </a>.
              </p>
            </div>
          </div>
        </div>

        {/* Local Transportation & Getting to Campus Guide */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border-2 border-slate-200 shadow-sm space-y-8">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#004B87]">
              Arrival &amp; Transit Guide
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#002147]">
              Local Transit: Getting to VIT Vellore Campus
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              Essential tips on navigating from your hotel and Katpadi Junction railway station to the conference venue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#FAFBFD] p-6 rounded-2xl border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#004B87] flex items-center justify-center font-bold">
                <Car className="w-5 h-5" />
              </div>
              <h4 className="font-serif font-bold text-lg text-[#002147]">Auto-Rickshaws</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Auto-rickshaws are readily available outside Katpadi Junction, all major hotels, and bus terminals.
                Typical fares from Katpadi Station to VIT Main Gate range from ₹80 to ₹120. Ensure you confirm the fare before boarding.
              </p>
            </div>

            <div className="bg-[#FAFBFD] p-6 rounded-2xl border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                <Navigation className="w-5 h-5" />
              </div>
              <h4 className="font-serif font-bold text-lg text-[#002147]">App-Based Cabs</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Ola and Uber cabs operate across Vellore city and Katpadi. Delegates can book point-to-point AC hatchback or sedan rides directly to <strong>VIT Main Gate (Gate 1 / Gate 2)</strong>.
              </p>
            </div>

            <div className="bg-[#FAFBFD] p-6 rounded-2xl border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-serif font-bold text-lg text-[#002147]">Campus Entry Security</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Please present your <strong>ic-ETITE&apos;28 Conference Registration Confirmation / Acceptance Letter</strong> along with a valid government photo ID at the VIT Security Gate to obtain a visitor delegate pass.
              </p>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100">
            <div className="text-xs text-slate-600">
              Need comprehensive railway and airport connectivity information?
            </div>
            <Link
              href="/venue"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#002147] text-white text-xs sm:text-sm font-bold hover:bg-[#003366] transition-all shadow-sm"
            >
              <span>View Conference Venue &amp; Travel Logistics</span>
              <ChevronRight className="w-4 h-4 text-[#FFB81C]" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
