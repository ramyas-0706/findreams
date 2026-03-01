import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Shield, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/findreams-logo.png";
import heroBg from "@/assets/hero-bg.png";
import GoldParticles from "./GoldParticles";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Full background image */}
      <motion.div
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img src={heroBg} alt="" className="w-full h-full object-cover object-top" />
        {/* Strong overlays: fully opaque left side, transparent right to show people */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 from-[0%] via-[50%] to-transparent to-[80%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-background/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent" />
      </motion.div>

      <GoldParticles />

      {/* Ambient glow orbs */}
      <div className="absolute inset-0 pointer-events-none z-[1]">
        <motion.div animate={{ scale: [1, 1.15, 1], opacity: [0.03, 0.06, 0.03] }} transition={{ duration: 8, repeat: Infinity }} className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary/[0.04] rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-8 pt-28 pb-16">
        <div className="max-w-2xl">
          {/* Logo */}
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="mb-8">
            <div className="relative inline-block">
              <img src={logo} alt="Findreams Solutions" className="w-28 h-28 md:w-40 md:h-40 object-contain drop-shadow-2xl animate-float" />
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl -z-10 animate-glow-pulse" />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="inline-flex items-center gap-2 px-5 py-2 rounded-full gold-border-glow bg-primary/[0.06] mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium tracking-wide">Trusted Financial Partner</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Grow Your Dreams
            <br />
            <span className="gold-gradient-text animate-shimmer-text">With Us</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="text-silver text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
            Empowering individuals and businesses with accessible financial solutions.
            From personal loans to strategic consulting — your future starts here.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }} className="flex flex-col sm:flex-row items-start gap-4">
            <Link to="/services" className="group gold-gradient-bg text-primary-foreground px-8 py-3.5 rounded-xl font-semibold text-lg flex items-center gap-2 transition-all duration-300 gold-glow-strong hover:scale-105">
              Explore Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/contact" className="px-8 py-3.5 rounded-xl font-semibold text-lg gold-border-strong text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105">
              Apply Now
            </Link>
          </motion.div>
        </div>

        {/* Bottom trust badges - matching the reference image style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-16 flex flex-wrap items-center gap-6 md:gap-0 md:divide-x divide-primary/30"
        >
          {[
            { icon: Shield, text: "RBI Compliant" },
            { icon: Users, text: "10,000+ Happy Clients" },
            { icon: Zap, text: "Fast Approval in 24 Hours" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-3 md:px-8 first:pl-0">
              <div className="w-10 h-10 rounded-full gold-border-strong flex items-center justify-center bg-primary/[0.08]">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm md:text-base font-medium text-foreground">{text}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-primary/60" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
