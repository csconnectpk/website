
import React from 'react';
import { HardDrive, Cpu, Network, Shield, Zap, Code } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="feature-card relative overflow-hidden rounded-lg p-6 border border-cyber-purple border-opacity-20 bg-cyber-dark bg-opacity-50 backdrop-blur-sm group hover:bg-opacity-70 transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-r from-cyber-purple to-cyber-cyan opacity-0 group-hover:opacity-10 transition-opacity"></div>
      <div className="relative z-10">
        <div className="flex items-start gap-4">
          <div className="p-2 rounded-md bg-gradient-to-br from-cyber-black to-cyber-dark border border-cyber-purple border-opacity-30">
            {icon}
          </div>
          <div>
            <h3 className="font-cyber text-lg mb-2 text-white group-hover:text-cyber-purple transition-colors">{title}</h3>
            <p className="text-gray-400 text-sm">{description}</p>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-cyber-purple to-cyber-cyan group-hover:w-full transition-all duration-700"></div>
    </div>
  );
};

const FeaturesSection = () => {
  const features: FeatureProps[] = [
    {
      icon: <Cpu className="text-cyber-purple h-6 w-6" />,
      title: "Neural Processing",
      description: "Process brainwave patterns in real-time with our advanced neural signal processor."
    },
    {
      icon: <Network className="text-cyber-cyan h-6 w-6" />,
      title: "Adaptive Network",
      description: "Self-improving network that adapts to individual thought patterns for increased accuracy."
    },
    {
      icon: <HardDrive className="text-cyber-pink h-6 w-6" />,
      title: "Secure Storage",
      description: "End-to-end encrypted storage for all neural data with zero-knowledge architecture."
    },
    {
      icon: <Code className="text-cyber-blue h-6 w-6" />,
      title: "Open API",
      description: "Build applications using our comprehensive SDK and developer-friendly documentation."
    },
    {
      icon: <Shield className="text-cyber-green h-6 w-6" />,
      title: "Privacy First",
      description: "User controls all data sharing with granular permissions and complete deletion rights."
    },
    {
      icon: <Zap className="text-cyber-purple h-6 w-6" />,
      title: "Low Latency",
      description: "Less than 10ms response time from thought to digital action with our optimized pipeline."
    }
  ];

  return (
    <section id="features" className="relative py-24 px-4 bg-cyber-black bg-opacity-70">
      <div className="absolute inset-0 bg-gradient-radial from-cyber-purple to-transparent opacity-5"></div>
      
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-cyber text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyber-cyan via-cyber-purple to-cyber-pink bg-clip-text text-transparent">
              CUTTING-EDGE FEATURES
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyber-cyan to-cyber-purple mx-auto"></div>
          <p className="text-gray-300 mt-6 max-w-3xl mx-auto">
            Our neural interface technology comes packed with innovative features
            that set a new standard for brain-computer interaction.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
