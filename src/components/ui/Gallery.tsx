"use client";

import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryImages as defaultGallery, galleryCategories } from "@/data/gallery";
import { getGallery } from "@/lib/services/storage";
import { GalleryItem } from "@/types";

export default function Gallery() {
  const [galleryList, setGalleryList] = useState<GalleryItem[]>(defaultGallery);

  useEffect(() => {
    getGallery().then((data) => {
      if (data.length > 0) setGalleryList(data);
    });
  }, []);

  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeCategory === "all"
    ? galleryList
    : galleryList.filter((img) => img.category === activeCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filtered.length);
    }
  };

  const goPrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length);
    }
  };

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {galleryCategories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === cat.key
                ? "bg-teal-600 text-white shadow-lg"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filtered.map((img, index) => (
          <div
            key={img.id}
            className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-all"
            onClick={() => openLightbox(index)}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-medium text-sm">{img.alt}</p>
                <p className="text-white/70 text-xs capitalize">{img.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={closeLightbox}>
          <button
            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
            className="absolute top-4 right-4 text-white/80 hover:text-white z-10"
          >
            <X className="h-8 w-8" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-4 text-white/80 hover:text-white z-10"
          >
            <ChevronLeft className="h-10 w-10" />
          </button>

          <div className="max-w-4xl max-h-[80vh] relative" onClick={(e) => e.stopPropagation()}>
            <img
              src={filtered[lightboxIndex].src}
              alt={filtered[lightboxIndex].alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 rounded-b-lg">
              <p className="text-white font-medium">{filtered[lightboxIndex].alt}</p>
              <p className="text-white/70 text-sm capitalize">{filtered[lightboxIndex].category}</p>
            </div>
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-4 text-white/80 hover:text-white z-10"
          >
            <ChevronRight className="h-10 w-10" />
          </button>

          <div className="absolute bottom-4 text-white/60 text-sm">
            {lightboxIndex + 1} / {filtered.length}
          </div>
        </div>
      )}
    </div>
  );
}
