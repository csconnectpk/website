
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { getAssetPath } from "@/utils/assetUtils";

interface NavItem {
  title: string;
  href: string;
}

const navItems: NavItem[] = [
  { title: "Home", href: "#home" },
  { title: "Project", href: "#project" },
  { title: "Features", href: "#features" },
  { title: "Team", href: "#team" },
  { title: "Blog", href: "#blog" },
  { title: "Challenge", href: "#challenge" },
  { title: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "py-2 bg-cyber-black bg-opacity-80 backdrop-blur-md border-b border-cyber-purple border-opacity-20"
          : "py-4 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2">
          <img 
            src={getAssetPath("lovable-uploads/d93ee4a6-16d5-49fb-b399-b6f0368f57c2.png")}
            alt="CS Connect Pakistan Logo" 
            className="w-8 h-8"
          />
          <span className="font-cyber text-xl font-bold text-white">
            <span className="text-cyber-purple">CS</span> Connect Pakistan
          </span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="font-cyber text-sm text-gray-300 hover:text-cyber-purple hover:text-glow transition-all"
            >
              {item.title}
            </a>
          ))}
          <Button className="cyber-button">Register</Button>
        </nav>
        
        {/* Mobile Navigation Toggle */}
        <button
          onClick={toggleMenu}
          className="lg:hidden flex items-center text-white hover:text-cyber-purple"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-cyber-dark bg-opacity-95 backdrop-blur-md border-b border-cyber-purple border-opacity-20 transform transition-transform duration-300 ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto p-4 flex flex-col space-y-4">
          {navItems.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="font-cyber py-2 text-gray-300 hover:text-cyber-purple"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.title}
            </a>
          ))}
          <Button className="cyber-button self-start mt-4">Register</Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
