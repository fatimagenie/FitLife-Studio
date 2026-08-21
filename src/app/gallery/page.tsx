import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import Gallery from "@/components/ui/Gallery";
import ScrollAnimation from "@/components/layout/ScrollAnimation";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function GalleryPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHero
        title="Photo Gallery"
        subtitle="Take a look inside FITLIFE STUDIO - our equipment, classes, events, and member transformations."
        breadcrumbs={[{ label: "Gallery", href: "/gallery" }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <Gallery />
          </ScrollAnimation>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-teal-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Like What You See?</h2>
            <p className="text-teal-100 text-lg mb-8">Come visit FITLIFE STUDIO in person and experience our world-class facility firsthand.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="bg-white text-teal-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-teal-50 transition-all shadow-xl">
                Schedule a Visit
              </Link>
              <Link href="/plans" className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:border-white/60 transition-all flex items-center gap-2">
                View Plans <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
      <Footer />
    </div>
  );
}
