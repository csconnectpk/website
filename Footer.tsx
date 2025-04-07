
import React from 'react';
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-cyber-dark py-16 px-4 border-t border-cyber-purple border-opacity-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/lovable-uploads/d93ee4a6-16d5-49fb-b399-b6f0368f57c2.png" 
                alt="CS Connect Pakistan Logo" 
                className="w-8 h-8"
              />
              <span className="font-cyber text-xl font-bold text-white">
                <span className="text-cyber-purple">CS</span> Connect Pakistan
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Connecting computer science professionals across Pakistan, bridging talent and opportunities.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-full bg-cyber-black hover:bg-cyber-purple hover:bg-opacity-20 transition-colors">
                <Twitter className="w-5 h-5 text-gray-400 hover:text-cyber-cyan" />
              </a>
              <a href="#" className="p-2 rounded-full bg-cyber-black hover:bg-cyber-purple hover:bg-opacity-20 transition-colors">
                <Github className="w-5 h-5 text-gray-400 hover:text-cyber-purple" />
              </a>
              <a href="#" className="p-2 rounded-full bg-cyber-black hover:bg-cyber-purple hover:bg-opacity-20 transition-colors">
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-cyber-blue" />
              </a>
              <a href="#" className="p-2 rounded-full bg-cyber-black hover:bg-cyber-purple hover:bg-opacity-20 transition-colors">
                <Instagram className="w-5 h-5 text-gray-400 hover:text-cyber-pink" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-cyber text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-cyber-purple transition-colors">Home</a></li>
              <li><a href="#project" className="text-gray-400 hover:text-cyber-purple transition-colors">Project</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-cyber-purple transition-colors">Features</a></li>
              <li><a href="#team" className="text-gray-400 hover:text-cyber-purple transition-colors">Team</a></li>
              <li><a href="#blog" className="text-gray-400 hover:text-cyber-purple transition-colors">Blog</a></li>
              <li><a href="#challenge" className="text-gray-400 hover:text-cyber-purple transition-colors">Challenge</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-cyber text-white mb-6">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-cyber-purple transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyber-purple transition-colors">API Reference</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyber-purple transition-colors">Developer Guide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyber-purple transition-colors">Research Papers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyber-purple transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyber-purple transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-cyber-purple border-opacity-20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">&copy; 2025 CS Connect Pakistan. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-500 text-sm hover:text-cyber-purple">Privacy</a>
            <a href="#" className="text-gray-500 text-sm hover:text-cyber-purple">Terms</a>
            <a href="#" className="text-gray-500 text-sm hover:text-cyber-purple">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

