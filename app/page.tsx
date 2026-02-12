'use client';

import Hero from "@/components/sections/Hero";
import SelectedWorks from "@/components/sections/SelectedWorks";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials"; // Import Testimonials
import Contact from "@/components/sections/Contact";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <SelectedWorks />
      <About />
      <Services />
      <Testimonials /> {/* Add Testimonials component */}
      <Contact />
      <Footer />
    </main>
  );
}
