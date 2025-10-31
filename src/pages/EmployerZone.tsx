import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Users, TrendingUp, Clock, Shield, BarChart, Headphones } from "lucide-react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

const employerConsultationSchema = z.object({
  companyName: z.string().trim().min(1, "Company name is required").max(200, "Company name must be less than 200 characters"),
  contactPerson: z.string().trim().min(1, "Contact person is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number format"),
  requirement: z.string().trim().min(10, "Please provide more details about your requirement").max(2000, "Requirement must be less than 2000 characters"),
  contactTime: z.string().max(100, "Contact time must be less than 100 characters").optional(),
});

const EmployerZone = () => {
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
      employerConsultationSchema.parse(formData);
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
        .from('employer_inquiries')
        .insert([{
          company_name: formData.companyName,
          contact_person: formData.contactPerson,
          email: formData.email,
          phone: formData.phone,
          requirement: formData.requirement,
          contact_time: formData.contactTime || null,
        }]);

      if (error) throw error;
      
      toast({
        title: "Request Received!",
        description: "Our team will contact you within 24 hours to discuss your requirements.",
      });
      
      setFormData({
        companyName: "",
        contactPerson: "",
        email: "",
        phone: "",
        requirement: "",
        contactTime: "",
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
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="hero-gradient text-background py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="mb-6">Employer Zone</h1>
              <p className="text-xl text-background/90">
                Scale your team quickly with our comprehensive recruitment and staffing solutions
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="mb-4 text-primary">Why Partner With Us</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Streamlined hiring processes backed by decades of expertise
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  icon: Users,
                  title: "Bulk Hiring at Scale",
                  description: "Deploy large teams quickly with our pre-vetted talent pool and rapid onboarding processes.",
                },
                {
                  icon: TrendingUp,
                  title: "Quality Guaranteed",
                  description: "Rigorous screening and assessment ensure only the best candidates reach your interview stage.",
                },
                {
                  icon: Clock,
                  title: "Fast Turnaround",
                  description: "Fill positions 40% faster with our technology-enabled recruitment workflows.",
                },
                {
                  icon: Shield,
                  title: "Replacement Guarantee",
                  description: "Free replacement within 90 days if a candidate doesn't meet expectations.",
                },
                {
                  icon: BarChart,
                  title: "Real-Time Analytics",
                  description: "Track hiring metrics and ROI with comprehensive dashboards and reports.",
                },
                {
                  icon: Headphones,
                  title: "Dedicated Support",
                  description: "Assigned account manager for personalized service and seamless communication.",
                },
              ].map((benefit, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-large transition-smooth animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                    <benefit.icon className="text-secondary" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-card-foreground">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="mb-12 text-center text-primary">Our Employer Solutions</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Contract Staffing",
                    features: [
                      "Flexible workforce management",
                      "Project-based deployments",
                      "Seasonal hiring support",
                      "Payroll management included",
                    ],
                  },
                  {
                    title: "Permanent Hiring",
                    features: [
                      "End-to-end recruitment",
                      "Executive search services",
                      "Campus recruitment drives",
                      "Psychometric assessments",
                    ],
                  },
                  {
                    title: "RPO Services",
                    features: [
                      "Dedicated recruitment team",
                      "ATS integration",
                      "Employer branding support",
                      "Talent pipeline building",
                    ],
                  },
                  {
                    title: "Training & Onboarding",
                    features: [
                      "Custom training modules",
                      "Industry-specific programs",
                      "Digital onboarding tools",
                      "Compliance training",
                    ],
                  },
                ].map((service, index) => (
                  <Card key={index} className="p-6">
                    <h3 className="text-2xl font-semibold mb-4 text-card-foreground">{service.title}</h3>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Lead Form */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="mb-4 text-primary">Request a Consultation</h2>
                <p className="text-lg text-muted-foreground">
                  Tell us about your hiring needs and we'll create a customized solution for your business
                </p>
              </div>

              <Card className="p-8 md:p-12 shadow-large">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Business Email *</Label>
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
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="requirement">Hiring Requirement *</Label>
                    <Textarea
                      id="requirement"
                      required
                      maxLength={2000}
                      value={formData.requirement}
                      onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                      placeholder="Please describe your hiring needs: number of positions, roles, locations, timeline..."
                      rows={4}
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
                        Submitting Request...
                      </>
                    ) : (
                      "Submit Request"
                    )}
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EmployerZone;
