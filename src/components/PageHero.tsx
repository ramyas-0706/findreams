import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  highlight: string;
  subtitle: string;
  breadcrumb: string;
}

const PageHero = ({ title, highlight, subtitle, breadcrumb }: PageHeroProps) => {
  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden sparkle-line-bottom">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-[150px]" />
        <div
          className="absolute inset-0 opacity-[0.01]"
          style={{
            backgroundImage: `linear-gradient(hsl(43 74% 49% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(43 74% 49% / 0.3) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>
      <div className="container mx-auto relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-primary text-sm font-semibold uppercase tracking-[0.2em] mb-4"
        >
          {breadcrumb}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-display text-4xl md:text-6xl font-bold mb-6"
        >
          {title} <span className="gold-gradient-text">{highlight}</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-silver text-lg max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
};

export default PageHero;
