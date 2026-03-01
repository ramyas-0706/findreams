import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { Target, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import aboutImage from "@/assets/about-finance.jpg";

const Counter = ({ end, label, suffix = "+" }: { end: number; label: string; suffix?: string }) => {
  const { ref, isVisible } = useScrollAnimation();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 2000;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, end]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-4xl md:text-5xl font-bold gold-gradient-text mb-2">
        {isVisible ? count.toLocaleString() : "0"}{suffix}
      </div>
      <div className="text-silver text-sm font-medium tracking-wide">{label}</div>
    </div>
  );
};

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHero
        title="About"
        highlight="Findreams"
        subtitle="A premier financial services company dedicated to making quality financial products accessible to everyone."
        breadcrumb="Home / About Us"
      />

      <section className="section-padding sparkle-line-top">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-5 gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2 luxury-card rounded-2xl overflow-hidden relative group"
            >
              <img src={aboutImage} alt="Financial consulting" className="w-full h-full object-cover min-h-[280px] transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-display text-lg font-bold gold-gradient-text">Trusted Partnership</p>
                <p className="text-silver text-sm mt-1">Building lasting financial relationships</p>
              </div>
            </motion.div>

            <div className="lg:col-span-3 grid gap-6">
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="luxury-card rounded-2xl p-8 hover:-translate-y-1 transition-all duration-500 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 rounded-full gold-border-strong flex items-center justify-center bg-primary/[0.08] group-hover:bg-primary/[0.15] transition-all">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold">Our Mission</h3>
                </div>
                <p className="text-silver leading-relaxed">
                  Empower individuals and businesses through accessible, transparent, and innovative financial solutions that drive growth and prosperity.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="luxury-card rounded-2xl p-8 hover:-translate-y-1 transition-all duration-500 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 rounded-full gold-border-strong flex items-center justify-center bg-primary/[0.08] group-hover:bg-primary/[0.15] transition-all">
                    <Eye className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold">Our Vision</h3>
                </div>
                <p className="text-silver leading-relaxed">
                  Become a nationally trusted and globally recognized financial solutions provider, setting new standards in customer-centric financial services.
                </p>
              </motion.div>
            </div>
          </div>

          <div className="luxury-card rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <Counter end={5000} label="Clients Served" />
              <Counter end={10} label="Years Experience" />
              <Counter end={20} label="Financial Products" />
              <Counter end={98} label="% Satisfaction" suffix="%" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
