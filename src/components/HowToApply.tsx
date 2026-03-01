import { motion } from "framer-motion";
import { FileText, Search, CheckCircle, Banknote } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Choose Your Loan",
    description: "Browse our loan categories and select the one that fits your needs.",
  },
  {
    icon: FileText,
    title: "Fill Application",
    description: "Complete the online application form with your details and documents.",
  },
  {
    icon: CheckCircle,
    title: "Get Approved",
    description: "Our team reviews your application and provides quick approval within 24–72 hours.",
  },
  {
    icon: Banknote,
    title: "Receive Funds",
    description: "Once approved, the loan amount is disbursed directly to your bank account.",
  },
];

const HowToApply = () => {
  return (
    <div className="luxury-card rounded-2xl p-8 md:p-12 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/[0.06] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-primary/[0.04] rounded-full blur-[100px]" />
      </div>

      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl font-bold mb-10 text-center relative z-10"
      >
        How to <span className="gold-gradient-text animate-shimmer-text">Apply</span>
      </motion.h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, type: "spring", stiffness: 120 }}
            whileHover={{ y: -8, scale: 1.05 }}
            className="text-center group cursor-default"
          >
            <div className="relative mx-auto mb-5 w-20 h-20">
              <div className="w-full h-full rounded-2xl gold-border-strong flex items-center justify-center bg-primary/[0.08] group-hover:bg-primary/[0.2] transition-all duration-500 group-hover:rounded-xl group-hover:rotate-6">
                <step.icon className="w-8 h-8 text-primary transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full gold-gradient-bg flex items-center justify-center text-primary-foreground text-sm font-bold shadow-lg group-hover:scale-110 transition-transform">
                {i + 1}
              </div>
              {/* Connection line */}
              {i < 3 && (
                <div className="hidden lg:block absolute top-1/2 -right-[calc(50%+16px)] w-[calc(100%-16px)] h-[2px] bg-gradient-to-r from-primary/40 to-primary/10" />
              )}
            </div>
            <h4 className="font-display text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-300">
              {step.title}
            </h4>
            <p className="text-silver text-sm leading-relaxed">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HowToApply;
