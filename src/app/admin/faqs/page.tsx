"use client";

import { useState, useEffect } from "react";
import { Plus, Edit, Trash2, X, Check, Search, HelpCircle } from "lucide-react";
import { getFAQs, saveFAQ, updateFAQ, deleteFAQ } from "@/lib/services/storage";
import { FAQ } from "@/types";

const faqCategories = ["General", "Membership", "Classes", "Facilities"];

export default function AdminFAQs() {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState<FAQ | null>(null);
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [formData, setFormData] = useState({ question: "", answer: "", category: "General" });

  useEffect(() => {
    getFAQs().then(setFaqs).finally(() => setLoading(false));
  }, []);

  const filtered = faqs.filter((faq) => {
    const matchSearch = !search || faq.question.toLowerCase().includes(search.toLowerCase()) || faq.answer.toLowerCase().includes(search.toLowerCase());
    const matchCat = activeCategory === "all" || faq.category === activeCategory;
    return matchSearch && matchCat;
  });

  const openAdd = () => {
    setEditing(null);
    setFormData({ question: "", answer: "", category: "General" });
    setShowModal(true);
  };

  const openEdit = (faq: FAQ) => {
    setEditing(faq);
    setFormData({ question: faq.question, answer: faq.answer, category: faq.category });
    setShowModal(true);
  };

  const handleSave = async () => {
    if (!formData.question.trim() || !formData.answer.trim()) return;
    setSaving(true);
    try {
      const faqData = { question: formData.question.trim(), answer: formData.answer.trim(), category: formData.category };

      if (editing) {
        if (editing.id) {
          await updateFAQ(editing.id, faqData);
        }
        setFaqs((prev) => prev.map((f) => (f.id === editing.id ? { ...f, ...faqData } : f)));
      } else {
        const newId = await saveFAQ(faqData);
        setFaqs((prev) => [...prev, { id: newId, ...faqData }]);
      }
      setShowModal(false);
      setSaved(true);
      setTimeout(() => setSaved(false), 2500);
    } catch (err) {
      console.error("Failed to save FAQ:", err);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (faq: FAQ) => {
    if (!confirm("Delete this FAQ? This cannot be undone.")) return;
    try {
      if (faq.id) {
        await deleteFAQ(faq.id);
      }
      setFaqs((prev) => prev.filter((f) => f !== faq));
      setSaved(true);
      setTimeout(() => setSaved(false), 2500);
    } catch (err) {
      console.error("Failed to delete FAQ:", err);
    }
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <div className="h-7 bg-gray-200 rounded w-20 animate-pulse" />
            <div className="h-4 bg-gray-200 rounded w-24 mt-2 animate-pulse" />
          </div>
          <div className="h-10 bg-gray-200 rounded-xl w-24 animate-pulse" />
        </div>
        <div className="h-10 bg-gray-200 rounded-xl w-full animate-pulse" />
        <div className="flex gap-2 animate-pulse">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-9 bg-gray-200 rounded-full w-20" />
          ))}
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-5 space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex gap-4 animate-pulse">
                <div className="h-4 bg-gray-200 rounded flex-1" />
                <div className="h-4 bg-gray-200 rounded w-20" />
                <div className="h-4 bg-gray-200 rounded w-16" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-gray-900">FAQs</h2>
          <p className="text-sm text-gray-500 mt-1">{faqs.length} questions</p>
        </div>
        <button onClick={openAdd} className="bg-teal-600 text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-teal-700 transition-colors flex items-center justify-center gap-2 shadow-md">
          <Plus className="h-4 w-4" /> Add FAQ
        </button>
      </div>

      {saved && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl flex items-center gap-2 text-sm animate-fade-in">
          <Check className="h-4 w-4" /> Changes saved successfully!
        </div>
      )}

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none text-sm bg-white" placeholder="Search FAQs..." />
      </div>

      {/* Category Filter */}
      <div className="flex gap-2 overflow-x-auto pb-2 hide-scrollbar">
        <button onClick={() => setActiveCategory("all")} className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${activeCategory === "all" ? "bg-teal-600 text-white shadow-md" : "bg-white text-gray-600 border border-gray-200 hover:border-teal-300"}`}>
          All
        </button>
        {faqCategories.map((cat) => (
          <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${activeCategory === cat ? "bg-teal-600 text-white shadow-md" : "bg-white text-gray-600 border border-gray-200 hover:border-teal-300"}`}>
            {cat}
          </button>
        ))}
      </div>

      {/* Desktop Table */}
      <div className="hidden sm:block bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50">
                <th className="text-left px-5 py-3 font-semibold text-gray-600">Question</th>
                <th className="text-left px-5 py-3 font-semibold text-gray-600">Category</th>
                <th className="text-left px-5 py-3 font-semibold text-gray-600">Answer</th>
                <th className="text-right px-5 py-3 font-semibold text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((faq) => (
                <tr key={faq.id || faq.question} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                  <td className="px-5 py-4 font-medium text-gray-900 max-w-xs truncate">{faq.question}</td>
                  <td className="px-5 py-4">
                    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-teal-50 text-teal-600">{faq.category}</span>
                  </td>
                  <td className="px-5 py-4 text-gray-500 max-w-sm truncate">{faq.answer}</td>
                  <td className="px-5 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button onClick={() => openEdit(faq)} className="p-2 rounded-lg hover:bg-blue-50 text-blue-600 transition-colors"><Edit className="h-4 w-4" /></button>
                      <button onClick={() => handleDelete(faq)} className="p-2 rounded-lg hover:bg-red-50 text-red-500 transition-colors"><Trash2 className="h-4 w-4" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Cards */}
      <div className="sm:hidden space-y-3">
        {filtered.map((faq) => (
          <div key={faq.id || faq.question} className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-gray-900 text-sm">{faq.question}</div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-teal-50 text-teal-600 font-medium mt-1 inline-block">{faq.category}</span>
              </div>
            </div>
            <p className="text-xs text-gray-500 mb-3 line-clamp-2">{faq.answer}</p>
            <div className="flex items-center gap-2">
              <button onClick={() => openEdit(faq)} className="flex-1 py-2 rounded-lg bg-blue-50 text-blue-600 text-sm font-medium hover:bg-blue-100 transition-colors flex items-center justify-center gap-1.5">
                <Edit className="h-3.5 w-3.5" /> Edit
              </button>
              <button onClick={() => handleDelete(faq)} className="flex-1 py-2 rounded-lg bg-red-50 text-red-500 text-sm font-medium hover:bg-red-100 transition-colors flex items-center justify-center gap-1.5">
                <Trash2 className="h-3.5 w-3.5" /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12">
          <HelpCircle className="h-12 w-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500 text-sm">No FAQs found</p>
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fade-in" onClick={() => setShowModal(false)} />
          <div className="relative bg-white sm:rounded-2xl shadow-2xl w-full sm:max-w-lg sm:mx-4 max-h-[90vh] overflow-y-auto animate-slide-up">
            <div className="sticky top-0 bg-white z-10 flex items-center justify-between px-5 py-4 border-b border-gray-100">
              <h3 className="text-lg font-bold text-gray-900">{editing ? "Edit FAQ" : "Add New FAQ"}</h3>
              <button onClick={() => setShowModal(false)} className="p-2 rounded-lg hover:bg-gray-100 transition-colors"><X className="h-5 w-5 text-gray-500" /></button>
            </div>
            <div className="p-5 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Question *</label>
                <input type="text" value={formData.question} onChange={(e) => setFormData({ ...formData, question: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none text-sm" placeholder="What are your opening hours?" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Answer *</label>
                <textarea value={formData.answer} onChange={(e) => setFormData({ ...formData, answer: e.target.value })} rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none text-sm resize-none" placeholder="We are open Monday to Saturday..." required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Category</label>
                <select value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none text-sm appearance-none bg-white">
                  {faqCategories.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
            </div>
            <div className="sticky bottom-0 bg-white border-t border-gray-100 px-5 py-4 flex gap-3 safe-bottom">
              <button onClick={() => setShowModal(false)} className="flex-1 py-3 rounded-xl border border-gray-200 text-gray-700 font-semibold text-sm hover:bg-gray-50 transition-colors">Cancel</button>
              <button onClick={handleSave} disabled={saving} className="flex-1 py-3 rounded-xl bg-teal-600 text-white font-semibold text-sm hover:bg-teal-700 transition-colors shadow-md disabled:opacity-50">{saving ? "Saving..." : editing ? "Save Changes" : "Add FAQ"}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
