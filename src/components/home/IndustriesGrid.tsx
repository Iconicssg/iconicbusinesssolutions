import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Car, DollarSign, HeartPulse, GraduationCap, ShoppingBag, Factory, Rocket, Cpu } from "lucide-react";

const industries = [
  { icon: Car, name: "Automotive", slug: "automotive" },
  { icon: DollarSign, name: "BFSI", slug: "bfsi" },
  { icon: HeartPulse, name: "Healthcare", slug: "healthcare" },
  { icon: GraduationCap, name: "Education", slug: "education" },
  { icon: ShoppingBag, name: "Retail & eCommerce", slug: "retail" },
  { icon: Factory, name: "Manufacturing", slug: "manufacturing" },
  { icon: Rocket, name: "Startups", slug: "startups" },
  { icon: Cpu, name: "IT/ITES", slug: "it-ites" },
];

const IndustriesGrid = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-primary">Industries We Serve</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Delivering specialized solutions across diverse sectors with deep industry expertise
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {industries.map((industry, index) => (
            <Link key={index} to={`/industries/${industry.slug}`}>
              <Card
                className="p-6 text-center hover:shadow-large hover:border-secondary transition-smooth cursor-pointer group animate-fade-in bg-card border"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="w-16 h-16 bg-secondary/10 group-hover:bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-3 transition-smooth">
                  <industry.icon className="text-secondary" size={28} />
                </div>
                <h3 className="font-semibold text-card-foreground group-hover:text-secondary transition-smooth">
                  {industry.name}
                </h3>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesGrid;
