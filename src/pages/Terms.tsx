import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="mb-8 text-primary">Terms of Use</h1>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <p>Last updated: {new Date().toLocaleDateString()}</p>
                <p>Welcome to TalentBridge. By accessing or using our services, you agree to be bound by these Terms of Use.</p>
                
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Use of Services</h2>
                <p>Our services are provided for lawful recruitment, training, and customer experience purposes. You agree not to misuse our platform or interfere with its operation.</p>
                
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Account Responsibilities</h2>
                <p>You are responsible for maintaining the confidentiality of your account information and for all activities under your account.</p>
                
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Intellectual Property</h2>
                <p>All content, trademarks, and materials on this website are owned by TalentBridge and protected by applicable intellectual property laws.</p>
                
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Limitation of Liability</h2>
                <p>TalentBridge shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services.</p>
                
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Contact</h2>
                <p>For questions regarding these terms, contact us at legal@talentbridge.com.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
