import type { Metadata } from "next";
import Link from "next/link";
import MarqueeGallery from "@/components/MarqueeGallery";
import { icetite20DrivePhotos } from "@/data/photos";
import {
  ArrowLeft,
  ExternalLink,
  Calendar,
  Mic2,
  CheckCircle2,
  BookOpen,
  Award,
  Building2,
  Cpu,
  Layers,
} from "lucide-react";

export const metadata: Metadata = {
  title: "ic-ETITE'20 — Inaugural Edition | Highlights & Photo Archive",
  description:
    "Official highlights, stats, and photo archive of the First IEEE International Conference on Emerging Trends in Information Technology and Engineering (ic-ETITE'20), held on 24–25 Feb 2020 at VIT Vellore.",
};

const stats = [
  { label: "Technical Sessions", value: "21", icon: Layers },
  { label: "Keynote Sessions", value: "17", icon: Mic2 },
  { label: "BOLT Participants", value: "500+", icon: Award },
  { label: "Prize Money", value: "₹1L", icon: Award },
];

const highlights = [
  {
    title: "Technical Co-Sponsorship",
    body: "ic-ETITE'20 was technically co-sponsored by IEEE Computer Society Madras Chapter, IEEE Communications Society Madras Chapter, and supported by ACM-Madras Chapter.",
  },
  {
    title: "IEEE Xplore Proceedings",
    body: "All the presented papers were published in the IEEE Xplore by the IEEE. Electronic ISBN: 978-1-7281-4142-8 | USB ISBN: 978-1-7281-4141-1.",
  },
  {
    title: "21 Technical Sessions",
    body: "The conference featured 21 dedicated technical sessions with paper presentations from researchers across India and abroad.",
  },
  {
    title: "17 Keynote Sessions",
    body: "Distinguished keynote speakers from international universities and research organizations delivered 17 enriching sessions.",
  },
  {
    title: "BOLT Hackathon",
    body: "A hackathon titled \u0022Breakthrough on Locked Technology\u0022 (BOLT) was conducted with 500+ participants, giving Rs. 1,00,000 as prize money.",
  },
  {
    title: "International Platform",
    body: "The conference provided a worldwide platform for researchers, academicians, engineers, and students to share findings with global experts in Science and Technology.",
  },
];

const sponsors20 = [
  { label: "Technical Co-Sponsor", name: "IEEE Madras Section" },
  { label: "Title Sponsor", name: "Cisco" },
  { label: "Technology Partner & Co-Title Sponsor", name: "Intel" },
  { label: "Supported By", name: "ACM • IEEE ITS • IEEE CS Madras • IIC • Rox • Solaris • Yellow.ai" },
];

export default function Icetite20Page() {
  return (
    <div className="bg-white min-h-screen text-[#002147]">

      {/* ── HERO ── */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a0033] via-[#2d0066] to-[#5B2D8E]" />
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

        <div className="relative z-10 w-full px-6 sm:px-12 lg:px-20 pb-16 pt-28">
          <Link href="/about" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to About
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="bg-[#FFD700] text-[#1a0033] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
              Inaugural Edition
            </span>
            <span className="bg-white/15 text-white text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full border border-white/20">
              IEEE Xplore Indexed
            </span>
            <span className="bg-white/10 text-white/80 text-xs font-medium px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" /> 24–25 February 2020
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight mb-4">
            ic-ETITE<span className="text-[#FFD700]">&apos;20</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/70 max-w-2xl leading-relaxed mb-8">
            The First International Conference on Emerging Trends in Information Technology and Engineering — organized at VIT Vellore, technically co-sponsored by IEEE, 24–25 February 2020.
          </p>

          <a
            href="https://ieeexplore.ieee.org/xpl/conhome/9070069/proceeding"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#FFD700] text-[#1a0033] font-bold px-6 py-3 rounded-xl hover:bg-white transition-colors text-sm"
          >
            <BookOpen className="w-4 h-4" />
            IEEE Xplore Proceedings
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-[#1a0033] py-12 px-6 sm:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8">
          {stats.map(({ label, value }) => (
            <div key={label} className="text-center">
              <div className="text-3xl sm:text-4xl font-black text-[#FFD700] mb-1">{value}</div>
              <div className="text-white/60 text-xs uppercase tracking-wider font-semibold">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="py-16 sm:py-20 px-6 sm:px-12 lg:px-20 bg-[#F7F9FC] border-b border-slate-200">
        <div className="max-w-5xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#5B2D8E] bg-purple-50 px-3 py-1.5 rounded-full border border-purple-200 inline-block mb-4">
            About ic-ETITE&apos;20
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#002147] mb-5 leading-tight">
            The First Edition
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            This event took place in Vellore Institute of Technology, Vellore, India on 24th &amp; 25th February 2020. The purpose of this conference was to enhance the research in Information Technology, Computer Engineering, Communication Engineering, Electronics Engineering and to afford an international platform for researchers, academicians, engineers, industrialists and students around the world to share their research findings with the global experts in the field of Science and Technology.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-6">
            ic-ETITE 2020 expressed its concern towards the upgradation of researchers in Information Technology and Engineering. It motivates to provide a worldwide platform to researchers far and widespread by exploring their innovations in the fields of science and technology. The mission is to promote and improve the research and development related to the topics of the conference.
          </p>
          <a
            href="https://ieeexplore.ieee.org/xpl/conhome/9070069/proceeding"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#5B2D8E] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#4a2073] transition-colors text-sm"
          >
            <BookOpen className="w-4 h-4" />
            View IEEE Xplore Proceedings
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>

      {/* ── HIGHLIGHTS ── */}
      <section className="py-16 sm:py-20 px-6 sm:px-12 lg:px-20 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#5B2D8E] bg-purple-50 px-3 py-1.5 rounded-full border border-purple-200 inline-block mb-4">
              Key Highlights
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#002147]">
              Highlights of ic-ETITE&apos;20
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map(({ title, body }) => (
              <div key={title} className="bg-[#F7F9FC] border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle2 className="w-5 h-5 text-[#5B2D8E] shrink-0 mt-0.5" />
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
          <span className="text-xs font-bold uppercase tracking-widest text-[#5B2D8E] bg-purple-50 px-3 py-1.5 rounded-full border border-purple-200 inline-block mb-4">
            Official Photo Archive
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#002147] mb-2">
            ic-ETITE&apos;20 Gallery
          </h2>
          <p className="text-slate-500 text-base max-w-xl mx-auto">
            Archival photographs from the inaugural edition — inaugurations, keynotes, sessions &amp; more.
          </p>
        </div>
        <MarqueeGallery photos={icetite20DrivePhotos} speed={65} />
      </section>

      {/* ── SPONSORS ── */}
      <section className="py-16 sm:py-20 px-6 sm:px-12 lg:px-20 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#5B2D8E] bg-purple-50 px-3 py-1.5 rounded-full border border-purple-200 inline-block mb-4">
              Partners & Sponsors
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#002147]">Sponsors & Support</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {sponsors20.map(({ label, name }) => (
              <div key={label} className="bg-[#F7F9FC] border border-slate-200 rounded-2xl p-6">
                <div className="text-xs font-bold uppercase tracking-widest text-[#5B2D8E] mb-2">{label}</div>
                <div className="text-[#002147] font-semibold text-base">{name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT VIT & SCORE ── */}
      <section className="py-16 sm:py-20 px-6 sm:px-12 lg:px-20 bg-[#1a0033] text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="w-5 h-5 text-[#FFD700]" />
              <h3 className="text-xl font-bold text-[#FFD700]">About VIT</h3>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Vellore Institute of Technology was established in 1984 and granted University status in 2001. Ranked among the top 601–700 Universities worldwide (Shanghai ARWU 2022), the 8th best University in India (NIRF 2023), and holds NAAC A++ accreditation (3.66/4). The university has a cosmopolitan atmosphere with students from all corners of the globe.
            </p>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Cpu className="w-5 h-5 text-[#FFD700]" />
              <h3 className="text-xl font-bold text-[#FFD700]">About SCORE (Formerly SITE)</h3>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              The School of Computer Science Engineering and Information Systems (SCORE) offers B.Tech (IT), M.Tech (Software Engineering), MCA, BCA and Ph.D programs. With 5,900+ students and 188 faculty members, it has state-of-the-art infrastructure and a strong track record of international conferences and research collaboration.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
