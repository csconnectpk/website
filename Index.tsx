
import React, { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ProjectSection from "@/components/sections/ProjectSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import TeamSection from "@/components/sections/TeamSection";
import BlogSection from "@/components/sections/BlogSection";
import ChallengeSection from "@/components/sections/ChallengeSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  useEffect(() => {
    // Smooth scroll functionality
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId && targetId !== '#') {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80,
              behavior: 'smooth'
            });
          }
        }
      });
    });

    // Add parallax effect
    const handleParallax = () => {
      const scrolled = window.scrollY;
      const parallaxElements = document.querySelectorAll('.parallax-section');
      
      parallaxElements.forEach((element, index) => {
        const speed = 0.1 + (index * 0.05);
        const yPos = -scrolled * speed;
        // Fix: Use setAttribute for setting style property
        element.setAttribute('style', `transform: translateY(${yPos}px)`);
      });
    };

    window.addEventListener('scroll', handleParallax);

    return () => {
      window.removeEventListener('scroll', handleParallax);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <HeroSection />
        <ProjectSection />
        <FeaturesSection />
        <TeamSection />
        <BlogSection />
        <ChallengeSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
