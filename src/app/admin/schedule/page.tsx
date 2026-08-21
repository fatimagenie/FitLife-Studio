"use client";

import { useState, useEffect } from "react";
import { Plus, Edit, Trash2, X, Check, Clock, Users } from "lucide-react";
import { classes as defaultClasses } from "@/data/classes";
import { getClasses, saveClasses } from "@/lib/services/storage";
import { ClassSchedule } from "@/types";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const categories = [
  { name: "Yoga", color: "from-purple-500 to-purple-600" },
  { name: "HIIT", color: "from-orange-500 to-red-500" },
  { name: "Strength", color: "from-teal-500 to-teal-600" },
  { name: "Boxing", color: "from-red-500 to-red-600" },
  { name: "Pilates", color: "from-cyan-500 to-cyan-600" },
  { name: "Cardio", color: "from-pink-500 to-rose-500" },
];

export default function AdminSchedule() {
  const [classes, setClasses] = useState<ClassSchedule[]>(defaultClasses);
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState<ClassSchedule | null>(null);
  const [saved, setSaved] = useState(false);
  const [activeDay, setActiveDay] = useState("all");
  const [formData, setFormData] = useState({
    name: "",
    trainer: "",
    day: "Monday",
    time: "09:00",
    duration: "60 min",
    category: "Yoga",
    maxSpots: "20",
    spots: "20",
  });

  useEffect(() => {
    setClasses(getClasses(defaultClasses));
  }, []);

  const filtered = activeDay === "all" ? classes : classes.filter((c) => c.day === activeDay);

  const openAdd = () => {
    setEditing(null);
    setFormData({ name: "", trainer: "", day: "Monday", time: "09:00", duration: "60 min", category: "Yoga", maxSpots: "20", spots: "20" });
    setShowModal(true);
  };

  const openEdit = (cls: ClassSchedule) => {
    setEditing(cls);
    setFormData({
      name: cls.name,
      trainer: cls.trainer,
      day: cls.day,
      time: cls.time,
      duration: cls.duration,
      category: cls.category,
      maxSpots: cls.maxSpots.toString(),
      spots: cls.spots.toString(),
    });
    setShowModal(true);
  };

  const getCategoryColor = (cat: string) => categories.find((c) => c.name === cat)?.color || "from-gray-500 to-gray-600";

  const handleSave = () => {
    if (!formData.name.trim() || !formData.trainer.trim()) return;
    const classData: ClassSchedule = {
      id: editing?.id || Date.now().toString(),
      name: formData.name.trim(),
      trainer: formData.trainer.trim(),
      day: formData.day,
      time: formData.time,
      duration: formData.duration,
      category: formData.category,
      maxSpots: parseInt(formData.maxSpots) || 20,
      spots: parseInt(formData.spots) || 20,
      color: getCategoryColor(formData.category),
    };

    let updated: ClassSchedule[];
    if (editing) {
      updated = classes.map((c) => (c.id === editing.id ? classData : c));
    } else {
      updated = [...classes, classData];
    }
    setClasses(updated);
    saveClasses(updated);
    setShowModal(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const handleDelete = (id: string) => {
    if (!confirm("Delete this class? This cannot be undone.")) return;
    const updated = classes.filter((c) => c.id !== id);
    setClasses(updated);
    saveClasses(updated);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Class Schedule</h2>
          <p className="text-sm text-gray-500 mt-1">{classes.length} classes scheduled</p>
        </div>
        <button onClick={openAdd} className="bg-teal-600 text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-teal-700 transition-colors flex items-center justify-center gap-2 shadow-md">
          <Plus className="h-4 w-4" /> Add Class
        </button>
      </div>

      {saved && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl flex items-center gap-2 text-sm animate-fade-in">
          <Check className="h-4 w-4" /> Changes saved successfully!
        </div>
      )}

      {/* Day Filter Pills */}
      <div className="flex gap-2 overflow-x-auto pb-2 hide-scrollbar">
        <button onClick={() => setActiveDay("all")} className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${activeDay === "all" ? "bg-teal-600 text-white shadow-md" : "bg-white text-gray-600 border border-gray-200 hover:border-teal-300"}`}>
          All Days
        </button>
        {days.map((day) => (
          <button key={day} onClick={() => setActiveDay(day)} className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${activeDay === day ? "bg-teal-600 text-white shadow-md" : "bg-white text-gray-600 border border-gray-200 hover:border-teal-300"}`}>
            {day.slice(0, 3)}
          </button>
        ))}
      </div>

      {/* Desktop Table */}
      <div className="hidden sm:block bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50">
                <th className="text-left px-5 py-3 font-semibold text-gray-600">Class</th>
                <th className="text-left px-5 py-3 font-semibold text-gray-600">Day</th>
                <th className="text-left px-5 py-3 font-semibold text-gray-600">Time</th>
                <th className="text-left px-5 py-3 font-semibold text-gray-600">Trainer</th>
                <th className="text-left px-5 py-3 font-semibold text-gray-600">Spots</th>
                <th className="text-right px-5 py-3 font-semibold text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((cls) => (
                <tr key={cls.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-1.5 h-10 rounded-full bg-gradient-to-b ${cls.color} flex-shrink-0`} />
                      <div>
                        <div className="font-semibold text-gray-900">{cls.name}</div>
                        <span className={`text-xs px-2 py-0.5 rounded-full bg-gradient-to-r ${cls.color} text-white`}>{cls.category}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-gray-600">{cls.day}</td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-1 text-gray-600">
                      <Clock className="h-3.5 w-3.5 text-gray-400" />
                      {cls.time} ({cls.duration})
                    </div>
                  </td>
                  <td className="px-5 py-4 text-gray-600">{cls.trainer}</td>
                  <td className="px-5 py-4">
                    <span className={`font-medium ${cls.spots <= 2 ? "text-red-500" : "text-gray-900"}`}>
                      {cls.spots}/{cls.maxSpots}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button onClick={() => openEdit(cls)} className="p-2 rounded-lg hover:bg-blue-50 text-blue-600 transition-colors"><Edit className="h-4 w-4" /></button>
                      <button onClick={() => handleDelete(cls.id)} className="p-2 rounded-lg hover:bg-red-50 text-red-500 transition-colors"><Trash2 className="h-4 w-4" /></button>
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
        {filtered.map((cls) => (
          <div key={cls.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
            <div className="flex items-start gap-3 mb-3">
              <div className={`w-1.5 h-12 rounded-full bg-gradient-to-b ${cls.color} flex-shrink-0`} />
              <div className="flex-1 min-w-0">
                <div className="font-bold text-gray-900">{cls.name}</div>
                <span className={`text-[10px] px-2 py-0.5 rounded-full bg-gradient-to-r ${cls.color} text-white`}>{cls.category}</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs text-gray-500 mb-3">
              <div className="flex items-center gap-1"><Clock className="h-3 w-3" /> {cls.day} {cls.time}</div>
              <div className="flex items-center gap-1"><Users className="h-3 w-3" /> {cls.spots}/{cls.maxSpots} spots</div>
            </div>
            <div className="text-xs text-gray-400 mb-3">with {cls.trainer} ({cls.duration})</div>
            <div className="flex items-center gap-2">
              <button onClick={() => openEdit(cls)} className="flex-1 py-2 rounded-lg bg-blue-50 text-blue-600 text-sm font-medium hover:bg-blue-100 transition-colors flex items-center justify-center gap-1.5">
                <Edit className="h-3.5 w-3.5" /> Edit
              </button>
              <button onClick={() => handleDelete(cls.id)} className="flex-1 py-2 rounded-lg bg-red-50 text-red-500 text-sm font-medium hover:bg-red-100 transition-colors flex items-center justify-center gap-1.5">
                <Trash2 className="h-3.5 w-3.5" /> Delete
              </button>
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
              <h3 className="text-lg font-bold text-gray-900">{editing ? "Edit Class" : "Add New Class"}</h3>
              <button onClick={() => setShowModal(false)} className="p-2 rounded-lg hover:bg-gray-100 transition-colors"><X className="h-5 w-5 text-gray-500" /></button>
            </div>
            <div className="p-5 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Class Name *</label>
                  <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none text-sm" placeholder="Yoga Flow" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Trainer *</label>
                  <input type="text" value={formData.trainer} onChange={(e) => setFormData({ ...formData, trainer: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none text-sm" placeholder="Trainer name" required />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Day</label>
                  <select value={formData.day} onChange={(e) => setFormData({ ...formData, day: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none text-sm appearance-none bg-white">
                    {days.map((d) => <option key={d} value={d}>{d}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Category</label>
                  <select value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none text-sm appearance-none bg-white">
                    {categories.map((c) => <option key={c.name} value={c.name}>{c.name}</option>)}
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Time</label>
                  <input type="time" value={formData.time} onChange={(e) => setFormData({ ...formData, time: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Duration</label>
                  <input type="text" value={formData.duration} onChange={(e) => setFormData({ ...formData, duration: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none text-sm" placeholder="60 min" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Max Spots</label>
                  <input type="number" value={formData.maxSpots} onChange={(e) => setFormData({ ...formData, maxSpots: e.target.value, spots: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none text-sm" placeholder="20" />
                </div>
              </div>
            </div>
            <div className="sticky bottom-0 bg-white border-t border-gray-100 px-5 py-4 flex gap-3 safe-bottom">
              <button onClick={() => setShowModal(false)} className="flex-1 py-3 rounded-xl border border-gray-200 text-gray-700 font-semibold text-sm hover:bg-gray-50 transition-colors">Cancel</button>
              <button onClick={handleSave} className="flex-1 py-3 rounded-xl bg-teal-600 text-white font-semibold text-sm hover:bg-teal-700 transition-colors shadow-md">{editing ? "Save Changes" : "Add Class"}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
