import { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Facebook, Menu, X } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'OFERTA', href: '#oferta' },
    { name: 'USŁUGI', href: '#uslugi' },
    { name: 'GODZINY', href: '#godziny' },
    { name: 'KONTAKT', href: '#kontakt' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "bg-bg-dark py-2 shadow-xl" : "bg-transparent py-4"
    )}>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className={cn(
              "font-barlow-condensed font-extrabold text-2xl md:text-3xl tracking-tight leading-none transition-colors",
              scrolled ? "text-yellow-primary" : "text-bg-dark"
            )}>
              HURTOWNIA KUROWSKI
            </span>
            <span className={cn(
              "font-barlow font-medium text-[10px] md:text-xs tracking-[0.2em] leading-none mt-1 transition-colors",
              scrolled ? "text-gray-400" : "text-dark-grey"
            )}>
              MATERIAŁY INSTALACYJNE
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "font-barlow-condensed font-bold text-sm tracking-widest hover:text-yellow-primary transition-colors",
                  scrolled ? "text-white" : "text-bg-dark"
                )}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="tel:535489480"
              className="bg-yellow-primary text-bg-dark px-4 py-2 font-barlow-condensed font-extrabold text-sm tracking-widest flex items-center gap-2 hover:bg-yellow-dark transition-all transform hover:scale-105"
            >
              <Phone size={16} />
              535 489 480
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={cn(
              "lg:hidden p-2 transition-colors",
              scrolled ? "text-white" : "text-bg-dark"
            )}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-bg-dark z-40 lg:hidden flex flex-col items-center justify-center space-y-8"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-barlow-condensed font-extrabold text-4xl text-white tracking-widest hover:text-yellow-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="flex flex-col items-center space-y-4 pt-8">
              <a 
                href="tel:535489480" 
                className="flex items-center gap-3 text-yellow-primary font-barlow-condensed font-bold text-2xl"
              >
                <Phone size={24} />
                535 489 480
              </a>
              <div className="flex gap-6 mt-4">
                <a href="https://www.facebook.com/profile.php?id=100067810644936" target="_blank" rel="noreferrer" className="text-white hover:text-yellow-primary">
                  <Facebook size={32} />
                </a>
                <a href="mailto:hurtownia.kurowski@gmail.com" className="text-white hover:text-yellow-primary">
                  <Mail size={32} />
                </a>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-white"
            >
              <X size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
