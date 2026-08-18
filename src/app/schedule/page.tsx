import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import ClassSchedule from "@/components/ui/ClassSchedule";
import ScrollAnimation from "@/components/layout/ScrollAnimation";

export default function SchedulePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHero
        title="Class Schedule"
        subtitle="Browse our weekly timetable and book your favorite classes at GOLD STANDARD GYM. Limited spots available!"
        breadcrumbs={[{ label: "Schedule", href: "/schedule" }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <ClassSchedule />
          </ScrollAnimation>
        </div>
      </section>
      <Footer />
    </div>
  );
}
