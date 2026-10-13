"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  MapPin,
  Calendar,
  Maximize2,
  Sparkles,
  Layers,
} from "lucide-react";

export interface GalleryItem {
  id: string;
  image: string;
  title: string;
  edition: string;
  location: string;
  caption: string;
  category: "all" | "2020" | "2024";
}

export const galleryItems: GalleryItem[] = [
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
  {
    id: "inauguration-2024",
    image: "/images/gallery/icetite24_inauguration.webp",
    title: "ic-ETITE'24 Grand Inaugural Conclave",
    edition: "ic-ETITE'24 Second Edition",
    location: "Chancellor's Secretariat, VIT Vellore",
    caption:
      "Hon'ble Chancellor Dr. G. Viswanathan conferring with Chief Guest Dr. Zvi Galil, former President of Tel Aviv University and Dean of Computing at Georgia Tech, USA.",
    category: "2024",
  },
  {
    id: "dignitaries-2024",
    image: "/images/gallery/icetite24_dignitaries.webp",
    title: "ic-ETITE'24 Leadership Summit with MeitY Secretary",
    edition: "ic-ETITE'24 Second Edition",
    location: "Executive Secretariat",
    caption:
      "Chancellor Dr. G. Viswanathan and university leadership conferring with Chief Guest Shri S. Krishnan, IAS, Secretary, Ministry of Electronics and Information Technology (MeitY), Govt. of India.",
    category: "2024",
  },
  {
    id: "keynote-2024",
    image: "/images/gallery/icetite24_keynote.webp",
    title: "ic-ETITE'24 International Scholars Forum",
    edition: "ic-ETITE'24 Second Edition",
    location: "VIP Lounge & Anna Auditorium",
    caption:
      "Global keynote speakers, distinguished IEEE delegates, and SCORE faculty convenors assembling during the second biennial edition of ic-ETITE.",
    category: "2024",
  },
];

export interface GallerySlideshowProps {
  items?: GalleryItem[];
  showCategoryFilter?: boolean;
}

export default function GallerySlideshow({
  items,
  showCategoryFilter = true,
}: GallerySlideshowProps = {}) {
  const [activeCategory, setActiveCategory] = useState<"all" | "2020" | "2024">("all");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const filteredItems = items
    ? items
    : activeCategory === "all"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  // Keep index within bounds when filter changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory, items]);

  const nextSlide = useCallback(() => {
    if (!filteredItems.length) return;
    setCurrentIndex((prev) => (prev + 1) % filteredItems.length);
  }, [filteredItems.length]);

  const prevSlide = useCallback(() => {
    if (!filteredItems.length) return;
    setCurrentIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  }, [filteredItems.length]);

  // Autoplay ticker
  useEffect(() => {
    if (isPlaying && !isHovered && filteredItems.length > 1) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, isHovered, nextSlide, filteredItems.length]);

  const activeItem = filteredItems[currentIndex] || filteredItems[0];

  if (!activeItem) return null;

  return (
    <div className="w-full">
      {/* Category Filter Pills */}
      {showCategoryFilter && !items && (
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
              activeCategory === "all"
                ? "bg-[#002147] text-white shadow-sm"
                : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
            }`}
          >
            All Moments ({galleryItems.length})
          </button>
          <button
            onClick={() => setActiveCategory("2020")}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
              activeCategory === "2020"
                ? "bg-[#004B87] text-white shadow-sm"
                : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
            }`}
          >
            ic-ETITE&apos;20 Inaugural (10)
          </button>
          <button
            onClick={() => setActiveCategory("2024")}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
              activeCategory === "2024"
                ? "bg-[#DE6D1B] text-white shadow-sm"
                : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
            }`}
          >
            ic-ETITE&apos;24 Conclave (3)
          </button>
        </div>
      )}

      {/* Main Slideshow Player Card */}
      <div
        className="relative bg-slate-950 rounded-3xl overflow-hidden border-2 border-slate-800 shadow-2xl group select-none"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Aspect Container */}
        <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] md:aspect-[21/10] max-h-[560px] bg-black">
          <Image
            key={activeItem.id}
            src={activeItem.image}
            alt={activeItem.title}
            fill
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
            className="object-cover transition-all duration-700 brightness-95"
          />

          {/* Vignette Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20 pointer-events-none" />

          {/* Top Info Bar */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20 pointer-events-none">
            <div className="flex items-center gap-2 pointer-events-auto">
              <span className="px-3 py-1 rounded-full bg-[#001C3D]/90 backdrop-blur-md text-[#FFB81C] text-xs font-bold border border-white/20 shadow-md">
                {activeItem.edition}
              </span>
            </div>

            <div className="flex items-center gap-2 pointer-events-auto">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-8 h-8 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md text-white flex items-center justify-center border border-white/20 transition-all text-xs"
                title={isPlaying ? "Pause auto-scroll" : "Play auto-scroll"}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
              </button>
              <button
                onClick={() => setLightboxOpen(true)}
                className="w-8 h-8 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md text-white flex items-center justify-center border border-white/20 transition-all text-xs"
                title="View full image"
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
              <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white/90 text-xs font-mono border border-white/20">
                {String(currentIndex + 1).padStart(2, "0")} / {String(filteredItems.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* Previous / Next Arrow Controls */}
          <button
            onClick={prevSlide}
            aria-label="Previous Photo"
            className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-[#002147] text-white flex items-center justify-center border border-white/30 backdrop-blur-md shadow-lg transition-all z-20 hover:scale-110 active:scale-95"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next Photo"
            className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-[#002147] text-white flex items-center justify-center border border-white/30 backdrop-blur-md shadow-lg transition-all z-20 hover:scale-110 active:scale-95"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Bottom Title & Truthful Caption Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7 text-white z-20 max-w-4xl">
            <div className="flex items-center gap-1.5 text-xs text-amber-300 mb-1 font-medium">
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              <span>{activeItem.location}</span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight drop-shadow-md">
              {activeItem.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 mt-1.5 max-w-3xl leading-relaxed drop-shadow-sm">
              {activeItem.caption}
            </p>
          </div>
        </div>

        {/* Slideshow Progress Bar */}
        <div className="h-1 w-full bg-white/10 relative overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#F5A623] to-[#FFB81C] transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / filteredItems.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Interactive Thumbnail Ribbon */}
      <div className="mt-4 flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-thin px-1">
        {filteredItems.map((item, idx) => (
          <button
            key={item.id}
            onClick={() => setCurrentIndex(idx)}
            className={`relative flex-shrink-0 w-20 h-14 sm:w-24 sm:h-16 rounded-xl overflow-hidden border-2 transition-all duration-200 ${
              idx === currentIndex
                ? "border-[#F5A623] ring-2 ring-[#F5A623]/40 scale-105"
                : "border-slate-200 opacity-60 hover:opacity-100 hover:border-slate-400"
            }`}
            title={item.title}
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              loading="lazy"
              sizes="96px"
              className="object-cover"
            />
          </button>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <div className="relative max-w-5xl max-h-[85vh] w-full h-full flex flex-col items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src={activeItem.image}
                alt={activeItem.title}
                fill
                className="object-contain"
              />
            </div>
            <div className="text-center text-white mt-4 max-w-2xl px-4">
              <h4 className="text-lg font-bold text-[#FFB81C]">{activeItem.title}</h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">{activeItem.caption}</p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxOpen(false);
                }}
                className="mt-3 px-4 py-1.5 rounded-full bg-white/20 hover:bg-white/30 text-xs font-semibold"
              >
                Close Preview (Esc)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
