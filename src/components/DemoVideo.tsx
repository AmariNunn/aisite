import React, { useState } from "react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";

const DemoVideo = () => {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(true);

  const handleClose = () => {
    navigate("/");
  };

  const handleRequestDemo = () => {
    navigate("/request-demo");
  };

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col">
      {/* Video player header */}
      <div className="bg-slate-800 p-4 flex justify-between items-center">
        <h2 className="text-white font-medium">Build Right Systems Demo</h2>
        <button
          onClick={handleClose}
          className="text-slate-300 hover:text-white"
          aria-label="Close video"
        >
          <X size={24} />
        </button>
      </div>

      {/* Video content */}
      <div className="flex-1 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden relative">
          {/* This would be a real video in production */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <div className="mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mx-auto"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="10 8 16 12 10 16 10 8" />
                </svg>
              </div>
              <p className="text-xl font-medium">Demo Video Placeholder</p>
              <p className="text-sm text-slate-400 mt-2">
                In a real implementation, this would be an embedded video player
                showcasing the Build Right Systems platform.
              </p>
            </div>
          </div>
        </div>

        {/* Video controls */}
        <div className="w-full max-w-4xl mt-6 flex flex-col md:flex-row gap-4 justify-center">
          <Button
            onClick={handleRequestDemo}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 h-auto text-lg"
          >
            🚀 Request a Demo
          </Button>
          <Button
            onClick={handleClose}
            variant="outline"
            className="border-slate-600 text-slate-200 hover:bg-slate-700 px-8 py-6 h-auto text-lg"
          >
            Return to Homepage
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DemoVideo;
