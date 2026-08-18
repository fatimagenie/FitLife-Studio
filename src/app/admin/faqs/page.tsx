"use client";

import { useState, useEffect } from "react";
import { faqs as defaultFAQs } from "@/data/faqs";
import { getFAQs, saveFAQs } from "@/lib/services/storage";
import { FAQ } from "@/types";
import { Plus, Pencil, Trash2, X, Check } from "lucide-react";

const emptyFAQ: FAQ = { question: "", answer: "", category: "General" };
const categories = ["General", "Membership", "Classes", "Facilities"];

export default function AdminFAQsPage() {
  const [faqList, setFaqList] = useState<FAQ[]>([]);
  const [editing, setEditing] = useState<number | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [form, setForm] = useState<FAQ>(emptyFAQ);
  const [saved, setSaved] = useState(false);

  useEffect(() => { setFaqList(getFAQs(defaultFAQs)); }, []);

  const handleSave = () => {
    saveFAQs(faqList);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleAdd = () => {
    setFaqList([...faqList, form]);
    setForm(emptyFAQ);
    setIsAdding(false);
    setTimeout(() => handleSave(), 100);
  };

  const handleUpdate = () => {
    if (editing === null) return;
    setFaqList(faqList.map((f, i) => (i === editing ? form : f)));
    setEditing(null);
    setForm(emptyFAQ);
    setTimeout(() => handleSave(), 100);
  };

  const handleDelete = (index: number) => {
    if (confirm("Delete this FAQ?")) {
      setFaqList(faqList.filter((_, i) => i !== index));
      setTimeout(() => handleSave(), 100);
    }
  };

  const startEdit = (faq: FAQ, index: number) => {
    setEditing(index);
    setForm({ ...faq });
    setIsAdding(false);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900">FAQs</h2>
          <p className="text-gray-500 text-sm">Manage frequently asked questions ({faqList.length} FAQs)</p>
        </div>
        <button onClick={() => { setIsAdding(true); setEditing(null); setForm(emptyFAQ); }} className="flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-teal-700 transition-colors text-sm">
          <Plus className="h-4 w-4" /> Add FAQ
        </button>
      </div>

      {saved && (
        <div className="bg-green-50 text-green-700 px-4 py-3 rounded-lg mb-4 flex items-center gap-2">
          <Check className="h-4 w-4" /> Changes saved successfully!
        </div>
      )}

      {(isAdding || editing !== null) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50" onClick={() => { setIsAdding(false); setEditing(null); }} />
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg">
            <div className="flex items-center justify-between p-5 border-b">
              <h3 className="text-lg font-bold">{editing !== null ? "Edit FAQ" : "Add New FAQ"}</h3>
              <button onClick={() => { setIsAdding(false); setEditing(null); }} className="p-1 hover:bg-gray-100 rounded-lg"><X className="h-5 w-5" /></button>
            </div>
            <div className="p-5 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Question</label>
                <input value={form.question} onChange={(e) => setForm({ ...form, question: e.target.value })} className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 outline-none text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Answer</label>
                <textarea value={form.answer} onChange={(e) => setForm({ ...form, answer: e.target.value })} rows={4} className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 outline-none text-sm resize-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 outline-none text-sm">
                  {categories.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
            </div>
            <div className="flex gap-3 p-5 border-t">
              <button onClick={() => { setIsAdding(false); setEditing(null); }} className="flex-1 px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50">Cancel</button>
              <button onClick={editing !== null ? handleUpdate : handleAdd} className="flex-1 px-4 py-2 bg-teal-600 text-white rounded-lg text-sm font-medium hover:bg-teal-700">{editing !== null ? "Update" : "Add"} FAQ</button>
            </div>
          </div>
        </div>
      )}

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Question</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Category</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Answer</th>
              <th className="text-right px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {faqList.map((faq, i) => (
              <tr key={i} className="hover:bg-gray-50">
                <td className="px-5 py-4 font-medium text-gray-900 text-sm max-w-xs truncate">{faq.question}</td>
                <td className="px-5 py-4"><span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">{faq.category}</span></td>
                <td className="px-5 py-4 text-sm text-gray-500 max-w-sm truncate">{faq.answer}</td>
                <td className="px-5 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button onClick={() => startEdit(faq, i)} className="p-2 hover:bg-gray-100 rounded-lg text-gray-500 hover:text-teal-600"><Pencil className="h-4 w-4" /></button>
                    <button onClick={() => handleDelete(i)} className="p-2 hover:bg-red-50 rounded-lg text-gray-500 hover:text-red-600"><Trash2 className="h-4 w-4" /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
