// Fully functional RoofingCallDashboard with Supabase live data + fake call simulation

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { Button } from "./ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { cn } from "@/lib/utils";

// Initialize Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

type CallType = "inbound" | "outbound";

interface Call {
  id: string;
  call_type: CallType;
  summary: string;
  outcome: string;
  next_action: string;
  timestamp: string;
  duration: number;
}

// Initial mock data
const initialCalls: Call[] = [
  {
    id: "1",
    call_type: "inbound",
    summary: "Customer called about a leak in their roof after recent storm",
    outcome: "Scheduled inspection for tomorrow",
    next_action: "Follow up after inspection",
    timestamp: "2023-06-01T14:30:00",
    duration: 345,
  },
  {
    id: "2",
    call_type: "outbound",
    summary: "Called customer to confirm appointment for roof replacement",
    outcome: "Customer confirmed appointment",
    next_action: "Prepare team for job",
    timestamp: "2023-06-01T11:15:00",
    duration: 180,
  },
  {
    id: "3",
    call_type: "inbound",
    summary: "New customer inquiring about gutter installation services",
    outcome: "Sent quote via email",
    next_action: "Follow up in 3 days",
    timestamp: "2023-06-01T09:45:00",
    duration: 420,
  },
  {
    id: "4",
    call_type: "outbound",
    summary:
      "Called supplier to order additional materials for Johnson project",
    outcome: "Order placed, delivery scheduled",
    next_action: "Confirm delivery receipt",
    timestamp: "2023-05-31T16:20:00",
    duration: 240,
  },
  {
    id: "5",
    call_type: "inbound",
    summary: "Customer called with concerns about invoice amount",
    outcome: "Explained charges, customer satisfied",
    next_action: "None required",
    timestamp: "2023-05-31T13:10:00",
    duration: 510,
  },
];

export default function RoofingCallDashboard() {
  const [activeFilter, setActiveFilter] = useState<"all" | CallType>("all");
  const [calls, setCalls] = useState<Call[]>(initialCalls);

  const fetchCalls = async () => {
    try {
      const { data, error } = await supabase
        .from("calls")
        .select("*")
        .order("timestamp", { ascending: false });

      if (error) throw error;
      if (data) setCalls((prev) => [...initialCalls, ...data]);
    } catch (error) {
      console.error("Error fetching calls:", error);
    }
  };

  const insertFakeCall = async () => {
    const { error } = await supabase.from("calls").insert([
      {
        call_type: "inbound",
        summary: "Client reported damage after recent windstorm",
        outcome: "Inspection booked for Thursday",
        next_action: "Send team notification",
        timestamp: new Date().toISOString(),
        duration: 275,
      },
    ]);

    if (error) {
      console.error("Failed to insert fake call:", error.message);
    } else {
      fetchCalls();
    }
  };

  useEffect(() => {
    fetchCalls();
    const interval = setInterval(fetchCalls, 5000);
    return () => clearInterval(interval);
  }, []);

  const filteredCalls = calls.filter((call) => {
    if (activeFilter === "all") return true;
    return call.call_type === activeFilter;
  });

  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Peak Roofing</h1>

      <div className="flex gap-2 mb-6">
        <Button
          variant={activeFilter === "all" ? "default" : "outline"}
          onClick={() => setActiveFilter("all")}
        >
          All Calls
        </Button>
        <Button
          variant={activeFilter === "inbound" ? "default" : "outline"}
          onClick={() => setActiveFilter("inbound")}
        >
          Inbound
        </Button>
        <Button
          variant={activeFilter === "outbound" ? "default" : "outline"}
          onClick={() => setActiveFilter("outbound")}
        >
          Outbound
        </Button>
        <Button variant="outline" onClick={insertFakeCall}>
          Test Live Call
        </Button>
      </div>

      <div className="border rounded-lg overflow-hidden shadow-sm">
        <Table>
          <TableCaption>Recent calls - sorted by newest first</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[120px]">Call Type</TableHead>
              <TableHead className="w-[300px]">Summarized Call</TableHead>
              <TableHead className="w-[200px]">Outcome</TableHead>
              <TableHead className="w-[200px]">Next Action</TableHead>
              <TableHead className="w-[150px]">Timestamp</TableHead>
              <TableHead className="w-[100px]">Duration</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredCalls.map((call) => (
              <TableRow key={call.id}>
                <TableCell>
                  <span
                    className={cn(
                      "px-2 py-1 rounded-full text-xs font-medium",
                      call.call_type === "inbound"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-green-100 text-green-800",
                    )}
                  >
                    {call.call_type === "inbound" ? "Inbound" : "Outbound"}
                  </span>
                </TableCell>
                <TableCell className="font-medium">{call.summary}</TableCell>
                <TableCell>{call.outcome}</TableCell>
                <TableCell>{call.next_action}</TableCell>
                <TableCell>{formatTimestamp(call.timestamp)}</TableCell>
                <TableCell>{formatDuration(call.duration)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
