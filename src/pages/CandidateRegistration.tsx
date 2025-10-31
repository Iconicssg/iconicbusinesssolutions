import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import { Loader2, Upload, CheckCircle } from "lucide-react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

const candidateRegistrationSchema = z.object({
  fullName: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number format"),
  location: z.string().trim().min(1, "Location is required").max(100, "Location must be less than 100 characters"),
  experience: z.string().refine((val) => {
    const num = parseInt(val);
    return !isNaN(num) && num >= 0 && num <= 50;
  }, "Experience must be between 0 and 50 years"),
  skills: z.string().trim().min(1, "Skills are required").max(500, "Skills must be less than 500 characters"),
  resume: z.instanceof(File).refine((file) => file !== null, "Resume is required"),
  consent: z.boolean().refine((val) => val === true, "You must agree to the Privacy Policy"),
});

const CandidateRegistration = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileName, setFileName] = useState<string>("");
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    experience: "",
    skills: "",
    resume: null as File | null,
    consent: false,
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        toast({
          title: "Invalid File Type",
          description: "Please upload a PDF, DOC, or DOCX file.",
          variant: "destructive",
        });
        return;
      }
      if (file.size > 10 * 1024 * 1024) {
        toast({
          title: "File Too Large",
          description: "Resume must be less than 10MB.",
          variant: "destructive",
        });
        return;
      }
      setFormData({ ...formData, resume: file });
      setFileName(file.name);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      candidateRegistrationSchema.parse(formData);
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
          resume_url: formData.resume ? formData.resume.name : null,
          consent: formData.consent,
        }]);

      if (error) throw error;
      
      toast({
        title: "Registration Successful!",
        description: "Thank you for registering. We'll review your profile and be in touch soon.",
      });
      
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        location: "",
        experience: "",
        skills: "",
        resume: null,
        consent: false,
      });
      setFileName("");
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Registration Failed",
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
              <h1 className="mb-6">Candidate Registration</h1>
              <p className="text-xl text-background/90">
                Take the first step towards your dream career. Register with us today.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
              {[
                "Access to 1000+ job opportunities",
                "Free training & skill development",
                "Fast-track placement support",
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="text-secondary flex-shrink-0" size={24} />
                  <span className="text-muted-foreground font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Registration Form */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Card className="p-8 md:p-12 shadow-large">
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
                      <Label htmlFor="email">Email Address *</Label>
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
                      <Label htmlFor="experience">Total Experience (years) *</Label>
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

                  <div className="space-y-2">
                    <Label htmlFor="resume">Upload Resume * (PDF/DOC/DOCX, Max 10MB)</Label>
                    <div className="relative">
                      <Input
                        id="resume"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      <Label
                        htmlFor="resume"
                        className="flex items-center justify-center w-full h-32 px-4 border-2 border-dashed rounded-lg cursor-pointer hover:bg-muted transition-smooth"
                      >
                        <div className="text-center">
                          <Upload className="mx-auto mb-2 text-muted-foreground" size={32} />
                          <p className="text-sm text-muted-foreground">
                            {fileName ? (
                              <span className="text-secondary font-medium">{fileName}</span>
                            ) : (
                              <>Click to upload or drag and drop</>
                            )}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            PDF, DOC, or DOCX (max 10MB)
                          </p>
                        </div>
                      </Label>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2 p-4 bg-muted rounded-lg">
                    <Checkbox
                      id="consent"
                      checked={formData.consent}
                      onCheckedChange={(checked) => setFormData({ ...formData, consent: checked as boolean })}
                    />
                    <Label htmlFor="consent" className="text-sm leading-relaxed cursor-pointer">
                      I agree to the{" "}
                      <Link to="/privacy-policy" className="text-secondary hover:underline">
                        Privacy Policy
                      </Link>{" "}
                      and consent to Iconic Business Solutions storing my information and contacting me regarding 
                      job opportunities that match my profile.
                    </Label>
                  </div>

                  <Button type="submit" variant="secondary" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting Application...
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
      </main>
      <Footer />
    </div>
  );
};

export default CandidateRegistration;
