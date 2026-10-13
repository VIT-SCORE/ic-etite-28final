import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import {
  Calendar,
  MapPin,
  ArrowRight,
  Zap,
  Cpu,
  Award,
  Sparkles,
  Users,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Flagship Co-located Events & Expo | ic-ETITE'28",
  description:
    "Explore all flagship events at ic-ETITE'28: the IEEE International Conference, BOLT 3.0 24-Hour National Hackathon, and TechNext '28 Industrial Expo at VIT Vellore.",
};

export default function EventsPage() {
  const events = [
    {
      id: "conference",
      badge: "Flagship IEEE International Conference",
      badgeColor: "bg-[#002147] text-[#F5A623]",
      title: "ic-ETITE’28 International Conference",
      edition: "Third International Conference",
      dates: "10–11 February 2028",
      venue: "Anna Auditorium & SCORE, VIT Vellore",
      logo: "/logos/ic-etite28-cropped-transparent.png",
      logoBg: "bg-[#002147]",
      isImage: true,
      description:
        "The Third International Conference on Emerging Trends in Information Technology and Engineering (ic-ETITE’28) brings together leading academic scientists, researchers, and scholars to exchange research discoveries. Technically co-sponsored by IEEE with proceedings submitted to IEEE Xplore® Digital Library.",
      highlights: [
        "4 Comprehensive IEEE Research Tracks",
        "Keynotes by world-renowned scientists",
        "IEEE Xplore Digital Library publication",
        "Scopus indexed journal recommendations for selected papers",
      ],
      href: "/",
      ctaText: "Explore ic-ETITE’28 Conference",
      cardBorder: "border-[#002147]",
      accentColor: "#002147",
    },
    {
      id: "hackathon",
      badge: "24-Hour National Flagship Hackathon",
      badgeColor: "bg-[#00142E] text-[#CCFF00] border border-[#CCFF00]/40",
      title: "BOLT 3.0 National Hackathon",
      edition: "Breakthrough On Locked Technology",
      dates: "Registration Dates TBA · Feb 2028",
      venue: "VIT Vellore",
      logo: "/logos/bolt-logo-white.png",
      logoBg: "bg-[#002147]",
      isImage: true,
      description:
        "BOLT 3.0 is a high-intensity, 24-hour overnight hackathon challenging student innovators to build working software and hardware prototypes across AI/ML, Cybersecurity, Cloud, and Embedded Systems. Featuring cash prizes, industry mentors, and judging by venture founders.",
      highlights: [
        "24-Hour non-stop overnight sprint with meals",
        "Mentorship from leading tech leaders",
      ],
      href: "/hackathon",
      ctaText: "Explore BOLT 3.0 Hackathon",
      cardBorder: "border-[#CCFF00]/60",
      accentColor: "#001C3D",
    },
    {
      id: "technext",
      badge: "Industrial Expo & Startup Showcase",
      badgeColor: "bg-[#002147] text-[#84E320] border border-[#84E320]/40",
      title: "TechNext ’28 Industrial Expo",
      edition: "Project Competition & Tech Pavilion",
      dates: "10–11 February 2028",
      venue: "VIT Vellore",
      logo: "/logos/technext-logo.png",
      logoBg: "bg-[#002147]",
      isImage: true,
      description:
        "TechNext '28 is the official industrial exposition, startup pavilion, and project innovation competition held at VIT Vellore. Experience groundbreaking student hardware prototypes, robotics demos, emerging product launches, and interact with venture capital investors.",
      highlights: [
        "Hardware prototypes & robotics live arenas",
        "Startup booths & industry partner exhibition",
        "Cash prizes for Best Engineering Innovation",
        "Direct networking with corporate sponsors & recruiters",
      ],
      href: "/technext",
      ctaText: "Explore TechNext ’28 Expo",
      cardBorder: "border-[#84E320]/60",
      accentColor: "#002147",
    },
  ];

  return (
    <div className="bg-white min-h-screen text-[#002147]">
      <PageHeader
        badge="Co-located Flagship Events · Feb 2028"
        title="Conference Events & Co-located Summits"
        subtitle="ic-ETITE'28 unites academic research, overnight coding innovation, and hands-on industrial technology exhibits at Vellore Institute of Technology."
        breadcrumb="Events"
        bgImage="/images/frame_.webp"
      />

      <div className="container-x py-16 sm:py-20">
        {/* Intro Highlight */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs sm:text-sm font-bold text-[#004B87] uppercase tracking-wider bg-[#EBF3F8] px-3.5 py-1.5 rounded-full border border-[#004B87]/30 inline-block mb-3">
            3 Synchronized Flagship Pillars
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#002147] tracking-tight underline decoration-[#004B87] underline-offset-8">
            One Global Gathering. Three Premier Platforms.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed font-normal">
            Whether you are a research scholar publishing IEEE manuscripts, a competitive hacker building in 24 hours, or an industry partner scouting innovative prototypes, ic-ETITE’28 offers a tailored summit.
          </p>
        </div>

        {/* 3 Event Cards */}
        <div className="space-y-12 max-w-5xl mx-auto">
          {events.map((evt, idx) => (
            <div
              key={evt.id}
              className={`rounded-3xl border-2 ${evt.cardBorder} bg-white shadow-md hover:shadow-2xl transition-all duration-300 p-6 sm:p-10 flex flex-col lg:flex-row gap-8 items-start justify-between`}
            >
              {/* Left Column: Details */}
              <div className="flex-1 space-y-4">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className={`text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full ${evt.badgeColor}`}>
                    {evt.badge}
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    Event 0{idx + 1}
                  </span>
                </div>

                <div className="flex items-center gap-4 pt-1">
                  <div className={`relative h-14 w-32 sm:w-40 rounded-xl p-2 flex items-center justify-center shrink-0 ${evt.logoBg} shadow-sm`}>
                    <Image
                      src={evt.logo}
                      alt={evt.title}
                      fill
                      sizes="160px"
                      loading="lazy"
                      className="object-contain p-1.5"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#002147] leading-tight">
                      {evt.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-0.5">
                      {evt.edition}
                    </p>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal pt-2">
                  {evt.description}
                </p>

                {/* Key Meta */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm">
                  <div className="flex items-center gap-2 text-slate-700 font-semibold bg-slate-50 p-3 rounded-xl border border-slate-200">
                    <Calendar className="w-4 h-4 text-[#004B87] shrink-0" />
                    <span>{evt.dates}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 font-semibold bg-slate-50 p-3 rounded-xl border border-slate-200">
                    <MapPin className="w-4 h-4 text-[#004B87] shrink-0" />
                    <span>{evt.venue}</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="pt-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Key Highlights &amp; Inclusions:
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700">
                    {evt.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#004B87] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column: CTA Button */}
              <div className="lg:self-center shrink-0 w-full lg:w-auto pt-4 lg:pt-0 border-t lg:border-t-0 border-slate-200">
                <Link
                  href={evt.href}
                  className="w-full lg:w-auto bg-[#002147] hover:bg-[#003366] text-white font-bold text-sm sm:text-base py-4 px-8 rounded-2xl inline-flex items-center justify-center gap-3 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-black/15 cursor-pointer"
                >
                  <span>{evt.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
