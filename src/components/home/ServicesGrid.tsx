import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, GraduationCap, Headphones, BarChart3, Briefcase, Settings } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Recruitment & Staffing Solutions",
    description: "We connect businesses with skilled professionals through targeted recruitment, screening, and placement services.",
    link: "/services#recruitment",
  },
  {
    icon: GraduationCap,
    title: "Training & Development",
    description: "Customized soft skills and process training programs designed to make candidates job-ready and boost performance.",
    link: "/services#training",
  },
  {
    icon: Headphones,
    title: "Call Center & CX Management",
    description: "End-to-end inbound and outbound contact center solutions to enhance customer satisfaction and retention.",
    link: "/services#cx",
  },
  {
    icon: Users,
    title: "Bulk Hiring & Campus Recruitment",
    description: "End-to-end high-volume hiring support for entry-level, voice, and non-voice positions across multiple locations.",
    link: "/services#bulk",
  },
  {
    icon: Briefcase,
    title: "Process Outsourcing (BPO Services)",
    description: "Streamlined back-office and front-office process management to help businesses focus on core operations.",
    link: "/services#bpo",
  },
  {
    icon: Settings,
    title: "HR Consulting & Workforce Management",
    description: "Tailored HR solutions — from policy setup to performance tracking — for organizations of all sizes.",
    link: "/services#hr",
  },
];

const ServicesGrid = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-primary">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions tailored to your recruitment, training, and customer experience needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-large transition-smooth animate-fade-in bg-card border-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                <service.icon className="text-secondary" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-card-foreground">{service.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
              <Button asChild variant="link" className="p-0 h-auto">
                <Link to={service.link}>Learn more →</Link>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
