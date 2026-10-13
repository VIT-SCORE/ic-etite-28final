import Link from "next/link";
import { Check, ExternalLink, Download, Award } from "lucide-react";

export default function HomeCallForPapers() {
  return (
    <section id="call-for-papers" className="border-b border-[#E4E7EC] bg-white scroll-mt-20">
      <div className="container-x py-20 md:py-24">
        {/* Scopus Recommendation Highlight */}
        <div className="mb-10 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#002147] to-[#004B87] text-white shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Award className="w-8 h-8 text-[#FFB81C] shrink-0" />
            <p className="text-sm sm:text-base font-semibold text-white">
              Extended version of selected papers will be recommended for publication in Scopus indexed journals with impact factor.
            </p>
          </div>
          <span className="shrink-0 px-3.5 py-1.5 rounded-full bg-[#F5A623] text-[#002147] font-bold text-xs uppercase tracking-wider">
            Scopus Publication
          </span>
        </div>

        <div className="grid md:grid-cols-12 gap-10 items-center">
          {/* Left Column */}
          <div className="md:col-span-5 space-y-6">
            <p className="text-[12.5px] tracking-wider uppercase text-[#4A5568] font-semibold">
              Manuscript Submission
            </p>
            <h2 className="text-[clamp(1.8rem,3.4vw,2.6rem)] font-bold text-[#101B2E] leading-tight">
              Call for Papers &amp; Original Research
            </h2>
            <p className="text-[15px] leading-relaxed text-[#101B2E]/80">
              Original and unpublished research papers addressing emerging challenges, innovative technologies, and recent developments are invited from researchers worldwide across Information Technology, Computer Engineering, Communication Engineering, and Electronics Engineering.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                href="/call-for-papers#submit"
                className="btn-primary inline-flex items-center gap-2"
              >
                <span>Submit on CMT</span>
                <span className="text-base font-bold">→</span>
              </Link>
              <Link
                href="/call-for-papers"
                className="btn-outline inline-flex items-center gap-1.5"
              >
                <span>Author Guidelines</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Guidelines */}
          <div className="md:col-span-7">
            <div className="border border-[#E4E7EC] rounded-2xl p-7 md:p-9 bg-[#F7F8FA] shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <p className="text-[15px] font-bold text-[#101B2E]">Submission Compliance Rules</p>
                <span className="text-xs px-2.5 py-0.5 rounded bg-white border border-[#E4E7EC] text-[#004B87] font-semibold">
                  IEEE Compliant
                </span>
              </div>

              <ul className="space-y-3.5 text-[14px] text-[#101B2E]/85">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#004B87] shrink-0" />
                  <span>The papers should be submitted through Microsoft (CMT) portal.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#004B87] shrink-0" />
                  <span>All submitted papers will go through a plagiarism check process.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#004B87] shrink-0" />
                  <span>The manuscript should not contain embedded links, scanned images, header and footer.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#DE6D1B] shrink-0" />
                  <span>Email submission will not be accepted.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#004B87] shrink-0" />
                  <span>Extended version of selected papers will be recommended for publication in Scopus indexed journals with impact factor.</span>
                </li>
              </ul>

              <div className="mt-6 pt-6 border-t border-[#E4E7EC] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[13.5px]">
                <div>
                  Conference Inquiries:{" "}
                  <a
                    href="mailto:icetiteconference@vit.ac.in"
                    className="font-semibold text-[#004B87] hover:underline"
                  >
                    icetiteconference@vit.ac.in
                  </a>
                </div>
                <Link
                  href="/call-for-papers"
                  className="text-xs font-semibold text-[#004B87] hover:underline shrink-0 inline-flex items-center gap-1"
                >
                  <span>Detailed Formatting Rules</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
