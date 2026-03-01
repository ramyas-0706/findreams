import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Globe } from "lucide-react";
import cardFront from "@/assets/business-card-front.png";

const FounderCard = () => {
  return (
    <section className="section-padding sparkle-line-top">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-semibold uppercase tracking-[0.2em]">Leadership</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-4">
            Meet Our <span className="gold-gradient-text">Managing Director</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="luxury-card rounded-2xl overflow-hidden group"
          >
            <img
              src={cardFront}
              alt="Venkatesh - Managing Director, Findreams Solutions"
              className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="font-display text-2xl font-bold gold-gradient-text">Venkatesh</h3>
            <p className="text-primary text-sm font-semibold uppercase tracking-wider">Managing Director</p>
            <p className="text-silver leading-relaxed">
              Leading Findreams Solutions with a vision to make quality financial services accessible to everyone in the region and beyond.
            </p>

            <div className="space-y-3 pt-4">
              <a href="tel:+919738812375" className="flex items-center gap-3 text-silver hover:text-primary transition-colors group">
                <div className="w-10 h-10 rounded-full gold-border-strong flex items-center justify-center bg-primary/[0.06] group-hover:bg-primary/[0.15] transition-all">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm">+91 9738812375 / +91 9663971898</span>
              </a>
              <a href="mailto:findreamssolutions@gmail.com" className="flex items-center gap-3 text-silver hover:text-primary transition-colors group">
                <div className="w-10 h-10 rounded-full gold-border-strong flex items-center justify-center bg-primary/[0.06] group-hover:bg-primary/[0.15] transition-all">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm">findreamssolutions@gmail.com</span>
              </a>
              <a href="https://maps.google.com/?q=Batawadi+Tumkur+572103" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-silver hover:text-primary transition-colors group">
                <div className="w-10 h-10 rounded-full gold-border-strong flex items-center justify-center bg-primary/[0.06] group-hover:bg-primary/[0.15] transition-all">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm">Ground floor, Office-2, SLN Krupa, Mahalakshmi nagar, Batawadi Tumkur-572103</span>
              </a>
              <a href="https://www.findreamssolutions.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-silver hover:text-primary transition-colors group">
                <div className="w-10 h-10 rounded-full gold-border-strong flex items-center justify-center bg-primary/[0.06] group-hover:bg-primary/[0.15] transition-all">
                  <Globe className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm">www.findreamssolutions.com</span>
              </a>
            </div>

            <div className="pt-4">
              <a
                href="https://wa.me/919738812375?text=Hi%20Venkatesh%2C%20I%20need%20help%20with%20a%20loan."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 font-semibold hover:bg-green-500/20 transition-all"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-green-400"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderCard;
