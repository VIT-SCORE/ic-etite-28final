"use client";

import { useEffect, useState, useRef } from "react";
import { conferenceData } from "@/data/conference";
import { ExternalLink, Check, Calendar, History, Trophy, FileText, Globe } from "lucide-react";

export default function LegacyTimeline() {
  const { previousEditions } = conferenceData;
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 bg-white border-b border-[#e8e4dc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 pb-6 border-b border-[#e8e4dc]">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-6 h-px bg-[#137547]" />
              <span className="font-mono text-[11px] tracking-widest uppercase text-[#137547]">
                Symposium Lineage
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1a1714] tracking-tight">
              A Legacy of Research & Collaboration
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#6b6560] max-w-md">
            From the inaugural 2020 symposium to the record-breaking 2024 gathering, ic-ETITE continues its biennial tradition of research excellence.
          </p>
        </div>

        {/* Timeline Horizontal Stepper: 2020 -> 2024 -> 2028 */}
        <div className="relative mb-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {/* 2020 Edition */}
            <div className="bg-[#f7f5f0] p-6 rounded-xl border border-[#e8e4dc] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded bg-white text-[#6b6560] border border-[#e8e4dc]">
                    Inaugural Edition
                  </span>
                  <span className="font-mono text-lg font-bold text-[#1a1714]">2020</span>
                </div>
                <h3 className="text-base font-bold text-[#1a1714]">ic-ETITE’20</h3>
                <p className="text-xs text-[#6b6560] mb-3">24–25 February 2020 · VIT Vellore</p>
                <ul className="text-xs text-[#6b6560] space-y-1.5 list-disc list-inside">
                  <li>Technically Co-Sponsored by IEEE Computer & ComSoc Chapters</li>
                  <li>All papers published in IEEE Xplore (ISBN: 978-1-7281-4142-8)</li>
                  <li>21 Technical & 17 Keynote Sessions</li>
                  <li>Inaugural BOLT Hackathon with 500+ participants</li>
                </ul>
              </div>
              <div className="mt-4 pt-3 border-t border-[#e8e4dc]">
                <a
                  href={previousEditions.edition20.proceedingsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#004B87] hover:underline inline-flex items-center gap-1"
                >
                  IEEE Xplore Proceedings <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* 2024 Edition */}
            <div className="bg-[#f7f5f0] p-6 rounded-xl border border-[#e8e4dc] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded bg-white text-[#6b6560] border border-[#e8e4dc]">
                    Second Edition
                  </span>
                  <span className="font-mono text-lg font-bold text-[#1a1714]">2024</span>
                </div>
                <h3 className="text-base font-bold text-[#1a1714]">ic-ETITE’24</h3>
                <p className="text-xs text-[#6b6560] mb-3">22–23 February 2024 · VIT Vellore</p>
                <ul className="text-xs text-[#6b6560] space-y-1.5 list-disc list-inside">
                  <li>Technically Sponsored by IEEE</li>
                  <li>Supported by IEEE Information Theory Society VIT</li>
                  <li>Keynotes by Prof. Zvi Galil, Prof. Vladimir Brusic & others</li>
                  <li>Technical sessions across 19 participating nations</li>
                </ul>
              </div>
              <div className="mt-4 pt-3 border-t border-[#e8e4dc] text-xs font-medium text-[#1a1714]">
                1,688 Papers Received · 32 Technical Sessions
              </div>
            </div>

            {/* 2028 Edition (Current & Prominent) */}
            <div className="bg-white p-6 rounded-xl border-2 border-[#004B87] shadow-card relative">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded bg-[#004B87] text-white font-medium">
                  Current Edition
                </span>
                <span className="font-mono text-lg font-bold text-[#004B87]">2028</span>
              </div>
              <h3 className="text-base font-bold text-[#1a1714]">ic-ETITE’28</h3>
              <p className="text-xs text-[#6b6560] mb-3">10–11 February 2028 · VIT Vellore</p>
              <ul className="text-xs text-[#1a1714] space-y-1.5">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#137547] shrink-0" />
                  <span>Technically Sponsored by IEEE</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#137547] shrink-0" />
                  <span>Organized by SCORE & IEEE ITS VIT</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#137547] shrink-0" />
                  <span>4 Comprehensive Tracks & 100+ Topics</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#137547] shrink-0" />
                  <span>Microsoft (CMT) Submissions Active</span>
                </li>
              </ul>
              <div className="mt-4 pt-3 border-t border-[#f0ede7] flex items-center justify-between">
                <span className="text-xs font-bold text-[#004B87]">Submissions Open</span>
                <span className="font-mono text-[10px] text-[#6b6560]">SCORE, VIT Campus</span>
              </div>
            </div>
          </div>
        </div>

        {/* Official Previous Edition (ic-ETITE'24) Statistics Panel */}
        <div className="bg-[#111042] text-white rounded-xl p-8 sm:p-10 shadow-card">
          <div className="border-b border-white/10 pb-4 mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <p className="text-xs font-mono font-bold uppercase tracking-widest text-vit-light">
                Verified Conference Benchmark
              </p>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mt-1">
                ic-ETITE’24 Official Statistics
              </h3>
            </div>
            <p className="text-xs text-academic-400 max-w-sm">
              Audited figures from the second international conference proceedings organized at VIT Vellore.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {previousEditions.edition24.stats.map((item) => (
              <div key={item.label} className="p-3 rounded-lg bg-academic-800/60 border border-academic-700/60">
                <div className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                  {inView ? item.value : "—"}
                </div>
                <div className="text-[11px] sm:text-xs text-academic-300 font-medium mt-1 leading-snug">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
