import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, GraduationCap, Headphones, BarChart3, Briefcase, Settings } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Recruitment & Bulk Hiring",
    description: "End-to-end recruitment solutions with advanced screening and rapid deployment capabilities for organizations of all sizes.",
    link: "/services#recruitment",
  },
  {
    icon: GraduationCap,
    title: "Training & Development",
    description: "Comprehensive training programs designed to upskill your workforce and enhance productivity through expert-led modules.",
    link: "/services#training",
  },
  {
    icon: Headphones,
    title: "CX & Contact Centre Solutions",
    description: "Omnichannel customer experience management with cutting-edge technology and highly trained professionals.",
    link: "/services#cx",
  },
  {
    icon: BarChart3,
    title: "Process Automation & Analytics",
    description: "Data-driven insights and intelligent automation to optimize operations and improve decision-making.",
    link: "/services#automation",
  },
  {
    icon: Briefcase,
    title: "Back Office & AMC Management",
    description: "Reliable back-office support and after-market care management to streamline your business operations.",
    link: "/services#backoffice",
  },
  {
    icon: Settings,
    title: "Employer Solutions (RPO)",
    description: "Complete recruitment process outsourcing with dedicated account management and customized hiring strategies.",
    link: "/services#rpo",
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
