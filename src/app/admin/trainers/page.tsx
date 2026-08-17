"use client";

import { useState, useEffect } from "react";
import { trainers as defaultTrainers } from "@/data/trainers";
import { getTrainers, saveTrainers } from "@/lib/storage";
import { Trainer } from "@/types";
import { Plus, Pencil, Trash2, X, Check } from "lucide-react";

const emptyTrainer: Trainer = {
  name: "", role: "", specialization: "", experience: "", bio: "",
  social: { instagram: "", twitter: "", linkedin: "" },
  color: "from-teal-500 to-teal-700",
};

const colorOptions = [
  { value: "from-teal-500 to-teal-700", label: "Teal" },
  { value: "from-purple-500 to-purple-700", label: "Purple" },
  { value: "from-orange-500 to-orange-700", label: "Orange" },
  { value: "from-pink-500 to-pink-700", label: "Pink" },
  { value: "from-red-500 to-red-700", label: "Red" },
  { value: "from-cyan-500 to-cyan-700", label: "Cyan" },
  { value: "from-blue-500 to-blue-700", label: "Blue" },
  { value: "from-green-500 to-green-700", label: "Green" },
];

export default function AdminTrainersPage() {
  const [trainersList, setTrainersList] = useState<Trainer[]>([]);
  const [editing, setEditing] = useState<number | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [form, setForm] = useState<Trainer>(emptyTrainer);
  const [saved, setSaved] = useState(false);

  useEffect(() => { setTrainersList(getTrainers(defaultTrainers)); }, []);

  const handleSave = () => {
    saveTrainers(trainersList);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleAdd = () => {
    setTrainersList([...trainersList, form]);
    setForm(emptyTrainer);
    setIsAdding(false);
    setTimeout(() => handleSave(), 100);
  };

  const handleUpdate = () => {
    if (editing === null) return;
    setTrainersList(trainersList.map((t, i) => (i === editing ? form : t)));
    setEditing(null);
    setForm(emptyTrainer);
    setTimeout(() => handleSave(), 100);
  };

  const handleDelete = (index: number) => {
    if (confirm("Delete this trainer?")) {
      setTrainersList(trainersList.filter((_, i) => i !== index));
      setTimeout(() => handleSave(), 100);
    }
  };

  const startEdit = (trainer: Trainer, index: number) => {
    setEditing(index);
    setForm({ ...trainer });
    setIsAdding(false);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Trainers</h2>
          <p className="text-gray-500 text-sm">Manage your gym trainers and their profiles</p>
        </div>
        <button onClick={() => { setIsAdding(true); setEditing(null); setForm(emptyTrainer); }} className="flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-teal-700 transition-colors text-sm">
          <Plus className="h-4 w-4" /> Add Trainer
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
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-5 border-b">
              <h3 className="text-lg font-bold">{editing !== null ? "Edit Trainer" : "Add New Trainer"}</h3>
              <button onClick={() => { setIsAdding(false); setEditing(null); }} className="p-1 hover:bg-gray-100 rounded-lg"><X className="h-5 w-5" /></button>
            </div>
            <div className="p-5 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 outline-none text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                  <input value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 outline-none text-sm" placeholder="e.g. Yoga Instructor" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Specialization</label>
                  <input value={form.specialization} onChange={(e) => setForm({ ...form, specialization: e.target.value })} className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 outline-none text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Experience</label>
                  <input value={form.experience} onChange={(e) => setForm({ ...form, experience: e.target.value })} className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 outline-none text-sm" placeholder="e.g. 5+ years" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                <textarea value={form.bio} onChange={(e) => setForm({ ...form, bio: e.target.value })} rows={3} className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 outline-none text-sm resize-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Card Color</label>
                <div className="flex gap-2 flex-wrap">
                  {colorOptions.map((c) => (
                    <button key={c.value} type="button" onClick={() => setForm({ ...form, color: c.value })} className={`w-8 h-8 rounded-full bg-gradient-to-br ${c.value} ${form.color === c.value ? "ring-2 ring-offset-2 ring-teal-500" : ""}`} title={c.label} />
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Instagram</label>
                  <input value={form.social.instagram} onChange={(e) => setForm({ ...form, social: { ...form.social, instagram: e.target.value } })} className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 outline-none text-sm" placeholder="#" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Twitter</label>
                  <input value={form.social.twitter} onChange={(e) => setForm({ ...form, social: { ...form.social, twitter: e.target.value } })} className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 outline-none text-sm" placeholder="#" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">LinkedIn</label>
                  <input value={form.social.linkedin} onChange={(e) => setForm({ ...form, social: { ...form.social, linkedin: e.target.value } })} className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 outline-none text-sm" placeholder="#" />
                </div>
              </div>
            </div>
            <div className="flex gap-3 p-5 border-t">
              <button onClick={() => { setIsAdding(false); setEditing(null); }} className="flex-1 px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50">Cancel</button>
              <button onClick={editing !== null ? handleUpdate : handleAdd} className="flex-1 px-4 py-2 bg-teal-600 text-white rounded-lg text-sm font-medium hover:bg-teal-700">{editing !== null ? "Update" : "Add"} Trainer</button>
            </div>
          </div>
        </div>
      )}

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {trainersList.map((trainer, i) => (
          <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className={`h-24 bg-gradient-to-br ${trainer.color} flex items-center justify-center`}>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-white text-2xl font-bold backdrop-blur-sm">
                {trainer.name.charAt(0)}
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-gray-900">{trainer.name}</h3>
              <p className="text-teal-600 text-sm">{trainer.role}</p>
              <p className="text-gray-500 text-xs mt-1">{trainer.specialization} | {trainer.experience}</p>
              <div className="flex gap-2 mt-3">
                <button onClick={() => startEdit(trainer, i)} className="flex-1 px-3 py-1.5 bg-gray-100 rounded-lg text-sm font-medium hover:bg-gray-200 flex items-center justify-center gap-1"><Pencil className="h-3 w-3" /> Edit</button>
                <button onClick={() => handleDelete(i)} className="px-3 py-1.5 bg-red-50 text-red-600 rounded-lg text-sm font-medium hover:bg-red-100"><Trash2 className="h-3 w-3" /></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
