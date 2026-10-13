import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  CheckCircle2,
  ExternalLink,
  Camera,
  ChevronRight,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import GallerySlideshow from "@/components/GallerySlideshow";

export const metadata: Metadata = {
  title: "About ic-ETITE'28 | Vellore Institute of Technology",
  description:
    "Learn about ic-ETITE'28, organized by SCORE, VIT Vellore. Explore conference legacy, VIT rankings, and IEEE ITS chapter.",
};

const rankingsList = [
  {
    title: "QS World University Rankings by Subject 2026",
    desc: "VIT is ranked 119th globally in Engineering & Technology. VIT is also ranked 86th in Computer Science & Information Systems and 87th in Electrical & Electronic Engineering, with several other disciplines placed among the top 200 globally.",
    badge: "QS Subject 2026",
  },
  {
    title: "QS Sustainability Rankings 2026",
    desc: "VIT is ranked 352nd globally and 7th among institutions in India, reflecting its performance in sustainability-related areas.",
    badge: "7th in India",
  },
  {
    title: "Shanghai Ranking (ARWU) 2025",
    desc: "VIT is placed in the 501–600 global rank band and in the 1–2 rank band among Indian institutions.",
    badge: "ARWU 2025",
  },
  {
    title: "NAAC Accreditation",
    desc: "VIT Vellore is accredited with an A++ grade, with a CGPA of 3.66 on a four-point scale.",
    badge: "A++ Grade · CGPA 3.66",
  },
  {
    title: "NIRF 2025 (Govt. of India)",
    desc: "VIT is ranked 14th in the University category, 14th in Research, and 16th in Engineering in the National Institutional Ranking Framework (NIRF), Government of India.",
    badge: "NIRF 2025",
  },
];

const archivalGallery = [
  {
    image: "/images/gallery/icetite20_stage_inaugural.webp",
    title: "ic-ETITE'20 Main Dais & Inauguration",
    badge: "First Edition · 2020",
    caption:
      "Hon'ble Chancellor Dr. G. Viswanathan, Chief Guest, Guests of Honour, and university leadership presiding over the solemn inauguration on the Anna Auditorium dais.",
  },
  {
    image: "/images/gallery/icetite20_plenary_audience.webp",
    title: "Plenary Delegates at Anna Auditorium",
    badge: "Plenary Gathering",
    caption:
      "A full house of international delegates, academic leaders, research scholars, and students participating in the inaugural proceedings.",
  },
  {
    image: "/images/gallery/icetite20_tree_plantation_barsky.webp",
    title: "Tree Plantation · Prof. Brian A. Barsky",
    badge: "Green Campus Tradition",
    caption:
      "Prof. Brian A. Barsky (UC Berkeley, USA) planting a commemorative sapling with Chancellor Dr. G. Viswanathan outside Anna Auditorium.",
  },
  {
    image: "/images/gallery/icetite20_tree_plantation_abraham.webp",
    title: "Tree Plantation · Dr. Ajith Abraham",
    badge: "Green Campus Tradition",
    caption:
      "Dr. Ajith Abraham (Director, MIR Labs, USA) and university leadership planting a commemorative tree on the auditorium lawns.",
  },
  {
    image: "/images/gallery/icetite20_tree_plantation_halonen.webp",
    title: "Tree Plantation · Dr. Raija Halonen",
    badge: "Green Campus Tradition",
    caption:
      "Dr. Raija Halonen (University of Oulu, Finland) participating in the commemorative green plantation tradition.",
  },
  {
    image: "/images/gallery/icetite20_traditional_welcome.webp",
    title: "Ceremonial Welcome of International Guests",
    badge: "Traditional Welcome",
    caption:
      "Traditional Indian ceremonial floral welcome accorded to international keynote speakers at the Anna Auditorium entrance.",
  },
  {
    image: "/images/gallery/icetite20_delegation_portrait.webp",
    title: "Chancellor & International Keynote Delegation",
    badge: "Leadership Delegation",
    caption:
      "Official delegation portrait featuring Chancellor Dr. G. Viswanathan and international delegates from UC Berkeley, MIR Labs, and partner institutions.",
  },
  {
    image: "/images/gallery/icetite24_inauguration.webp",
    title: "ic-ETITE'24 Grand Inaugural Conclave",
    badge: "Second Edition · 2024",
    caption:
      "Hon'ble Chancellor Dr. G. Viswanathan meeting Chief Guest Dr. Zvi Galil, former Dean of Computing at Georgia Tech, USA.",
  },
  {
    image: "/images/gallery/icetite24_dignitaries.webp",
    title: "ic-ETITE'24 Leadership Summit with MeitY Secretary",
    badge: "ic-ETITE'24 Edition",
    caption:
      "Chancellor Dr. G. Viswanathan and university leadership conferring with Chief Guest Shri S. Krishnan, IAS, Secretary, MeitY, Govt. of India.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen text-[#002147]">
      <PageHeader
        badge="Vellore Institute of Technology · SCORE"
        title="About ic-ETITE'28"
        subtitle="The Third International Conference on Emerging Trends in Information Technology and Engineering (ic-ETITE’28) will be held at VIT Vellore, India, on 10–11 February 2028."
        breadcrumb="About Conference"
        bgImage="/images/frame_15.webp"
      />

      <div className="container-x py-16 md:py-24 space-y-20">
        {/* Conference Overview */}
        <section className="grid md:grid-cols-12 gap-10 md:gap-14 items-stretch">
          <div className="md:col-span-6 space-y-5 flex flex-col justify-center">
            <span className="text-xs sm:text-sm font-bold text-[#002147] uppercase tracking-wider bg-[#FFF4DB] px-3.5 py-1.5 rounded-full border border-[#F5A623]/50 w-fit">
              About ic-ETITE’28
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#002147] font-bold leading-tight">
              An International Platform for Research &amp; Innovation
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-slate-700 font-normal">
              The conference aims to provide an international platform for researchers, academicians, engineers, industry professionals, and students to present and exchange innovative research in Information Technology, Computer Engineering, Communication Engineering, Electronics Engineering, and related emerging areas.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-slate-700 font-normal">
              ic-ETITE’28 seeks to foster knowledge sharing, interdisciplinary collaboration, industry–academia interaction, and future research partnerships among participants from around the world.
            </p>
            <p className="text-base leading-relaxed text-slate-700 font-normal">
              Original and unpublished research papers addressing emerging challenges, innovative technologies, and recent developments are invited from researchers worldwide. The conference is committed to promoting research excellence and facilitating the dissemination of knowledge that contributes to the advancement of science, technology, and education.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <Link href="/call-for-papers" className="btn-primary text-sm font-bold py-2.5 px-5">
                Call for Papers
              </Link>
              <Link href="/tracks" className="btn-outline text-sm font-semibold py-2.5 px-5">
                Explore Tracks
              </Link>
            </div>
          </div>

          <div className="md:col-span-6 flex flex-col justify-center">
            <div className="p-2.5 bg-white border-2 border-slate-200 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative w-full aspect-[3/2] rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
                <Image
                  src="/images/gallery/icetite24_inauguration.webp"
                  alt="ic-ETITE Conference Plenary Session"
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-3 bg-slate-50 border-t border-slate-200 text-xs sm:text-sm text-slate-600 font-medium rounded-b-xl mt-2.5">
                Dignitaries and keynote luminaries at ic-ETITE, Anna Auditorium, VIT Vellore
              </div>
            </div>
          </div>
        </section>

        {/* The Theme of the Conference */}
        <section className="bg-[#FAFBFD] border-2 border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm">
          <div className="max-w-3xl mb-6">
            <span className="text-xs sm:text-sm font-bold text-[#DE6D1B] uppercase tracking-wider bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-200 inline-block mb-3">
              Conference Focus
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#002147]">
              The theme of the Conference
            </h2>
          </div>
          <div className="space-y-4 text-base sm:text-lg leading-relaxed text-slate-700">
            <p>
              ic-ETITE’28 emphasizes the importance of advancing research and innovation in Information Technology and Engineering. The conference aims to provide a global platform for researchers, academicians, engineers, industry professionals, and students to showcase their innovations, exchange knowledge, and explore emerging developments in science and technology.
            </p>
            <p>
              The conference is committed to promoting research, innovation, and technological development in Information Technology and Engineering. It seeks to foster international collaboration, encourage interdisciplinary research, and facilitate global research networks that support future joint initiatives and academic partnerships.
            </p>
          </div>
        </section>

        {/* ── HIGHLIGHTS OF PREVIOUS EDITIONS (ic-ETITE'24 & ic-ETITE'20) ── */}
        <section id="highlights" className="space-y-8 scroll-mt-24">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs sm:text-sm font-bold text-[#004B87] uppercase tracking-wider bg-[#EBF3F8] px-3.5 py-1.5 rounded-full border border-[#004B87]/30 inline-block mb-3">
              Conference Heritage &amp; Impact
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#002147]">
              Highlights of Previous Editions
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              A proven track record of research excellence, international keynote speakers, hackathons, and IEEE Xplore proceedings.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* ic-ETITE'24 Card */}
            <div className="bg-white rounded-3xl border-2 border-slate-200 shadow-sm p-7 sm:p-9 flex flex-col justify-between hover:border-[#002147] transition-all">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#002147] text-white text-xs font-bold font-mono uppercase tracking-wider">
                    Second ic-ETITE’24 · 22–23 Feb 2024
                  </span>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    IEEE Xplore Indexed
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#002147] mb-2">
                  Highlights of the Second ic-ETITE’24
                </h3>
                <p className="text-sm text-slate-600 mb-6">
                  Organized by SCORE, VIT Vellore: 22–23 February 2024. Technically co-sponsored by IEEE.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 mb-6 text-center">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <p className="text-2xl font-serif font-bold text-[#002147]">1,688</p>
                    <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide mt-0.5">Papers Received</p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <p className="text-2xl font-serif font-bold text-[#002147]">19</p>
                    <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide mt-0.5">Countries</p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <p className="text-2xl font-serif font-bold text-[#002147]">1,088</p>
                    <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide mt-0.5">Participants</p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <p className="text-2xl font-serif font-bold text-[#004B87]">32</p>
                    <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide mt-0.5">Tech Sessions</p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <p className="text-2xl font-serif font-bold text-[#004B87]">22</p>
                    <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide mt-0.5">Keynotes</p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <p className="text-2xl font-serif font-bold text-[#DE6D1B]">683</p>
                    <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide mt-0.5">BOLT 2.0 Reg.</p>
                  </div>
                </div>

                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#002147] shrink-0 mt-0.5" />
                    <span><strong>Chief Guests:</strong> Dr. Zvi Galil, Georgia Institute of Technology, USA, and Shri S. Krishnan, IAS, Secretary, MeitY, Government of India.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#002147] shrink-0 mt-0.5" />
                    <span><strong>Keynote Sessions:</strong> 22 keynote sessions delivered by eminent international academicians, Vice-Chancellors, IIT professors, and industry experts from Microsoft, Amazon, and other organizations.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#002147] shrink-0 mt-0.5" />
                    <span><strong>Panel Discussions:</strong> Expert panel discussions were conducted with distinguished speakers from academia, IEEE, and industry.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#002147] shrink-0 mt-0.5" />
                    <span><strong>Technext’24:</strong> Industrial expo and project competition conducted.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#002147] shrink-0 mt-0.5" />
                    <span><strong>Industry Collaborations &amp; Sponsorships:</strong> Intel, Cisco, Yellow.ai, Java Capital, and Seed VC Innovation.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/ic-ETITE24"
                  className="bg-[#002147] hover:bg-[#003366] text-white font-bold text-xs flex-1 py-3 px-4 rounded-xl inline-flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.99] shadow-sm"
                >
                  <span>Explore ic-ETITE&apos;24</span>
                  <ChevronRight className="w-4 h-4 text-[#FFB81C]" />
                </Link>
                <a
                  href="https://ieeexplore.ieee.org/xpl/conhome/10493200/proceeding"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#004B87] hover:bg-[#003366] text-white font-bold text-xs flex-1 py-3 px-4 rounded-xl inline-flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.99] shadow-sm"
                >
                  <span>Access IEEE Proceedings</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* ic-ETITE'20 Card */}
            <div className="bg-white rounded-3xl border-2 border-slate-200 shadow-sm p-7 sm:p-9 flex flex-col justify-between hover:border-[#002147] transition-all">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#004B87] text-white text-xs font-bold font-mono uppercase tracking-wider">
                    First ic-ETITE’20 · 24–25 Feb 2020
                  </span>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    IEEE Xplore Indexed
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-[#002147] mb-2">
                  Highlights of First ic-ETITE’20
                </h3>
                <p className="text-sm text-slate-600 mb-6">
                  The first IEEE International Conference on “Emerging Trends in Information Technology and Engineering” was organized on 24th &amp; 25th February 2020.
                </p>

                <div className="grid grid-cols-2 gap-3.5 mb-6 text-center">
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <p className="text-3xl font-bold text-[#002147]">21</p>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mt-1">Technical Sessions</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <p className="text-3xl font-bold text-[#002147]">17</p>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mt-1">Keynote Sessions</p>
                  </div>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#004B87] shrink-0 mt-0.5" />
                    <span><strong>Technical Co-Sponsorship:</strong> ic-ETITE’20 was technically co-sponsored by IEEE.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#004B87] shrink-0 mt-0.5" />
                    <span><strong>IEEE Xplore Proceedings:</strong> All the presented papers were published in the IEEE Xplore by the IEEE.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#004B87] shrink-0 mt-0.5" />
                    <span><strong>Official ISBN:</strong> Electronic ISBN: <code className="font-mono text-[11px] bg-slate-100 px-1.5 py-0.5 rounded">978-1-7281-4142-8</code> | USB ISBN: <code className="font-mono text-[11px] bg-slate-100 px-1.5 py-0.5 rounded">978-1-7281-4141-1</code></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#004B87] shrink-0 mt-0.5" />
                    <span><strong>BOLT Hackathon:</strong> A hackathon titled, “Breakthrough on Locked Technology” BOLT was conducted with 500+ participants and gave Rs. 1,00,000 as prize money.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/ic-ETITE20"
                  className="bg-[#002147] hover:bg-[#003366] text-white font-bold text-xs flex-1 py-3 px-4 rounded-xl inline-flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.99] shadow-sm"
                >
                  <span>Explore ic-ETITE&apos;20</span>
                  <ChevronRight className="w-4 h-4 text-[#FFB81C]" />
                </Link>
                <a
                  href="https://ieeexplore.ieee.org/xpl/conhome/9070069/proceeding"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#004B87] hover:bg-[#003366] text-white font-bold text-xs flex-1 py-3 px-4 rounded-xl inline-flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.99] shadow-sm"
                >
                  <span>Access IEEE Proceedings</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── PHOTO GALLERY OF PREVIOUS EDITIONS ── */}
        <section className="bg-gradient-to-b from-[#FAFBFD] to-white border-2 border-slate-200 rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF4DB] border border-[#F5A623]/40 text-xs font-bold text-[#002147] mb-2 uppercase tracking-wider">
              <Camera className="w-3.5 h-3.5 text-[#F5A623]" />
              <span>Official Photo Archive</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#002147]">
              Conference Moments &amp; Gallery
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Authentic glimpses of the inaugural ceremonies, keynote addresses, and delegates from ic-ETITE’24 and ic-ETITE’20 at VIT Vellore.
            </p>
          </div>

          <GallerySlideshow />

          {/* Curated Historical Moments 3-in-a-row Grid */}
          <div className="mt-14 pt-10 border-t border-slate-200">
            <div className="text-center max-w-xl mx-auto mb-8">
              <h3 className="font-serif text-2xl font-bold text-[#002147]">
                Curated Archival Moments
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Selected archival photographs with official event details and dignitary attributions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {archivalGallery.map((photo, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                      <Image
                        src={photo.image}
                        alt={photo.title}
                        fill
                        loading="lazy"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3 z-10">
                        <span className="inline-block px-2.5 py-1 rounded-full bg-[#001C3D]/85 backdrop-blur-md text-[#FFB81C] text-[10.5px] font-bold border border-white/20 tracking-wide">
                          {photo.badge}
                        </span>
                      </div>
                    </div>

                    <div className="p-5">
                      <h4 className="font-bold text-base sm:text-lg text-[#002147] mb-1.5 group-hover:text-[#004B87] transition-colors leading-snug">
                        {photo.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {photo.caption}
                      </p>
                    </div>
                  </div>

                  <div className="px-5 pb-5 pt-0">
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#DE6D1B]">
                      <span>VIT Vellore Campus</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ABOUT VIT & RANKINGS ── */}
        <section className="space-y-12">
          <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-center">
            <div className="md:col-span-6 order-2 md:order-1 flex flex-col justify-center">
              <div className="p-2.5 bg-white border-2 border-slate-200 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative w-full aspect-[3/2] rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
                  <Image
                    src="/images/vit-campus.webp"
                    alt="VIT Vellore Main Campus Entrance"
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-3 bg-slate-50 border-t border-slate-200 text-xs sm:text-sm text-slate-600 font-medium rounded-b-xl mt-2.5">
                  Vellore Institute of Technology (VIT), Vellore Main Campus Entrance
                </div>
              </div>
            </div>

            <div className="md:col-span-6 order-1 md:order-2 space-y-5 flex flex-col justify-center">
              <span className="text-xs sm:text-sm font-bold text-[#002147] uppercase tracking-wider bg-[#FFF4DB] px-3.5 py-1.5 rounded-full border border-[#F5A623]/50">
                Host University
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#002147] font-bold leading-tight">
                About VIT
              </h2>
              <p className="text-base leading-relaxed text-slate-700 font-normal">
                Vellore Institute of Technology (VIT) was established in 1984 as Vellore Engineering College and was granted university status by the Government of India in 2001 under Section 3 of the University Grants Commission (UGC) Act, 1956. Founded by <strong>Dr. G. Viswanathan</strong>, VIT is committed to providing quality higher education and fostering excellence in teaching, research, and innovation.
              </p>
              <p className="text-base leading-relaxed text-slate-700 font-normal">
                The University promotes a vibrant and cosmopolitan academic environment, attracting students and faculty from across India and around the world. VIT places strong emphasis on research, innovation, international collaboration, and industry engagement. Its extensive academic and research collaborations with universities and institutions worldwide facilitate student and faculty exchanges, joint research, and global academic partnerships. With a strong focus on academic excellence and a professional approach to governance, VIT continues to advance its vision of <em>“Transforming life through excellence in education and research.”</em> The University remains committed to preparing students and researchers to address emerging global challenges and contribute meaningfully to society.
              </p>
            </div>
          </div>

          {/* Ranking & Accreditation Cards */}
          <div className="bg-[#FAFBFD] border-2 border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm">
            <div className="max-w-3xl mb-8">
              <span className="text-xs sm:text-sm font-bold text-[#002147] uppercase tracking-wider bg-[#FFF4DB] px-3.5 py-1.5 rounded-full border border-[#F5A623]/50 inline-block mb-3">
                Global Recognition &amp; Quality Accreditations
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#002147] font-bold">
                Ranking &amp; Accreditation
              </h3>
              <p className="text-sm sm:text-base text-slate-600 mt-2">
                Vellore Institute of Technology (VIT) is committed to excellence in teaching, research, innovation, and global academic engagement. Its strong performance in national and international rankings and accreditation reflects its continuing emphasis on academic and research excellence.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-5">
              {rankingsList.map((rank) => (
                <div
                  key={rank.title}
                  className="w-full sm:w-[calc(33.333%-14px)] max-w-sm bg-white p-6 rounded-2xl border-2 border-slate-200 shadow-xs flex flex-col justify-between hover:border-[#002147] transition-colors"
                >
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold font-mono bg-[#002147]/10 text-[#002147] mb-3">
                      {rank.badge}
                    </span>
                    <h4 className="font-bold text-[#002147] text-base mb-2">
                      {rank.title}
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {rank.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ABOUT SCORE ── */}
        <section className="bg-white border-2 border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm">
          <div className="grid md:grid-cols-12 gap-10 md:gap-12 items-center mb-10">
            <div className="md:col-span-7 space-y-4 flex flex-col justify-center">
              <span className="text-xs sm:text-sm font-bold text-[#004B87] uppercase tracking-wider bg-[#EBF3F8] px-3.5 py-1.5 rounded-full border border-[#004B87]/30 inline-block w-fit">
                Organizing School
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#002147] font-bold">
                About the School of Computer Science Engineering and Information Systems
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-slate-700">
                The School of Computer Science Engineering and Information Systems (SCORE) at Vellore Institute of Technology (VIT), Vellore, is a vibrant academic and research community committed to excellence in Computer Science, Information Technology, Artificial Intelligence, Data Engineering, Cyber Security, Software Engineering, and Computer Applications.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                The School offers a diverse range of undergraduate, postgraduate, research, and doctoral programmes, including B.Tech. in Information Technology, B.Tech. in Computer Science and Engineering (Artificial Intelligence and Data Engineering), B.Tech. in Computer Science and Engineering (Cyber Security), BCA, B.Sc. in Computer Science, M.Tech. in Computer Science and Engineering (Cybersecurity), M.Tech. in Software Engineering, MCA, M.Sc. in Artificial Intelligence and Machine Learning, M.Tech. by Research, and Ph.D. programmes, equipping students with strong technical knowledge, practical skills, and the ability to address real-world challenges.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                SCORE fosters a research-driven and innovation-oriented environment through interdisciplinary research, industry collaboration, consultancy, and engagement with leading academic and research organisations. Supported by state-of-the-art infrastructure, industry-supported laboratories, Centres of Excellence, and a strong community of students, faculty members, researchers, visiting professors, and industry professionals, the School promotes excellence in teaching, learning, research, and innovation. Through seminars, workshops, international expert talks, symposia, conferences, and industry interactions, SCORE provides opportunities to engage with emerging technologies and global research developments, while advancing its vision of transformative education, impactful research, innovation, and lifelong learning.
              </p>
            </div>

            <div className="md:col-span-5 flex flex-col justify-center">
              <div className="p-2.5 bg-white border-2 border-slate-200 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative w-full aspect-[3/2] rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
                  <Image
                    src="/images/004A3344.webp"
                    alt="ic-ETITE Conference Plenary Gathering at Anna Auditorium, VIT Vellore"
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover object-center hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-3 bg-slate-50 border-t border-slate-200 text-xs text-slate-600 font-medium rounded-b-xl mt-2.5">
                  SCORE Academic Facilities &amp; Technology Infrastructure, VIT Vellore
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-[#FAFBFD] border border-slate-200 text-center">
              <p className="text-3xl font-serif font-bold text-[#002147]">5,900+</p>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mt-1">Students</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#FAFBFD] border border-slate-200 text-center">
              <p className="text-3xl font-serif font-bold text-[#002147]">188+</p>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mt-1">Research Faculty</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#FAFBFD] border border-slate-200 text-center">
              <p className="text-3xl font-serif font-bold text-[#004B87]">NAAC</p>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mt-1">A++ Grade (3.66)</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#FAFBFD] border border-slate-200 text-center">
              <p className="text-3xl font-serif font-bold text-emerald-700">IEEE</p>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mt-1">Xplore Standards</p>
            </div>
          </div>
        </section>

        {/* ── ABOUT IEEE ITS CHAPTER ── */}
        <section className="grid md:grid-cols-12 gap-10 md:gap-14 items-center">
          <div className="md:col-span-6 space-y-4 flex flex-col justify-center">
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200 w-fit">
              Co-Organizing Chapter
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#002147] font-bold leading-tight">
              About IEEE Information Theory Society, VIT
            </h2>
            <p className="text-base leading-relaxed text-slate-700">
              The IEEE Information Theory Society at VIT is a student chapter dedicated to exploring the latest advancements in information theory and applying them to address contemporary technological challenges.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-slate-600">
              The chapter provides a nurturing platform for students to foster innovative ideas, develop technical expertise, and engage in meaningful research and projects. Through technical events, workshops, seminars, and collaborative initiatives, the chapter promotes knowledge sharing and practical learning while connecting students with partners and collaborators from academia and industry. By encouraging curiosity, creativity, and continuous learning, the IEEE Information Theory Society at VIT strives to empower students to develop innovative solutions, address emerging challenges, and contribute meaningfully to the advancement of information and communication technologies.
            </p>
          </div>

          <div className="md:col-span-6 flex flex-col justify-center">
            <div className="p-2.5 bg-white border-2 border-slate-200 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
                <Image
                  src="/images/ieee-its-group.jpg"
                  alt="IEEE Information Theory Society Team at VIT"
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-3 bg-slate-50 border-t border-slate-200 text-xs sm:text-sm text-slate-600 font-medium rounded-b-xl mt-2.5">
                IEEE Information Theory Society Student Chapter team and faculty at VIT Vellore
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
