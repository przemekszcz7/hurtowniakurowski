import { Phone, Mail, MapPin, Facebook } from 'lucide-react';
import { motion } from 'motion/react';

export default function ContactSection() {
  return (
    <section id="kontakt" className="py-24 bg-bg-secondary relative overflow-hidden">
       <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-0.5 w-10 bg-yellow-primary" />
              <span className="font-barlow font-bold text-yellow-deep uppercase tracking-[0.25em] text-xs">Kontakt</span>
            </div>
            <h2 className="font-barlow-condensed font-extrabold text-4xl md:text-6xl text-bg-dark uppercase mb-10">
              Skontaktuj się <br /> z nami
            </h2>

            <div className="space-y-8">
              <a href="tel:535489480" className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-bg-dark flex items-center justify-center group-hover:bg-yellow-primary transition-colors shrink-0">
                  <Phone size={24} className="text-white group-hover:text-bg-dark" />
                </div>
                <div>
                  <div className="font-barlow text-xs font-bold text-muted uppercase tracking-widest mb-1">Telefon</div>
                  <div className="font-barlow-condensed font-black text-3xl text-bg-dark group-hover:text-yellow-deep transition-colors">
                    535 489 480
                  </div>
                </div>
              </a>

              <a href="mailto:hurtownia.kurowski@gmail.com" className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-bg-dark flex items-center justify-center group-hover:bg-yellow-primary transition-colors shrink-0">
                  <Mail size={24} className="text-white group-hover:text-bg-dark" />
                </div>
                <div>
                  <div className="font-barlow text-xs font-bold text-muted uppercase tracking-widest mb-1">E-mail</div>
                  <div className="font-barlow-condensed font-black text-2xl text-bg-dark group-hover:text-yellow-deep transition-colors">
                    hurtownia.kurowski@gmail.com
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-bg-dark flex items-center justify-center shrink-0">
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <div className="font-barlow text-xs font-bold text-muted uppercase tracking-widest mb-1">Adres</div>
                  <div className="font-barlow-condensed font-black text-2xl text-bg-dark">
                    Dworcowa 33, 68-100 Żagań
                  </div>
                </div>
              </div>

              <a 
                href="https://www.facebook.com/profile.php?id=100067810644936" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-6 group"
              >
                <div className="w-14 h-14 bg-bg-dark flex items-center justify-center group-hover:bg-[#1877F2] transition-colors shrink-0">
                  <Facebook size={24} className="text-white" />
                </div>
                <div>
                  <div className="font-barlow text-xs font-bold text-muted uppercase tracking-widest mb-1">Facebook</div>
                  <div className="font-barlow-condensed font-black text-2xl text-bg-dark group-hover:text-[#1877F2] transition-colors uppercase">
                    Profil Hurtowni
                  </div>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[450px] lg:h-auto border-4 border-white shadow-2xl relative"
          >
            <div className="warning-stripe absolute -top-4 -right-4 w-24 h-24 z-0" />
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2477.582210102034!2d15.3121016770796!3d51.612543303016245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4708a41fce691309%3A0xad31a115b11dfb8f!2zRHdvcmNvd2EgMzMsIDY4LTEwMCDFu2FnYcWE!5e0!3m2!1spl!2spl!4v1778749315259!5m2!1spl!2spl" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[0.2] hover:grayscale-0 transition-all duration-700 relative z-10"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
