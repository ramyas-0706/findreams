import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What documents are required for a personal loan?",
    a: "You'll need a valid ID proof (Aadhaar/PAN), address proof, latest 3 months' salary slips, 6 months' bank statements, and passport-size photographs.",
  },
  {
    q: "What is the minimum salary required for a personal loan?",
    a: "A minimum monthly salary of ₹20,000 is required to be eligible for a personal loan through Findreams Solutions.",
  },
  {
    q: "How long does the loan approval process take?",
    a: "Our streamlined process typically takes 24–72 hours from application submission to loan sanction, subject to document verification.",
  },
  {
    q: "Can I apply for a business loan as a startup?",
    a: "Yes, but we require a minimum business vintage of 2–3 years and an annual turnover of at least ₹30 lakhs for business loan eligibility.",
  },
  {
    q: "What types of home loans do you offer?",
    a: "We offer Construction Loans for building a new home, Purchase Loans for buying a ready property, and Loan Against Property (LAP) for leveraging your existing property.",
  },
  {
    q: "Is there any prepayment penalty?",
    a: "Prepayment terms vary by loan type. Personal and home loans typically have no prepayment penalty after a lock-in period. Contact us for specific details.",
  },
  {
    q: "What are your office hours?",
    a: "Our office operates from 9:00 AM to 7:00 PM, Monday to Saturday. You can reach us via phone, email, or visit our office in Tumakuru, Karnataka.",
  },
];

const FAQSection = () => {
  return (
    <div className="luxury-card rounded-2xl p-8 md:p-10">
      <h3 className="font-display text-2xl font-bold mb-6">
        Frequently Asked <span className="gold-gradient-text">Questions</span>
      </h3>
      <Accordion type="single" collapsible className="space-y-2">
        {faqs.map((faq, i) => (
          <AccordionItem
            key={i}
            value={`faq-${i}`}
            className="border-border/30 px-4 rounded-xl luxury-card"
          >
            <AccordionTrigger className="text-left text-sm font-semibold hover:text-primary hover:no-underline">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-silver text-sm leading-relaxed">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQSection;
