import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Gallery from "@/components/Gallery";
import ScrollAnimation from "@/components/ScrollAnimation";

export default function GalleryPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHero
        title="Photo Gallery"
        subtitle="Take a look inside GOLD STANDARD GYM - our equipment, classes, events, and member transformations."
        breadcrumbs={[{ label: "Gallery", href: "/gallery" }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <Gallery />
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}
