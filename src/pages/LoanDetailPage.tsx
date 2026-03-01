import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import EMICalculator from "@/components/EMICalculator";
import HowToApply from "@/components/HowToApply";
import FAQSection from "@/components/FAQSection";
import { motion } from "framer-motion";
import { useState } from "react";
import { Send, CheckCircle2, ArrowRight } from "lucide-react";

import imgPersonal from "@/assets/service-personal-loan.jpg";
import imgEducation from "@/assets/service-education-loan.jpg";
import imgBusiness from "@/assets/service-business-loan.jpg";
import imgHome from "@/assets/service-home-loan.jpg";

interface LoanInfo {
  title: string;
  highlight: string;
  subtitle: string;
  image: string;
  features: string[];
  eligibility: string[];
  documents: string[];
  details: string;
}

const loanData: Record<string, LoanInfo> = {
  personal: {
    title: "Personal",
    highlight: "Loans",
    subtitle: "Flexible personal loans tailored to your needs with competitive rates and quick disbursement.",
    image: imgPersonal,
    features: [
      "Loan amounts from ₹50,000 to ₹25,00,000",
      "Competitive interest rates starting at 10.5% p.a.",
      "Flexible tenure from 12 to 60 months",
      "Quick disbursement within 24–48 hours",
      "Minimal documentation required",
      "No collateral needed",
    ],
    eligibility: [
      "Minimum salary of ₹20,000 per month",
      "Salaried employees at recognized organizations",
      "Age: 21–58 years",
      "Minimum 1 year of work experience",
      "Good credit score (650+)",
    ],
    documents: [
      "PAN Card & Aadhaar Card",
      "Latest 3 months salary slips",
      "6 months bank statements",
      "Address proof",
      "Passport size photographs",
    ],
    details: "Our personal loans are designed for salaried professionals who need quick access to funds for any purpose — medical emergencies, travel, weddings, home renovation, or debt consolidation. With our streamlined process, you can get approved and receive funds in as little as 24 hours.",
  },
  education: {
    title: "Education",
    highlight: "Loans",
    subtitle: "Invest in your future with education financing solutions for students pursuing master's degrees abroad.",
    image: imgEducation,
    features: [
      "Covers tuition, living expenses, and travel",
      "Loan amounts up to ₹1.5 Crore for abroad studies",
      "Competitive interest rates from 8.5% p.a.",
      "Moratorium period during study + 6 months",
      "Flexible repayment up to 15 years",
      "Tax benefits under Section 80E",
    ],
    eligibility: [
      "Admission to a recognized university abroad",
      "Master's degree programs (MS, MBA, etc.)",
      "Co-applicant (parent/guardian) required",
      "Good academic record",
      "Collateral may be required for higher amounts",
    ],
    documents: [
      "Admission letter from university",
      "Mark sheets and academic records",
      "PAN & Aadhaar of student and co-applicant",
      "Income proof of co-applicant",
      "Collateral documents (if applicable)",
      "Passport and visa documents",
    ],
    details: "We specialize in helping students pursue their dream of studying abroad. Our education loan solutions cover top universities worldwide, with partnerships across major banks to ensure you get the best rates and maximum coverage for your master's program.",
  },
  business: {
    title: "Business",
    highlight: "Loans",
    subtitle: "Fuel your entrepreneurial vision with capital solutions designed for growing businesses.",
    image: imgBusiness,
    features: [
      "Loan amounts from ₹5 Lakhs to ₹5 Crores",
      "Working capital and term loan options",
      "Competitive rates starting at 12% p.a.",
      "Flexible tenure up to 7 years",
      "Collateral and non-collateral options",
      "Quick processing within 5–7 business days",
    ],
    eligibility: [
      "Business vintage of 2–3 years minimum",
      "Annual turnover of ₹30 Lakhs or above",
      "Profitable business for at least 1 year",
      "GST registration",
      "Good business and personal credit score",
    ],
    documents: [
      "Business registration documents",
      "GST returns (last 2 years)",
      "ITR for last 2–3 years",
      "Bank statements (12 months)",
      "Business plan (for new projects)",
      "Property documents (for secured loans)",
    ],
    details: "Whether you need working capital, equipment financing, or expansion funding, our business loan solutions are crafted for enterprises with proven track records. We partner with leading banks and NBFCs to offer you the most competitive terms in the market.",
  },
  home: {
    title: "Home",
    highlight: "Loans",
    subtitle: "Make your dream home a reality with affordable and transparent home financing options.",
    image: imgHome,
    features: [
      "Loan amounts up to ₹10 Crores",
      "Interest rates starting from 8.5% p.a.",
      "Tenure up to 30 years",
      "Construction, Purchase & LAP options",
      "Up to 90% of property value financed",
      "Balance transfer facility available",
    ],
    eligibility: [
      "Salaried or self-employed individuals",
      "Age: 21–65 years (at loan maturity)",
      "Minimum income: ₹25,000/month (salaried)",
      "Property must be in approved area",
      "Clear title of property",
    ],
    documents: [
      "Identity & address proof",
      "Income documents (salary slips / ITR)",
      "Property documents & agreement",
      "Property valuation report",
      "Builder approvals & NOC",
      "Bank statements (6 months)",
    ],
    details: "We offer three types of home financing: Construction Loans for building your dream home from scratch, Purchase Loans for buying a ready-to-move property, and Loan Against Property (LAP) for leveraging your existing property for funds. Our partnerships with top banks ensure you get the best rates available.",
  },
};

const LoanDetailPage = () => {
  const { type } = useParams<{ type: string }>();
  const loan = loanData[type || ""];
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", loanAmount: "", employment: "" });
  const [submitted, setSubmitted] = useState(false);

  if (!loan) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 pb-20 text-center">
          <h1 className="font-display text-4xl font-bold mb-4">Loan Not Found</h1>
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

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHero
        title={loan.title}
        highlight={loan.highlight}
        subtitle={loan.subtitle}
        breadcrumb={`Home / Services / ${loan.title} ${loan.highlight}`}
      />

      <section className="section-padding sparkle-line-top">
        <div className="container mx-auto">
          {/* Hero image + Details */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="luxury-card rounded-2xl overflow-hidden group"
            >
              <img
                src={loan.image}
                alt={`${loan.title} ${loan.highlight}`}
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="p-6">
                <p className="text-silver leading-relaxed">{loan.details}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Features */}
              <div className="luxury-card rounded-2xl p-6">
                <h3 className="font-display text-lg font-bold mb-4 gold-gradient-text">Key Features</h3>
                <ul className="space-y-3">
                  {loan.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-silver">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Eligibility */}
              <div className="luxury-card rounded-2xl p-6">
                <h3 className="font-display text-lg font-bold mb-4 gold-gradient-text">Eligibility</h3>
                <ul className="space-y-3">
                  {loan.eligibility.map((e, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-silver">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Documents */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="luxury-card rounded-2xl p-8 mb-16"
          >
            <h3 className="font-display text-xl font-bold mb-6 gold-gradient-text">Required Documents</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {loan.documents.map((d, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-muted/30 border border-border/30">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm text-silver">{d}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Apply Now Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            id="apply"
            className="luxury-card rounded-2xl p-8 md:p-10 mb-16"
          >
            <h3 className="font-display text-2xl font-bold mb-2">
              Apply for <span className="gold-gradient-text">{loan.title} {loan.highlight}</span>
            </h3>
            <p className="text-silver text-sm mb-8">Fill out the form below and our team will contact you within 24 hours.</p>

            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-4" />
                <h4 className="font-display text-2xl font-bold mb-2">Application Submitted!</h4>
                <p className="text-silver">Our team will review your application and contact you within 24 hours.</p>
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
                <div className="grid sm:grid-cols-3 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-1.5 block text-silver-light">Phone</label>
                    <input type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all" placeholder="+91 00000 00000" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block text-silver-light">Desired Amount</label>
                    <input type="text" value={formData.loanAmount} onChange={(e) => setFormData({ ...formData, loanAmount: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all" placeholder="e.g. ₹5,00,000" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block text-silver-light">Employment Type</label>
                    <select value={formData.employment} onChange={(e) => setFormData({ ...formData, employment: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border/50 text-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all">
                      <option value="">Select</option>
                      <option value="salaried">Salaried</option>
                      <option value="self-employed">Self-Employed</option>
                      <option value="business">Business Owner</option>
                      <option value="student">Student</option>
                    </select>
                  </div>
                </div>
                <button type="submit" className="gold-gradient-bg text-primary-foreground px-8 py-3.5 rounded-xl font-semibold flex items-center gap-2 transition-all gold-glow-strong hover:scale-[1.02] group">
                  Submit Application
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </motion.div>

          {/* EMI Calculator */}
          <div className="mb-16">
            <EMICalculator />
          </div>

          {/* How to Apply */}
          <div className="mb-16">
            <HowToApply />
          </div>

          {/* FAQ */}
          <FAQSection />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LoanDetailPage;
