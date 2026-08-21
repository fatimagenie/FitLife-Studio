"use client";

import { useState, useEffect } from "react";
import { Plus, Trash2, X, Check, Image as ImageIcon } from "lucide-react";
import { getGallery, saveGalleryItem, deleteGalleryItem } from "@/lib/services/storage";
import { GalleryItem } from "@/types";

const galleryCategories = ["transformations", "gym", "classes", "events"];

export default function AdminGallery() {
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const [formData, setFormData] = useState({ src: "", alt: "", category: "gym" });

  useEffect(() => {
    getGallery().then(setGallery).finally(() => setLoading(false));
  }, []);

  const filtered = activeCategory === "all" ? gallery : gallery.filter((g) => g.category === activeCategory);

  const handleAdd = async () => {
    if (!formData.src.trim() || !formData.alt.trim()) return;
    setSaving(true);
    try {
      const itemData = {
        src: formData.src.trim(),
        alt: formData.alt.trim(),
        category: formData.category as GalleryItem["category"],
      };
      const newId = await saveGalleryItem(itemData);
      setGallery((prev) => [...prev, { id: newId, ...itemData }]);
      setShowModal(false);
      setFormData({ src: "", alt: "", category: "gym" });
      setSaved(true);
      setTimeout(() => setSaved(false), 2500);
    } catch (err) {
      console.error("Failed to save gallery item:", err);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (item: GalleryItem) => {
    if (!confirm("Delete this image? This cannot be undone.")) return;
    try {
      if (item.id) {
        await deleteGalleryItem(item.id);
      }
      setGallery((prev) => prev.filter((g) => g !== item));
      setSaved(true);
      setTimeout(() => setSaved(false), 2500);
    } catch (err) {
      console.error("Failed to delete gallery item:", err);
    }
  };

  const categoryLabel = (cat: string) => cat.charAt(0).toUpperCase() + cat.slice(1);

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <div className="h-7 bg-gray-200 rounded w-28 animate-pulse" />
            <div className="h-4 bg-gray-200 rounded w-20 mt-2 animate-pulse" />
          </div>
          <div className="h-10 bg-gray-200 rounded-xl w-28 animate-pulse" />
        </div>
        <div className="flex gap-2 animate-pulse">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-9 bg-gray-200 rounded-full w-24" />
          ))}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden animate-pulse">
              <div className="aspect-[4/3] bg-gray-200" />
              <div className="p-3 space-y-2">
                <div className="h-4 bg-gray-200 rounded w-24" />
                <div className="h-3 bg-gray-200 rounded w-16" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Gallery</h2>
          <p className="text-sm text-gray-500 mt-1">{gallery.length} images</p>
        </div>
        <button onClick={() => setShowModal(true)} className="bg-teal-600 text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-teal-700 transition-colors flex items-center justify-center gap-2 shadow-md">
          <Plus className="h-4 w-4" /> Add Image
        </button>
      </div>

      {saved && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl flex items-center gap-2 text-sm animate-fade-in">
          <Check className="h-4 w-4" /> Changes saved successfully!
        </div>
      )}

      {/* Category Filter */}
      <div className="flex gap-2 overflow-x-auto pb-2 hide-scrollbar">
        <button onClick={() => setActiveCategory("all")} className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${activeCategory === "all" ? "bg-teal-600 text-white shadow-md" : "bg-white text-gray-600 border border-gray-200 hover:border-teal-300"}`}>
          All ({gallery.length})
        </button>
        {galleryCategories.map((cat) => (
          <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${activeCategory === cat ? "bg-teal-600 text-white shadow-md" : "bg-white text-gray-600 border border-gray-200 hover:border-teal-300"}`}>
            {categoryLabel(cat)} ({gallery.filter((g) => g.category === cat).length})
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        {filtered.map((item) => (
          <div key={item.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group">
            <div className="aspect-[4/3] relative overflow-hidden bg-gray-100">
              <img src={item.src} alt={item.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                <button onClick={() => handleDelete(item)} className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white hover:bg-red-600 transition-colors shadow-lg">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="p-3">
              <div className="text-sm font-medium text-gray-900 truncate">{item.alt}</div>
              <div className="text-xs text-gray-400 mt-0.5">{categoryLabel(item.category)}</div>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12">
          <ImageIcon className="h-12 w-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500 text-sm">No images in this category</p>
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fade-in" onClick={() => setShowModal(false)} />
          <div className="relative bg-white sm:rounded-2xl shadow-2xl w-full sm:max-w-md sm:mx-4 animate-slide-up">
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
              <h3 className="text-lg font-bold text-gray-900">Add Image</h3>
              <button onClick={() => setShowModal(false)} className="p-2 rounded-lg hover:bg-gray-100 transition-colors"><X className="h-5 w-5 text-gray-500" /></button>
            </div>
            <div className="p-5 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Image URL *</label>
                <input type="url" value={formData.src} onChange={(e) => setFormData({ ...formData, src: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none text-sm" placeholder="https://images.unsplash.com/..." required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Alt Text *</label>
                <input type="text" value={formData.alt} onChange={(e) => setFormData({ ...formData, alt: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none text-sm" placeholder="Gym interior view" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Category</label>
                <select value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none text-sm appearance-none bg-white">
                  {galleryCategories.map((c) => <option key={c} value={c}>{categoryLabel(c)}</option>)}
                </select>
              </div>
            </div>
            <div className="border-t border-gray-100 px-5 py-4 flex gap-3 safe-bottom">
              <button onClick={() => setShowModal(false)} className="flex-1 py-3 rounded-xl border border-gray-200 text-gray-700 font-semibold text-sm hover:bg-gray-50 transition-colors">Cancel</button>
              <button onClick={handleAdd} disabled={saving} className="flex-1 py-3 rounded-xl bg-teal-600 text-white font-semibold text-sm hover:bg-teal-700 transition-colors shadow-md disabled:opacity-50">{saving ? "Adding..." : "Add Image"}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
