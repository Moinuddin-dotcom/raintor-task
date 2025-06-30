"use client";
import HeroSection from "./components/HeroSection";
import Navbar from "./SharedRoutes/Navbar";
import Footer from "./SharedRoutes/Footer";
import AboutSection from "./components/AboutSection";
import WhyChooseSec from "./components/WhyChooseSec";
import WorkProcess from "./components/WorkProcess";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <WhyChooseSec />
      <AboutSection />
      <WorkProcess />
      <ContactSection />
      <Footer />
    </div>
  );
}
