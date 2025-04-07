
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-24 px-4">
      <div className="absolute inset-0 bg-gradient-radial from-cyber-purple to-transparent opacity-5"></div>
      
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-cyber text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyber-pink via-cyber-purple to-cyber-cyan bg-clip-text text-transparent">
              GET IN TOUCH
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyber-pink to-cyber-purple mx-auto"></div>
          <p className="text-gray-300 mt-6 max-w-3xl mx-auto">
            Have questions about our technology or hackathon? Reach out to us and our team will get back to you shortly.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="bg-cyber-dark bg-opacity-50 backdrop-blur-sm p-8 rounded-lg border border-cyber-purple border-opacity-20">
            <h3 className="font-cyber text-2xl mb-6 text-white">Send us a message</h3>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm text-gray-300" htmlFor="name">Name</label>
                  <Input 
                    id="name" 
                    placeholder="Your name" 
                    className="bg-cyber-black border-cyber-purple border-opacity-30 focus:border-cyber-purple"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-300" htmlFor="email">Email</label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your.email@example.com" 
                    className="bg-cyber-black border-cyber-purple border-opacity-30 focus:border-cyber-purple"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-gray-300" htmlFor="subject">Subject</label>
                <Input 
                  id="subject" 
                  placeholder="How can we help?" 
                  className="bg-cyber-black border-cyber-purple border-opacity-30 focus:border-cyber-purple"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-gray-300" htmlFor="message">Message</label>
                <Textarea 
                  id="message" 
                  placeholder="Your message..." 
                  rows={5}
                  className="bg-cyber-black border-cyber-purple border-opacity-30 focus:border-cyber-purple resize-none"
                />
              </div>
              
              <Button className="cyber-button w-full">
                <Send className="mr-2 h-4 w-4" /> Send Message
              </Button>
            </form>
          </div>
          
          <div className="flex flex-col justify-between">
            <div className="mb-8">
              <h3 className="font-cyber text-2xl mb-6 text-white">Contact information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-md bg-cyber-dark border border-cyber-purple border-opacity-30">
                    <MapPin className="h-5 w-5 text-cyber-purple" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Address</p>
                    <p className="text-white">123 Innovation Drive, Tech District, San Francisco, CA 94107</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-md bg-cyber-dark border border-cyber-purple border-opacity-30">
                    <Mail className="h-5 w-5 text-cyber-cyan" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Email</p>
                    <a href="mailto:info@neurohack.io" className="text-white hover:text-cyber-cyan">info@neurohack.io</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-md bg-cyber-dark border border-cyber-purple border-opacity-30">
                    <Phone className="h-5 w-5 text-cyber-pink" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Phone</p>
                    <a href="tel:+14155550123" className="text-white hover:text-cyber-pink">+1 (415) 555-0123</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden border border-cyber-purple border-opacity-20">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0808001856743!2d-122.39633538443874!3d37.78328967975668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858085824b4287%3A0xcecfc35fb25c159f!2sYerba%20Buena%20Gardens!5e0!3m2!1sen!2sus!4v1649515743571!5m2!1sen!2sus" 
                width="100%" 
                height="250" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
