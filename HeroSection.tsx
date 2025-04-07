
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDownCircle } from "lucide-react";

const HeroSection = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Animate elements on load
    const heading = headingRef.current;
    const tagline = taglineRef.current;
    const logo = logoRef.current;
    
    if (heading) {
      heading.style.opacity = "0";
      heading.style.transform = "translateY(20px)";
      setTimeout(() => {
        heading.style.transition = "opacity 0.8s ease, transform 0.8s ease";
        heading.style.opacity = "1";
        heading.style.transform = "translateY(0)";
      }, 300);
    }
    
    if (tagline) {
      tagline.style.opacity = "0";
      tagline.style.transform = "translateY(20px)";
      setTimeout(() => {
        tagline.style.transition = "opacity 0.8s ease, transform 0.8s ease";
        tagline.style.opacity = "1";
        tagline.style.transform = "translateY(0)";
      }, 600);
    }

    if (logo) {
      logo.style.opacity = "0";
      setTimeout(() => {
        logo.style.transition = "opacity 1.2s ease";
        logo.style.opacity = "1";
      }, 900);
    }
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center pt-20 pb-16 px-4 overflow-hidden">
      {/* Background circuit lines */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-purple to-transparent"></div>
        <div className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-cyan to-transparent"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-pink to-transparent"></div>
        
        <div className="absolute left-1/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-cyber-purple to-transparent"></div>
        <div className="absolute left-2/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-cyber-cyan to-transparent"></div>
        <div className="absolute left-3/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-cyber-pink to-transparent"></div>
      </div>
      
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center z-10">
        <div>
          <h1 
            ref={headingRef} 
            className="font-cyber text-5xl sm:text-6xl md:text-7xl font-bold mb-4"
          >
            <span className="text-cyber-purple text-glow">CS</span>
            <span className="text-white"> Connect Pakistan</span>
          </h1>
          
          <p 
            ref={taglineRef}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-lg"
          >
            Empowering <span className="text-cyber-cyan">computer science professionals</span> through <span className="text-cyber-pink">collaboration and innovation</span>
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button className="cyber-button">Join the Network</Button>
            <Button variant="outline" className="border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan hover:bg-opacity-10">
              Explore Events
            </Button>
          </div>
        </div>
        
        <div ref={logoRef} className="hidden md:flex justify-center animate-float">
          <div className="relative w-64 h-64">
            <div className="absolute inset-0 bg-gradient-to-r from-cyber-purple to-cyber-cyan rounded-full opacity-20 blur-xl"></div>
            <img 
              src="/lovable-uploads/d93ee4a6-16d5-49fb-b399-b6f0368f57c2.png" 
              alt="CS Connect Pakistan Logo" 
              className="relative z-10 w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
      
      <a 
        href="#project" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-cyber-purple hover:text-cyber-cyan transition-colors"
      >
        <ArrowDownCircle className="w-10 h-10 animate-bounce" />
      </a>
    </section>
  );
};

export default HeroSection;

