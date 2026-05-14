import { motion } from 'motion/react';
import { ArrowRight, Drill, Warehouse, Truck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-light z-0" />
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 font-barlow-condensed font-black text-[20rem] text-yellow-primary opacity-5 select-none pointer-events-none hidden xl:block">
        KUROWSKI
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-yellow-primary" />
              <span className="font-barlow font-bold text-yellow-deep uppercase tracking-[0.3em] text-xs">
                Profesjonalizm & Doświadczenie
              </span>
            </div>
            
            <h1 className="font-barlow-condensed font-extrabold text-6xl md:text-8xl text-bg-dark leading-[0.9] uppercase mb-8">
              Twój partner <br />
              <span className="text-yellow-deep">w świecie instalacji</span>
            </h1>
            
            <p className="font-inter text-dark-grey text-lg max-w-lg mb-10 leading-relaxed">
              Dostarczamy kompletne systemy grzewcze, sanitarne i wyposażenie łazienek dla wykonawców oraz klientów indywidualnych w Żaganiu i okolicach.
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href="#oferta"
                className="bg-bg-dark text-white px-8 py-4 font-barlow-condensed font-bold text-lg tracking-widest flex items-center gap-3 hover:bg-black transition-all group"
              >
                SPRAWDŹ OFERTĘ
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#kontakt"
                className="border-2 border-bg-dark text-bg-dark px-8 py-4 font-barlow-condensed font-bold text-lg tracking-widest flex items-center gap-3 hover:bg-bg-dark hover:text-white transition-all"
              >
                KONTAKT
              </a>
            </div>
          </motion.div>

          {/* Stats/Visual Area */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-bg-dark p-8 flex flex-col justify-between min-h-[220px] shadow-lg relative overflow-hidden"
            >
              <div className="warning-stripe absolute top-0 left-0 right-0 h-1.5" />
              <Truck size={40} className="text-yellow-primary mb-4" />
              <div>
                <div className="font-barlow-condensed font-black text-5xl text-yellow-primary leading-none uppercase">TRANSPORT</div>
                <div className="font-barlow font-bold text-white text-[10px] tracking-widest uppercase mt-2">Woj. Lubuskie i Dolnośląskie</div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-bg-secondary border border-border-light p-8 flex flex-col justify-between min-h-[220px] shadow-lg"
            >
              <Drill size={40} className="text-yellow-deep mb-4" />
              <div>
                <div className="font-barlow-condensed font-black text-5xl text-bg-dark leading-none">DORADZTWO</div>
                <div className="font-barlow font-bold text-dark-grey text-[10px] tracking-widest uppercase mt-2">Pomoc techniczna i projektowanie</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
