"use client";
import HeroSection from "./components/HeroSection";
import Navbar from "./SharedRoutes/Navbar";
import Footer from "./SharedRoutes/Footer";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <HeroSection />

      <Footer />
    </div>
  );
}
