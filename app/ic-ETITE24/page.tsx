import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import GallerySlideshow, { GalleryItem } from "@/components/GallerySlideshow";
import Icetite24FullGallery from "@/components/Icetite24FullGallery";
import { ICETITE24_PHOTOS } from "@/data/icetite24GalleryData";

const icetite24GalleryItems: GalleryItem[] = ICETITE24_PHOTOS.map((p) => ({
  id: p.id,
  image: p.image,
  title: p.title,
  edition: p.edition,
  location: p.location,
  caption: p.caption,
  category: "2024" as const,
}));

import {
  ArrowLeft,
  ExternalLink,
  Calendar,
  Users,
  FileText,
  Globe,
  Mic2,
  CheckCircle2,
  BookOpen,
  Award,
  Cpu,
} from "lucide-react";

export const metadata: Metadata = {
  title: "ic-ETITE'24 — Second Edition | Highlights & Photo Archive",
  description:
    "Official highlights, stats, and photo archive of the Second IEEE International Conference on Emerging Trends in Information Technology and Engineering (ic-ETITE'24), held on 22–23 Feb 2024 at VIT Vellore.",
};

const stats = [
  { label: "Papers Received", value: "1,688", icon: FileText },
  { label: "Countries", value: "19", icon: Globe },
  { label: "Participants", value: "1,088", icon: Users },
  { label: "Tech Sessions", value: "32", icon: Cpu },
  { label: "Keynotes", value: "22", icon: Mic2 },
  { label: "BOLT 2.0 Reg.", value: "683", icon: Award },
];

const highlights = [
  {
    title: "Chief Guests",
    body: "Dr. Zvi Galil, Georgia Institute of Technology, USA and Shri S. Krishnan, IAS, Secretary, MeitY, Government of India.",
  },
  {
    title: "Keynote Sessions",
    body: "22 keynote sessions delivered by eminent international academicians, Vice-Chancellors, IIT professors, and industry experts from Microsoft, Amazon, and other organizations.",
  },
  {
    title: "Panel Discussions",
    body: "Expert panel discussions were conducted with distinguished speakers from academia, IEEE, and industry.",
  },
  {
    title: "TechNext'24",
    body: "Industrial expo and project competition conducted alongside the conference, featuring live prototype demonstrations to an industry jury.",
  },
  {
    title: "Industry Collaborations & Sponsorships",
    body: "Intel, Cisco, Yellow.ai, Java Capital, and Seed VC Innovation as sponsors and industry partners.",
  },
  {
    title: "IEEE Xplore Indexed",
    body: "All accepted and presented papers were indexed in IEEE Xplore, providing global research visibility for authors.",
  },
];

const sponsors = [
  {
    label: "TECHNICAL CO-SPONSOR",
    name: "IEEE Madras Section",
    logo: "/logos/ieee-madras-section.svg",
    alt: "IEEE Madras Section",
  },
  {
    label: "TITLE SPONSOR",
    name: "Cisco",
    logo: "/logos/cisco.svg",
    alt: "Cisco",
  },
  {
    label: "TECHNOLOGY PARTNER & CO-TITLE SPONSOR",
    name: "Intel",
    logo: "/logos/intel.svg",
    alt: "Intel",
  },
];

const supportedOrganizations = [
  "ACM",
  "IEEE Information Theory Society",
  "IEEE Computer Society Madras Chapter",
  "IEEE Communications Society Madras Chapter",
  "Institution's Innovation Council",
  "ROX",
  "Solaris",
  "Eaglewings",
  "Yellow.ai",
];

export default function Icetite24Page() {
  return (
    <div className="bg-white min-h-screen text-[#002147]">

      {/* ── HERO ── */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        {/* Background Image with Dark Navy Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/gallery/icetite24_stage_main.webp"
            alt="ic-ETITE'24 Inaugural Stage & Dignitaries Dais at Anna Auditorium, VIT Vellore"
            fill
            sizes="100vw"
            priority
            className="object-cover object-center opacity-80"
          />
          {/* Directional gradient: darker on left to protect text, clear on right to showcase photo */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#00142E]/90 via-[#00142E]/45 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#00142E] via-transparent to-black/25" />
        </div>

        {/* Decorative grid */}
        <div className="absolute inset-0 opacity-5 z-[1] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

        <div className="relative z-10 w-full px-6 sm:px-12 lg:px-20 pb-16 pt-28">
          <Link href="/about" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to About
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="bg-[#00A3FF] text-[#00142E] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-[0_2px_10px_rgba(0,163,255,0.35)]">
              Second Edition
            </span>
            <span className="bg-white/15 text-white text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full border border-white/20">
              IEEE Xplore Indexed
            </span>
            <span className="bg-white/10 text-white/80 text-xs font-medium px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" /> 22–23 February 2024
            </span>
          </div>

          <div className="mb-5 pt-1">
            <Image
              src="/logos/ic-etite24-logo-clean.png"
              alt="ic-ETITE'24 Official Logo"
              width={355}
              height={64}
              priority
              className="h-8 sm:h-10 md:h-12 w-auto object-contain drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
            />
            <h1 className="sr-only">ic-ETITE&apos;24</h1>
          </div>
          <p className="text-lg sm:text-xl text-white/70 max-w-2xl leading-relaxed mb-8">
            Second International Conference on Emerging Trends in Information Technology and Engineering — organized by SCORE, VIT Vellore, technically co-sponsored by IEEE.
          </p>

          <a
            href="https://ieeexplore.ieee.org/xpl/conhome/10493200/proceeding"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#00A3FF] hover:bg-[#38BDF8] text-[#00142E] font-bold px-6 py-3 rounded-xl shadow-[0_4px_20px_rgba(0,163,255,0.35)] hover:shadow-[0_6px_24px_rgba(56,189,248,0.5)] transition-all text-sm"
          >
            <BookOpen className="w-4 h-4" />
            IEEE Xplore Proceedings
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-[#001a3d] py-12 px-6 sm:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map(({ label, value, icon: Icon }) => (
            <div key={label} className="text-center">
              <div className="text-3xl sm:text-4xl font-black text-[#38BDF8] mb-1">{value}</div>
              <div className="text-white/60 text-xs uppercase tracking-wider font-semibold">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="py-16 sm:py-20 px-6 sm:px-12 lg:px-20 bg-[#F7F9FC] border-b border-slate-200">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#004B87] bg-[#EBF3F8] px-3 py-1.5 rounded-full border border-[#004B87]/20 inline-block mb-4">
              About the Conference
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#002147] mb-5 leading-tight">
              About ic-ETITE&apos;24
            </h2>
            <p className="text-justify text-base leading-relaxed mb-4">
              The Second IEEE International Conference on Emerging Trends in Information Technology and Engineering (ic-ETITE&apos;24) was organized on 22nd &amp; 23rd February 2024 at VIT Vellore, India. The conference was technically co-sponsored by IEEE Madras Section.
            </p>
            <p className="text-justify text-base leading-relaxed">
              The purpose of this conference is to enhance the research in Information Technology, Computer Engineering, Communication Engineering, Electronics Engineering and to afford an international platform for researchers, academicians, engineers, industrialists and students around the world to share their research findings with the global experts in the field of Science and Technology.
            </p>
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#004B87] bg-[#EBF3F8] px-3 py-1.5 rounded-full border border-[#004B87]/20 inline-block mb-4">
              Theme of the Conference
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#002147] mb-5 leading-tight">
              Conference Theme
            </h2>
            <p className="text-justify text-base leading-relaxed">
              ic-ETITE&apos;24 expresses the importance of upgrading the research in Information Technology and Engineering. It motivates to provide a worldwide platform to researchers far and widespread by exploring their innovations in the field of science and technology. The mission is to promote and improve the research and development related to Information Technology and Engineering. The essential objective of the conference is to assist the researchers in discovering the global linkage for future joint efforts in their academic outlook.
            </p>
          </div>
        </div>
      </section>

      {/* ── HIGHLIGHTS ── */}
      <section className="py-16 sm:py-20 px-6 sm:px-12 lg:px-20 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#004B87] bg-[#EBF3F8] px-3 py-1.5 rounded-full border border-[#004B87]/20 inline-block mb-4">
              Key Highlights
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#002147]">
              Highlights of ic-ETITE&apos;24
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map(({ title, body }) => (
              <div key={title} className="bg-[#F7F9FC] border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle2 className="w-5 h-5 text-[#004B87] shrink-0 mt-0.5" />
                  <h3 className="font-bold text-[#002147] text-base">{title}</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHOTO GALLERY & ARCHIVE (ALL 19 PHOTOS) ── */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-[#F7F9FC] border-b border-slate-200">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center px-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#004B87] bg-[#EBF3F8] px-3.5 py-1.5 rounded-full border border-[#004B87]/20 inline-block mb-4">
              Official Photo Archive · All 19 Photographs
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#002147] mb-3">
              ic-ETITE&apos;24 Highlights &amp; Gallery
            </h2>
            <p className="text-slate-600 text-base max-w-2xl mx-auto">
              Every memorable moment captured during the second edition — inaugural assembly, keynote plenary, 24-hour BOLT 2.0 hackathon, TechNext industrial expo, and international delegate fellowship.
            </p>
          </div>

          {/* Featured Slideshow */}
          <div className="bg-white p-4 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
            <div className="mb-6 flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <h3 className="font-bold text-lg text-[#002147]">Interactive Slideshow</h3>
                <p className="text-xs text-slate-500">Auto-playing cinematic archive showcase with full details</p>
              </div>
              <span className="text-xs font-bold text-[#004B87] bg-[#EBF3F8] px-3 py-1 rounded-full">
                19 Archival Moments
              </span>
            </div>
            <GallerySlideshow items={icetite24GalleryItems} showCategoryFilter={false} />
          </div>

          {/* Full Grid Gallery with Category Filters, Search & Lightbox */}
          <div>
            <div className="mb-6 text-center sm:text-left">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#002147]">
                Complete Photographic Collection
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Filter by event category or search specific topics. Click any photograph to open full-resolution inspection.
              </p>
            </div>
            <Icetite24FullGallery />
          </div>
        </div>
      </section>

      {/* ── SPONSORS ── */}
      <section className="py-16 sm:py-20 px-6 sm:px-12 lg:px-20 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#004B87] bg-[#EBF3F8] px-3 py-1.5 rounded-full border border-[#004B87]/20 inline-block mb-4">
              Partners & Sponsors
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#002147]">Sponsors & Support</h2>
          </div>
          {/* 1. Main Sponsors Row: 3 columns in a single row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {sponsors.map((sponsor) => (
              <div
                key={sponsor.label}
                className="bg-[#F7F9FC] border border-slate-200 rounded-2xl p-6 sm:p-7 flex flex-col justify-between items-center text-center shadow-xs hover:border-[#004B87]/40 transition-colors min-h-[220px]"
              >
                <div className="text-xs font-bold uppercase tracking-wider text-[#004B87] mb-2">
                  {sponsor.label}
                </div>

                <div className="my-auto py-3 flex items-center justify-center w-full min-h-[80px]">
                  <div className="relative w-full max-w-[200px] h-16 flex items-center justify-center">
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.alt || sponsor.name}
                      width={200}
                      height={64}
                      className="max-h-16 w-auto object-contain"
                    />
                  </div>
                </div>

                <div className="text-[#002147] font-semibold text-sm sm:text-base mt-2">
                  {sponsor.name}
                </div>
              </div>
            ))}
          </div>

          {/* 2. Supported By Section: Dedicated showcase with official logos */}
          <div className="bg-[#F7F9FC] border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-xs hover:border-[#004B87]/40 transition-colors">
            <div className="text-center mb-6">
              <div className="text-xs font-bold uppercase tracking-wider text-[#004B87] mb-1.5">
                SUPPORTED BY
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#002147]">
                Technical Societies &amp; Corporate Collaborators
              </h3>
            </div>

            <div className="bg-white rounded-xl border border-slate-200/80 p-6 sm:p-8 flex items-center justify-center shadow-xs">
              <div className="relative w-full max-w-4xl aspect-[1024/397]">
                <Image
                  src="/logos/icetite24-supported-by-logos.png"
                  alt="Organizations and companies that supported ic-ETITE'24"
                  fill
                  sizes="(max-width: 1024px) 100vw, 900px"
                  className="object-contain"
                />
              </div>
            </div>

            {/* List of supporting entities */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-6 max-w-4xl mx-auto">
              {supportedOrganizations.map((org) => (
                <span
                  key={org}
                  className="px-3 py-1 rounded-full bg-white border border-slate-200 text-[#002147] font-semibold text-xs tracking-tight shadow-xs"
                >
                  {org}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}
