import type { Metadata } from "next";
import Link from "next/link";
import {
  Sparkles,
  Award,
  Crown,
  Medal,
  CheckCircle2,
  ArrowRight,
  Download,
  Mail,
  Building2,
  Tv,
  Presentation,
  Store,
  Layers,
  FileText,
  ExternalLink,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Sponsorship Packages & Corporate Partnerships | ic-ETITE",
  description:
    "Official corporate and academic sponsorship tiers for ic-ETITE at VIT Vellore. Explore Platinum, Gold, and Silver sponsorship packages with campus LED branding, keynote slots, exhibition stalls, and student engagement.",
};

interface SponsorTier {
  name: string;
  price: string;
  priceNum: number;
  badge: string;
  tagline: string;
  icon: typeof Crown;
  headerBg: string;
  accentColor: string;
  borderColor: string;
  bulletColor: string;
  isPopular?: boolean;
  benefits: string[];
}

const sponsorTiers: SponsorTier[] = [
  {
    name: "Platinum Sponsor",
    price: "₹ 5,00,000",
    priceNum: 500000,
    badge: "Title Sponsor · Maximum Brand Impact",
    tagline: "Premier tier with title sponsor naming rights, premier campus visibility, and dedicated event slots.",
    icon: Crown,
    headerBg: "bg-gradient-to-br from-[#001733] via-[#002B5B] to-[#001733]",
    accentColor: "text-[#CCFF00]",
    borderColor: "border-[#CCFF00]/40 hover:border-[#CCFF00]",
    bulletColor: "text-[#CCFF00]",
    isPopular: true,
    benefits: [
      "Company will be identified as the Title Sponsor for ic-ETITE 2024.",
      "Branding of the Company around the campus during the fest through LED screens (more than 50-60 times a day).",
      "One full page advertisement in the conference program.",
      "Publicity on campus at the Academic Blocks (during Pre-ic-ETITE and all two days of ic-ETITE).",
      "Nation-wide circulation of commercials through our online media partners.",
      "Marketing through standees inside the campus everywhere.",
      "Speaker time pre/post conference with non-competing program.",
      "Advertisement on the ic-ETITE’24 website and mobile app.",
      "Name and Logo on the T-Shirt of the conference.",
      "Sponsor webpage on conference website, content to be delivered by sponsor to specific conference webmaster once approved by conference committee.",
      "Judge for the Technext Exhibition and Bolt hackathon.",
      "Speaker session and Tailored event during the conference.",
      "Stalls 10x10 sq ft. for two days.",
    ],
  },
  {
    name: "Gold Sponsor",
    price: "₹ 3,50,000",
    priceNum: 350000,
    badge: "Co-Sponsor · High Campus Visibility",
    tagline: "Distinguished co-sponsor prominence across academic blocks, digital media, and exhibition arena.",
    icon: Award,
    headerBg: "bg-gradient-to-br from-[#2D1B00] via-[#4D2E00] to-[#1A1000]",
    accentColor: "text-[#FFB81C]",
    borderColor: "border-[#FFB81C]/40 hover:border-[#FFB81C]",
    bulletColor: "text-[#FFB81C]",
    benefits: [
      "Company will be identified as a co-sponsor for ic-ETITE 2024.",
      "Branding of the Company around the campus during the fest through LED screens (more than 40-30 times a day).",
      "Publicity on campus at the Academic Blocks (during Pre-ic-ETITE and all two days of ic-ETITE).",
      "One half page advertisement in specific conference program.",
      "Nation-wide circulation of commercials through our online media partners.",
      "Marketing through standees inside the campus everywhere.",
      "Advertisement on the ic-ETITE’24 website and mobile app.",
      "Marketing through standees inside the campus everywhere.",
      "Name and Logo on the T-Shirt of the conference.",
      "Speaker session at the conference.",
      "Stalls 10x10 sq ft. for two days.",
    ],
  },
  {
    name: "Silver Sponsor",
    price: "₹ 2,00,000",
    priceNum: 200000,
    badge: "Conference Sponsor · Essential Presence",
    tagline: "Core conference sponsor package with campus LED branding, marketing standees, and stall space.",
    icon: Medal,
    headerBg: "bg-gradient-to-br from-[#1E293B] via-[#334155] to-[#0F172A]",
    accentColor: "text-slate-200",
    borderColor: "border-slate-300 hover:border-slate-400",
    bulletColor: "text-[#004B87]",
    benefits: [
      "Company will be identified as a sponsor for ic-ETITE 2024.",
      "Branding of the Company around the campus during the fest through LED screens (more than 25-10 times a day).",
      "Publicity on campus at the Academic Blocks (during Pre-ic-ETITE and all two days of ic-ETITE).",
      "Nation-wide circulation of commercials through our online media partners.",
      "Marketing through standees inside the campus everywhere.",
      "Advertisement on the ic-ETITE’24 website and mobile app.",
      "Name and Logo on the T-Shirt of the conference.",
      "Speaker session at the conference.",
      "Stalls 5x5 sq ft. for one day.",
    ],
  },
];

export default function SponsorshipPage() {
  return (
    <div className="bg-[#FAFBFD] min-h-screen text-[#002147]">
      {/* ── HERO BANNER ── */}
      <PageHeader
        badge="Corporate Partnerships · Global Visibility"
        title="Conference Sponsorship"
        subtitle="Partner with ic-ETITE at VIT Vellore. Gain unmatched national branding, prominent campus LED broadcasts, keynote slots, hackathon judging, and premier exhibition spaces."
        breadcrumb="Sponsorship"
        bgImage="/images/frame_15.webp"
      />

      <div className="container-x py-12 md:py-16 space-y-16">
        {/* ── INTRO SUMMARY CARDS ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#EBF3F8] text-[#004B87] flex items-center justify-center shrink-0">
              <Tv className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-base text-[#002147]">Campus-Wide LED Branding</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Over 50–60 high-impact screen rotations daily across academic blocks and main plazas throughout the conference.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#FFF4DB] text-[#FFB81C] flex items-center justify-center shrink-0">
              <Presentation className="w-6 h-6 text-[#9A6500]" />
            </div>
            <div>
              <h3 className="font-bold text-base text-[#002147]">Speaker &amp; Tailored Events</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Dedicated speaker slots, non-competing address times, and interactive workshops with international researchers and students.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#EDF9E7] text-[#15803d] flex items-center justify-center shrink-0">
              <Store className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-base text-[#002147]">Prime Exhibition Stalls</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                10x10 sq ft or 5x5 sq ft customized booths at TechNext expo for direct delegate and student recruitment interaction.
              </p>
            </div>
          </div>
        </div>

        {/* ── SPONSORSHIP PACKAGES SECTION ── */}
        <section id="packages" className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#004B87] bg-[#EBF3F8] px-3 py-1.5 rounded-full border border-[#004B87]/20 inline-block">
              Sponsorship Tiers &amp; Entitlements
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002147] tracking-tight">
              Select Your Sponsorship Tier
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Tailored sponsorship packages designed to maximize corporate visibility, talent pipeline acquisition, and thought leadership at VIT Vellore.
            </p>
          </div>

          {/* Pricing Tier Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-4">
            {sponsorTiers.map((tier) => {
              const TierIcon = tier.icon;
              return (
                <div
                  key={tier.name}
                  className={`relative flex flex-col rounded-3xl bg-white border-2 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 overflow-hidden ${
                    tier.isPopular ? "border-[#004B87] ring-2 ring-[#004B87]/20" : "border-slate-200"
                  }`}
                >
                  {/* Highlight Ribbon for Title Sponsor */}
                  {tier.isPopular && (
                    <div className="bg-[#004B87] text-[#CCFF00] text-center py-1.5 text-xs font-black uppercase tracking-widest border-b border-[#004B87]/30">
                      ★ Most Comprehensive Package
                    </div>
                  )}

                  {/* Header Box */}
                  <div className={`p-6 sm:p-7 text-white ${tier.headerBg} border-b border-white/10`}>
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold tracking-wide">
                        <TierIcon className={`w-3.5 h-3.5 ${tier.accentColor}`} />
                        <span>{tier.badge}</span>
                      </span>
                    </div>

                    <h3 className="text-2xl font-black tracking-tight text-white">{tier.name}</h3>
                    <p className="text-xs text-white/80 mt-1.5 leading-relaxed font-normal">{tier.tagline}</p>

                    <div className="mt-5 pt-4 border-t border-white/15 flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                        {tier.price}
                      </span>
                      <span className="text-xs font-medium text-white/70 uppercase tracking-wider">
                        + Applicable GST
                      </span>
                    </div>
                  </div>

                  {/* Benefits List */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                    <div className="space-y-3.5">
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                        Included Entitlements &amp; Benefits:
                      </p>
                      <ul className="space-y-3 text-xs sm:text-sm text-slate-700 font-normal">
                        {tier.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                            <span className="text-[#004B87] font-bold text-base leading-none select-none shrink-0 mt-0.5">
                              →
                            </span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Inquiry Button */}
                    <div className="pt-4 border-t border-slate-100">
                      <a
                        href={`mailto:icetiteconference@vit.ac.in?subject=ic-ETITE%20${encodeURIComponent(
                          tier.name
                        )}%20Inquiry`}
                        className={`w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-sm ${
                          tier.isPopular
                            ? "bg-[#004B87] hover:bg-[#003366] text-white hover:scale-[1.02]"
                            : "bg-slate-100 hover:bg-[#002147] text-[#002147] hover:text-white"
                        }`}
                      >
                        <Mail className="w-4 h-4" />
                        <span>Inquire for {tier.name}</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── PARTNERS & SPONSORS SECTIONS (KEPT BLANK PER INSTRUCTION) ── */}
        <section id="partners" className="pt-10 border-t border-slate-200 space-y-14">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#004B87] bg-[#EBF3F8] px-3 py-1.5 rounded-full border border-[#004B87]/20 inline-block">
              Institutional &amp; Technical Backing
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#002147]">
              Conference Partners &amp; Patrons
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Corporate and academic sponsors are announced on a rolling basis following committee reviews.
            </p>
          </div>

          {/* 1. TECHNICAL CO-SPONSOR */}
          <div className="flex flex-col items-center text-center space-y-5">
            <h3 className="text-xl sm:text-2xl font-black uppercase tracking-wider text-[#002147] underline decoration-[#004B87] underline-offset-8">
              TECHNICAL CO-SPONSOR
            </h3>
            {/* Blank placeholder frame as requested */}
            <div className="w-full max-w-2xl min-h-[100px] border-2 border-dashed border-slate-300 rounded-2xl flex items-center justify-center p-6 bg-slate-50/70">
              <span className="text-xs sm:text-sm text-slate-400 font-semibold tracking-wide uppercase">
                To Be Announced
              </span>
            </div>
          </div>

          {/* 2. TITLE SPONSOR */}
          <div className="flex flex-col items-center text-center space-y-5">
            <h3 className="text-xl sm:text-2xl font-black uppercase tracking-wider text-[#002147] underline decoration-[#004B87] underline-offset-8">
              TITLE SPONSOR
            </h3>
            {/* Blank placeholder frame as requested */}
            <div className="w-full max-w-2xl min-h-[100px] border-2 border-dashed border-slate-300 rounded-2xl flex items-center justify-center p-6 bg-slate-50/70">
              <span className="text-xs sm:text-sm text-slate-400 font-semibold tracking-wide uppercase">
                To Be Announced
              </span>
            </div>
          </div>

          {/* 3. TECHNOLOGY PARTNER AND CO-TITLE SPONSOR */}
          <div className="flex flex-col items-center text-center space-y-5">
            <h3 className="text-xl sm:text-2xl font-black uppercase tracking-wider text-[#002147] underline decoration-[#004B87] underline-offset-8">
              TECHNOLOGY PARTNER AND CO-TITLE SPONSOR
            </h3>
            {/* Blank placeholder frame as requested */}
            <div className="w-full max-w-2xl min-h-[100px] border-2 border-dashed border-slate-300 rounded-2xl flex items-center justify-center p-6 bg-slate-50/70">
              <span className="text-xs sm:text-sm text-slate-400 font-semibold tracking-wide uppercase">
                To Be Announced
              </span>
            </div>
          </div>

          {/* 4. SUPPORTED BY */}
          <div className="flex flex-col items-center text-center space-y-5">
            <h3 className="text-xl sm:text-2xl font-black uppercase tracking-wider text-[#002147] underline decoration-[#004B87] underline-offset-8">
              SUPPORTED BY
            </h3>
            {/* Blank placeholder frame as requested */}
            <div className="w-full max-w-3xl min-h-[120px] border-2 border-dashed border-slate-300 rounded-2xl flex items-center justify-center p-6 bg-slate-50/70">
              <span className="text-xs sm:text-sm text-slate-400 font-semibold tracking-wide uppercase">
                To Be Announced
              </span>
            </div>
          </div>
        </section>

        {/* ── BROCHURES & CONTACT SECRETARIAT ── */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#002147] to-[#001733] text-white shadow-xl border border-white/15">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#CCFF00] bg-white/10 px-3 py-1 rounded-full border border-white/20 inline-block">
                Sponsorship Secretariat &amp; Inquiries
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Interested in Custom Sponsorship or Event Co-Hosting?
              </h3>
              <p className="text-sm text-white/80 leading-relaxed font-normal max-w-2xl">
                We also offer tailored exhibition booths at <strong>TechNext Expo</strong>, customized challenge statements for the <strong>BOLT Hackathon</strong>, and branded keynote halls. Reach out to our organizing committee to receive customized proposals.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-medium text-white/90">
                <div className="flex items-center gap-1.5">
                  <Mail className="w-4 h-4 text-[#FFB81C]" />
                  <a
                    href="mailto:icetiteconference@vit.ac.in"
                    className="hover:underline font-bold text-white"
                  >
                    icetiteconference@vit.ac.in
                  </a>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-[#CCFF00]" />
                  <span>SCORE, VIT Vellore, Tamil Nadu 632014</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 flex flex-col gap-3">
              <a
                href="https://icetite.vit.ac.in/docs/CONF_BROCHURE_INR.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-[#004B87] hover:bg-[#003366] text-white font-bold text-xs sm:text-sm transition-all shadow-md border border-white/20 hover:scale-[1.02]"
              >
                <Download className="w-4 h-4 text-[#CCFF00]" />
                <span>Download Sponsorship Brochure (PDF)</span>
              </a>

              <a
                href="/Formatted_ic-ETITE_Conference_Brochure.pdf"
                download="ic-ETITE_Conference_Brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm transition-all border border-white/25 hover:scale-[1.02]"
              >
                <FileText className="w-4 h-4 text-[#FFB81C]" />
                <span>Download Conference Brochure (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
