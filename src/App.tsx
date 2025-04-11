import React, { useEffect, useState } from 'react';
import { Youtube, Instagram, MessageCircle, Disc as Discord, ChevronDown, Users, Rocket, Brain, Globe } from 'lucide-react';
import SocialBanner from './components/SocialBanner';

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10"></div>
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center"
          style={{ transform: `translateY(${scrollPosition * 0.5}px)` }}
        ></div>
        <div className="relative z-20 text-center px-4">
          <img 
            src="https://raw.githubusercontent.com/your-username/your-repo/main/logo.png" 
            alt="CS Connect Logo" 
            className="w-32 h-32 mx-auto mb-8"
          />
          <h1 className="text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#00ff9d] via-[#00ffff] to-[#7000ff]">
            CS Connect Pakistan
          </h1>
          <p className="text-xl mb-8 text-gray-300">Connecting Pakistani Tech Enthusiasts</p>
          <ChevronDown className="animate-bounce w-8 h-8 mx-auto text-[#00ffff]" />
        </div>
      </div>

      {/* Social Banner */}
      <SocialBanner />

      {/* About Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 via-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#00ff9d] to-[#00ffff]">
            Why Join Our Community?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, title: "Community", desc: "Join a thriving network of tech enthusiasts", color: "#00ff9d" },
              { icon: Brain, title: "Learning", desc: "Access quality CS education resources", color: "#00ffff" },
              { icon: Globe, title: "Network", desc: "Connect with industry professionals", color: "#7000ff" },
              { icon: Rocket, title: "Growth", desc: "Accelerate your tech career", color: "#ff00ff" }
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-lg bg-gradient-to-b from-gray-900 to-black border border-opacity-20 hover:border-opacity-100 transition-all duration-300" style={{ borderColor: item.color }}>
                <item.icon className="w-12 h-12 mb-4" style={{ color: item.color }} />
                <h3 className="text-xl font-semibold mb-2" style={{ color: item.color }}>{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[#00ff9d] via-[#00ffff] to-[#7000ff]">
            Join Our Community
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <a 
              href="https://discord.com/invite/wXd34sJQ8j" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-6 rounded-lg bg-black border border-[#7000ff]/20 hover:border-[#7000ff] hover:transform hover:scale-105 transition-all duration-300"
            >
              <Discord className="w-12 h-12 text-[#7000ff] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Discord</h3>
              <p className="text-gray-400">Join our active Discord community</p>
            </a>
            <a 
              href="https://chat.whatsapp.com/EMAtD6mP9YP4L1hlGUIdQ1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-6 rounded-lg bg-black border border-[#00ff9d]/20 hover:border-[#00ff9d] hover:transform hover:scale-105 transition-all duration-300"
            >
              <MessageCircle className="w-12 h-12 text-[#00ff9d] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
              <p className="text-gray-400">Connect via WhatsApp group</p>
            </a>
            <a 
              href="https://www.youtube.com/@csconnectpk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-6 rounded-lg bg-black border border-[#ff00ff]/20 hover:border-[#ff00ff] hover:transform hover:scale-105 transition-all duration-300"
            >
              <Youtube className="w-12 h-12 text-[#ff00ff] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">YouTube</h3>
              <p className="text-gray-400">Watch our educational content</p>
            </a>
            <a 
              href="https://www.instagram.com/csconnectpk/#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-6 rounded-lg bg-black border border-[#00ffff]/20 hover:border-[#00ffff] hover:transform hover:scale-105 transition-all duration-300"
            >
              <Instagram className="w-12 h-12 text-[#00ffff] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Instagram</h3>
              <p className="text-gray-400">Follow us on Instagram</p>
            </a>
          </div>
        </div>
      </section>

      {/* Discord CTA */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#00ff9d] via-[#00ffff] to-[#7000ff]">
            Ready to Level Up?
          </h2>
          <p className="text-xl text-gray-300 mb-8">Join our Discord server and become part of Pakistan's fastest-growing CS community!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://forms.gle/tgwZeBg6YTqRURjE8" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-[#00ff9d] to-[#00ffff] text-black font-bold text-lg hover:from-[#00ffff] hover:to-[#7000ff] hover:text-white transition-all duration-300"
            >
              Join CS Connect PK
            </a>
            <a 
              href="https://discord.com/invite/wXd34sJQ8j" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-[#7000ff] to-[#ff00ff] text-white font-bold text-lg hover:from-[#ff00ff] hover:to-[#7000ff] transition-colors duration-300"
            >
              <Discord className="w-6 h-6 mr-2" />
              Join Discord Server
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-black border-t border-[#00ff9d]/20">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>© 2024 CS Connect Pakistan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;