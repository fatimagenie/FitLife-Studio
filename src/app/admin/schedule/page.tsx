"use client";

import { useState, useEffect } from "react";
import { classes as defaultClasses, days } from "@/data/classes";
import { getClasses, saveClasses } from "@/lib/services/storage";
import { ClassSchedule } from "@/types";
import { Plus, Pencil, Trash2, X, Check } from "lucide-react";

const emptyClass: Omit<ClassSchedule, "id"> = {
  name: "", trainer: "", time: "06:00", duration: "45 min", day: "Monday", category: "Yoga", color: "from-teal-500 to-teal-700", spots: 10, maxSpots: 20,
};

const categoryColors: Record<string, string> = {
  Yoga: "from-purple-500 to-purple-700",
  HIIT: "from-red-500 to-orange-500",
  Strength: "from-teal-500 to-teal-700",
  Boxing: "from-red-500 to-red-700",
  Pilates: "from-cyan-500 to-cyan-700",
  Cardio: "from-pink-500 to-rose-500",
};

export default function AdminSchedulePage() {
  const [classList, setClassList] = useState<ClassSchedule[]>([]);
  const [editing, setEditing] = useState<string | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [form, setForm] = useState(emptyClass);
  const [saved, setSaved] = useState(false);

  useEffect(() => { setClassList(getClasses(defaultClasses)); }, []);

  const handleSave = () => {
    saveClasses(classList);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleAdd = () => {
    const newClass = { ...form, id: Date.now().toString() };
    setClassList([...classList, newClass]);
    setForm(emptyClass);
    setIsAdding(false);
    setTimeout(() => handleSave(), 100);
  };

  const handleUpdate = () => {
    if (!editing) return;
    setClassList(classList.map((c) => (c.id === editing ? { ...form, id: editing } : c)));
    setEditing(null);
    setForm(emptyClass);
    setTimeout(() => handleSave(), 100);
  };

  const handleDelete = (id: string) => {
    if (confirm("Delete this class?")) {
      setClassList(classList.filter((c) => c.id !== id));
      setTimeout(() => handleSave(), 100);
    }
  };

  const startEdit = (cls: ClassSchedule) => {
    setEditing(cls.id);
    setForm({ ...cls });
    setIsAdding(false);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Class Schedule</h2>
          <p className="text-gray-500 text-sm">Manage your weekly class timetable</p>
        </div>
        <button onClick={() => { setIsAdding(true); setEditing(null); setForm(emptyClass); }} className="flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-teal-700 transition-colors text-sm">
          <Plus className="h-4 w-4" /> Add Class
        </button>
      </div>

      {saved && (
        <div className="bg-green-50 text-green-700 px-4 py-3 rounded-lg mb-4 flex items-center gap-2">
          <Check className="h-4 w-4" /> Changes saved successfully!
        </div>
      )}

      {(isAdding || editing) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50" onClick={() => { setIsAdding(false); setEditing(null); }} />
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg">
            <div className="flex items-center justify-between p-5 border-b">
              <h3 className="text-lg font-bold">{editing ? "Edit Class" : "Add New Class"}</h3>
              <button onClick={() => { setIsAdding(false); setEditing(null); }} className="p-1 hover:bg-gray-100 rounded-lg"><X className="h-5 w-5" /></button>
            </div>
            <div className="p-5 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Class Name</label>
                  <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 outline-none text-sm" placeholder="e.g. Power Yoga" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Trainer</label>
                  <input value={form.trainer} onChange={(e) => setForm({ ...form, trainer: e.target.value })} className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 outline-none text-sm" />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Day</label>
                  <select value={form.day} onChange={(e) => setForm({ ...form, day: e.target.value })} className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 outline-none text-sm">
                    {days.map((d) => <option key={d} value={d}>{d}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                  <input type="time" value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 outline-none text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
                  <input value={form.duration} onChange={(e) => setForm({ ...form, duration: e.target.value })} className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 outline-none text-sm" placeholder="45 min" />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value, color: categoryColors[e.target.value] || form.color })} className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 outline-none text-sm">
                    {Object.keys(categoryColors).map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Max Spots</label>
                  <input type="number" value={form.maxSpots} onChange={(e) => setForm({ ...form, maxSpots: parseInt(e.target.value) || 0 })} className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 outline-none text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Available Spots</label>
                  <input type="number" value={form.spots} onChange={(e) => setForm({ ...form, spots: parseInt(e.target.value) || 0 })} className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 outline-none text-sm" />
                </div>
              </div>
            </div>
            <div className="flex gap-3 p-5 border-t">
              <button onClick={() => { setIsAdding(false); setEditing(null); }} className="flex-1 px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50">Cancel</button>
              <button onClick={editing ? handleUpdate : handleAdd} className="flex-1 px-4 py-2 bg-teal-600 text-white rounded-lg text-sm font-medium hover:bg-teal-700">{editing ? "Update" : "Add"} Class</button>
            </div>
          </div>
        </div>
      )}

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Class</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Day</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Time</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Trainer</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Spots</th>
              <th className="text-right px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {classList.map((cls) => (
              <tr key={cls.id} className="hover:bg-gray-50">
                <td className="px-5 py-4">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-8 rounded-full bg-gradient-to-b ${cls.color}`} />
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">{cls.name}</div>
                      <div className="text-xs text-gray-500">{cls.category}</div>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-4 text-sm">{cls.day}</td>
                <td className="px-5 py-4 text-sm">{cls.time} ({cls.duration})</td>
                <td className="px-5 py-4 text-sm text-gray-600">{cls.trainer}</td>
                <td className="px-5 py-4 text-sm">
                  <span className={`font-medium ${cls.spots <= 2 ? "text-red-600" : "text-gray-900"}`}>{cls.spots}/{cls.maxSpots}</span>
                </td>
                <td className="px-5 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button onClick={() => startEdit(cls)} className="p-2 hover:bg-gray-100 rounded-lg text-gray-500 hover:text-teal-600"><Pencil className="h-4 w-4" /></button>
                    <button onClick={() => handleDelete(cls.id)} className="p-2 hover:bg-red-50 rounded-lg text-gray-500 hover:text-red-600"><Trash2 className="h-4 w-4" /></button>
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
