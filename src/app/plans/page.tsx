import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import MembershipPlans from "@/components/MembershipPlans";
import FAQ from "@/components/FAQ";
import ScrollAnimation from "@/components/ScrollAnimation";

export default function PlansPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHero
        title="Membership Plans"
        subtitle="Choose the plan that fits your fitness goals. All plans include access to our world-class facility at GOLD STANDARD GYM."
        breadcrumbs={[{ label: "Plans", href: "/plans" }]}
      />

      <MembershipPlans />

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">FAQ</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">
                Frequently Asked <span className="text-teal-600">Questions</span>
              </h2>
            </div>
          </ScrollAnimation>
          <FAQ />
        </div>
      </section>
    </div>
  );
}
