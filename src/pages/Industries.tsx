import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Car, DollarSign, HeartPulse, GraduationCap, ShoppingBag, Factory, Rocket, Cpu } from "lucide-react";

const industries = [
  {
    slug: "automotive",
    icon: Car,
    name: "Automotive",
    description: "Comprehensive talent solutions for automotive manufacturing, dealerships, and service centers across India.",
    specializations: [
      "Production line staffing",
      "Dealership sales teams",
      "Service technicians",
      "Quality control specialists",
      "Supply chain professionals",
    ],
  },
  {
    slug: "bfsi",
    icon: DollarSign,
    name: "Banking, Financial Services & Insurance",
    description: "Specialized recruitment for the dynamic BFSI sector with compliance-ready professionals.",
    specializations: [
      "Relationship managers",
      "Insurance advisors",
      "Collection executives",
      "KYC & compliance officers",
      "Customer service representatives",
    ],
  },
  {
    slug: "healthcare",
    icon: HeartPulse,
    name: "Healthcare",
    description: "Connecting healthcare facilities with qualified medical and administrative professionals.",
    specializations: [
      "Nursing staff",
      "Medical transcriptionists",
      "Patient care coordinators",
      "Hospital administration",
      "Medical billing specialists",
    ],
  },
  {
    slug: "education",
    icon: GraduationCap,
    name: "Education",
    description: "Supporting educational institutions with qualified faculty and administrative staff.",
    specializations: [
      "Academic staff",
      "Administrative personnel",
      "Counselors & advisors",
      "EdTech specialists",
      "Training coordinators",
    ],
  },
  {
    slug: "retail",
    icon: ShoppingBag,
    name: "Retail & eCommerce",
    description: "End-to-end staffing for retail chains, online marketplaces, and omnichannel operations.",
    specializations: [
      "Store managers & staff",
      "Warehouse operations",
      "Customer support teams",
      "Logistics coordinators",
      "Merchandising experts",
    ],
  },
  {
    slug: "manufacturing",
    icon: Factory,
    name: "Manufacturing",
    description: "Bulk hiring and specialized staffing for manufacturing facilities of all sizes.",
    specializations: [
      "Production workers",
      "Quality assurance teams",
      "Maintenance technicians",
      "Shift supervisors",
      "Operations managers",
    ],
  },
  {
    slug: "startups",
    icon: Rocket,
    name: "Startups",
    description: "Agile recruitment solutions helping startups scale rapidly with the right talent.",
    specializations: [
      "Founding team members",
      "Growth hackers",
      "Product specialists",
      "Operations teams",
      "Customer success managers",
    ],
  },
  {
    slug: "it-ites",
    icon: Cpu,
    name: "IT/ITES",
    description: "Technology talent acquisition for software companies, BPOs, and IT services firms.",
    specializations: [
      "Software developers",
      "Technical support staff",
      "IT infrastructure teams",
      "Data analysts",
      "DevOps engineers",
    ],
  },
];

const Industries = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="hero-gradient text-background py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="mb-6">Industries We Serve</h1>
              <p className="text-xl text-background/90">
                Specialized recruitment solutions across diverse sectors with deep industry expertise
              </p>
            </div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="space-y-12">
              {industries.map((industry, index) => (
                <Card
                  key={industry.slug}
                  id={industry.slug}
                  className="p-8 md:p-12 shadow-large animate-fade-in scroll-mt-24"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                        <industry.icon className="text-secondary" size={32} />
                      </div>
                      <h2 className="text-3xl font-semibold mb-4 text-card-foreground">{industry.name}</h2>
                      <p className="text-lg text-muted-foreground mb-6">{industry.description}</p>
                      <div className="flex gap-4">
                        <Button asChild variant="secondary">
                          <Link to="/contact">Get Started</Link>
                        </Button>
                        <Button asChild variant="outline">
                          <Link to="/services">View Services</Link>
                        </Button>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-card-foreground">Our Specializations</h3>
                      <ul className="space-y-3">
                        {industry.specializations.map((spec, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <div className="w-6 h-6 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <div className="w-2 h-2 bg-secondary rounded-full" />
                            </div>
                            <span className="text-muted-foreground">{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="mb-6 text-background">Don't See Your Industry?</h2>
              <p className="text-xl text-primary-foreground/90 mb-8">
                We serve many more sectors and can customize solutions for your specific needs. Let's discuss how we can help.
              </p>
              <Button asChild variant="hero" size="lg">
                <Link to="/contact">Contact Our Team</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Industries;
