import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="mb-8 text-primary">Privacy Policy</h1>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <p>Last updated: {new Date().toLocaleDateString()}</p>
                <p>Iconic Business Solutions ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information.</p>
                
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Information We Collect</h2>
                <p>We collect information you provide directly, including name, email, phone number, resume, and employment preferences when you register as a candidate or submit inquiries.</p>
                
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">How We Use Your Information</h2>
                <p>We use your information to match you with job opportunities, communicate with you about positions, provide our services, and improve our offerings.</p>
                
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Data Security</h2>
                <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, or destruction.</p>
                
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Your Rights</h2>
                <p>You have the right to access, correct, or delete your personal information. Contact us at iconicssg@gmail.com for any privacy-related requests.</p>
                
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Contact Us</h2>
                <p>For questions about this Privacy Policy, please contact us at iconicssg@gmail.com or call +91 92264 49358.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
