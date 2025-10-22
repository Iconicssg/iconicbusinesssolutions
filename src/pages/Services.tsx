import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, GraduationCap, Headphones, BarChart3, Briefcase, Settings, CheckCircle } from "lucide-react";

const services = [
  {
    id: "recruitment",
    icon: Users,
    title: "Recruitment & Bulk Hiring",
    description: "End-to-end recruitment solutions with advanced screening and rapid deployment capabilities for organizations of all sizes.",
    features: [
      "Mass recruitment campaigns",
      "Multi-stage screening process",
      "Background verification",
      "Onboarding support",
      "Replacement guarantee",
    ],
  },
  {
    id: "training",
    icon: GraduationCap,
    title: "Training & Development",
    description: "Comprehensive training programs designed to upskill your workforce and enhance productivity through expert-led modules.",
    features: [
      "Soft skills training",
      "Technical upskilling programs",
      "Leadership development",
      "Industry-specific certifications",
      "Custom training modules",
    ],
  },
  {
    id: "cx",
    icon: Headphones,
    title: "CX & Contact Centre Solutions",
    description: "Omnichannel customer experience management with cutting-edge technology and highly trained professionals.",
    features: [
      "Inbound & outbound calling",
      "Chat & email support",
      "WhatsApp Business integration",
      "Social media management",
      "24/7 multilingual support",
    ],
  },
  {
    id: "automation",
    icon: BarChart3,
    title: "Process Automation & Analytics",
    description: "Data-driven insights and intelligent automation to optimize operations and improve decision-making.",
    features: [
      "Real-time dashboards",
      "Custom MIS reports",
      "Workflow automation",
      "Performance analytics",
      "Predictive insights",
    ],
  },
  {
    id: "backoffice",
    icon: Briefcase,
    title: "Back Office & AMC Management",
    description: "Reliable back-office support and after-market care management to streamline your business operations.",
    features: [
      "Data entry & processing",
      "Document management",
      "AMC coordination",
      "Quality control",
      "Vendor management",
    ],
  },
  {
    id: "rpo",
    icon: Settings,
    title: "Employer Solutions (RPO)",
    description: "Complete recruitment process outsourcing with dedicated account management and customized hiring strategies.",
    features: [
      "Dedicated recruitment team",
      "End-to-end hiring management",
      "Employer branding support",
      "ATS integration",
      "Strategic consulting",
    ],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="hero-gradient text-background py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="mb-6">Our Services</h1>
              <p className="text-xl text-background/90">
                Comprehensive recruitment, training, and CX solutions designed to drive your business forward
              </p>
            </div>
          </div>
        </section>

        {/* Services Detail */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="space-y-16">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  id={service.id}
                  className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 items-center scroll-mt-24`}
                >
                  <div className="flex-1">
                    <Card className="p-8 shadow-large h-full">
                      <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                        <service.icon className="text-secondary" size={32} />
                      </div>
                      <h2 className="text-3xl font-semibold mb-4 text-card-foreground">{service.title}</h2>
                      <p className="text-lg text-muted-foreground mb-6">{service.description}</p>
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <CheckCircle className="text-secondary flex-shrink-0 mt-0.5" size={20} />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </div>
                  <div className="flex-1 text-center lg:text-left">
                    <div className="max-w-md mx-auto lg:mx-0">
                      <h3 className="text-2xl font-semibold mb-4 text-primary">
                        Ready to get started?
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        Let's discuss how we can tailor this service to meet your specific needs.
                      </p>
                      <Button asChild variant="secondary" size="lg">
                        <Link to="/contact">Contact Us</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-muted py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="mb-4 text-primary">Need a Custom Solution?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We can combine multiple services or create a tailored package specifically for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="default" size="lg">
                  <Link to="/contact">Schedule Consultation</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/employer-zone">View Employer Zone</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
