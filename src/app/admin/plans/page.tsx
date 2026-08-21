"use client";

import { useState, useEffect } from "react";
import { Plus, Edit, Trash2, X, Star, Check } from "lucide-react";
import { getPlans, savePlan, updatePlan, deletePlan } from "@/lib/services/storage";
import { Plan } from "@/types";

export default function AdminPlans() {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState<Plan | null>(null);
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    period: "/month",
    popular: false,
    description: "",
    features: [""],
  });

  useEffect(() => {
    getPlans().then(setPlans).finally(() => setLoading(false));
  }, []);

  const openAdd = () => {
    setEditing(null);
    setFormData({ name: "", price: "", period: "/month", popular: false, description: "", features: [""] });
    setShowModal(true);
  };

  const openEdit = (plan: Plan) => {
    setEditing(plan);
    setFormData({
      name: plan.name,
      price: plan.price.toString(),
      period: plan.period,
      popular: plan.popular,
      description: plan.description,
      features: [...plan.features],
    });
    setShowModal(true);
  };

  const handleSave = async () => {
    if (!formData.name.trim() || !formData.price.trim()) return;
    setSaving(true);
    try {
      const planData = {
        name: formData.name.trim(),
        price: formData.price || "0",
        period: formData.period,
        popular: formData.popular,
        description: formData.description.trim(),
        features: formData.features.filter((f) => f.trim()),
      };

      if (editing) {
        if (editing.id) {
          await updatePlan(editing.id, planData);
        }
        setPlans((prev) => prev.map((p) => (p.id === editing.id ? { ...p, ...planData } : p)));
      } else {
        const newId = await savePlan(planData);
        setPlans((prev) => [...prev, { id: newId, ...planData }]);
      }
      setShowModal(false);
      setSaved(true);
      setTimeout(() => setSaved(false), 2500);
    } catch (err) {
      console.error("Failed to save plan:", err);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (plan: Plan) => {
    if (!confirm(`Delete "${plan.name}" plan? This cannot be undone.`)) return;
    try {
      if (plan.id) {
        await deletePlan(plan.id);
      }
      setPlans((prev) => prev.filter((p) => p !== plan));
      setSaved(true);
      setTimeout(() => setSaved(false), 2500);
    } catch (err) {
      console.error("Failed to delete plan:", err);
    }
  };

  const addFeature = () => setFormData({ ...formData, features: [...formData.features, ""] });
  const removeFeature = (i: number) => setFormData({ ...formData, features: formData.features.filter((_, idx) => idx !== i) });
  const updateFeature = (i: number, val: string) => {
    const f = [...formData.features];
    f[i] = val;
    setFormData({ ...formData, features: f });
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <div className="h-7 bg-gray-200 rounded w-40 animate-pulse" />
            <div className="h-4 bg-gray-200 rounded w-28 mt-2 animate-pulse" />
          </div>
          <div className="h-10 bg-gray-200 rounded-xl w-28 animate-pulse" />
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
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Membership Plans</h2>
          <p className="text-sm text-gray-500 mt-1">{plans.length} plans configured</p>
        </div>
        <button
          onClick={openAdd}
          className="bg-teal-600 text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-teal-700 transition-colors flex items-center justify-center gap-2 shadow-md"
        >
          <Plus className="h-4 w-4" /> Add Plan
        </button>
      </div>

      {/* Success Toast */}
      {saved && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl flex items-center gap-2 text-sm animate-fade-in">
          <Check className="h-4 w-4" /> Changes saved successfully!
        </div>
      )}

      {/* Plans - Cards on mobile, Table on desktop */}
      <div className="hidden sm:block bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50">
                <th className="text-left px-5 py-3 font-semibold text-gray-600">Plan</th>
                <th className="text-left px-5 py-3 font-semibold text-gray-600">Price</th>
                <th className="text-left px-5 py-3 font-semibold text-gray-600">Features</th>
                <th className="text-left px-5 py-3 font-semibold text-gray-600">Popular</th>
                <th className="text-right px-5 py-3 font-semibold text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {plans.map((plan) => (
                <tr key={plan.id || plan.name} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                  <td className="px-5 py-4">
                    <div className="font-semibold text-gray-900">{plan.name}</div>
                    <div className="text-xs text-gray-500 mt-0.5 max-w-xs truncate">{plan.description}</div>
                  </td>
                  <td className="px-5 py-4">
                    <span className="text-gray-900 font-bold">Rs {plan.price.toLocaleString()}</span>
                    <span className="text-gray-400 text-xs ml-1">{plan.period}</span>
                  </td>
                  <td className="px-5 py-4 text-gray-500">{plan.features.length} features</td>
                  <td className="px-5 py-4">
                    {plan.popular && (
                      <span className="inline-flex items-center gap-1 bg-yellow-100 text-yellow-700 px-2.5 py-1 rounded-full text-xs font-semibold">
                        <Star className="h-3 w-3 fill-current" /> Popular
                      </span>
                    )}
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button onClick={() => openEdit(plan)} className="p-2 rounded-lg hover:bg-blue-50 text-blue-600 transition-colors" title="Edit">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button onClick={() => handleDelete(plan)} className="p-2 rounded-lg hover:bg-red-50 text-red-500 transition-colors" title="Delete">
                        <Trash2 className="h-4 w-4" />
                      </button>
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
        {plans.map((plan) => (
          <div key={plan.id || plan.name} className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
            <div className="flex items-start justify-between mb-2">
              <div>
                <div className="font-bold text-gray-900 flex items-center gap-2">
                  {plan.name}
                  {plan.popular && (
                    <span className="inline-flex items-center gap-0.5 bg-yellow-100 text-yellow-700 px-1.5 py-0.5 rounded-full text-[10px] font-semibold">
                      <Star className="h-2.5 w-2.5 fill-current" /> Popular
                    </span>
                  )}
                </div>
                <div className="text-xs text-gray-500 mt-0.5">{plan.description}</div>
              </div>
              <div className="text-right">
                <div className="font-bold text-gray-900">Rs {plan.price.toLocaleString()}</div>
                <div className="text-xs text-gray-400">{plan.period}</div>
              </div>
            </div>
            <div className="text-xs text-gray-500 mb-3">{plan.features.length} features included</div>
            <div className="flex items-center gap-2">
              <button onClick={() => openEdit(plan)} className="flex-1 py-2 rounded-lg bg-blue-50 text-blue-600 text-sm font-medium hover:bg-blue-100 transition-colors flex items-center justify-center gap-1.5">
                <Edit className="h-3.5 w-3.5" /> Edit
              </button>
              <button onClick={() => handleDelete(plan)} className="flex-1 py-2 rounded-lg bg-red-50 text-red-500 text-sm font-medium hover:bg-red-100 transition-colors flex items-center justify-center gap-1.5">
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
              <h3 className="text-lg font-bold text-gray-900">{editing ? "Edit Plan" : "Add New Plan"}</h3>
              <button onClick={() => setShowModal(false)} className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>
            <div className="p-5 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Plan Name *</label>
                <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none text-sm" placeholder="e.g. Basic, Premium" required />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Price (Rs) *</label>
                  <input type="number" value={formData.price} onChange={(e) => setFormData({ ...formData, price: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none text-sm" placeholder="999" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Period</label>
                  <select value={formData.period} onChange={(e) => setFormData({ ...formData, period: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none text-sm appearance-none bg-white">
                    <option value="/month">/month</option>
                    <option value="/year">/year</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Description</label>
                <textarea value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} rows={2} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none text-sm resize-none" placeholder="Short description of this plan" />
              </div>
              <div>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" checked={formData.popular} onChange={(e) => setFormData({ ...formData, popular: e.target.checked })} className="w-4 h-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500" />
                  <span className="text-sm font-medium text-gray-700">Mark as Most Popular</span>
                </label>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium text-gray-700">Features</label>
                  <button type="button" onClick={addFeature} className="text-teal-600 text-sm font-medium hover:text-teal-700">+ Add</button>
                </div>
                <div className="space-y-2">
                  {formData.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <input type="text" value={feature} onChange={(e) => updateFeature(i, e.target.value)} className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none text-sm" placeholder={`Feature ${i + 1}`} />
                      {formData.features.length > 1 && (
                        <button type="button" onClick={() => removeFeature(i)} className="p-2 rounded-lg hover:bg-red-50 text-red-400 hover:text-red-500 transition-colors flex-shrink-0">
                          <X className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="sticky bottom-0 bg-white border-t border-gray-100 px-5 py-4 flex gap-3 safe-bottom">
              <button onClick={() => setShowModal(false)} className="flex-1 py-3 rounded-xl border border-gray-200 text-gray-700 font-semibold text-sm hover:bg-gray-50 transition-colors">
                Cancel
              </button>
              <button onClick={handleSave} disabled={saving} className="flex-1 py-3 rounded-xl bg-teal-600 text-white font-semibold text-sm hover:bg-teal-700 transition-colors shadow-md disabled:opacity-50">
                {saving ? "Saving..." : editing ? "Save Changes" : "Add Plan"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
