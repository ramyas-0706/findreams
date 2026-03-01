import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ReviewsSection from "@/components/ReviewsSection";
import Footer from "@/components/Footer";
import EMICalculator from "@/components/EMICalculator";
import HowToApply from "@/components/HowToApply";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Wallet, GraduationCap, Briefcase, Home, LineChart, FileText, Receipt, TrendingUp, Sparkles } from "lucide-react";

import imgPersonal from "@/assets/service-personal-loan.jpg";
import imgEducation from "@/assets/service-education-loan.jpg";
import imgBusiness from "@/assets/service-business-loan.jpg";
import imgHome from "@/assets/service-home-loan.jpg";
import imgConsulting from "@/assets/service-consulting.jpg";

const services = [
  { icon: Wallet, title: "Personal Loans", description: "Flexible personal loans with competitive rates.", image: imgPersonal, link: "/loans/personal" },
  { icon: GraduationCap, title: "Education Loans", description: "Education financing for students at every level.", image: imgEducation, link: "/loans/education" },
  { icon: Briefcase, title: "Business Loans", description: "Capital solutions for businesses of all sizes.", image: imgBusiness, link: "/loans/business" },
  { icon: Home, title: "Home Loans", description: "Affordable home financing options.", image: imgHome, link: "/loans/home" },
  { icon: FileText, title: "Income Tax Filing", description: "Hassle-free ITR filing with expert guidance.", image: imgConsulting, link: "/service/income-tax" },
  { icon: Receipt, title: "GST Filing Services", description: "Stay GST compliant with timely filing.", image: imgConsulting, link: "/service/gst-filing" },
  { icon: TrendingUp, title: "Investment Guidance", description: "Smart investments for long-term wealth growth.", image: imgConsulting, link: "/service/investment-guidance" },
  { icon: LineChart, title: "Financial Consulting", description: "Expert guidance for long-term wealth.", image: imgConsulting, link: "/services" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />

      {/* Services Preview */}
      <section className="min-h-screen flex items-center relative sparkle-line-top overflow-hidden py-20 px-4 md:px-8">
        {/* Bright ambient glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/[0.06] rounded-full blur-[200px]" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/[0.04] rounded-full blur-[150px]" />
          <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-primary/[0.03] rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full gold-border-glow bg-primary/[0.06] mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium tracking-wide">Our Services</span>
            </motion.div>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-6">
              Comprehensive <span className="gold-gradient-text animate-shimmer-text">Financial Solutions</span>
            </h2>
            <p className="text-silver max-w-2xl mx-auto text-lg">
              From personal aspirations to business ambitions, we offer a full spectrum of financial services.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, type: "spring", stiffness: 100 }}
              >
                <Link
                  to={service.link}
                  className="block group relative rounded-2xl overflow-hidden service-card-premium"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                    {/* Gold sweep on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                    {/* Floating icon */}
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full gold-gradient-bg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-12 shadow-lg">
                      <ArrowRight className="w-5 h-5 text-primary-foreground" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 relative">
                    <div className="w-12 h-12 rounded-xl gold-border-strong flex items-center justify-center mb-3 bg-primary/[0.08] group-hover:bg-primary/[0.2] transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 -mt-10 relative z-10">
                      <service.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-display text-lg font-bold mb-1.5 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                    <p className="text-silver text-sm leading-relaxed mb-3">{service.description}</p>
                    <span className="inline-flex items-center gap-1.5 text-primary text-xs font-semibold group-hover:gap-3 transition-all duration-300">
                      Explore <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    {/* Bottom gold line */}
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link to="/services" className="group inline-flex items-center gap-2 gold-gradient-bg text-primary-foreground px-10 py-4 rounded-2xl font-semibold text-lg gold-glow-strong hover:scale-105 transition-all duration-300">
              View All Services <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us - full viewport */}
      <section className="min-h-screen flex items-center sparkle-line-top py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <WhyChooseUs />
        </div>
      </section>

      {/* EMI Calculator Preview */}
      <section className="min-h-screen flex items-center sparkle-line-top relative py-20 px-4 md:px-8">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-primary/[0.05] rounded-full blur-[180px]" />
        </div>
        <div className="container mx-auto relative z-10">
          <EMICalculator />
        </div>
      </section>

      {/* How to Apply */}
      <section className="min-h-screen flex items-center sparkle-line-top relative py-20 px-4 md:px-8">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-primary/[0.04] rounded-full blur-[160px]" />
        </div>
        <div className="container mx-auto relative z-10">
          <HowToApply />
        </div>
      </section>

      {/* Reviews */}
      <section className="min-h-screen flex items-center sparkle-line-top relative py-20 px-4 md:px-8">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary/[0.04] rounded-full blur-[200px]" />
        </div>
        <div className="container mx-auto relative z-10">
          <ReviewsSection />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
