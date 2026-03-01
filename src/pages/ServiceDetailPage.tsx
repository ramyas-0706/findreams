import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import { CheckCircle2, Send, FileText, Receipt, TrendingUp } from "lucide-react";
import { useState } from "react";

interface ServiceInfo {
  title: string;
  highlight: string;
  subtitle: string;
  icon: typeof FileText;
  details: string;
  offerings: string[];
  suitableFor: string[];
  whyChoose: string[];
}

const serviceData: Record<string, ServiceInfo> = {
  "income-tax": {
    title: "Income Tax",
    highlight: "Filing Services",
    subtitle: "Hassle-free Income Tax Return (ITR) filing for individuals and businesses. File on time, avoid penalties!",
    icon: FileText,
    details: "We provide comprehensive Income Tax Return filing services for salaried individuals, self-employed professionals, business owners, freelancers, and senior citizens. Our expert team ensures accurate filing, maximum deductions, and complete compliance with the latest tax regulations.",
    offerings: [
      "Accurate ITR Filing for all categories",
      "Tax Planning & Saving Advice",
      "Notice Handling & Compliance Support",
      "Capital Gains Filing",
      "Refund Processing Support",
      "Previous year return filing",
      "Tax audit assistance",
    ],
    suitableFor: [
      "Salaried Individuals",
      "Self-employed Professionals",
      "Business Owners",
      "Freelancers",
      "Senior Citizens",
    ],
    whyChoose: [
      "Expert CA-guided filing process",
      "Maximum tax savings & deductions",
      "Timely filing to avoid penalties",
      "Complete confidentiality guaranteed",
      "Affordable pricing packages",
    ],
  },
  "gst-filing": {
    title: "GST Registration",
    highlight: "& Filing Services",
    subtitle: "Stay GST compliant with our comprehensive registration, filing, and reconciliation services.",
    icon: Receipt,
    details: "We help businesses of all sizes stay fully GST compliant. From initial registration to monthly/quarterly return filing, annual returns, and handling GST notices — our team ensures you never miss a deadline and always remain stress-free about compliance.",
    offerings: [
      "GST Registration",
      "Monthly/Quarterly GST Return Filing",
      "GST Reconciliation",
      "GST Annual Return (GSTR-9)",
      "GST Notice & Compliance Support",
      "GST Amendment & Cancellation",
      "E-way Bill Generation Support",
    ],
    suitableFor: [
      "Traders & Retailers",
      "Manufacturers",
      "Service Providers",
      "E-commerce Sellers",
      "Startups & MSMEs",
    ],
    whyChoose: [
      "Timely filing — never miss a deadline",
      "Expert reconciliation & error-free returns",
      "End-to-end compliance management",
      "Dedicated support for notices",
      "Transparent & affordable pricing",
    ],
  },
  "investment-guidance": {
    title: "Investment Guidance",
    highlight: "& Financial Planning",
    subtitle: "Smart investment decisions based on your goals. Safe, strategic, long-term wealth growth.",
    icon: TrendingUp,
    details: "We guide you in making informed investment decisions tailored to your financial goals, risk appetite, and timeline. Whether you're planning for retirement, saving taxes, or building wealth — our personalized advice ensures your money works harder for you.",
    offerings: [
      "Mutual Fund Investments",
      "SIP Planning & Management",
      "Retirement Planning",
      "Tax-Saving Investments (ELSS, PPF, NPS)",
      "Portfolio Review & Risk Analysis",
      "Goal-based Financial Planning",
      "Insurance Advisory",
    ],
    suitableFor: [
      "First-time Investors",
      "Salaried Professionals",
      "Business Owners",
      "Retirees & Senior Citizens",
      "High Net-worth Individuals",
    ],
    whyChoose: [
      "Personalized investment strategy",
      "Focus on safe & long-term wealth growth",
      "Regular portfolio reviews",
      "Unbiased & transparent advice",
      "Experienced financial advisors",
    ],
  },
};

const ServiceDetailPage = () => {
  const { type } = useParams<{ type: string }>();
  const service = serviceData[type || ""];
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  if (!service) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 pb-20 text-center">
          <h1 className="font-display text-4xl font-bold mb-4">Service Not Found</h1>
          <Link to="/services" className="text-primary hover:underline">View all services →</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHero
        title={service.title}
        highlight={service.highlight}
        subtitle={service.subtitle}
        breadcrumb={`Home / Services / ${service.title} ${service.highlight}`}
      />

      <section className="section-padding sparkle-line-top">
        <div className="container mx-auto">
          {/* About + Offerings */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="luxury-card rounded-2xl p-8"
            >
              <div className="w-16 h-16 rounded-full gold-border-strong flex items-center justify-center mb-6 bg-primary/[0.08]">
                <Icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">
                About This <span className="gold-gradient-text">Service</span>
              </h3>
              <p className="text-silver leading-relaxed">{service.details}</p>

              <div className="mt-8">
                <h4 className="font-display text-lg font-bold mb-4 gold-gradient-text">Suitable For</h4>
                <div className="flex flex-wrap gap-2">
                  {service.suitableFor.map((item, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="luxury-card rounded-2xl p-6">
                <h3 className="font-display text-lg font-bold mb-4 gold-gradient-text">What We Offer</h3>
                <ul className="space-y-3">
                  {service.offerings.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-silver">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="luxury-card rounded-2xl p-6">
                <h3 className="font-display text-lg font-bold mb-4 gold-gradient-text">Why Choose Us</h3>
                <ul className="space-y-3">
                  {service.whyChoose.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-silver">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Enquiry Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="luxury-card rounded-2xl p-8 md:p-10"
          >
            <h3 className="font-display text-2xl font-bold mb-2">
              Book Your <span className="gold-gradient-text">Consultation</span>
            </h3>
            <p className="text-silver text-sm mb-8">Fill out the form and our team will contact you within 24 hours.</p>

            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-4" />
                <h4 className="font-display text-2xl font-bold mb-2">Enquiry Submitted!</h4>
                <p className="text-silver">Our team will reach out to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-1.5 block text-silver-light">Full Name</label>
                    <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all" placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block text-silver-light">Email</label>
                    <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all" placeholder="your@email.com" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block text-silver-light">Phone</label>
                  <input type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all" placeholder="+91 00000 00000" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block text-silver-light">Message (Optional)</label>
                  <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={3} className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all resize-none" placeholder="Tell us about your requirements..." />
                </div>
                <button type="submit" className="gold-gradient-bg text-primary-foreground px-8 py-3.5 rounded-xl font-semibold flex items-center gap-2 transition-all gold-glow-strong hover:scale-[1.02] group">
                  Book Consultation
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetailPage;
