import { MessageSquare, Shield, Users, Laptop, TrendingUp } from "lucide-react";

const values = [
  {
    icon: MessageSquare,
    title: "Omnichannel Communication",
    description: "Seamless customer interactions across phone, email, chat, WhatsApp, and social media platforms.",
  },
  {
    icon: Shield,
    title: "Data Security",
    description: "Enterprise-grade security protocols ensuring complete confidentiality and compliance with industry standards.",
  },
  {
    icon: Users,
    title: "Dedicated Account Managers",
    description: "Personalized service with experienced professionals who understand your unique business requirements.",
  },
  {
    icon: Laptop,
    title: "Technology-Enabled Onboarding",
    description: "Fast, efficient digital onboarding processes that reduce time-to-hire and improve candidate experience.",
  },
  {
    icon: TrendingUp,
    title: "Analytics & MIS",
    description: "Real-time dashboards and comprehensive reports providing actionable insights for informed decision-making.",
  },
];

const ValueProps = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-background">Why Choose Iconic</h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            We deliver exceptional value through innovative solutions and unwavering commitment to excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mb-4">
                <value.icon className="text-secondary-foreground" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-background">{value.title}</h3>
              <p className="text-primary-foreground/80 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
