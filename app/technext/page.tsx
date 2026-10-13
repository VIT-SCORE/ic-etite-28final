import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import MarqueeGallery from "@/components/MarqueeGallery";
import TechNextFloatingReturn from "@/components/TechNextFloatingReturn";
import { technext24Photos } from "@/data/photos";
import {
  ArrowLeft,
  ArrowRight,
  Cpu,
  Layers,
  Award,
  Calendar,
  MapPin,
  CheckCircle2,
  Rocket,
  Building,
  Clock,
  Mail,
  Camera,
} from "lucide-react";

export const metadata: Metadata = {
  title: "TechNext '28 | National Industrial Expo & Innovation Showcase",
  description:
    "Official page of TechNext '28, the flagship national industrial exposition and student project innovation showcase at VIT Vellore.",
};

export default function TechNextPage() {
  const categories = [
    {
      icon: Cpu,
      title: "Smart Hardware & Embedded Systems",
      desc: "Microcontroller prototypes, FPGA boards, edge AI devices, and robotics systems solving industrial automation challenges.",
    },
    {
      icon: Layers,
      title: "AI, Deep Tech & Software Platforms",
      desc: "Applied machine learning prototypes, computer vision tools, real-time analytics, and cybersecurity demonstrations.",
    },
    {
      icon: Rocket,
      title: "Startup & Venture Pavilion",
      desc: "Early-stage deep tech startups exhibiting commercially viable products to investors, mentors, and corporate partners.",
    },
    {
      icon: Building,
      title: "Industry & Corporate Partner Stalls",
      desc: "Leading multinational tech firms displaying next-generation industrial toolkits, cloud platforms, and developer hardware.",
    },
  ];

  return (
    <div className="bg-[#FAFBFD] text-slate-900 min-h-screen">
      {/* ── HERO SECTION (MATCHES IC-ETITE HOME NAVY BG) ── */}
      <section id="hero" className="relative pt-10 pb-16 sm:pt-14 sm:pb-24 overflow-hidden bg-[#002147] border-b border-white/15 text-white">
        <div className="container-x">
          {/* Top Left Return Button - ONLY ONE ON THE PAGE */}
          <div className="flex items-center justify-between mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-white/90 hover:text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full border border-white/25 shadow-sm transition-all hover:scale-105"
            >
              <ArrowLeft className="w-4 h-4 text-[#84E320]" />
              <span>Back to ic-ETITE&apos;28 Home</span>
            </Link>
          </div>

          <div className="max-w-4xl mx-auto text-center space-y-6">
            {/* TechNext '28 All-Green Brand Logo without awkward boxes */}
            <div className="flex justify-center mb-2">
              <div className="relative h-16 sm:h-20 w-64 sm:w-80">
                <Image
                  src="/logos/technext-logo.png"
                  alt="TechNext '28 Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              The National Industrial Expo &amp; Innovation Showcase
            </h1>

            <p className="text-base sm:text-lg text-white/85 max-w-2xl mx-auto leading-relaxed font-normal">
              Bringing together student inventors, corporate R&amp;D teams, venture capital investors, and deep-tech startups at VIT Vellore.
            </p>

            {/* Quick Meta Pills - Location: VIT Vellore */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs sm:text-sm">
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white font-semibold">
                <Calendar className="w-4 h-4 text-[#84E320]" />
                <span>10–11 February 2028</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white font-semibold">
                <MapPin className="w-4 h-4 text-[#84E320]" />
                <span>VIT Vellore</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white font-semibold">
                <Award className="w-4 h-4 text-[#84E320]" />
                <span>Best Engineering Project Awards</span>
              </div>
            </div>

            {/* Hero CTA - Only registration button, no duplicate back button */}
            <div className="flex items-center justify-center pt-4">
              <a
                href="#register"
                className="bg-[#004B87] hover:bg-[#003366] text-white font-bold text-sm sm:text-base py-3.5 px-8 rounded-xl inline-flex items-center gap-2.5 transition-all hover:scale-105 active:scale-95 shadow-lg border border-white/20"
              >
                <span>Register Your Project / Stall (TBA)</span>
                <ArrowRight className="w-4 h-4 text-[#84E320]" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT TECHNEXT ── */}
      <section id="about" className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Description */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#004B87] bg-[#EBF3F8] px-3 py-1.5 rounded-full border border-[#004B87]/20 inline-block">
                Expo Overview
              </span>

              <h2 className="text-3xl sm:text-4xl font-bold text-[#002147] tracking-tight leading-tight underline decoration-[#004B87] underline-offset-8">
                Empowering Tangible Hardware &amp; Deep-Tech Ingenuity
              </h2>

              <p className="text-base text-slate-700 leading-relaxed font-normal">
                TechNext is the premier industrial expo and project exhibition hosted at VIT Vellore. It brings engineering to life with tactile hardware prototypes, autonomous robotics, industrial IoT, and real-world product demos.
              </p>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 shadow-2xs">
                <p className="text-sm font-bold text-[#004B87] uppercase tracking-wide">
                  TechNext &apos;24 Key Milestones:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-center">
                  <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs">
                    <p className="text-2xl font-bold text-[#002147]">120+</p>
                    <p className="text-[11px] text-slate-600 uppercase font-semibold">Working Projects</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs">
                    <p className="text-2xl font-bold text-[#15803d]">15+</p>
                    <p className="text-[11px] text-slate-600 uppercase font-semibold">Startups &amp; Stalls</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs">
                    <p className="text-2xl font-bold text-[#002147]">₹50K+</p>
                    <p className="text-[11px] text-slate-600 uppercase font-semibold">Award Grants</p>
                  </div>
                </div>
              </div>

              <ul className="space-y-2.5 text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#15803d] shrink-0 mt-0.5" />
                  <span>Jury evaluation by industrial architects from leading tech corporations.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#15803d] shrink-0 mt-0.5" />
                  <span>Dedicated demo booths with power supply, testing benches, and Wi-Fi at VIT Vellore.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#15803d] shrink-0 mt-0.5" />
                  <span>Direct recruitment &amp; seed funding evaluation by investor delegations.</span>
                </li>
              </ul>
            </div>

            {/* Right: Featured Preview Image */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden border-2 border-slate-200 shadow-xl group">
                <div className="relative h-72 sm:h-96 w-full">
                  <Image
                    src="/images/technext24/technext_01.webp"
                    alt="TechNext Expo Showcase"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent flex flex-col justify-end p-6">
                  <span className="text-xs uppercase font-bold tracking-wider text-[#84E320] mb-1">
                    TechNext Showcase
                  </span>
                  <p className="text-base font-bold text-white">
                    Live prototype demonstrations by innovators to industry jury at VIT Vellore.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PHOTO ARCHIVE (LIGHT THEME, UNDERLINED TITLE, ZERO CAPTIONS) ── */}
      <section id="gallery" className="py-16 sm:py-20 bg-[#FAFBFD] border-b border-slate-200">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold mb-2 uppercase tracking-wider bg-[#004B87]/10 border border-[#004B87]/20 text-[#004B87]">
              <Camera className="w-3.5 h-3.5" />
              <span>Official Photo Archive</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#002147] mb-3">
              TechNext &apos;24 Highlights
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Moments from the 2024 industrial expo and project showcase at VIT Vellore.
            </p>
          </div>
          <div className="max-w-6xl mx-auto">
            <MarqueeGallery photos={technext24Photos} speed={70} />
          </div>
        </div>
      </section>

      {/* ── EXPO CATEGORIES ── */}
      <section id="categories" className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#004B87] bg-[#EBF3F8] px-3 py-1.5 rounded-full border border-[#004B87]/20 inline-block mb-3">
              Exhibition Domains
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#002147] tracking-tight underline decoration-[#004B87] underline-offset-8">
              TechNext &apos;28 Exhibit Categories
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-4">
              Teams and enterprises can register to display products and prototypes at VIT Vellore across the following tracks:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.title}
                  className="p-7 rounded-2xl bg-[#FAFBFD] border border-slate-200 hover:border-[#004B87] hover:bg-white shadow-2xs hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#EBF3F8] text-[#004B87] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#002147] mb-2 group-hover:text-[#004B87] transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {cat.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── REGISTRATION SECTION (TBA) ── */}
      <section id="register" className="py-16 sm:py-24 bg-[#FAFBFD]">
        <div className="container-x text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-3.5 py-1.5 rounded-full border border-amber-300">
            <Clock className="w-3.5 h-3.5 text-amber-700" />
            <span>Registration: TBA (Opening Soon)</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#002147] tracking-tight leading-tight underline decoration-[#004B87] underline-offset-8">
            Ready to Exhibit at TechNext ’28?
          </h2>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal pt-2">
            Registration details, stall allocation, and project entry guidelines for VIT Vellore will be formally announced soon (TBA).
          </p>

          <div className="p-6 rounded-2xl bg-white border-2 border-slate-200 shadow-md max-w-md mx-auto text-left space-y-3">
            <p className="text-xs uppercase font-bold text-[#004B87] tracking-wider flex items-center gap-1.5">
              <Mail className="w-4 h-4 text-[#004B87]" />
              <span>Exhibitor Enquiries</span>
            </p>
            <p className="text-sm text-slate-700">
              For industry booth bookings, sponsorships, or academic project submissions:
            </p>
            <p className="text-base font-bold text-[#002147] pt-1">
              <a href="mailto:icetiteconference@vit.ac.in" className="text-[#004B87] hover:underline">
                icetiteconference@vit.ac.in
              </a>
            </p>
          </div>

          <div className="pt-4 flex items-center justify-center">
            <Link
              href="/hackathon"
              className="bg-[#002147] hover:bg-[#003366] text-white font-bold text-sm sm:text-base py-3.5 px-7 rounded-xl inline-flex items-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-md"
            >
              <span>Explore BOLT 3.0 Hackathon</span>
              <ArrowRight className="w-4 h-4 text-[#84E320]" />
            </Link>
          </div>
        </div>
      </section>

      {/* Floating Overlay Button to Return to Home on Scroll */}
      <TechNextFloatingReturn />
    </div>
  );
}
