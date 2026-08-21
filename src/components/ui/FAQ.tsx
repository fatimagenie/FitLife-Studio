"use client";

import { useState, useEffect } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { faqs as defaultFAQs } from "@/data/faqs";
import { getFAQs } from "@/lib/services/storage";
import { FAQ as FAQType } from "@/types";

export default function FAQ() {
  const [faqList, setFaqList] = useState<FAQType[]>(defaultFAQs);

  useEffect(() => {
    getFAQs().then((data) => {
      if (data.length > 0) setFaqList(data);
    });
  }, []);

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqList.map((faq, index) => (
        <div
          key={index}
          className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between p-5 text-left"
          >
            <div className="flex items-center gap-3">
              <HelpCircle className="h-5 w-5 text-teal-600 flex-shrink-0" />
              <span className="font-semibold text-gray-900">{faq.question}</span>
            </div>
            <ChevronDown
              className={`h-5 w-5 text-gray-400 flex-shrink-0 transition-transform ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <p className="px-5 pb-5 text-gray-600 text-sm leading-relaxed pl-12">
              {faq.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
