import Image from "next/image";
import Link from "next/link";
import { conferenceData } from "@/data/conference";
import { Navigation, Plane, Train, Hotel, ExternalLink, ArrowRight } from "lucide-react";

export default function VenueMap() {
  const { venue } = conferenceData;

  return (
    <section id="venue" className="py-16 sm:py-20 bg-white border-b border-[#E4E7EC]">
      <div className="container-x">
        {/* Campus Photo & Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-[#E4E7EC] shadow-md">
              <Image
                src="/images/vit-campus.webp"
                alt="VIT Vellore Main Campus Entrance"
                width={800}
                height={450}
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="w-full h-auto object-cover"
              />
              <div className="p-4 bg-[#F7F8FA] border-t border-[#E4E7EC] text-xs text-[#4A5568]">
                Vellore Institute of Technology (VIT), Vellore Main Campus Entrance
              </div>
            </div>
          </div>

            {/* Address & Direct Map Access */}
          <div className="lg:col-span-6 bg-[#FAFBFD] p-8 sm:p-10 rounded-2xl border-2 border-slate-200 shadow-sm flex flex-col justify-between h-full">
            <div>
              <span className="text-xs font-mono tracking-widest uppercase text-[#004B87] font-bold mb-2 block">
                Host University Campus
              </span>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#002147]">
                {venue.name}
              </h3>
              <p className="text-sm sm:text-base font-semibold text-slate-600 mt-1">
                {venue.department}
              </p>

              <div className="mt-6 p-5 rounded-xl bg-white border border-slate-200 text-sm sm:text-base text-slate-800 space-y-1.5 shadow-2xs">
                <p className="font-bold text-[#002147]">Postal Address:</p>
                <p className="text-slate-700 leading-relaxed">{venue.fullAddress}</p>
                <p className="text-slate-500 font-mono text-xs pt-1">
                  Coordinates: 12.9698° N, 79.1559° E
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center gap-4">
              <a
                href={venue.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto btn-primary text-sm py-3 px-5 inline-flex items-center justify-center gap-2 font-bold"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Travel Guidance Cards */}
        <div className="grid sm:grid-cols-3 gap-6">
          {/* Airport Connectivity */}
          <div className="bg-white p-7 rounded-2xl border-2 border-slate-200 flex flex-col justify-between shadow-xs hover:border-[#002147] transition-all">
            <div>
              <div className="w-12 h-12 rounded-xl bg-slate-100 text-[#004B87] grid place-items-center border border-slate-200 mb-4">
                <Plane className="w-6 h-6" />
              </div>
              <h4 className="font-serif font-bold text-[#002147] text-lg sm:text-xl">Nearest Airports</h4>
              <p className="text-sm sm:text-base text-slate-700 mt-2.5 leading-relaxed font-normal">
                Chennai International Airport (MAA) ~130 km (2.5 hours drive) and Kempegowda International Airport
                Bengaluru (BLR) ~215 km (3.5 hours drive). Taxis and express buses are readily accessible.
              </p>
            </div>
          </div>

          {/* Railway Station */}
          <div className="bg-white p-7 rounded-2xl border-2 border-slate-200 flex flex-col justify-between shadow-xs hover:border-[#002147] transition-all">
            <div>
              <div className="w-12 h-12 rounded-xl bg-slate-100 text-[#002147] grid place-items-center border border-slate-200 mb-4">
                <Train className="w-6 h-6" />
              </div>
              <h4 className="font-serif font-bold text-[#002147] text-lg sm:text-xl">Katpadi Railway Junction</h4>
              <p className="text-sm sm:text-base text-slate-700 mt-2.5 leading-relaxed font-normal">
                Katpadi Junction (KPD) is located just 3 km from the VIT Vellore campus. High-speed intercity express
                trains connect Katpadi directly to Chennai, Bengaluru, Hyderabad, and Delhi.
              </p>
            </div>
          </div>

          {/* Accommodation Advisory */}
          <div className="bg-white p-7 rounded-2xl border-2 border-slate-200 flex flex-col justify-between shadow-xs hover:border-[#002147] transition-all">
            <div>
              <div className="w-12 h-12 rounded-xl bg-slate-100 text-[#F5A623] grid place-items-center border border-slate-200 mb-4">
                <Hotel className="w-6 h-6" />
              </div>
              <h4 className="font-serif font-bold text-[#002147] text-lg sm:text-xl">Accommodation Guidance</h4>
              <p className="text-sm sm:text-base text-slate-700 mt-2.5 leading-relaxed font-normal">
                Limited on-campus university guest house accommodation is reserved for keynote speakers and session chairs.
                Partnered hotels in Vellore city (Fortune Park, Benzz Park) are within 5–10 minutes of campus.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100">
              <Link
                href="/hotels"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#004B87] hover:text-[#002147] hover:underline"
              >
                <span>View Recommended Hotels &amp; Tariffs</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
