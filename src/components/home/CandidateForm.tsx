import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

const candidateSchema = z.object({
  fullName: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number format"),
  location: z.string().trim().min(1, "Location is required").max(100, "Location must be less than 100 characters"),
  experience: z.string().refine((val) => {
    const num = parseInt(val);
    return !isNaN(num) && num >= 0 && num <= 50;
  }, "Experience must be between 0 and 50 years"),
  skills: z.string().trim().min(1, "Skills are required").max(500, "Skills must be less than 500 characters"),
  consent: z.boolean().refine((val) => val === true, "You must agree to the Privacy Policy"),
});

const CandidateForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    experience: "",
    skills: "",
    consent: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      candidateSchema.parse(formData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive",
        });
      }
      return;
    }

    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('candidate_applications')
        .insert([{
          full_name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          location: formData.location,
          experience: parseInt(formData.experience),
          skills: formData.skills,
          consent: formData.consent,
        }]);

      if (error) throw error;
      
      toast({
        title: "Registration Successful!",
        description: "Thank you for registering. We'll be in touch soon.",
      });
      
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        location: "",
        experience: "",
        skills: "",
        consent: false,
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="mb-4 text-primary">Register as a Candidate</h2>
            <p className="text-lg text-muted-foreground">
              Start your career journey with us. Fill out the form below and our team will get in touch.
            </p>
          </div>

          <Card className="p-8 shadow-large">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    required
                    maxLength={100}
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    maxLength={255}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    maxLength={16}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 12345 67890"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Preferred Location *</Label>
                  <Input
                    id="location"
                    required
                    maxLength={100}
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="Mumbai, Delhi, Bangalore..."
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="experience">Experience (years) *</Label>
                  <Input
                    id="experience"
                    type="number"
                    required
                    min="0"
                    max="50"
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    placeholder="2"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="skills">Key Skills *</Label>
                  <Input
                    id="skills"
                    required
                    maxLength={500}
                    value={formData.skills}
                    onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                    placeholder="Communication, Sales, Management..."
                  />
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="consent"
                  checked={formData.consent}
                  onCheckedChange={(checked) => setFormData({ ...formData, consent: checked as boolean })}
                />
                <Label htmlFor="consent" className="text-sm leading-relaxed cursor-pointer">
                  I agree to the Privacy Policy and consent to Iconic Business Solutions contacting me regarding job opportunities.
                </Label>
              </div>

              <Button type="submit" variant="secondary" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Application"
                )}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CandidateForm;
