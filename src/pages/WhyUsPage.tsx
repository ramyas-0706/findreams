import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ReviewsSection from "@/components/ReviewsSection";
import { ShieldCheck, Zap, Handshake, Award, Clock, Users, Globe2, HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  { icon: ShieldCheck, title: "Trusted Advisors", description: "Decades of expertise ensuring your financial security and growth." },
  { icon: Zap, title: "Fast Approvals", description: "Streamlined processes for quick loan sanctions and disbursements." },
  { icon: Handshake, title: "Transparent Process", description: "No hidden charges. Complete clarity at every step of the journey." },
  { icon: Award, title: "Expert Guidance", description: "Certified professionals dedicated to your financial success." },
  { icon: Clock, title: "Business Hours", description: "Available 9:00 AM – 7:00 PM, Monday to Saturday for all your needs." },
  { icon: Users, title: "5000+ Clients", description: "Trusted by thousands of individuals and businesses across India." },
  { icon: Globe2, title: "Wide Network", description: "Partnerships with top banks and financial institutions nationwide." },
  { icon: HeartHandshake, title: "Personalized Service", description: "Every client gets a dedicated relationship manager for their journey." },
];

const WhyUsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHero
        title="Why Choose"
        highlight="Findreams"
        subtitle="Discover why thousands trust us with their financial future."
        breadcrumb="Home / Why Choose Us"
      />

      <section className="section-padding sparkle-line-top">
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="text-center luxury-card rounded-2xl p-8 hover:-translate-y-2 transition-all duration-500 group"
              >
                <div className="relative mx-auto mb-5 w-[72px] h-[72px]">
                  <div className="w-full h-full rounded-full gold-border-strong flex items-center justify-center bg-primary/[0.06] group-hover:bg-primary/[0.15] transition-all duration-500">
                    <f.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="absolute inset-0 rounded-full border border-primary/0 group-hover:border-primary/20 group-hover:scale-[1.35] transition-all duration-500 opacity-0 group-hover:opacity-100" />
                </div>
                <h3 className="font-display text-lg font-bold mb-2 group-hover:text-primary transition-colors">{f.title}</h3>
                <p className="text-silver text-sm leading-relaxed">{f.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Reviews */}
          <ReviewsSection />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhyUsPage;
