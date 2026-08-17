import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MembershipPlans from "@/components/MembershipPlans";
import Trainers from "@/components/Trainers";
import WorkoutTips from "@/components/WorkoutTips";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <MembershipPlans />
        <Trainers />
        <WorkoutTips />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
