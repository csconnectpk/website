
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Network, Users, Sparkles } from "lucide-react";

const ProjectSection = () => {
  return (
    <section id="project" className="relative py-24 px-4">
      <div className="absolute inset-0 bg-cyber-circuits opacity-5"></div>
      
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-cyber text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyber-purple via-cyber-pink to-cyber-cyan bg-clip-text text-transparent">
              OUR MISSION
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyber-purple to-cyber-cyan mx-auto"></div>
          <p className="text-gray-300 mt-6 max-w-3xl mx-auto">
            CS Connect Pakistan bridges the gap between academic computer science education and industry needs,
            creating a platform where professionals can connect, collaborate, and innovate together.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Network className="h-12 w-12 text-cyber-purple" />,
              title: "Professional Networking",
              description: "Connect with CS professionals across Pakistan through local events, virtual meetups, and our interactive online platform."
            },
            {
              icon: <Sparkles className="h-12 w-12 text-cyber-cyan" />,
              title: "Skill Development",
              description: "Access workshops, training sessions, and resources designed to keep you updated with the latest technologies and practices."
            },
            {
              icon: <Users className="h-12 w-12 text-cyber-pink" />,
              title: "Community Building",
              description: "Join a growing community of CS enthusiasts committed to elevating Pakistan's technology landscape through collaboration."
            }
          ].map((item, index) => (
            <div key={index} className="group">
              <Card className="neon-border h-full bg-cyber-dark bg-opacity-50 border-cyber-purple border-opacity-20 backdrop-blur-sm transition-all duration-300 hover:translate-y-[-5px]">
                <CardContent className="pt-6 flex flex-col items-center text-center">
                  <div className="mb-5 p-3 rounded-full bg-gradient-to-br from-cyber-black to-cyber-dark border border-cyber-purple border-opacity-30 group-hover:shadow-neon-purple transition-all duration-300">
                    {item.icon}
                  </div>
                  <h3 className="font-cyber text-xl mb-3 text-white">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
