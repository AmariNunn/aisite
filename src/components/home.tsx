import React from "react";
import { motion } from "framer-motion";
import HeroSection from "./HeroSection";
import FeatureGrid from "./FeatureGrid";
import DashboardPreview from "./DashboardPreview";
import ProcessSteps from "./ProcessSteps";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleRequestDemo = () => {
    navigate("/request-demo");
  };

  const handleSeeInAction = () => {
    navigate("/demo-video");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />
      {/* Current Offerings Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Now Live: Inbound & Outbound AI Call Agents
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI Call Agents are live — built to handle human conversations
              at scale, close gaps in your funnel, and generate revenue around
              the clock. They replace missed calls, idle staff, and inconsistent
              follow-up — with precision automation that performs every time.
              This isn’t the full play — it’s just the first move. The
              infrastructure we’re building will replace entire departments.
              <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl"></h1>
            </p>
          </motion.div>
        </div>
      </section>
      {/* Feature Grid Section */}
      <section
        id="features"
        className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Systems That Sell, Answer, and Scale — Without You
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We install AI infrastructure that captures leads, closes sales,
            responds to reviews, and fills your calendar — 24/7.
          </p>
        </motion.div>
        <FeatureGrid />
      </section>
      {/* Dashboard Preview Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          ></motion.div>
          <DashboardPreview />
        </div>
      </section>
      {/* Coming Soon Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
              The First Layer of Intelligent Architecture
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              We’re building enterprise-ready systems daily — designed to
              streamline operations, scale performance, and position your
              business for what’s next.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 hover:scale-105 hover:shadow-lg text-lg px-8 py-4 h-auto transition-all duration-300"
              onClick={() => navigate("/request-demo")}
            >
              Start My AI Infrastructure
            </Button>
          </motion.div>
        </div>
      </section>
      {/* Process Steps Section */}
      <section
        id="how-it-works"
        className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Launch Your Growth Engine in 3 Steps
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            You answer 5 questions. We deploy a system that works while you
            sleep.
          </p>
        </motion.div>
        <ProcessSteps />
      </section>
      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Automate the Work. Accelerate the Growth.
            </h2>
            <p className="text-xl mb-10 max-w-3xl mx-auto">
              Smart businesses don't hustle harder — they install machines that
              never stop selling.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 hover:scale-105 hover:shadow-lg text-lg px-8 py-6 h-auto transition-all duration-300"
                onClick={handleRequestDemo}
              >
                🚀 Request a Demo
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-blue-600 border-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:scale-105 hover:shadow-md text-lg px-8 py-6 h-auto transition-all duration-300"
                onClick={handleSeeInAction}
              >
                🎥 See It In Action
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Footer */}
      <footer className="py-10 px-4 md:px-8 lg:px-16 bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">
                Build Right Systems
              </h3>
              <p className="mb-4">
                AI-powered systems for lead capture, conversion, and growth.
              </p>
              <p>
                © {new Date().getFullYear()} Build Right Systems. All rights
                reserved.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">
                Navigate
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/"
                    className="hover:text-white transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/");
                    }}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="hover:text-white transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      const featuresSection =
                        document.querySelector("#features");
                      featuresSection?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    AI Features
                  </a>
                </li>
                <li>
                  <a
                    href="#how-it-works"
                    className="hover:text-white transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      const howItWorksSection =
                        document.querySelector("#how-it-works");
                      howItWorksSection?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    How It Works
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="hover:text-white transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/request-demo");
                    }}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
              <ul className="space-y-2">
                <li>
                  Email:{" "}
                  <a
                    href="mailto:Amari@buildrightweb.org"
                    className="hover:text-white transition-colors"
                  >
                    Amari@buildrightweb.org
                  </a>
                </li>
                <li>
                  Phone:{" "}
                  <a
                    href="tel:+16155788171"
                    className="hover:text-white transition-colors"
                  >
                    (615)-578-8171
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
