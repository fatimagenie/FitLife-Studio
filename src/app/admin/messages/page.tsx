"use client";

import { useState, useEffect } from "react";
import { Trash2, Mail, Phone, Calendar, ArrowLeft, MailOpen, Inbox } from "lucide-react";
import { getMessages, deleteMessage, markMessageRead, ContactMessage } from "@/lib/services/storage";

export default function AdminMessages() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [selected, setSelected] = useState<ContactMessage | null>(null);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setMessages(getMessages());
  }, []);

  const totalUnread = messages.filter((m) => !m.read).length;

  const handleSelect = (msg: ContactMessage) => {
    setSelected(msg);
    if (!msg.read) {
      markMessageRead(msg.id);
      setMessages((prev) => prev.map((m) => (m.id === msg.id ? { ...m, read: true } : m)));
    }
  };

  const handleDelete = (id: string) => {
    if (!confirm("Delete this message? This cannot be undone.")) return;
    deleteMessage(id);
    setMessages((prev) => prev.filter((m) => m.id !== id));
    if (selected?.id === id) setSelected(null);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Messages</h2>
          <p className="text-sm text-gray-500 mt-1">
            {messages.length} total
            {totalUnread > 0 && <span className="text-red-500 font-medium"> · {totalUnread} unread</span>}
          </p>
        </div>
      </div>

      {saved && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl flex items-center gap-2 text-sm animate-fade-in">
          <Trash2 className="h-4 w-4" /> Message deleted!
        </div>
      )}

      <div className="grid lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Message List */}
        <div className={`lg:col-span-1 ${selected ? "hidden lg:block" : "block"}`}>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="max-h-[600px] overflow-y-auto">
              {messages.length === 0 ? (
                <div className="text-center py-12">
                  <Inbox className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                  <p className="text-gray-500 text-sm">No messages yet</p>
                </div>
              ) : (
                messages.map((msg) => (
                  <button
                    key={msg.id}
                    onClick={() => handleSelect(msg)}
                    className={`w-full text-left px-4 py-3.5 border-b border-gray-50 hover:bg-gray-50 transition-colors ${
                      selected?.id === msg.id ? "bg-teal-50 border-l-4 border-teal-600" : !msg.read ? "border-l-4 border-teal-400" : ""
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-sm font-semibold ${!msg.read ? "text-gray-900" : "text-gray-700"}`}>
                        {msg.name}
                      </span>
                      {!msg.read && <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse-dot" />}
                    </div>
                    <div className="text-xs text-gray-500 truncate">{msg.subject || "No subject"}</div>
                    <div className="text-xs text-gray-400 mt-1">{formatDate(msg.date)}</div>
                  </button>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Message Detail */}
        <div className={`lg:col-span-2 ${selected ? "block" : "hidden lg:block"}`}>
          {selected ? (
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 sm:p-6">
              <div className="flex items-center justify-between mb-6">
                <button onClick={() => setSelected(null)} className="lg:hidden flex items-center gap-1 text-sm text-gray-500 hover:text-teal-600 transition-colors">
                  <ArrowLeft className="h-4 w-4" /> Back
                </button>
                <div className="flex items-center gap-2 ml-auto">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${selected.read ? "bg-green-100 text-green-600" : "bg-orange-100 text-orange-600"}`}>
                    {selected.read ? "Read" : "Unread"}
                  </span>
                  <button onClick={() => handleDelete(selected.id)} className="p-2 rounded-lg hover:bg-red-50 text-red-500 transition-colors">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{selected.name}</h3>
                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
                  <span className="flex items-center gap-1"><Mail className="h-3.5 w-3.5" /> {selected.email}</span>
                  {selected.phone && <span className="flex items-center gap-1"><Phone className="h-3.5 w-3.5" /> {selected.phone}</span>}
                  <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {formatDate(selected.date)}</span>
                </div>
              </div>

              {selected.subject && (
                <div className="mb-4">
                  <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">Subject</span>
                  <p className="text-gray-900 font-medium mt-1">{selected.subject}</p>
                </div>
              )}

              <div>
                <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">Message</span>
                <p className="text-gray-700 mt-1 whitespace-pre-wrap leading-relaxed">{selected.message}</p>
              </div>
            </div>
          ) : (
            <div className="hidden lg:flex bg-white rounded-xl shadow-sm border border-gray-100 items-center justify-center py-20">
              <div className="text-center">
                <MailOpen className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                <p className="text-gray-500 text-sm">Select a message to view details</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
