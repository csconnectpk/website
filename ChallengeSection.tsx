
import React, { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles, Clock, Code, Gauge } from 'lucide-react';

const ChallengeSection = () => {
  const [currentChallenge, setCurrentChallenge] = useState(0);
  const challenges = [
    {
      title: "Neural Pattern Recognition",
      description: "Build an algorithm that can identify specific thought patterns from raw EEG data with at least 85% accuracy.",
      difficulty: "Advanced",
      timeEstimate: "48 hours",
      points: 500
    },
    {
      title: "Brain-Controlled UI",
      description: "Create a user interface that can be navigated using only neural commands through our API.",
      difficulty: "Intermediate",
      timeEstimate: "36 hours",
      points: 350
    },
    {
      title: "Emotion Detection",
      description: "Develop a system that accurately classifies emotional states based on neural activity patterns.",
      difficulty: "Expert",
      timeEstimate: "72 hours",
      points: 800
    }
  ];

  const challenge = challenges[currentChallenge];
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (progressBarRef.current) {
      progressBarRef.current.style.width = "0%";
      setTimeout(() => {
        if (progressBarRef.current) {
          progressBarRef.current.style.transition = "width 5s linear";
          progressBarRef.current.style.width = "100%";
        }
      }, 100);
    }

    const interval = setInterval(() => {
      setCurrentChallenge((prev) => (prev + 1) % challenges.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentChallenge, challenges.length]);

  return (
    <section id="challenge" className="relative py-24 px-4">
      <div className="absolute inset-0 bg-cyber-circuits opacity-10"></div>
      
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-cyber text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyber-green via-cyber-cyan to-cyber-blue bg-clip-text text-transparent">
              DAILY CHALLENGE
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyber-green to-cyber-cyan mx-auto"></div>
          <p className="text-gray-300 mt-6 max-w-3xl mx-auto">
            Test your skills with our daily programming challenges.
            Complete them to earn points and climb our leaderboard.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="neon-border bg-cyber-dark bg-opacity-80 border-cyber-purple border-opacity-20 overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-cyber text-2xl text-white">{challenge.title}</h3>
                <Sparkles className="h-6 w-6 text-cyber-purple" />
              </div>
              
              <p className="text-gray-300 mb-8">
                {challenge.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="flex items-center gap-3 bg-cyber-black bg-opacity-50 p-3 rounded-lg">
                  <Gauge className="h-5 w-5 text-cyber-cyan" />
                  <div>
                    <p className="text-xs text-gray-400">Difficulty</p>
                    <p className="text-sm text-white font-mono">{challenge.difficulty}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 bg-cyber-black bg-opacity-50 p-3 rounded-lg">
                  <Clock className="h-5 w-5 text-cyber-pink" />
                  <div>
                    <p className="text-xs text-gray-400">Estimated Time</p>
                    <p className="text-sm text-white font-mono">{challenge.timeEstimate}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 bg-cyber-black bg-opacity-50 p-3 rounded-lg">
                  <Code className="h-5 w-5 text-cyber-green" />
                  <div>
                    <p className="text-xs text-gray-400">Points</p>
                    <p className="text-sm text-white font-mono">{challenge.points}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Button className="cyber-button flex-1">Accept Challenge</Button>
                <Button variant="outline" className="border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan hover:bg-opacity-10 flex-1">
                  View Details
                </Button>
              </div>
            </div>
            
            <div className="h-1 bg-cyber-black">
              <div 
                ref={progressBarRef} 
                className="h-full bg-gradient-to-r from-cyber-purple to-cyber-cyan"
              ></div>
            </div>
          </Card>
          
          <div className="flex justify-center mt-6">
            {challenges.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 mx-1 rounded-full ${
                  currentChallenge === index 
                    ? "bg-cyber-purple" 
                    : "bg-gray-600"
                }`}
                onClick={() => setCurrentChallenge(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengeSection;
