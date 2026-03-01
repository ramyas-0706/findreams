import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";
import {
  Wallet,
  GraduationCap,
  Briefcase,
  Home,
  LineChart,
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
  },
  {
    icon: GraduationCap,
    title: "Education Loans",
    description: "Invest in your future with our education financing solutions for students at every level.",
    image: imgEducation,
  },
  {
    icon: Briefcase,
    title: "Business Loans",
    description: "Fuel your entrepreneurial vision with capital solutions designed for businesses of all sizes.",
    image: imgBusiness,
  },
  {
    icon: Home,
    title: "Home Loans",
    description: "Make your dream home a reality with our affordable and transparent home financing options.",
    image: imgHome,
  },
  {
    icon: LineChart,
    title: "Financial Consulting",
    description: "Expert guidance to optimize your finances, plan investments, and achieve long-term wealth.",
    image: imgConsulting,
  },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="section-padding relative sparkle-line-top overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/[0.025] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-silver/[0.02] rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto relative z-10" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-primary text-sm font-semibold uppercase tracking-[0.2em]">Our Services</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-6">
            Comprehensive <span className="gold-gradient-text">Financial Solutions</span>
          </h2>
          <p className="text-silver max-w-2xl mx-auto text-lg">
            From personal aspirations to business ambitions, we offer a full spectrum of financial services.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              className="group luxury-card rounded-2xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-transform duration-500"
            >
              {/* Image with animated overlay */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                {/* Animated gold shimmer on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
              </div>

              <div className="p-6">
                {/* Icon */}
                <div className="relative w-14 h-14 rounded-full gold-border-strong flex items-center justify-center mb-4 bg-primary/[0.06] group-hover:bg-primary/[0.12] transition-all duration-500 -mt-12 relative z-10">
                  <service.icon className="w-6 h-6 text-primary" />
                  <div className="absolute inset-0 rounded-full border border-primary/0 group-hover:border-primary/20 group-hover:scale-[1.3] transition-all duration-500 opacity-0 group-hover:opacity-100" />
                </div>
                <h3 className="font-display text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-silver leading-relaxed text-sm">
                  {service.description}
                </p>
                {/* Bottom gold accent line */}
                <div className="mt-4 h-px bg-gradient-to-r from-primary/40 via-primary/20 to-transparent w-0 group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
