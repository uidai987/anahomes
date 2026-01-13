import Navbar from "@/components/construction/Navbar";
import Hero from "@/components/construction/Hero";
import FeatureCards from "@/components/construction/FeatureCards";
import About from "@/components/construction/About";
import Services from "@/components/construction/Services";
import Projects from "@/components/construction/Projects";
import CTABanner from "@/components/construction/CTABanner";
import Testimonials from "@/components/construction/Testimonials";
import Stats from "@/components/construction/Stats";
import WhyChooseUs from "@/components/construction/WhyChooseUs";
import ContactBanner from "@/components/construction/ContactBanner";
import Footer from "@/components/construction/Footer";

export default function Page() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FeatureCards />
      <About />
      <Services />
      <Projects />
      <CTABanner />
      <Testimonials />
      <Stats />
      <WhyChooseUs />
      <ContactBanner />
      <Footer />
    </div>
  );
}
