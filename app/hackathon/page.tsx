import Image from "next/image";
import Link from "next/link";
import PhotoGridModal from "@/components/PhotoGridModal";
import BoltFloatingReturn from "@/components/BoltFloatingReturn";
import { bolt20Photos } from "@/data/photos";
import {
  Zap,
  Award,
  Calendar,
  Clock,
  Users,
  Trophy,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  MapPin,
} from "lucide-react";

export default function HackathonPage() {
  return (
    <div className="bg-[#FAFBFD] min-h-screen text-slate-900">
      {/* ── HERO SECTION (MATCHES IC-ETITE HOME NAVY BG) ── */}
      <section id="hero" className="relative py-12 md:py-20 overflow-hidden bg-[#002147] border-b border-white/15 text-white">
        <div className="container-x relative z-10">
          {/* Top Left Return Button - ONLY ONE ON THE PAGE */}
          <div className="flex items-center justify-between mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-white/90 hover:text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full border border-white/25 shadow-sm transition-all hover:scale-105"
            >
              <ArrowLeft className="w-4 h-4 text-[#CCFF00]" />
              <span>Back to ic-ETITE&apos;28 Home</span>
            </Link>
          </div>

          <div className="text-center max-w-4xl mx-auto">
            {/* Centered BOLT 3.0 Logo */}
            <div className="flex flex-col items-center justify-center mb-6">
              <div className="inline-flex items-center justify-center gap-3 sm:gap-4 px-6 sm:px-8 py-3.5 sm:py-4 rounded-3xl bg-[#001733] border-2 border-[#CCFF00] shadow-[0_0_35px_rgba(204,255,0,0.25)] hover:scale-105 transition-all duration-300">
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-2xl bg-[#CCFF00]/15 border border-[#CCFF00]/40 flex items-center justify-center shrink-0">
                  <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-[#CCFF00] fill-[#CCFF00] animate-pulse" />
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-2.5">
                    <span className="text-2xl sm:text-4xl md:text-5xl font-black tracking-wider text-white">
                      BOLT <span className="text-[#CCFF00]">3.0</span>
                    </span>
                    <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-[#001C3D] bg-[#CCFF00] px-2 py-0.5 rounded-md shadow-sm">
                      LIVE
                    </span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-[#CCFF00] tracking-widest uppercase font-bold mt-0.5">
                    National Flagship 24H Hackathon
                  </p>
                </div>
              </div>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-4">
              Breakthrough On Locked Technology
            </h1>
            <p className="text-base sm:text-lg text-white/85 max-w-2xl mx-auto leading-relaxed mb-6 font-normal">
              Organized by the <strong>IEEE Information Theory Society (ITS) Student Chapter</strong> and the{" "}
              <strong>School of Computer Science Engineering &amp; Information Systems (SCORE)</strong> at VIT Vellore.
            </p>

            {/* Quick Meta Pills - Location: VIT Vellore */}
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-semibold text-white/95 mb-8">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 border border-white/15">
                <Trophy className="w-4 h-4 text-[#FFB81C]" />
                <span>₹1,00,000+ Prize Pool</span>
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 border border-white/15">
                <Clock className="w-4 h-4 text-[#CCFF00]" />
                <span>24-Hour Offline Hackathon</span>
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 border border-white/15">
                <Calendar className="w-4 h-4 text-[#FFB81C]" />
                <span>February 09–10, 2028</span>
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 border border-white/15">
                <MapPin className="w-4 h-4 text-[#CCFF00]" />
                <span>VIT Vellore</span>
              </span>
            </div>

            {/* Hero CTA - Single button, no duplicate back button */}
            <div className="flex items-center justify-center">
              <a
                href="#register"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#004B87] hover:bg-[#003366] text-white font-extrabold text-sm sm:text-base transition-all hover:scale-105 shadow-md border border-white/20"
              >
                <span>Registration Status &amp; Updates (TBA)</span>
                <ChevronRight className="w-4 h-4 text-[#CCFF00] stroke-[3]" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT BOLT SECTION ── */}
      <section id="about" className="py-16 md:py-20 bg-white border-b border-slate-200">
        <div className="container-x">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            {/* Left Column: Description & Heritage */}
            <div className="md:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#004B87] bg-[#EBF3F8] px-3 py-1.5 rounded-full border border-[#004B87]/20 inline-block">
                Hackathon Legacy
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#002147] tracking-tight underline decoration-[#004B87] underline-offset-8">
                24 Hours. Boundless Computing. Unlocked Innovation.
              </h2>

              <p className="text-base text-slate-700 leading-relaxed font-normal">
                BOLT (Breakthrough On Locked Technology) is the premier national 24-hour hackathon hosted at VIT Vellore. In 2024, BOLT 2.0 witnessed an extraordinary response with over <strong>683 participant registrations</strong> across 45+ premier institutions in India.
              </p>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 shadow-2xs">
                <p className="text-sm font-bold text-[#004B87] uppercase tracking-wide">
                  BOLT 2.0 Historical Success:
                </p>
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs">
                    <p className="text-2xl font-bold text-[#002147]">683+</p>
                    <p className="text-[11px] text-slate-600 uppercase font-semibold">Hackers Registered</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs">
                    <p className="text-2xl font-bold text-[#15803d]">45+</p>
                    <p className="text-[11px] text-slate-600 uppercase font-semibold">Institutes</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs">
                    <p className="text-2xl font-bold text-[#002147]">24h</p>
                    <p className="text-[11px] text-slate-600 uppercase font-semibold">Sprint Duration</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 text-slate-700 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-[#15803d] shrink-0 mt-0.5" />
                  <span>Mentorship and direct evaluations by engineers from high-growth technology startups.</span>
                </div>
                <div className="flex items-start gap-3 text-slate-700 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-[#15803d] shrink-0 mt-0.5" />
                  <span>Opportunity to showcase prototypes directly to conference delegates and investors.</span>
                </div>
              </div>
            </div>

            {/* Right Column: Featured Image */}
            <div className="md:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border-2 border-slate-200 shadow-xl group">
                <div className="relative h-72 sm:h-96 w-full">
                  <Image
                    src="/images/bolt20/bolt_01.webp"
                    alt="BOLT 2.0 Hackathon Sprint"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent flex flex-col justify-end p-6">
                  <span className="text-xs uppercase font-bold tracking-wider text-[#CCFF00] mb-1">
                    BOLT 2.0 Milestone
                  </span>
                  <p className="text-base font-bold text-white">
                    Hackers coding through the night at VIT Vellore.
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
          <PhotoGridModal
            photos={bolt20Photos}
            title="BOLT 2.0 Highlights"
            subtitle="Key moments and team presentations from BOLT 2.0 at VIT Vellore."
            theme="light"
          />
        </div>
      </section>

      {/* ── DOMAINS & TRACKS GRID ── */}
      <section id="domains" className="py-16 md:py-20 bg-white border-b border-slate-200">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#004B87] bg-[#EBF3F8] px-3 py-1.5 rounded-full border border-[#004B87]/20 inline-block mb-3">
              Problem Tracks
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#002147] tracking-tight underline decoration-[#004B87] underline-offset-8">
              Innovate, Build &amp; Deploy at Scale
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed">
              BOLT 3.0 challenges developers, designers, and engineers at VIT Vellore across 4 frontier technical domains:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl border border-slate-200 bg-[#FAFBFD] hover:border-[#004B87] hover:bg-white transition-all shadow-2xs hover:shadow-md">
              <div className="w-10 h-10 rounded-xl bg-[#EBF3F8] text-[#004B87] flex items-center justify-center mb-4">
                <Zap className="w-5 h-5 text-[#004B87]" />
              </div>
              <h3 className="text-base font-bold text-[#002147]">
                1. AI &amp; Autonomous Agents
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Generative AI workflows, multi-agent frameworks, neuro-symbolic reasoning, and intelligent automation.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-[#FAFBFD] hover:border-[#004B87] hover:bg-white transition-all shadow-2xs hover:shadow-md">
              <div className="w-10 h-10 rounded-xl bg-[#EBF3F8] text-[#004B87] flex items-center justify-center mb-4">
                <Zap className="w-5 h-5 text-[#004B87]" />
              </div>
              <h3 className="text-base font-bold text-[#002147]">
                2. Cyber Trust &amp; Web3
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Zero-knowledge proofs, decentralized identity, post-quantum cryptosystems, and threat detection.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-[#FAFBFD] hover:border-[#004B87] hover:bg-white transition-all shadow-2xs hover:shadow-md">
              <div className="w-10 h-10 rounded-xl bg-[#EBF3F8] text-[#004B87] flex items-center justify-center mb-4">
                <Zap className="w-5 h-5 text-[#004B87]" />
              </div>
              <h3 className="text-base font-bold text-[#002147]">
                3. Smart Mobility &amp; IoT
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                V2X communication, electric vehicle telematics, drone telemetry, and real-time edge processing.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-[#FAFBFD] hover:border-[#004B87] hover:bg-white transition-all shadow-2xs hover:shadow-md">
              <div className="w-10 h-10 rounded-xl bg-[#EBF3F8] text-[#004B87] flex items-center justify-center mb-4">
                <Zap className="w-5 h-5 text-[#004B87]" />
              </div>
              <h3 className="text-base font-bold text-[#002147]">
                4. Open Innovation &amp; Social Impact
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                HealthTech diagnosis platforms, AgriTech supply monitors, and clean energy optimization engines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRIZES & REGISTRATION STATUS (DATES TBA) ── */}
      <section id="register" className="py-16 md:py-24 bg-[#FAFBFD]">
        <div className="container-x">
          <div className="grid md:grid-cols-12 gap-8 items-start">
            {/* Left: Prize Pool Breakdown */}
            <div className="md:col-span-7 bg-white p-7 sm:p-9 rounded-3xl border-2 border-slate-200 shadow-md space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#004B87] bg-[#EBF3F8] px-3 py-1.5 rounded-full border border-[#004B87]/20 inline-block">
                Rewards &amp; Grants
              </span>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#002147] tracking-tight underline decoration-[#004B87] underline-offset-8">
                ₹1,00,000+ Prize Bounty
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                Top teams will receive cash awards, certificates of excellence issued by IEEE ITS, and project incubation support at VIT Vellore.
              </p>

              <div className="grid sm:grid-cols-3 gap-3 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-2xs text-center">
                  <p className="text-xs text-[#004B87] font-bold uppercase tracking-wider">1st Prize</p>
                  <p className="text-xs text-slate-600 mt-1">Cash + Trophy</p>
                  <p className="text-2xl font-black text-[#002147] tracking-tight mt-1">₹50,000</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-2xs text-center">
                  <p className="text-xs text-[#004B87] font-bold uppercase tracking-wider">2nd Prize</p>
                  <p className="text-xs text-slate-600 mt-1">Cash + Trophy</p>
                  <p className="text-2xl font-black text-[#002147] tracking-tight mt-1">₹30,000</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-2xs text-center">
                  <p className="text-xs text-[#004B87] font-bold uppercase tracking-wider">3rd Prize</p>
                  <p className="text-xs text-slate-600 mt-1">Cash + Trophy</p>
                  <p className="text-2xl font-black text-[#002147] tracking-tight mt-1">₹20,000</p>
                </div>
              </div>
            </div>

            {/* Right: Registration Status Box (Dates TBA) */}
            <div className="md:col-span-5">
              <div className="p-7 sm:p-9 rounded-3xl border-2 border-slate-200 bg-white shadow-md space-y-5">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-3.5 py-1.5 rounded-full border border-amber-300">
                  <Clock className="w-3.5 h-3.5 text-amber-700" />
                  <span>Registration: TBA (Opening Soon)</span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#002147] tracking-tight underline decoration-[#004B87] underline-offset-8">
                    Register for BOLT 3.0
                  </h3>
                  <p className="text-sm font-semibold text-[#004B87] mt-3">
                    Registration dates TBA — Portal details launching soon
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                    Official registration dates for BOLT 3.0 at VIT Vellore will be announced shortly along with the release of full problem statements, team guidelines, and judging rubrics.
                  </p>

                  <div className="pt-2 border-t border-slate-200 space-y-2 text-xs text-slate-700 font-medium">
                    <div className="flex items-center gap-2">
                      <span className="text-[#15803d]">✓</span>
                      <span>Teams of 2 to 4 members</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#15803d]">✓</span>
                      <span>₹1,00,000+ total prize pool</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#15803d]">✓</span>
                      <span>Venue: VIT Vellore</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#FAFBFD] border border-slate-200 text-center">
                  <p className="text-xs text-slate-600">
                    Have questions before registration opens? Reach out to the secretariat at{" "}
                    <a
                      href="mailto:johnsingh.k@vit.ac.in"
                      className="text-[#004B87] font-semibold underline hover:text-[#002147]"
                    >
                      johnsingh.k@vit.ac.in
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Overlay Button to Return to Home on Scroll */}
      <BoltFloatingReturn />
    </div>
  );
}
