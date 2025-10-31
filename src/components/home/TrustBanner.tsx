import { Award, Users, Building2 } from "lucide-react";

const stats = [
  {
    icon: Award,
    value: "4+ Years",
    label: "Experience",
  },
  {
    icon: Users,
    value: "2000+",
    label: "Candidates Placed",
  },
  {
    icon: Building2,
    value: "10+",
    label: "Enterprise Clients",
  },
];

const TrustBanner = () => {
  return (
    <div className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex items-center justify-center space-x-4 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <stat.icon className="text-secondary" size={28} />
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBanner;
