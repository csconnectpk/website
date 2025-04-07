
import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  socials: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, image, socials }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg">
      <div className="aspect-square overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-cyber-black via-transparent to-transparent opacity-50 group-hover:opacity-70 transition-opacity z-10"></div>
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-4 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform">
        <h3 className="font-cyber text-lg text-white mb-1">{name}</h3>
        <p className="text-cyber-purple text-sm mb-3">{role}</p>
        
        <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
          {socials.github && (
            <a href={socials.github} className="text-gray-400 hover:text-cyber-purple transition-colors">
              <Github className="h-5 w-5" />
            </a>
          )}
          {socials.linkedin && (
            <a href={socials.linkedin} className="text-gray-400 hover:text-cyber-cyan transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
          )}
          {socials.twitter && (
            <a href={socials.twitter} className="text-gray-400 hover:text-cyber-pink transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
      
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyber-purple transition-colors z-0 rounded-lg"></div>
    </div>
  );
};

const TeamSection = () => {
  const teamMembers: TeamMemberProps[] = [
    {
      name: "Alex Chen",
      role: "Lead Neural Engineer",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      socials: {
        github: "#",
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Maya Rodriguez",
      role: "AI Research Scientist",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      socials: {
        github: "#",
        linkedin: "#"
      }
    },
    {
      name: "Jordan Taylor",
      role: "Full-Stack Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      socials: {
        github: "#",
        twitter: "#"
      }
    },
    {
      name: "Zoe Liu",
      role: "UX/UI Designer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      socials: {
        linkedin: "#",
        twitter: "#"
      }
    }
  ];

  return (
    <section id="team" className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-cyber text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyber-pink via-cyber-purple to-cyber-cyan bg-clip-text text-transparent">
              OUR TEAM
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyber-pink to-cyber-purple mx-auto"></div>
          <p className="text-gray-300 mt-6 max-w-3xl mx-auto">
            Meet the brilliant minds behind NeuroHack, pushing the boundaries of what's possible
            at the intersection of neuroscience and technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
