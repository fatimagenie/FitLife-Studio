"use client";

import { useState, useEffect } from "react";
import { galleryImages as defaultGallery, galleryCategories } from "@/data/gallery";
import { getGallery, saveGallery } from "@/lib/services/storage";
import { GalleryItem } from "@/types";
import { Plus, Trash2, X, Check, Image as ImageIcon } from "lucide-react";

export default function AdminGalleryPage() {
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [showAdd, setShowAdd] = useState(false);
  const [newImage, setNewImage] = useState({ src: "", alt: "", category: "gym" as GalleryItem["category"] });
  const [saved, setSaved] = useState(false);

  useEffect(() => { setGallery(getGallery(defaultGallery)); }, []);

  const handleSave = () => {
    saveGallery(gallery);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleAdd = () => {
    if (!newImage.src || !newImage.alt) return;
    setGallery([...gallery, { ...newImage, id: Date.now().toString() }]);
    setNewImage({ src: "", alt: "", category: "gym" });
    setShowAdd(false);
    setTimeout(() => handleSave(), 100);
  };

  const handleDelete = (id: string) => {
    if (confirm("Delete this image?")) {
      setGallery(gallery.filter((g) => g.id !== id));
      setTimeout(() => handleSave(), 100);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Gallery</h2>
          <p className="text-gray-500 text-sm">Manage your gym photo gallery ({gallery.length} images)</p>
        </div>
        <button onClick={() => setShowAdd(true)} className="flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-teal-700 transition-colors text-sm">
          <Plus className="h-4 w-4" /> Add Image
        </button>
      </div>

      {saved && (
        <div className="bg-green-50 text-green-700 px-4 py-3 rounded-lg mb-4 flex items-center gap-2">
          <Check className="h-4 w-4" /> Changes saved successfully!
        </div>
      )}

      {showAdd && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50" onClick={() => setShowAdd(false)} />
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md">
            <div className="flex items-center justify-between p-5 border-b">
              <h3 className="text-lg font-bold">Add Image</h3>
              <button onClick={() => setShowAdd(false)} className="p-1 hover:bg-gray-100 rounded-lg"><X className="h-5 w-5" /></button>
            </div>
            <div className="p-5 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                <input value={newImage.src} onChange={(e) => setNewImage({ ...newImage, src: e.target.value })} className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 outline-none text-sm" placeholder="https://images.unsplash.com/..." />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Alt Text</label>
                <input value={newImage.alt} onChange={(e) => setNewImage({ ...newImage, alt: e.target.value })} className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 outline-none text-sm" placeholder="Description of the image" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select value={newImage.category} onChange={(e) => setNewImage({ ...newImage, category: e.target.value as GalleryItem["category"] })} className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 outline-none text-sm">
                  {galleryCategories.filter((c) => c.key !== "all").map((c) => (
                    <option key={c.key} value={c.key}>{c.label}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex gap-3 p-5 border-t">
              <button onClick={() => setShowAdd(false)} className="flex-1 px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50">Cancel</button>
              <button onClick={handleAdd} className="flex-1 px-4 py-2 bg-teal-600 text-white rounded-lg text-sm font-medium hover:bg-teal-700">Add Image</button>
            </div>
          </div>
        </div>
      )}

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {gallery.map((img) => (
          <div key={img.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group">
            <div className="aspect-[4/3] relative">
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                <button onClick={() => handleDelete(img.id)} className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="p-3">
              <p className="text-sm font-medium text-gray-900 truncate">{img.alt}</p>
              <p className="text-xs text-gray-500 capitalize">{img.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
