import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Clock, Briefcase } from "lucide-react";

const jobs = [
  { title: "Sales Executive", location: "Mumbai", type: "Full-time", department: "Sales" },
  { title: "Customer Service Representative", location: "Delhi", type: "Full-time", department: "CX" },
  { title: "HR Recruiter", location: "Bangalore", type: "Full-time", department: "HR" },
  { title: "Team Leader - BPO", location: "Pune", type: "Full-time", department: "Operations" },
];

const Careers = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <section className="hero-gradient text-background py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="mb-6">Careers at TalentBridge</h1>
              <p className="text-xl text-background/90">Join our team and help shape the future of recruitment and CX</p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-6">
              {jobs.map((job, index) => (
                <Card key={index} className="p-6 hover:shadow-large transition-smooth">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1"><MapPin size={16} />{job.location}</span>
                        <span className="flex items-center gap-1"><Clock size={16} />{job.type}</span>
                        <span className="flex items-center gap-1"><Briefcase size={16} />{job.department}</span>
                      </div>
                    </div>
                    <Button asChild variant="secondary">
                      <Link to="/candidate-registration">Apply Now</Link>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
