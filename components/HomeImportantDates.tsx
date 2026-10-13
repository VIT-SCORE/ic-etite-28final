import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

export default function HomeImportantDates() {
  const dates = [
    {
      date: "05 October 2027",
      title: "Full Paper Submission",
      note: "Microsoft (CMT) submission system closes at 23:59 IST",
      highlight: false,
    },
    {
      date: "04 November 2027",
      title: "Notification of Acceptance",
      note: "Authors notified of peer-review decisions",
      highlight: false,
    },
    {
      date: "12 December 2027",
      title: "Camera-Ready Submission & Registration",
      note: "Final IEEE Xplore formatted manuscript & author fee",
      highlight: false,
    },
    {
      date: "10–11 February 2028",
      title: "Conference Presentation Days",
      note: "Technical tracks & keynote addresses at VIT Vellore",
      highlight: true,
    },
  ];

  return (
    <section id="important-dates" className="border-b border-[#E4E7EC] bg-[#F7F8FA] scroll-mt-20">
      <div className="container-x py-20 md:py-24">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#E4E7EC] bg-white text-[12px] font-semibold text-[#0B6B4A] mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>Key Milestone Timeline</span>
          </div>
          <h2 className="text-[clamp(1.8rem,3.4vw,2.6rem)] font-bold text-[#101B2E]">Important Dates</h2>
          <p className="mt-2 text-[14.5px] text-[#4A5568]">
            Key deadlines for authors, reviewers, and delegates planning attendance for ic-ETITE&apos;28.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mb-12">
          <div className="hidden md:block absolute left-0 right-0 top-[14px] h-[2px] bg-gradient-to-r from-[#E4E7EC] via-[#0B6B4A] to-[#0B6B4A]" />
          <div className="grid md:grid-cols-4 gap-8">
            {dates.map((d) => (
              <div key={d.title} className="text-center md:text-left bg-white md:bg-transparent p-5 md:p-0 rounded-xl border md:border-0 border-[#E4E7EC] shadow-sm md:shadow-none">
                {d.highlight ? (
                  <div className="mx-auto md:mx-0 w-[15px] h-[15px] rounded-full bg-[#0B6B4A] mb-4 relative z-10 ring-4 ring-emerald-100" />
                ) : (
                  <div className="mx-auto md:mx-0 w-[12px] h-[12px] rounded-full bg-[#101B2E]/40 mb-4 relative z-10 ring-4 ring-white" />
                )}
                <p
                  className={`text-lg sm:text-xl font-extrabold font-sans tabular-nums ${
                    d.highlight ? "text-[#0B6B4A]" : "text-[#002147]"
                  }`}
                >
                  {d.date}
                </p>
                <p className="text-base sm:text-lg font-bold text-[#002147] mt-1.5">{d.title}</p>
                <p className="text-sm text-slate-600 mt-1 leading-relaxed">{d.note}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link href="/important-dates" className="btn-outline text-sm font-semibold inline-flex items-center gap-2 py-2.5 px-5">
            <span>View Full Timeline &amp; Calendar</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
