import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, Loader2 } from "lucide-react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll respond within 24 hours.",
    });
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="hero-gradient text-background py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="mb-6">Contact Us</h1>
              <p className="text-xl text-background/90">
                Get in touch with our team. We're here to help with your recruitment, training, and CX needs.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-semibold mb-6 text-primary">Get In Touch</h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    We'd love to hear from you. Whether you're an employer looking to scale your team or 
                    a candidate seeking new opportunities, reach out to us.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Main Office */}
                  <Card className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="text-secondary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Main Office</h3>
                        <p className="text-muted-foreground">
                          Vikas Nagar, Dehu Road<br />
                          Pimpri-Chinchwad<br />
                          Maharashtra 412101
                        </p>
                      </div>
                    </div>
                  </Card>

                  {/* Phone */}
                  <Card className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="text-secondary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Phone</h3>
                        <p className="text-muted-foreground">
                          <a href="tel:+919226449358" className="hover:text-secondary transition-smooth">
                            +91 92264 49358
                          </a>
                        </p>
                      </div>
                    </div>
                  </Card>

                  {/* Email */}
                  <Card className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="text-secondary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Email</h3>
                        <p className="text-muted-foreground">
                          <a href="mailto:iconicssg@gmail.com" className="hover:text-secondary transition-smooth">
                            iconicssg@gmail.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </Card>

                  {/* Hours */}
                  <Card className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="text-secondary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Business Hours</h3>
                        <p className="text-muted-foreground">
                          Monday - Friday: 9:00 AM - 6:00 PM<br />
                          Saturday: 10:00 AM - 2:00 PM
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <Card className="p-8 shadow-large">
                  <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 12345 67890"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="How can we help?"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us more about your needs..."
                        rows={5}
                      />
                    </div>

                    <Button type="submit" variant="secondary" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </Button>
                  </form>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
