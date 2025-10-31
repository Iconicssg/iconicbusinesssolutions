import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import { Loader2, ArrowRight } from "lucide-react";
import { z } from "zod";

const employerCallbackSchema = z.object({
  companyName: z.string().trim().min(1, "Company name is required").max(200, "Company name must be less than 200 characters"),
  contactPerson: z.string().trim().min(1, "Contact person is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number format"),
  requirement: z.string().trim().min(10, "Please provide more details about your requirement").max(1000, "Requirement must be less than 1000 characters"),
  contactTime: z.string().max(100, "Contact time must be less than 100 characters").optional(),
});

const EmployerZoneCTA = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    requirement: "",
    contactTime: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      employerCallbackSchema.parse(formData);
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
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Request Received!",
      description: "Our team will contact you within 24 hours.",
    });
    
    setFormData({
      companyName: "",
      contactPerson: "",
      email: "",
      phone: "",
      requirement: "",
      contactTime: "",
    });
    
    setIsSubmitting(false);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="mb-6 text-primary">Employer Zone</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Looking to scale your team quickly? Access our comprehensive recruitment solutions, 
                bulk hiring capabilities, and dedicated account management services.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Rapid bulk hiring and deployment",
                  "Pre-screened, qualified candidates",
                  "Flexible RPO solutions",
                  "Dedicated account manager",
                  "Technology-enabled processes",
                  "Transparent pricing models"
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 bg-secondary rounded-full" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" variant="outline">
                <Link to="/employer-zone">
                  Visit Employer Portal <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
            </div>

            {/* Right Form */}
            <Card className="p-8 shadow-large">
              <h3 className="text-2xl font-semibold mb-6 text-card-foreground">Request a Callback</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="companyName">Company Name *</Label>
                  <Input
                    id="companyName"
                    required
                    maxLength={200}
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="Your Company Pvt Ltd"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="contactPerson">Contact Person *</Label>
                  <Input
                    id="contactPerson"
                    required
                    maxLength={100}
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      maxLength={255}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@company.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone *</Label>
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
                </div>

                <div className="space-y-2">
                  <Label htmlFor="requirement">Hiring Requirement *</Label>
                  <Textarea
                    id="requirement"
                    required
                    maxLength={1000}
                    value={formData.requirement}
                    onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                    placeholder="Describe your hiring needs..."
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contactTime">Preferred Contact Time</Label>
                  <Input
                    id="contactTime"
                    maxLength={100}
                    value={formData.contactTime}
                    onChange={(e) => setFormData({ ...formData, contactTime: e.target.value })}
                    placeholder="e.g., Weekdays 10 AM - 5 PM"
                  />
                </div>

                <Button type="submit" variant="secondary" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Request"
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployerZoneCTA;
