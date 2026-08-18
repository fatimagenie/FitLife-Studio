"use client";

import { useState, useEffect } from "react";
import { plans as defaultPlans } from "@/data/plans";
import { getPlans, savePlans } from "@/lib/services/storage";
import { Plan } from "@/types";
import { Plus, Pencil, Trash2, X, Check, GripVertical } from "lucide-react";

const emptyPlan: Plan = { name: "", price: "", period: "/month", description: "", features: [], popular: false };

export default function AdminPlansPage() {
  const [plansList, setPlansList] = useState<Plan[]>([]);
  const [editing, setEditing] = useState<Plan | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [form, setForm] = useState<Plan>(emptyPlan);
  const [featureInput, setFeatureInput] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => { setPlansList(getPlans(defaultPlans)); }, []);

  const handleSave = () => {
    savePlans(plansList);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleAdd = () => {
    const newPlan = { ...form, id: Date.now().toString() };
    setPlansList([...plansList, newPlan]);
    setForm(emptyPlan);
    setIsAdding(false);
    setTimeout(() => handleSave(), 100);
  };

  const handleUpdate = () => {
    if (!editing) return;
    setPlansList(plansList.map((p) => (p.name === editing.name ? form : p)));
    setEditing(null);
    setForm(emptyPlan);
    setTimeout(() => handleSave(), 100);
  };

  const handleDelete = (name: string) => {
    if (confirm("Delete this plan?")) {
      setPlansList(plansList.filter((p) => p.name !== name));
      setTimeout(() => handleSave(), 100);
    }
  };

  const addFeature = () => {
    if (featureInput.trim()) {
      setForm({ ...form, features: [...form.features, featureInput.trim()] });
      setFeatureInput("");
    }
  };

  const removeFeature = (index: number) => {
    setForm({ ...form, features: form.features.filter((_, i) => i !== index) });
  };

  const startEdit = (plan: Plan) => {
    setEditing(plan);
    setForm({ ...plan });
    setIsAdding(false);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Membership Plans</h2>
          <p className="text-gray-500 text-sm">Manage your gym membership plans and pricing</p>
        </div>
        <button onClick={() => { setIsAdding(true); setEditing(null); setForm(emptyPlan); }} className="flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-teal-700 transition-colors text-sm">
          <Plus className="h-4 w-4" /> Add Plan
        </button>
      </div>

      {saved && (
        <div className="bg-green-50 text-green-700 px-4 py-3 rounded-lg mb-4 flex items-center gap-2">
          <Check className="h-4 w-4" /> Changes saved successfully!
        </div>
      )}

      {/* Form Modal */}
      {(isAdding || editing) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50" onClick={() => { setIsAdding(false); setEditing(null); }} />
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-5 border-b">
              <h3 className="text-lg font-bold">{editing ? "Edit Plan" : "Add New Plan"}</h3>
              <button onClick={() => { setIsAdding(false); setEditing(null); }} className="p-1 hover:bg-gray-100 rounded-lg"><X className="h-5 w-5" /></button>
            </div>
            <div className="p-5 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Plan Name</label>
                  <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 outline-none text-sm" placeholder="e.g. Basic" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Price (Rs)</label>
                  <input value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 outline-none text-sm" placeholder="e.g. 999" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Period</label>
                  <select value={form.period} onChange={(e) => setForm({ ...form, period: e.target.value })} className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 outline-none text-sm">
                    <option value="/month">/month</option>
                    <option value="/year">/year</option>
                  </select>
                </div>
                <div className="flex items-end">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" checked={form.popular} onChange={(e) => setForm({ ...form, popular: e.target.checked })} className="w-4 h-4 text-teal-600 rounded" />
                    <span className="text-sm font-medium text-gray-700">Most Popular</span>
                  </label>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <input value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 outline-none text-sm" placeholder="Brief description" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Features</label>
                <div className="flex gap-2 mb-2">
                  <input value={featureInput} onChange={(e) => setFeatureInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addFeature())} className="flex-1 px-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 outline-none text-sm" placeholder="Add feature" />
                  <button type="button" onClick={addFeature} className="px-3 py-2 bg-gray-100 rounded-lg text-sm hover:bg-gray-200">Add</button>
                </div>
                <div className="space-y-1">
                  {form.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm bg-gray-50 px-3 py-1.5 rounded-lg">
                      <Check className="h-3 w-3 text-teal-600" />
                      <span className="flex-1">{f}</span>
                      <button type="button" onClick={() => removeFeature(i)} className="text-red-400 hover:text-red-600"><Trash2 className="h-3 w-3" /></button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex gap-3 p-5 border-t">
              <button onClick={() => { setIsAdding(false); setEditing(null); }} className="flex-1 px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50">Cancel</button>
              <button onClick={editing ? handleUpdate : handleAdd} className="flex-1 px-4 py-2 bg-teal-600 text-white rounded-lg text-sm font-medium hover:bg-teal-700">{editing ? "Update" : "Add"} Plan</button>
            </div>
          </div>
        </div>
      )}

      {/* Plans Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Plan</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Price</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Features</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Popular</th>
              <th className="text-right px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {plansList.map((plan) => (
              <tr key={plan.name} className="hover:bg-gray-50">
                <td className="px-5 py-4">
                  <div className="font-semibold text-gray-900">{plan.name}</div>
                  <div className="text-sm text-gray-500">{plan.description}</div>
                </td>
                <td className="px-5 py-4 text-sm font-medium text-gray-900">Rs {plan.price}{plan.period}</td>
                <td className="px-5 py-4 text-sm text-gray-500">{plan.features.length} features</td>
                <td className="px-5 py-4">
                  {plan.popular ? <span className="px-2 py-1 bg-teal-100 text-teal-700 text-xs rounded-full font-medium">Popular</span> : <span className="text-gray-400 text-sm">-</span>}
                </td>
                <td className="px-5 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button onClick={() => startEdit(plan)} className="p-2 hover:bg-gray-100 rounded-lg text-gray-500 hover:text-teal-600"><Pencil className="h-4 w-4" /></button>
                    <button onClick={() => handleDelete(plan.name)} className="p-2 hover:bg-red-50 rounded-lg text-gray-500 hover:text-red-600"><Trash2 className="h-4 w-4" /></button>
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
