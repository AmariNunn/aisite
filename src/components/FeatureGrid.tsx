import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  MessageSquare,
  Star,
  MessageCircle,
  Mail,
  Filter,
  FileSpreadsheet,
} from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  isNew?: boolean;
}

const FeatureCard = ({
  title,
  description,
  icon,
  isNew = false,
}: FeatureCardProps) => {
  return (
    <Card className="h-full bg-white border border-gray-200 hover:shadow-md transition-shadow duration-300">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="p-2 bg-blue-100 rounded-md">{icon}</div>
          {isNew && <Badge className="bg-blue-600">New</Badge>}
        </div>
        <CardTitle className="text-xl font-bold mt-4">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

const FeatureGrid = () => {
  const features = [
    {
      title: "Phone Closer™",
      description:
        "Answers every call, books appointments, qualifies leads — instantly",
      icon: <Phone className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Text Rep™",
      description: "Follows up via SMS, sends booking links, keeps deals alive",
      icon: <MessageSquare className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Review Commander™",
      description: "Auto-responds to reviews with human-like tone and strategy",
      icon: <Star className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "AI Chat Concierge™",
      description: "Answers questions on your site and collects lead data",
      icon: <MessageCircle className="h-6 w-6 text-blue-600" />,
      isNew: true,
    },
    {
      title: "Email Assistant™",
      description:
        "Replies to incoming emails and routes them to the right person",
      icon: <Mail className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Lead Scoring Engine™",
      description: "Filters leads so you only talk to the ones ready to buy",
      icon: <Filter className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Back Office Bot™",
      description: "Handles onboarding, reminders, review requests, and more",
      icon: <FileSpreadsheet className="h-6 w-6 text-blue-600" />,
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Build</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            You're not buying features. You're buying freedom.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              isNew={feature.isNew}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
