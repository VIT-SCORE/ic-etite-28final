import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import MarqueeGallery from "@/components/MarqueeGallery";
import { icetite24Photos } from "@/data/photos";
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
  Building2,
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
  { label: "Technical Co-Sponsor", name: "IEEE Madras Section" },
  { label: "Title Sponsor", name: "Cisco" },
  { label: "Technology Partner & Co-Title Sponsor", name: "Intel" },
  { label: "Supported By", name: "ACM • IEEE ITS • IEEE CS • Yellow.ai • Java Capital • Seed VC Innovation" },
];

export default function Icetite24Page() {
  return (
    <div className="bg-white min-h-screen text-[#002147]">

      {/* ── HERO ── */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#001a3d] via-[#002d6b] to-[#004B87]" />
        {/* Decorative grid */}
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

        <div className="relative z-10 w-full px-6 sm:px-12 lg:px-20 pb-16 pt-28">
          <Link href="/about" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to About
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="bg-[#CCFF00] text-[#001a3d] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
              Second Edition
            </span>
            <span className="bg-white/15 text-white text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full border border-white/20">
              IEEE Xplore Indexed
            </span>
            <span className="bg-white/10 text-white/80 text-xs font-medium px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" /> 22–23 February 2024
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight mb-4">
            ic-ETITE<span className="text-[#CCFF00]">&apos;24</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/70 max-w-2xl leading-relaxed mb-8">
            Second International Conference on Emerging Trends in Information Technology and Engineering — organized by SCORE, VIT Vellore, technically co-sponsored by IEEE.
          </p>

          <a
            href="https://ieeexplore.ieee.org/xpl/conhome/10457991/proceeding"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#CCFF00] text-[#001a3d] font-bold px-6 py-3 rounded-xl hover:bg-white transition-colors text-sm"
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
              <div className="text-3xl sm:text-4xl font-black text-[#CCFF00] mb-1">{value}</div>
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
            <p className="text-slate-600 text-base leading-relaxed mb-4">
              The Second IEEE International Conference on Emerging Trends in Information Technology and Engineering (ic-ETITE&apos;24) was organized on 22nd &amp; 23rd February 2024 at VIT Vellore, India. The conference was technically co-sponsored by IEEE Madras Section.
            </p>
            <p className="text-slate-600 text-base leading-relaxed">
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
            <p className="text-slate-600 text-base leading-relaxed">
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

      {/* ── PHOTO MARQUEE ── */}
      <section className="py-16 sm:py-20 bg-[#F7F9FC] border-b border-slate-200">
        <div className="text-center mb-8 px-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#004B87] bg-[#EBF3F8] px-3 py-1.5 rounded-full border border-[#004B87]/20 inline-block mb-4">
            Official Photo Archive
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#002147] mb-2">
            ic-ETITE&apos;24 Highlights
          </h2>
          <p className="text-slate-500 text-base max-w-xl mx-auto">
            Moments from the second edition — keynotes, inaugurations, sessions &amp; awards.
          </p>
        </div>
        <MarqueeGallery photos={icetite24Photos} speed={70} />
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {sponsors.map(({ label, name }) => (
              <div key={label} className="bg-[#F7F9FC] border border-slate-200 rounded-2xl p-6">
                <div className="text-xs font-bold uppercase tracking-widest text-[#004B87] mb-2">{label}</div>
                <div className="text-[#002147] font-semibold text-base">{name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT VIT & SCORE ── */}
      <section className="py-16 sm:py-20 px-6 sm:px-12 lg:px-20 bg-[#001a3d] text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="w-5 h-5 text-[#CCFF00]" />
              <h3 className="text-xl font-bold text-[#CCFF00]">About VIT</h3>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Vellore Institute of Technology was established in 1984 as Vellore Engineering College and granted University status in 2001. Ranked among the top 601–700 Universities worldwide (Shanghai ARWU 2022), the 8th best University in India (NIRF 2023), and holds NAAC A++ accreditation (3.66/4).
            </p>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Cpu className="w-5 h-5 text-[#CCFF00]" />
              <h3 className="text-xl font-bold text-[#CCFF00]">About SCORE (Formerly SITE)</h3>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              The School of Computer Science Engineering and Information Systems (SCORE) offers B.Tech, M.Tech, MCA, BCA and Ph.D programs. With 5,900+ students and 188 faculty members, it has state-of-the-art infrastructure, industry-supported labs and a strong track record of international conferences.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
