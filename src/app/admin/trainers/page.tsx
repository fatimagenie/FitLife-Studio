"use client";

import { useState, useEffect } from "react";
import { Plus, Edit, Trash2, X, Check, Instagram, Twitter, Linkedin } from "lucide-react";
import { trainers as defaultTrainers } from "@/data/trainers";
import { getTrainers, saveTrainers } from "@/lib/services/storage";
import { Trainer } from "@/types";

const colorOptions = [
  { name: "Teal", value: "from-teal-500 to-teal-600" },
  { name: "Purple", value: "from-purple-500 to-purple-600" },
  { name: "Orange", value: "from-orange-500 to-orange-600" },
  { name: "Pink", value: "from-pink-500 to-pink-600" },
  { name: "Red", value: "from-red-500 to-red-600" },
  { name: "Cyan", value: "from-cyan-500 to-cyan-600" },
  { name: "Blue", value: "from-blue-500 to-blue-600" },
  { name: "Green", value: "from-green-500 to-green-600" },
];

export default function AdminTrainers() {
  const [trainers, setTrainers] = useState<Trainer[]>(defaultTrainers);
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState<Trainer | null>(null);
  const [saved, setSaved] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    specialization: "",
    experience: "",
    bio: "",
    color: "from-teal-500 to-teal-600",
    social: { instagram: "", twitter: "", linkedin: "" },
  });

  useEffect(() => {
    setTrainers(getTrainers(defaultTrainers));
  }, []);

  const openAdd = () => {
    setEditing(null);
    setFormData({ name: "", role: "", specialization: "", experience: "", bio: "", color: "from-teal-500 to-teal-600", social: { instagram: "", twitter: "", linkedin: "" } });
    setShowModal(true);
  };

  const openEdit = (trainer: Trainer) => {
    setEditing(trainer);
    setFormData({
      name: trainer.name,
      role: trainer.role,
      specialization: trainer.specialization,
      experience: trainer.experience,
      bio: trainer.bio,
      color: trainer.color,
      social: { ...trainer.social },
    });
    setShowModal(true);
  };

  const handleSave = () => {
    if (!formData.name.trim() || !formData.role.trim()) return;
    const trainerData: Trainer = {
      name: formData.name.trim(),
      role: formData.role.trim(),
      specialization: formData.specialization.trim(),
      experience: formData.experience.trim(),
      bio: formData.bio.trim(),
      color: formData.color,
      social: formData.social,
    };

    let updated: Trainer[];
    if (editing) {
      updated = trainers.map((t) => (t.name === editing.name ? trainerData : t));
    } else {
      updated = [...trainers, trainerData];
    }
    setTrainers(updated);
    saveTrainers(updated);
    setShowModal(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const handleDelete = (name: string) => {
    if (!confirm(`Delete trainer "${name}"? This cannot be undone.`)) return;
    const updated = trainers.filter((t) => t.name !== name);
    setTrainers(updated);
    saveTrainers(updated);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Trainers</h2>
          <p className="text-sm text-gray-500 mt-1">{trainers.length} trainers in team</p>
        </div>
        <button onClick={openAdd} className="bg-teal-600 text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-teal-700 transition-colors flex items-center justify-center gap-2 shadow-md">
          <Plus className="h-4 w-4" /> Add Trainer
        </button>
      </div>

      {saved && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl flex items-center gap-2 text-sm animate-fade-in">
          <Check className="h-4 w-4" /> Changes saved successfully!
        </div>
      )}

      {/* Trainer Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {trainers.map((trainer) => (
          <div key={trainer.name} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all">
            <div className={`h-24 bg-gradient-to-br ${trainer.color} flex items-center justify-center relative`}>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-white text-2xl font-bold backdrop-blur-sm">
                {trainer.name.charAt(0)}
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-gray-900">{trainer.name}</h3>
              <p className="text-teal-600 text-sm font-medium">{trainer.role}</p>
              <p className="text-gray-500 text-xs mt-1">{trainer.specialization}</p>
              <p className="text-gray-400 text-xs mt-1">{trainer.experience}</p>
              <div className="flex items-center gap-2 mt-4">
                <button onClick={() => openEdit(trainer)} className="flex-1 py-2 rounded-lg bg-blue-50 text-blue-600 text-sm font-medium hover:bg-blue-100 transition-colors flex items-center justify-center gap-1.5">
                  <Edit className="h-3.5 w-3.5" /> Edit
                </button>
                <button onClick={() => handleDelete(trainer.name)} className="flex-1 py-2 rounded-lg bg-red-50 text-red-500 text-sm font-medium hover:bg-red-100 transition-colors flex items-center justify-center gap-1.5">
                  <Trash2 className="h-3.5 w-3.5" /> Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fade-in" onClick={() => setShowModal(false)} />
          <div className="relative bg-white sm:rounded-2xl shadow-2xl w-full sm:max-w-lg sm:mx-4 max-h-[90vh] overflow-y-auto animate-slide-up">
            <div className="sticky top-0 bg-white z-10 flex items-center justify-between px-5 py-4 border-b border-gray-100">
              <h3 className="text-lg font-bold text-gray-900">{editing ? "Edit Trainer" : "Add New Trainer"}</h3>
              <button onClick={() => setShowModal(false)} className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>
            <div className="p-5 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
                <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none text-sm" placeholder="John Doe" required />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Role *</label>
                  <input type="text" value={formData.role} onChange={(e) => setFormData({ ...formData, role: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none text-sm" placeholder="Head Trainer" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Experience</label>
                  <input type="text" value={formData.experience} onChange={(e) => setFormData({ ...formData, experience: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none text-sm" placeholder="5+ years" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Specialization</label>
                <input type="text" value={formData.specialization} onChange={(e) => setFormData({ ...formData, specialization: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none text-sm" placeholder="Weight Training, HIIT" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Bio</label>
                <textarea value={formData.bio} onChange={(e) => setFormData({ ...formData, bio: e.target.value })} rows={3} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none text-sm resize-none" placeholder="Brief bio about this trainer" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Card Color</label>
                <div className="flex flex-wrap gap-2">
                  {colorOptions.map((opt) => (
                    <button
                      key={opt.name}
                      type="button"
                      onClick={() => setFormData({ ...formData, color: opt.value })}
                      className={`w-9 h-9 rounded-full bg-gradient-to-br ${opt.value} transition-all ${formData.color === opt.value ? "ring-2 ring-offset-2 ring-teal-500 scale-110" : "hover:scale-105"}`}
                      title={opt.name}
                    />
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Social Links</label>
                <div className="space-y-2">
                  <div className="relative">
                    <Instagram className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input type="url" value={formData.social.instagram} onChange={(e) => setFormData({ ...formData, social: { ...formData.social, instagram: e.target.value } })} className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none text-sm" placeholder="Instagram URL" />
                  </div>
                  <div className="relative">
                    <Twitter className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input type="url" value={formData.social.twitter} onChange={(e) => setFormData({ ...formData, social: { ...formData.social, twitter: e.target.value } })} className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none text-sm" placeholder="Twitter URL" />
                  </div>
                  <div className="relative">
                    <Linkedin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input type="url" value={formData.social.linkedin} onChange={(e) => setFormData({ ...formData, social: { ...formData.social, linkedin: e.target.value } })} className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none text-sm" placeholder="LinkedIn URL" />
                  </div>
                </div>
              </div>
            </div>
            <div className="sticky bottom-0 bg-white border-t border-gray-100 px-5 py-4 flex gap-3 safe-bottom">
              <button onClick={() => setShowModal(false)} className="flex-1 py-3 rounded-xl border border-gray-200 text-gray-700 font-semibold text-sm hover:bg-gray-50 transition-colors">
                Cancel
              </button>
              <button onClick={handleSave} className="flex-1 py-3 rounded-xl bg-teal-600 text-white font-semibold text-sm hover:bg-teal-700 transition-colors shadow-md">
                {editing ? "Save Changes" : "Add Trainer"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
