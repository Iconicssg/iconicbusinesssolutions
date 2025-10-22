import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Eye, Award, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="hero-gradient text-background py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="mb-6">About TalentBridge</h1>
              <p className="text-xl text-background/90">
                Connecting exceptional talent with leading organizations across India and beyond
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="mb-8 text-center text-primary">Our Story</h2>
              <div className="prose prose-lg mx-auto text-muted-foreground space-y-6">
                <p>
                  Founded over two decades ago, TalentBridge has grown from a small recruitment firm into a 
                  comprehensive human capital and customer experience solutions provider. Our journey has been 
                  driven by a singular mission: to create meaningful connections between talent and opportunity.
                </p>
                <p>
                  Today, we serve over 50 enterprise clients across diverse industries, having successfully 
                  placed more than 10,000 candidates in rewarding careers. Our expansion into training and 
                  customer experience services reflects our commitment to addressing the evolving needs of 
                  modern businesses.
                </p>
                <p>
                  With offices across major Indian cities and a growing global presence, we combine local 
                  expertise with international best practices to deliver exceptional results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="bg-muted py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Target className="text-secondary" size={32} />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-primary">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To empower businesses with the right talent and tools while creating meaningful career 
                  opportunities that transform lives and drive sustainable growth.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Eye className="text-secondary" size={32} />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-primary">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be India's most trusted partner for integrated human capital and customer experience 
                  solutions, recognized for innovation, integrity, and measurable impact.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-primary">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: Award,
                  title: "Excellence",
                  description: "We pursue the highest standards in everything we do.",
                },
                {
                  icon: TrendingUp,
                  title: "Innovation",
                  description: "We embrace new ideas and technologies to stay ahead.",
                },
                {
                  icon: Target,
                  title: "Integrity",
                  description: "We build trust through transparency and ethical practices.",
                },
                {
                  icon: Eye,
                  title: "People-First",
                  description: "We prioritize the success and wellbeing of people.",
                },
              ].map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="text-secondary" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="mb-6 text-background">Ready to Work Together?</h2>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Whether you're looking to hire, seeking career opportunities, or need CX solutions, 
                we're here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="hero" size="lg">
                  <Link to="/contact">Contact Us</Link>
                </Button>
                <Button asChild variant="heroPrimary" size="lg">
                  <Link to="/candidate-registration">Apply Now</Link>
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

export default About;
