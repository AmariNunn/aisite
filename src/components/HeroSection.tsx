import React from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { PlayCircle, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface HeroSectionProps {
  headline?: string;
  subheadline?: string;
  trustIndicators?: string[];
}

const HeroSection = ({
  headline = "Automate Growth. Eliminate Overhead. Outperform the Competition.",
  subheadline = "We install AI-powered infrastructure that answers calls, captures leads, closes deals, and builds your business 24/7.",
  trustIndicators = [
    "Med Spas",
    "Realtors",
    "Contractors",
    "Insurance",
    "Agencies",
  ],
}: HeroSectionProps) => {
  const navigate = useNavigate();

  const handleRequestDemo = () => {
    navigate("/request-demo");
  };

  const handleSeeInAction = () => {
    navigate("/admin/calls");
  };

  return (
    <section className="w-full min-h-[700px] bg-gradient-to-b from-blue-50 to-white flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -right-20 w-64 h-64 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-10 -left-20 w-80 h-80 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
      </div>
      <div className="container mx-auto max-w-6xl z-10">
        <div className="text-center mb-12">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {headline}
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {subheadline}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-6 h-auto text-lg font-semibold shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-indigo-700"
              onClick={handleRequestDemo}
            >
              🚀 Request a Demo <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-blue-300 text-blue-700 bg-white hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 px-8 py-6 h-auto text-lg font-semibold shadow-md hover:shadow-lg hover:border-blue-400"
              onClick={handleSeeInAction}
            >
              <PlayCircle className="mr-2 h-5 w-5" /> See It In Action
            </Button>
          </motion.div>
        </div>
        {/* Trust indicators */}
      </div>
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="text-sm text-gray-500 mb-3">
          Powering growth in high-leverage industries:
        </div>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {trustIndicators.map((indicator, index) => (
            <div key={index} className="text-gray-600 font-medium">
              {index > 0 && (
                <span className="hidden md:inline mx-2 text-gray-300">•</span>
              )}
              {indicator}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
