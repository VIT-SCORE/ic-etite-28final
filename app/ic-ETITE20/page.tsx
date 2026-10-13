import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import GallerySlideshow, { GalleryItem } from "@/components/GallerySlideshow";

const icetite20GalleryItems: GalleryItem[] = [
  {
    id: "stage-2020",
    image: "/images/gallery/icetite20_stage_inaugural.webp",
    title: "Main Dais & Inaugural Ceremony",
    edition: "ic-ETITE'20 Inaugural Edition",
    location: "Anna Auditorium Main Stage, VIT Vellore",
    caption:
      "Hon'ble Chancellor Dr. G. Viswanathan, Chief Guest, Guests of Honour, and university leadership presiding over the solemn inauguration of ic-ETITE'20 on the Anna Auditorium dais.",
    category: "2020",
  },
  {
    id: "plenary-audience-2020",
    image: "/images/gallery/icetite20_plenary_audience.webp",
    title: "Grand Plenary Audience & Delegates",
    edition: "ic-ETITE'20 Plenary Hall",
    location: "Anna Auditorium, VIT Vellore",
    caption:
      "A packed auditorium of international delegates, academic leaders, research scholars, and students participating in the inaugural proceedings with official ic-ETITE credentials.",
    category: "2020",
  },
  {
    id: "tree-barsky-2020",
    image: "/images/gallery/icetite20_tree_plantation_barsky.webp",
    title: "Tree Plantation - Prof. Brian A. Barsky (UC Berkeley)",
    edition: "Green Campus Tradition · ic-ETITE'20",
    location: "Auditorium Lawns, VIT Vellore",
    caption:
      "Prof. Brian A. Barsky, renowned Professor of Computer Science at University of California, Berkeley (USA), planting a memorial sapling alongside Hon'ble Chancellor Dr. G. Viswanathan.",
    category: "2020",
  },
  {
    id: "tree-abraham-2020",
    image: "/images/gallery/icetite20_tree_plantation_abraham.webp",
    title: "Tree Plantation - Dr. Ajith Abraham (MIR Labs, USA)",
    edition: "Green Campus Tradition · ic-ETITE'20",
    location: "Auditorium Lawns, VIT Vellore",
    caption:
      "Dr. Ajith Abraham, Director of Machine Intelligence Research Labs (MIR Labs, USA), planting a commemorative tree with Chancellor Dr. G. Viswanathan and university executives.",
    category: "2020",
  },
  {
    id: "tree-halonen-2020",
    image: "/images/gallery/icetite20_tree_plantation_halonen.webp",
    title: "Tree Plantation - Dr. Raija Halonen (Univ. of Oulu)",
    edition: "Green Campus Tradition · ic-ETITE'20",
    location: "Auditorium Lawns, VIT Vellore",
    caption:
      "Dr. Raija Halonen, distinguished professor from University of Oulu, Finland, planting a commemorative tree during the opening day ceremonies of ic-ETITE'20.",
    category: "2020",
  },
  {
    id: "traditional-welcome-2020",
    image: "/images/gallery/icetite20_traditional_welcome.webp",
    title: "Traditional Welcome of International Dignitaries",
    edition: "Ceremonial Reception · ic-ETITE'20",
    location: "Anna Auditorium Entrance Foyer",
    caption:
      "Traditional Indian ceremonial welcome accorded to international keynote speakers and guests of honour upon their arrival at Anna Auditorium.",
    category: "2020",
  },
  {
    id: "delegation-portrait-2020",
    image: "/images/gallery/icetite20_delegation_portrait.webp",
    title: "Chancellor & International Keynote Delegation",
    edition: "Leadership Delegation · ic-ETITE'20",
    location: "Chancellor's Secretariat, VIT Vellore",
    caption:
      "Official delegation portrait featuring Hon'ble Chancellor Dr. G. Viswanathan, university leadership, and distinguished keynote speakers from UC Berkeley, MIR Labs, and international universities.",
    category: "2020",
  },
  {
    id: "chancellor-conclave-2020",
    image: "/images/gallery/icetite20_chancellor_conclave.webp",
    title: "Pre-Conference Leadership Conclave",
    edition: "Executive Conclave · ic-ETITE'20",
    location: "Chancellor's Reception Lounge",
    caption:
      "Strategic academic dialogue and welcome interaction between Hon'ble Chancellor Dr. G. Viswanathan, vice presidents, and international guests prior to the conference inauguration.",
    category: "2020",
  },
  {
    id: "keynote-audience-2020",
    image: "/images/gallery/icetite20_keynote_audience.webp",
    title: "Technical Keynote Plenary Session",
    edition: "Technical Sessions · ic-ETITE'20",
    location: "Anna Auditorium Hall",
    caption:
      "Scholars, faculty researchers, and student innovators absorbed in an advanced technical keynote session during the two-day international conference.",
    category: "2020",
  },
  {
    id: "leadership-discussion-2020",
    image: "/images/gallery/icetite20_leadership_discussion.webp",
    title: "Executive & International Speaker Dialogue",
    edition: "Bilateral Dialogue · ic-ETITE'20",
    location: "VIP Executive Lounge",
    caption:
      "High-level bilateral exchange between VIT executive leadership, IEEE representatives, and international delegates on collaborative computing research.",
    category: "2020",
  },
];
import {
  ArrowLeft,
  ExternalLink,
  Calendar,
  Mic2,
  CheckCircle2,
  BookOpen,
  Award,
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
  {
    label: "TECHNICAL CO-SPONSOR",
    name: "IEEE Communications Society Madras Chapter",
    logo: "/logos/ieee-comsoc-madras-pure.png",
    alt: "IEEE Communications Society Madras Chapter",
  },
  {
    label: "TECHNICAL CO-SPONSOR",
    name: "IEEE Computer Society Madras Chapter",
    logo: "/logos/ieee-cs-madras-pure.png",
    alt: "IEEE Computer Society Madras Chapter",
  },
];

const supportedOrganizations20 = [
  "Association for Computing Machinery (ACM)",
  "IEEE Industry Applications Society (IAS)",
];

export default function Icetite20Page() {
  return (
    <div className="bg-white min-h-screen text-[#002147]">

      {/* ── HERO ── */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        {/* Background Image with Rich Violet/Navy Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/gallery/icetite20_conclave_wide.jpg"
            alt="ic-ETITE'20 Inaugural Conclave with Hon'ble Chancellor Dr. G. Viswanathan and International Guests"
            fill
            sizes="100vw"
            priority
            className="object-cover object-center opacity-75"
          />
          {/* Directional gradient: darker on left to protect text readability, clear on right to showcase photo */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#140026]/90 via-[#1f003d]/45 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#140026] via-transparent to-black/25" />
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

      {/* ── PHOTO GALLERY SLIDESHOW ── */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-[#F7F9FC] border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 px-6">
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
          <GallerySlideshow items={icetite20GalleryItems} showCategoryFilter={false} />
        </div>
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
          {/* 1. Main Technical Co-Sponsors Row in a single row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {sponsors20.map((sponsor) => (
              <div
                key={sponsor.name}
                className="bg-[#F7F9FC] border border-slate-200 rounded-2xl p-6 sm:p-7 flex flex-col justify-between items-center text-center shadow-xs hover:border-[#5B2D8E]/40 transition-colors min-h-[220px]"
              >
                <div className="text-xs font-bold uppercase tracking-wider text-[#5B2D8E] mb-2">
                  {sponsor.label}
                </div>

                <div className="my-auto py-3 flex items-center justify-center w-full min-h-[80px]">
                  <div className="relative w-full max-w-[240px] h-16 flex items-center justify-center bg-white rounded-xl p-2 border border-slate-200/60 shadow-xs">
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.alt}
                      width={220}
                      height={60}
                      className="max-h-14 w-auto object-contain"
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
          <div className="bg-[#F7F9FC] border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-xs hover:border-[#5B2D8E]/40 transition-colors">
            <div className="text-center mb-6">
              <div className="text-xs font-bold uppercase tracking-wider text-[#5B2D8E] mb-1.5">
                SUPPORTED BY
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#002147]">
                Technical Societies &amp; Collaborators
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="bg-white rounded-xl border border-slate-200/80 p-6 flex flex-col items-center justify-center text-center shadow-xs hover:border-[#5B2D8E]/30 transition-colors">
                <div className="relative w-full max-w-[160px] h-20 flex items-center justify-center mb-3">
                  <Image
                    src="/logos/acm-pure.png"
                    alt="ACM - Association for Computing Machinery"
                    width={150}
                    height={75}
                    className="max-h-16 w-auto object-contain"
                  />
                </div>
                <span className="text-[#002147] font-bold text-sm">
                  Association for Computing Machinery (ACM)
                </span>
              </div>

              <div className="bg-white rounded-xl border border-slate-200/80 p-6 flex flex-col items-center justify-center text-center shadow-xs hover:border-[#5B2D8E]/30 transition-colors">
                <div className="relative w-full max-w-[200px] h-20 flex items-center justify-center mb-3">
                  <Image
                    src="/logos/ieee-ias-pure.png"
                    alt="IEEE Industry Applications Society (IAS)"
                    width={190}
                    height={75}
                    className="max-h-16 w-auto object-contain"
                  />
                </div>
                <span className="text-[#002147] font-bold text-sm">
                  IEEE Industry Applications Society (IAS)
                </span>
              </div>
            </div>

            {/* Tags of supporting organizations */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 mt-6 max-w-xl mx-auto">
              {supportedOrganizations20.map((org) => (
                <span
                  key={org}
                  className="px-3.5 py-1 rounded-full bg-white border border-slate-200 text-[#002147] font-semibold text-xs tracking-tight shadow-xs"
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
