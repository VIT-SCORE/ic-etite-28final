"use client";

import { useEffect, useMemo, useState } from "react";
import {
  FOLDER_GALLERY_CATEGORIES,
  FOLDER_GALLERY_PHOTOS,
  type FolderGalleryPhoto,
} from "@/data/icetite24FolderGalleryData";

export default function Icetite24FolderGallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredPhotos = useMemo(() => {
    const term = search.trim().toLowerCase();

    return FOLDER_GALLERY_PHOTOS.filter((photo) => {
      const matchesCategory =
        activeCategory === "all" || photo.category === activeCategory;

      const matchesSearch =
        !term ||
        photo.title.toLowerCase().includes(term) ||
        photo.category.toLowerCase().includes(term);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  const selectedPhoto: FolderGalleryPhoto | null =
    selectedIndex !== null ? filteredPhotos[selectedIndex] ?? null : null;

  function closeLightbox() {
    setSelectedIndex(null);
  }

  function showPrevious() {
    setSelectedIndex((current) =>
      current === null
        ? null
        : (current - 1 + filteredPhotos.length) % filteredPhotos.length,
    );
  }

  function showNext() {
    setSelectedIndex((current) =>
      current === null ? null : (current + 1) % filteredPhotos.length,
    );
  }

  useEffect(() => {
    if (selectedIndex === null) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedIndex, filteredPhotos.length]);

  useEffect(() => {
    setSelectedIndex(null);
  }, [activeCategory, search]);

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
          IC-ETITE’24 Memories
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Conference Photo Gallery
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-gray-600">
          Explore moments from the inaugural ceremony, technical sessions,
          keynote talks, hackathon, panel discussions, dinner and valedictory.
        </p>
      </div>

      <div className="mb-6">
        <label htmlFor="gallery-search" className="sr-only">
          Search photos
        </label>
        <input
          id="gallery-search"
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search photos..."
          className="mx-auto block w-full max-w-lg rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        />
      </div>

      <div className="mb-8 flex flex-wrap justify-center gap-2">
        <button
          type="button"
          onClick={() => setActiveCategory("all")}
          className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
            activeCategory === "all"
              ? "bg-blue-700 text-white shadow"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          All Photos
        </button>

        {FOLDER_GALLERY_CATEGORIES.map((category) => (
          <button
            type="button"
            key={category.slug}
            onClick={() => setActiveCategory(category.slug)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              activeCategory === category.slug
                ? "bg-blue-700 text-white shadow"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="mb-4 flex items-center justify-between gap-3">
        <p className="text-sm text-gray-600">
          Showing <strong>{filteredPhotos.length}</strong>{" "}
          {filteredPhotos.length === 1 ? "photo" : "photos"}
        </p>
      </div>

      {filteredPhotos.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredPhotos.map((photo, index) => (
            <button
              type="button"
              key={photo.src}
              onClick={() => setSelectedIndex(index)}
              className="group overflow-hidden rounded-2xl bg-white text-left shadow-sm ring-1 ring-gray-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label={`View photo: ${photo.title}`}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo.src}
                  alt={photo.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70" />
                <span className="absolute bottom-3 left-3 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                  {FOLDER_GALLERY_CATEGORIES.find(
                    (category) => category.slug === photo.category,
                  )?.label ?? photo.category}
                </span>
              </div>
              <div className="p-4">
                <h3 className="line-clamp-2 font-semibold text-gray-900">
                  {photo.title}
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  View photo <span aria-hidden="true">↗</span>
                </p>
              </div>
            </button>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-gray-300 px-6 py-16 text-center">
          <p className="text-lg font-semibold text-gray-800">No photos found</p>
          <p className="mt-2 text-gray-600">
            Try another search or choose a different category.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearch("");
              setActiveCategory("all");
            }}
            className="mt-4 rounded-full bg-blue-700 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-800"
          >
            Clear filters
          </button>
        </div>
      )}

      {selectedPhoto && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Close photo viewer"
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-3xl text-white hover:bg-white/25"
          >
            ×
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            aria-label="Previous photo"
            className="absolute left-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-3xl text-white hover:bg-white/25 sm:left-6"
          >
            ‹
          </button>

          <div
            className="flex max-h-full w-full max-w-6xl flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.title}
              className="max-h-[78vh] max-w-full rounded-lg object-contain"
            />
            <h3 className="mt-4 text-center text-lg font-semibold text-white">
              {selectedPhoto.title}
            </h3>
            <p className="mt-1 text-sm text-gray-300">
              {(selectedIndex ?? 0) + 1} of {filteredPhotos.length}
            </p>
          </div>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label="Next photo"
            className="absolute right-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-3xl text-white hover:bg-white/25 sm:right-6"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}
