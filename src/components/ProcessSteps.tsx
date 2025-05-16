import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Code, Brain, TrendingUp } from "lucide-react";

interface ProcessStepProps {
  number: number;
  title: string;
  description: string[];
  icon: React.ReactNode;
}

const ProcessStep = ({
  number,
  title,
  description,
  icon,
}: ProcessStepProps) => {
  return (
    <Card className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center">
          <div className="rounded-full bg-blue-100 p-3 mb-4 text-blue-600">
            {icon}
          </div>
          <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white text-sm font-bold mb-3">
            {number}
          </div>
          <h3 className="text-xl font-bold mb-3">{title}</h3>
          <div className="space-y-2">
            {description.map((item, index) => (
              <p key={index} className="text-gray-600">
                {item}
              </p>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const ProcessSteps = () => {
  const steps = [
    {
      number: 1,
      title: "We learn your business",
      description: ["Simple intake form", "Discovery call"],
      icon: <Brain size={24} />,
    },
    {
      number: 2,
      title: "We install your AI system",
      description: ["No dev work needed", "We handle it all"],
      icon: <Code size={24} />,
    },
    {
      number: 3,
      title: "You grow on autopilot",
      description: ["Leads. Reviews. Revenue.", "All running while you sleep"],
      icon: <TrendingUp size={24} />,
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-gray-600">
            Three simple steps to transform your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <ProcessStep
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              icon={step.icon}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center justify-center bg-blue-100 px-4 py-2 rounded-full">
            <CheckCircle size={20} className="text-blue-600 mr-2" />
            <span className="text-blue-800 font-medium">
              No technical expertise required
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
