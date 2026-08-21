"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phone = "923169689595";
  const message =
    "Hi! I'm interested in FITLIFE STUDIO memberships. Can you share more details?";

  return (
    <a
      href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 safe-bottom"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative group">
        <span className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-30" />
        <div className="relative w-12 h-12 sm:w-14 sm:h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110">
          <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
        </div>
      </div>
    </a>
  );
}
