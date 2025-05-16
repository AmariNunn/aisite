import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useNavigate } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import { Database } from "../types/supabase";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const supabase = createClient<Database>(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY,
);

const DemoForm = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = React.useState({
    agent_type: "",
    business_info: "",
    call_volume: "",
    email: "",
    submitted: false,
  });

  const [desiredOutcomes, setDesiredOutcomes] = React.useState({
    "More bookings": false,
    "Lead follow-up": false,
    Qualification: false,
    "Full replacement": false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (outcome: string, checked: boolean) => {
    setDesiredOutcomes((prev) => ({
      ...prev,
      [outcome]: checked,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Combine selected outcomes into a single string
    const selectedOutcomes = Object.entries(desiredOutcomes)
      .filter(([_, selected]) => selected)
      .map(([outcome]) => outcome)
      .join(", ");

    try {
      // Submit to Supabase
      const { error } = await supabase.from("form_submissions").insert({
        agent_type: formState.agent_type,
        business_info: formState.business_info,
        call_volume: formState.call_volume,
        desired_outcomes: selectedOutcomes,
        email: formState.email,
      });

      if (error) throw error;

      // Show success message
      setFormState((prev) => ({ ...prev, submitted: true }));

      // Show success message for 2 seconds then redirect back to home
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your request. Please try again.");
    }
  };

  if (formState.submitted) {
    return (
      <div className="min-h-screen bg-blue-50 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
          <div className="h-16 w-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
          <p className="text-gray-600 mb-4">
            Your demo request has been received. Our team will contact you
            shortly.
          </p>
          <p className="text-sm text-gray-500">
            Redirecting you back to home...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-blue-50 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-blue-600 p-6 text-white">
            <h2 className="text-2xl font-bold">Request a Demo</h2>
            <p className="mt-2">
              Fill out the form below and our team will contact you shortly.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {/* Agent Type */}
            <div className="space-y-2">
              <Label htmlFor="agent_type">
                What type of agent are you looking for?
              </Label>
              <Select
                onValueChange={(value) =>
                  handleSelectChange("agent_type", value)
                }
                required
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select agent type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Inbound">Inbound</SelectItem>
                  <SelectItem value="Outbound">Outbound</SelectItem>
                  <SelectItem value="Both">Both</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Business Info */}
            <div className="space-y-2">
              <Label htmlFor="business_info">Tell us about your business</Label>
              <Textarea
                id="business_info"
                name="business_info"
                value={formState.business_info}
                onChange={handleChange}
                placeholder="Tell us about your business needs..."
                className="min-h-[120px]"
                required
              />
            </div>

            {/* Call Volume */}
            <div className="space-y-2">
              <Label htmlFor="call_volume">
                How many calls do you expect per month?
              </Label>
              <Select
                onValueChange={(value) =>
                  handleSelectChange("call_volume", value)
                }
                required
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select call volume" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Under 100">Under 100</SelectItem>
                  <SelectItem value="100–500">100–500</SelectItem>
                  <SelectItem value="500–1000">500–1000</SelectItem>
                  <SelectItem value="1000+">1000+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Desired Outcomes */}
            <div className="space-y-3">
              <Label>What outcome matters most to you?</Label>
              <div className="space-y-2">
                {Object.keys(desiredOutcomes).map((outcome) => (
                  <div key={outcome} className="flex items-center space-x-2">
                    <Checkbox
                      id={`outcome-${outcome}`}
                      checked={
                        desiredOutcomes[outcome as keyof typeof desiredOutcomes]
                      }
                      onCheckedChange={(checked) =>
                        handleCheckboxChange(outcome, checked === true)
                      }
                    />
                    <Label
                      htmlFor={`outcome-${outcome}`}
                      className="cursor-pointer"
                    >
                      {outcome}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">
                What's the best email to follow up with?
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
              />
            </div>

            <div className="pt-4">
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 h-auto text-lg"
              >
                Submit Request
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DemoForm;
