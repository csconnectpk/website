
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-cyber-black p-4">
      <div className="text-center max-w-md">
        <div className="inline-flex items-center justify-center w-24 h-24 mb-6 rounded-full bg-cyber-dark border border-cyber-purple">
          <AlertTriangle className="h-12 w-12 text-cyber-purple animate-pulse-glow" />
        </div>
        <h1 className="font-cyber text-6xl mb-4 font-bold">
          <span className="bg-gradient-to-r from-cyber-pink via-cyber-purple to-cyber-cyan bg-clip-text text-transparent">
            404
          </span>
        </h1>
        <p className="text-2xl text-white mb-6 font-cyber">SIGNAL LOST</p>
        <p className="text-gray-400 mb-8">
          The neural pathway you're looking for doesn't exist or has been
          disconnected from the main network.
        </p>
        <Button asChild className="cyber-button">
          <a href="/">Return to Main Interface</a>
        </Button>
        
        <div className="mt-8 py-4 px-6 bg-cyber-dark bg-opacity-50 rounded-lg border border-cyber-purple border-opacity-20">
          <p className="text-sm text-gray-500 font-mono">
            Error Code: NRHK-404<br />
            Path: {location.pathname}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
