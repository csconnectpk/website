import React from 'react';
import { Brain, ChevronRight } from 'lucide-react';

const SocialBanner = () => {
  return (
    <div className="relative w-full aspect-[16/9] overflow-hidden bg-black">
      {/* Background with blur and overlay */}
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center"
        style={{ filter: 'blur(8px) brightness(0.4)' }}
      />
      
      {/* Content Container */}
      <div className="relative h-full flex flex-col items-center justify-center p-8 text-center">
        {/* Logo */}
        <div className="mb-6">
          <Brain className="w-20 h-20 text-[#00ffff]" />
        </div>

        {/* Main Content */}
        <div className="max-w-4xl">
          {/* Primary Heading */}
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#00ff9d] via-[#00ffff] to-[#7000ff]">
            Welcome to CS Connect Pakistan
          </h1>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-6">
            Connecting IT & CS Students Across Pakistan
          </p>

          {/* Main Message */}
          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 mb-8 border border-[#00ffff]/20">
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              Join a thriving community of 50+ universities including FAST, LUMS, GIKI, NUST, PUCIT, COMSATS, and many more. Connect, collaborate, and grow with fellow tech enthusiasts nationwide.
            </p>
          </div>

          {/* CTA Button */}
          <a 
            href="https://forms.gle/tgwZeBg6YTqRURjE8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-[#00ff9d] to-[#00ffff] text-black font-bold text-lg hover:from-[#00ffff] hover:to-[#7000ff] hover:text-white transition-all duration-300"
          >
            Complete our membership form to officially join CS Connect PK
            <ChevronRight className="w-5 h-5 ml-2" />
          </a>
        </div>

        {/* Tech-inspired decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-[#00ffff]/20 rounded-tl-3xl" />
          <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-[#7000ff]/20 rounded-br-3xl" />
        </div>
      </div>
    </div>
  );
};

export default SocialBanner;