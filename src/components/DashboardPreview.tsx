import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  MessageSquare,
  FileText,
  Star,
  BarChart3,
  Settings,
} from "lucide-react";

interface DashboardPreviewProps {
  title?: string;
  subtitle?: string;
}

const DashboardPreview = ({
  title = "Your AI Command Center",
  subtitle = "See everything in one place — live leads, conversations, bookings, reviews, and real-time performance insights.",
}: DashboardPreviewProps) => {
  return (
    <section className="w-full py-16 px-4 md:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-xl bg-white">
          {/* Dashboard Header */}
          <div className="bg-slate-800 text-white p-4 flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="h-8 w-8 rounded-md bg-blue-500 flex items-center justify-center">
                <Settings size={18} />
              </div>
              <h3 className="font-medium">Build Right Systems Dashboard</h3>
            </div>
            <div className="flex items-center space-x-2">
              <Badge
                variant="secondary"
                className="bg-blue-600 hover:bg-blue-700"
              >
                AI Active
              </Badge>
              <div className="h-8 w-8 rounded-full bg-slate-700 flex items-center justify-center">
                <span className="text-sm">JD</span>
              </div>
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="p-4">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="mb-6">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="calls">Calls</TabsTrigger>
                <TabsTrigger value="messages">Messages</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <Card>
                    <CardContent className="p-4 flex items-center space-x-4">
                      <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                        <Phone size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500">Today's Calls</p>
                        <p className="text-2xl font-bold">24</p>
                        <p className="text-xs text-green-600">
                          +12% from yesterday
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 flex items-center space-x-4">
                      <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                        <MessageSquare size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500">New Leads</p>
                        <p className="text-2xl font-bold">18</p>
                        <p className="text-xs text-green-600">
                          +8% from yesterday
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 flex items-center space-x-4">
                      <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                        <Star size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500">New Reviews</p>
                        <p className="text-2xl font-bold">7</p>
                        <p className="text-xs text-green-600">
                          +3 from yesterday
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Live Leads Panel */}
                  <Card className="md:col-span-2">
                    <CardContent className="p-0">
                      <div className="p-4 border-b border-slate-200">
                        <h3 className="font-medium flex items-center">
                          <span className="mr-2">Live Leads</span>
                          <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                        </h3>
                      </div>
                      <div className="p-4">
                        <div className="space-y-4">
                          {[1, 2, 3].map((item) => (
                            <div
                              key={item}
                              className="flex justify-between items-center p-3 bg-slate-50 rounded-md"
                            >
                              <div>
                                <p className="font-medium">John Smith</p>
                                <p className="text-sm text-slate-500">
                                  Interested in: Business Automation
                                </p>
                              </div>
                              <Badge>New Lead</Badge>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Call Transcripts */}
                  <Card>
                    <CardContent className="p-0">
                      <div className="p-4 border-b border-slate-200">
                        <h3 className="font-medium flex items-center">
                          <span className="mr-2">Recent Transcripts</span>
                          <Badge variant="outline" className="ml-2 text-xs">
                            AI Generated
                          </Badge>
                        </h3>
                      </div>
                      <div className="p-4">
                        <div className="space-y-3">
                          {[1, 2, 3].map((item) => (
                            <div
                              key={item}
                              className="flex items-center space-x-3"
                            >
                              <FileText size={16} className="text-slate-400" />
                              <div>
                                <p className="text-sm">
                                  Call #{item} - 12m ago
                                </p>
                                <p className="text-xs text-slate-500">
                                  Duration: 4:32
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* AI Script Editor Preview */}
                <Card>
                  <CardContent className="p-0">
                    <div className="p-4 border-b border-slate-200 flex justify-between items-center">
                      <h3 className="font-medium">AI Script Editor</h3>
                      <Badge
                        variant="outline"
                        className="bg-amber-100 text-amber-800 hover:bg-amber-200 border-amber-200"
                      >
                        Coming Soon
                      </Badge>
                    </div>
                    <div className="p-4 bg-slate-50 h-32 flex items-center justify-center">
                      <p className="text-slate-500 text-center">
                        Customize how your AI responds to common questions and
                        scenarios
                        <br />
                        <span className="text-sm">
                          Preview available in your demo
                        </span>
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Performance Metrics */}
                <Card>
                  <CardContent className="p-0">
                    <div className="p-4 border-b border-slate-200">
                      <h3 className="font-medium flex items-center">
                        <BarChart3 size={18} className="mr-2" />
                        <span>Performance Metrics</span>
                      </h3>
                    </div>
                    <div className="p-4">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                          {
                            label: "Call Conversion",
                            value: "32%",
                            trend: "+5%",
                          },
                          {
                            label: "Response Time",
                            value: "45s",
                            trend: "-12s",
                          },
                          {
                            label: "Lead Quality",
                            value: "8.4/10",
                            trend: "+0.6",
                          },
                          {
                            label: "Customer Satisfaction",
                            value: "94%",
                            trend: "+2%",
                          },
                        ].map((metric, idx) => (
                          <div key={idx} className="text-center p-2">
                            <p className="text-sm text-slate-500">
                              {metric.label}
                            </p>
                            <p className="text-xl font-bold">{metric.value}</p>
                            <p className="text-xs text-green-600">
                              {metric.trend}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="calls">
                <div className="h-64 flex items-center justify-center bg-slate-50 rounded-md">
                  <p className="text-slate-500">
                    Call details and analytics available in your demo
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="messages">
                <div className="h-64 flex items-center justify-center bg-slate-50 rounded-md">
                  <p className="text-slate-500">
                    Message history and templates available in your demo
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="reviews">
                <div className="h-64 flex items-center justify-center bg-slate-50 rounded-md">
                  <p className="text-slate-500">
                    Review management dashboard available in your demo
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="analytics">
                <div className="h-64 flex items-center justify-center bg-slate-50 rounded-md">
                  <p className="text-slate-500">
                    Detailed analytics and reporting available in your demo
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
