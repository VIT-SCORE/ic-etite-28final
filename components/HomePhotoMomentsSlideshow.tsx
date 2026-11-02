import GallerySlideshow, {
  type GalleryItem,
} from "@/components/GallerySlideshow";

import { ICETITE24_PHOTOS } from "@/data/icetite24GalleryData";

const slideshowItems: GalleryItem[] = ICETITE24_PHOTOS.map((photo) => ({
  id: photo.id,
  image: photo.image,
  title: photo.title,
  edition: photo.edition,
  location: photo.location,
  caption: photo.caption,
  category: "2024",
}));

export default function HomePhotoMomentsSlideshow() {
  return (
    <section className="bg-[#F7F9FC] border-b border-slate-200 py-16 md:py-24 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#002147]">
            Moments from ic-ETITE&apos;24
          </h2>
        </div>

        <div className="bg-white p-4 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
          <div className="mb-6 flex items-center justify-between border-b border-slate-100 pb-4">
            <div>
              <h3 className="font-bold text-lg text-[#002147]">
                Interactive Slideshow
              </h3>
              <p className="text-xs text-slate-500">
                Auto-playing highlights from the second edition
              </p>
            </div>

            <span className="text-xs font-bold text-[#004B87] bg-[#EBF3F8] px-3 py-1 rounded-full">
              {slideshowItems.length} Archival Moments
            </span>
          </div>

          <GallerySlideshow
            items={slideshowItems}
            showCategoryFilter={false}
          />
        </div>
      </div>
    </section>
  );
}
