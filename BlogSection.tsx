
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from 'lucide-react';

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  link: string;
}

const BlogCard: React.FC<BlogPost> = ({ title, excerpt, date, category, image, link }) => {
  return (
    <div className="group relative rounded-lg overflow-hidden bg-cyber-dark border border-cyber-purple border-opacity-20">
      <div className="aspect-video overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-cyber-black via-transparent to-transparent opacity-50 z-10"></div>
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs font-mono text-gray-400">{date}</span>
          <span className="text-xs font-cyber px-2 py-1 bg-cyber-purple bg-opacity-20 rounded text-cyber-purple">
            {category}
          </span>
        </div>
        
        <h3 className="font-cyber text-xl mb-3 group-hover:text-cyber-purple transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-400 text-sm mb-4 line-clamp-3">
          {excerpt}
        </p>
        
        <a 
          href={link} 
          className="inline-flex items-center text-cyber-cyan hover:text-cyber-purple transition-colors font-cyber text-sm"
        >
          Read More <ArrowUpRight className="ml-1 h-3 w-3" />
        </a>
      </div>
    </div>
  );
};

const BlogSection = () => {
  const blogPosts: BlogPost[] = [
    {
      title: "The Future of Brain-Computer Interfaces",
      excerpt: "Exploring how neural interfaces are changing the way we interact with digital systems and what this means for the future of human-computer symbiosis.",
      date: "2025-03-24",
      category: "Research",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      link: "#"
    },
    {
      title: "Building Your First Neural Application",
      excerpt: "A step-by-step guide to creating applications that leverage our neural interface API, designed for developers with no previous experience in neuroscience.",
      date: "2025-03-18",
      category: "Tutorial",
      image: "https://images.unsplash.com/photo-1581092335397-9fa341108de8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      link: "#"
    },
    {
      title: "Ethics in Neural Technology",
      excerpt: "Discussing the important ethical considerations that come with direct brain-computer interfaces and how we're addressing these concerns in our platform.",
      date: "2025-03-10",
      category: "Ethics",
      image: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      link: "#"
    }
  ];

  return (
    <section id="blog" className="py-24 px-4 bg-cyber-black bg-opacity-70">
      <div className="absolute inset-0 bg-cyber-grid opacity-5"></div>
      
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-cyber text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyber-cyan via-cyber-purple to-cyber-pink bg-clip-text text-transparent">
              LATEST INSIGHTS
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyber-cyan to-cyber-purple mx-auto"></div>
          <p className="text-gray-300 mt-6 max-w-3xl mx-auto">
            Stay updated with the latest developments in neural interface technology
            and discover how our platform is evolving.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="cyber-button">View All Posts</Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
