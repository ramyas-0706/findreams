import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ShieldCheck, Zap, Handshake, Award, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: ShieldCheck,
    title: "Trusted Advisors",
    description: "Decades of expertise ensuring your financial security and growth.",
    gradient: "from-yellow-500/20 to-amber-600/20",
  },
  {
    icon: Zap,
    title: "Fast Approvals",
    description: "Streamlined processes for quick loan sanctions and disbursements.",
    gradient: "from-orange-500/20 to-yellow-500/20",
  },
  {
    icon: Handshake,
    title: "Transparent Process",
    description: "No hidden charges. Complete clarity at every step of the journey.",
    gradient: "from-amber-500/20 to-yellow-600/20",
  },
  {
    icon: Award,
    title: "Expert Guidance",
    description: "Certified professionals dedicated to your financial success.",
    gradient: "from-yellow-600/20 to-orange-500/20",
  },
];

const WhyChooseUs = () => {
  return (
    <div className="relative">
      {/* Bright ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.05] rounded-full blur-[180px]" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/[0.03] rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10">
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
            <span className="text-sm text-primary font-medium tracking-wide">Why Choose Us</span>
          </motion.div>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-6">
            The <span className="gold-gradient-text animate-shimmer-text">Findreams</span> Advantage
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 50, rotateX: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12, type: "spring" }}
              whileHover={{ y: -12, scale: 1.03 }}
              className="text-center luxury-card rounded-2xl p-8 group relative overflow-hidden cursor-default"
            >
              {/* Hover glow background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${f.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10">
                <div className="relative mx-auto mb-5 w-[72px] h-[72px]">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                    className="w-full h-full rounded-full gold-border-strong flex items-center justify-center bg-primary/[0.08] group-hover:bg-primary/[0.2] transition-all duration-500"
                  >
                    <f.icon className="w-8 h-8 text-primary" />
                  </motion.div>
                  {/* Animated rings */}
                  <div className="absolute inset-0 rounded-full border border-primary/0 group-hover:border-primary/30 group-hover:scale-[1.4] transition-all duration-700 opacity-0 group-hover:opacity-100" />
                  <div className="absolute inset-0 rounded-full border border-primary/0 group-hover:border-primary/15 group-hover:scale-[1.7] transition-all duration-1000 opacity-0 group-hover:opacity-100" />
                  <div className="absolute inset-0 rounded-full border border-primary/0 group-hover:border-primary/10 group-hover:scale-[2] transition-all duration-[1200ms] opacity-0 group-hover:opacity-100" />
                </div>
                <h3 className="font-display text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-300">{f.title}</h3>
                <p className="text-silver text-sm leading-relaxed">{f.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
