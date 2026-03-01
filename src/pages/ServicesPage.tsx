import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import EMICalculator from "@/components/EMICalculator";
import HowToApply from "@/components/HowToApply";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Wallet,
  GraduationCap,
  Briefcase,
  Home,
  LineChart,
  ArrowRight,
  FileText,
  Receipt,
  TrendingUp,
} from "lucide-react";

import imgPersonal from "@/assets/service-personal-loan.jpg";
import imgEducation from "@/assets/service-education-loan.jpg";
import imgBusiness from "@/assets/service-business-loan.jpg";
import imgHome from "@/assets/service-home-loan.jpg";
import imgConsulting from "@/assets/service-consulting.jpg";

const services = [
  {
    icon: Wallet,
    title: "Personal Loans",
    description: "Flexible personal loans tailored to your needs with competitive rates and quick disbursement.",
    image: imgPersonal,
    link: "/loans/personal",
  },
  {
    icon: GraduationCap,
    title: "Education Loans",
    description: "Invest in your future with our education financing solutions for students at every level.",
    image: imgEducation,
    link: "/loans/education",
  },
  {
    icon: Briefcase,
    title: "Business Loans",
    description: "Fuel your entrepreneurial vision with capital solutions designed for businesses of all sizes.",
    image: imgBusiness,
    link: "/loans/business",
  },
  {
    icon: Home,
    title: "Home Loans",
    description: "Make your dream home a reality with our affordable and transparent home financing options.",
    image: imgHome,
    link: "/loans/home",
  },
  {
    icon: FileText,
    title: "Income Tax Filing",
    description: "Hassle-free ITR filing for salaried, self-employed, freelancers & business owners with expert guidance.",
    image: imgConsulting,
    link: "/service/income-tax",
  },
  {
    icon: Receipt,
    title: "GST Filing Services",
    description: "Complete GST registration, monthly/quarterly filing, reconciliation & compliance support.",
    image: imgConsulting,
    link: "/service/gst-filing",
  },
  {
    icon: TrendingUp,
    title: "Investment Guidance",
    description: "Smart investment decisions — mutual funds, SIPs, retirement planning & portfolio review.",
    image: imgConsulting,
    link: "/service/investment-guidance",
  },
  {
    icon: LineChart,
    title: "Financial Consulting",
    description: "Expert guidance to optimize your finances, plan investments, and achieve long-term wealth.",
    image: imgConsulting,
    link: "/services",
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHero
        title="Our"
        highlight="Services"
        subtitle="From personal aspirations to business ambitions, we offer a full spectrum of financial services."
        breadcrumb="Home / Services"
      />

      <section className="section-padding sparkle-line-top">
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Link
                  to={service.link}
                  className="block group luxury-card rounded-2xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-transform duration-500"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                  </div>
                  <div className="p-6">
                    <div className="relative w-14 h-14 rounded-full gold-border-strong flex items-center justify-center mb-4 bg-primary/[0.06] group-hover:bg-primary/[0.12] transition-all duration-500 -mt-12 z-10">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-bold mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="text-silver leading-relaxed text-sm mb-3">{service.description}</p>
                    <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold group-hover:gap-2 transition-all">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* EMI Calculator */}
          <div className="mb-16">
            <EMICalculator />
          </div>

          {/* How to Apply */}
          <HowToApply />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
