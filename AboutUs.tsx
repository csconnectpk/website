
import React from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from '@/components/ui/button';
import { Braces, ChevronRight, CpuIcon, DatabaseIcon, Network, Shield } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-24 px-4 bg-cyber-black overflow-hidden">
          <div className="absolute inset-0 bg-cyber-circuits opacity-10"></div>
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-cyber text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyber-purple via-cyber-pink to-cyber-cyan bg-clip-text text-transparent">
                  ABOUT NEUROHACK
                </span>
              </h1>
              <p className="text-xl text-gray-300">
                We're a team of neuroscientists, AI researchers, and developers
                passionate about creating the next generation of brain-computer interfaces.
              </p>
            </div>
          </div>
        </section>
        
        {/* Mission Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-cyber text-3xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-cyber-cyan to-cyber-blue bg-clip-text text-transparent">
                    OUR MISSION
                  </span>
                </h2>
                <p className="text-gray-300 mb-4">
                  NeuroHack was founded in 2023 with a clear mission: to democratize neural interface technology
                  and make it accessible to developers worldwide.
                </p>
                <p className="text-gray-300 mb-6">
                  We believe that the future of human-computer interaction lies in direct neural connections,
                  allowing for seamless, intuitive control of digital systems through thought alone.
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-1 w-12 bg-cyber-purple"></div>
                  <p className="text-xl font-cyber text-cyber-purple">Changing the future, one neuron at a time</p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyber-purple to-cyber-cyan opacity-20 blur-xl rounded-xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1633493702341-4d04841df53b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
                  alt="Brain interface visualization" 
                  className="relative z-10 rounded-xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Values Section */}
        <section className="py-16 px-4 bg-cyber-dark">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-cyber text-3xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyber-purple to-cyber-pink bg-clip-text text-transparent">
                  OUR VALUES
                </span>
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                At NeuroHack, we're guided by a set of core values that inform everything we do,
                from research and development to community engagement.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: <CpuIcon className="h-8 w-8 text-cyber-purple" />,
                  title: "Innovation",
                  description: "We push the boundaries of what's possible, constantly exploring new approaches to neural interfaces."
                },
                {
                  icon: <Shield className="h-8 w-8 text-cyber-cyan" />,
                  title: "Privacy & Security",
                  description: "We take the responsibility of handling neural data seriously, implementing the highest security standards."
                },
                {
                  icon: <Network className="h-8 w-8 text-cyber-pink" />,
                  title: "Accessibility",
                  description: "We believe neural technology should be available to all developers, regardless of background or resources."
                }
              ].map((value, index) => (
                <div key={index} className="p-6 bg-cyber-black rounded-lg border border-cyber-purple border-opacity-20">
                  <div className="mb-4">
                    {value.icon}
                  </div>
                  <h3 className="font-cyber text-xl mb-3 text-white">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Timeline Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-cyber text-3xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyber-blue to-cyber-cyan bg-clip-text text-transparent">
                  OUR JOURNEY
                </span>
              </h2>
            </div>
            
            <div className="max-w-4xl mx-auto">
              {[
                {
                  year: "2022",
                  title: "Research Begins",
                  description: "Initial research into neural pattern recognition algorithms at Stanford University."
                },
                {
                  year: "2023",
                  title: "NeuroHack Founded",
                  description: "Team comes together to form NeuroHack, securing initial seed funding."
                },
                {
                  year: "2024",
                  title: "Alpha Release",
                  description: "First version of our neural interface API released to select developers."
                },
                {
                  year: "2025",
                  title: "Public Beta",
                  description: "Public beta program launched, with over 1,000 developers participating."
                }
              ].map((event, index) => (
                <div key={index} className="relative pl-16 pb-12">
                  <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-cyber-purple to-cyber-cyan"></div>
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-cyber-purple border-2 border-cyber-black"></div>
                  
                  <div className="font-mono text-sm text-cyber-purple mb-2">{event.year}</div>
                  <h3 className="font-cyber text-xl text-white mb-2">{event.title}</h3>
                  <p className="text-gray-400">{event.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <div className="bg-gradient-to-r from-cyber-dark to-cyber-black p-8 rounded-xl border border-cyber-purple border-opacity-20">
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div>
                  <h3 className="font-cyber text-2xl mb-4 text-white">Join the Neural Revolution</h3>
                  <p className="text-gray-300 mb-4">
                    Be part of the future of human-computer interaction by joining our developer community today.
                  </p>
                </div>
                <div className="flex justify-end">
                  <Button className="cyber-button">
                    Get Started <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
