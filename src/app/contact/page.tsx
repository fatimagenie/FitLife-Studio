"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import ScrollAnimation from "@/components/layout/ScrollAnimation";
import BmiCalculator from "@/components/ui/BmiCalculator";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 5000);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHero
        title="Contact Us"
        subtitle="Have questions about GOLD STANDARD GYM? Ready to join? Reach out to us and we'll help you get started."
        breadcrumbs={[{ label: "Contact", href: "/contact" }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <ScrollAnimation className="lg:col-span-2">
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="h-8 w-8 text-green-600" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Message Sent!</h4>
                    <p className="text-gray-600">We&apos;ll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                        <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none" placeholder="Your name" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none" placeholder="your@email.com" />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                        <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none" placeholder="+92 316 9689595" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                        <select value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none">
                          <option value="">Select subject</option>
                          <option value="membership">Membership Inquiry</option>
                          <option value="trial">Free Trial</option>
                          <option value="personal-training">Personal Training</option>
                          <option value="classes">Group Classes</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                      <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={5} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none resize-none" placeholder="Tell us about your fitness goals..." required />
                    </div>
                    <button type="submit" className="bg-teal-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-teal-700 transition-colors flex items-center gap-2">
                      <Send className="h-4 w-4" /> Send Message
                    </button>
                  </form>
                )}
              </div>
            </ScrollAnimation>

            {/* Contact Info Sidebar */}
            <ScrollAnimation delay={200}>
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="font-bold text-gray-900 mb-4">Contact Info</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0"><MapPin className="h-5 w-5 text-teal-600" /></div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm">Location</h4>
                        <p className="text-gray-600 text-sm">2H5W+P4V, Ishrat Cinema Rd, opposite khttak general store, Gulbahar, Peshawar, 25000, Pakistan</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0"><Phone className="h-5 w-5 text-teal-600" /></div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm">Phone</h4>
                        <p className="text-gray-600 text-sm">+92 316 9689595</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0"><Mail className="h-5 w-5 text-teal-600" /></div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm">Email</h4>
                        <p className="text-gray-600 text-sm">info@goldstandardgym.com</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-teal-600 to-teal-800 rounded-2xl p-6 text-white">
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="h-5 w-5" />
                    <h3 className="font-bold">Operating Hours</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between"><span className="text-teal-100">Mon - Sat</span><span className="font-semibold">6:00 AM - 11:00 PM</span></div>
                    <div className="flex justify-between"><span className="text-teal-100">Sunday</span><span className="font-semibold text-red-300">Closed</span></div>
                  </div>
                </div>

                <BmiCalculator />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
