"use client";

import { useState, useEffect } from "react";
import { getMessages, deleteMessage, markMessageRead, ContactMessage } from "@/lib/storage";
import { Trash2, Mail, MailOpen, Eye } from "lucide-react";

export default function AdminMessagesPage() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [selected, setSelected] = useState<ContactMessage | null>(null);

  useEffect(() => { setMessages(getMessages()); }, []);

  const handleDelete = (id: string) => {
    if (confirm("Delete this message?")) {
      deleteMessage(id);
      setMessages(getMessages());
      if (selected?.id === id) setSelected(null);
    }
  };

  const handleRead = (msg: ContactMessage) => {
    setSelected(msg);
    if (!msg.read) {
      markMessageRead(msg.id);
      setMessages(getMessages());
    }
  };

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900">Messages</h2>
        <p className="text-gray-500 text-sm">Contact form submissions ({messages.length} total, {messages.filter((m) => !m.read).length} unread)</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Messages List */}
        <div className="lg:col-span-1 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          {messages.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              <Mail className="h-12 w-12 mx-auto mb-3 text-gray-300" />
              <p>No messages yet</p>
            </div>
          ) : (
            <div className="divide-y max-h-[600px] overflow-y-auto">
              {messages.map((msg) => (
                <button
                  key={msg.id}
                  onClick={() => handleRead(msg)}
                  className={`w-full text-left p-4 hover:bg-gray-50 transition-colors ${selected?.id === msg.id ? "bg-teal-50" : ""} ${!msg.read ? "border-l-4 border-teal-500" : ""}`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className={`font-semibold text-sm ${!msg.read ? "text-gray-900" : "text-gray-700"}`}>{msg.name}</span>
                    {!msg.read ? <span className="w-2 h-2 bg-teal-500 rounded-full" /> : <MailOpen className="h-3 w-3 text-gray-400" />}
                  </div>
                  <p className="text-xs text-gray-500 truncate">{msg.subject || "No subject"}</p>
                  <p className="text-xs text-gray-400 mt-1">{new Date(msg.date).toLocaleDateString()}</p>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Message Detail */}
        <div className="lg:col-span-2">
          {selected ? (
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{selected.name}</h3>
                  <p className="text-sm text-gray-500">{selected.email}</p>
                </div>
                <button onClick={() => handleDelete(selected.id)} className="p-2 hover:bg-red-50 rounded-lg text-gray-500 hover:text-red-600">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-500 mb-1">Phone</p>
                  <p className="text-sm font-medium">{selected.phone || "Not provided"}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-500 mb-1">Subject</p>
                  <p className="text-sm font-medium">{selected.subject || "Not specified"}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-500 mb-1">Date</p>
                  <p className="text-sm font-medium">{new Date(selected.date).toLocaleString()}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-500 mb-1">Status</p>
                  <p className={`text-sm font-medium ${selected.read ? "text-green-600" : "text-orange-600"}`}>{selected.read ? "Read" : "Unread"}</p>
                </div>
              </div>

              <div>
                <p className="text-xs text-gray-500 mb-2">Message</p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-700 whitespace-pre-wrap">{selected.message}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center text-gray-500">
              <Eye className="h-12 w-12 mx-auto mb-3 text-gray-300" />
              <p>Select a message to view details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
