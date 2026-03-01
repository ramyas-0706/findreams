import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import FAQSection from "@/components/FAQSection";
import FounderCard from "@/components/FounderCard";
import { MapPin, Mail, Phone, Send, Clock } from "lucide-react";
import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHero
        title="Get In"
        highlight="Touch"
        subtitle="Ready to take the next step? Reach out and let us guide your financial journey."
        breadcrumb="Home / Contact"
      />

      <section className="section-padding sparkle-line-top">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            {/* Info */}
            <div className="space-y-6">
              <div className="luxury-card rounded-2xl p-8 space-y-6">
                {[
                  { Icon: MapPin, title: "Our Office", text: "Ground floor, Office-2, SLN Krupa, Mahalakshmi nagar, 2phase, Batawadi Tumkur-572103", href: "https://maps.google.com/?q=Batawadi+Tumkur+572103" },
                  { Icon: Mail, title: "Email", text: "findreamssolutions@gmail.com", href: "mailto:findreamssolutions@gmail.com" },
                  { Icon: Phone, title: "Phone", text: "+91 9738812375 / +91 9663971898", href: "tel:+919738812375" },
                  { Icon: Clock, title: "Business Hours", text: "9:00 AM – 7:00 PM (Mon–Sat)", href: undefined },
                ].map(({ Icon, title, text, href }) => {
                  const Wrapper = href ? 'a' : 'div';
                  const linkProps = href ? { href, target: href.startsWith("http") ? "_blank" : undefined, rel: "noopener noreferrer" } : {};
                  return (
                    <Wrapper key={title} {...linkProps as any} className="flex items-start gap-4 group cursor-pointer">
                      <div className="relative shrink-0">
                        <div className="w-12 h-12 rounded-full gold-border-strong flex items-center justify-center bg-primary/[0.06] group-hover:bg-primary/[0.15] transition-all duration-300">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{title}</h4>
                        <p className="text-silver text-sm">{text}</p>
                      </div>
                    </Wrapper>
                  );
                })}
              </div>

              <a
                href="https://wa.me/919738812375?text=Hi%20Findreams%2C%20I%20need%20help%20with%20a%20loan."
                target="_blank"
                rel="noopener noreferrer"
                className="luxury-card rounded-2xl p-6 flex items-center gap-4 group hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center group-hover:bg-green-500/20 transition-all">
                  <svg viewBox="0 0 24 24" className="w-7 h-7 fill-green-500"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </div>
                <div>
                  <h4 className="font-semibold text-green-400">Chat on WhatsApp</h4>
                  <p className="text-silver text-sm">Quick response guaranteed</p>
                </div>
              </a>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="luxury-card rounded-2xl p-8 space-y-5">
              <h3 className="font-display text-xl font-bold gold-gradient-text mb-2">Send Us a Message</h3>
              <div>
                <label className="text-sm font-medium mb-1.5 block text-silver-light">Full Name</label>
                <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all" placeholder="Your name" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-1.5 block text-silver-light">Email</label>
                  <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block text-silver-light">Phone</label>
                  <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all" placeholder="+91 00000 00000" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block text-silver-light">Message</label>
                <textarea rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all resize-none" placeholder="How can we help you?" />
              </div>
              <button type="submit" className="w-full gold-gradient-bg text-primary-foreground py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all gold-glow-strong hover:scale-[1.02] group">
                Send Message
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* FAQ */}
          <FAQSection />
        </div>
      </section>

      {/* Founder / Leadership */}
      <FounderCard />

      <Footer />
    </div>
  );
};

export default ContactPage;
