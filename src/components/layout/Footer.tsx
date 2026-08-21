"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Dumbbell,
  Instagram,
  Twitter,
  Youtube,
  Facebook,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
} from "lucide-react";
import { saveMessage } from "@/lib/services/storage";

const openingHours = [
  { day: "Monday", time: "07:00 AM – 11:00 PM" },
  { day: "Tuesday", time: "07:00 AM – 11:00 PM" },
  { day: "Wednesday", time: "07:00 AM – 11:00 PM" },
  { day: "Thursday", time: "07:00 AM – 11:00 PM" },
  { day: "Friday", time: "07:00 AM – 11:00 PM" },
  { day: "Saturday", time: "07:00 AM – 09:30 PM" },
  { day: "Sunday", time: "Closed" },
];

export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await saveMessage({
      name: formData.name,
      email: formData.email,
      phone: "",
      subject: formData.subject,
      message: formData.message,
    });
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 h-[250px] sm:h-[350px] lg:h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.4865223957!2d71.4987!3d34.0069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d9173799b02149%3A0x4e3c4b4b4b4b4b4b!2sGulbahar%2C%20Peshawar!5e0!3m2!1sen!2spk!4v1700000000000!5m2!1sen!2spk"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="FitLife Studio Location"
          />
        </div>

        <div className="lg:w-1/2 bg-gray-800 flex items-center justify-center p-6 sm:p-8 lg:p-12">
          <div className="w-full max-w-md">
            <h3 className="text-xl sm:text-2xl font-bold text-green-400 mb-6 sm:mb-8 tracking-wide">
              OPENING HOURS
            </h3>
            <div className="space-y-3 sm:space-y-4">
              {openingHours.map((item) => (
                <div
                  key={item.day}
                  className="flex items-center justify-between py-2 border-b border-gray-700 last:border-0"
                >
                  <span className="text-gray-300 font-medium text-sm sm:text-base">
                    {item.day}
                  </span>
                  <span
                    className={`font-semibold text-sm sm:text-base ${
                      item.time === "Closed" ? "text-red-400" : "text-white"
                    }`}
                  >
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4 sm:mb-5">
              <Dumbbell className="h-7 w-7 sm:h-8 sm:w-8 text-teal-400" />
              <span className="text-xl sm:text-2xl font-bold tracking-tight">
                FIT<span className="text-teal-400">LIFE</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm mb-5 sm:mb-6 leading-relaxed">
              At FitLife Studio, we are committed to helping you reach your
              fitness goals. Our experience runs deep and our trainers know just
              how to get your adrenaline rushing.
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="h-4 w-4 text-teal-400 flex-shrink-0 mt-0.5" />
                <span>2H5W+P4V, Ishrat Cinema Rd, Gulbahar, Peshawar</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="h-4 w-4 text-teal-400 flex-shrink-0" />
                <a
                  href="tel:+923169689595"
                  className="hover:text-teal-400 transition-colors"
                >
                  +92 316 9689595
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="h-4 w-4 text-teal-400 flex-shrink-0" />
                <a
                  href="mailto:info@fitlifestudio.com"
                  className="hover:text-teal-400 transition-colors"
                >
                  info@fitlifestudio.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <Clock className="h-4 w-4 text-teal-400 flex-shrink-0" />
                MON – SAT 7:00 AM – 11:00 PM
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-sm pl-7">
                Sundays & Public Holidays Closed
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start">
            <h4 className="text-lg font-bold text-white mb-5 sm:mb-6">
              Get Social
            </h4>
            <div className="flex items-center gap-3">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Instagram, label: "Instagram" },
                { icon: Twitter, label: "Twitter" },
                { icon: Youtube, label: "YouTube" },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="w-11 h-11 sm:w-12 sm:h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="sm:col-span-2 md:col-span-1">
            {submitted ? (
              <div className="bg-gray-800 rounded-xl p-6 sm:p-8 text-center h-full flex flex-col items-center justify-center">
                <div className="w-14 h-14 bg-teal-600/20 rounded-full flex items-center justify-center mb-4">
                  <Send className="h-7 w-7 text-teal-400" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">
                  Message Sent!
                </h4>
                <p className="text-gray-400 text-sm">
                  We&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <input
                  type="text"
                  required
                  placeholder="Name *"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none text-sm"
                />
                <input
                  type="email"
                  required
                  placeholder="Email *"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none text-sm"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none text-sm"
                />
                <textarea
                  rows={3}
                  placeholder="Message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none resize-none text-sm"
                />
                <button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg transition-colors text-sm uppercase tracking-wide"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
