import { motion } from 'motion/react';
import { Flame, Thermometer, Pipette, Bath, Filter, Droplet, Settings, PenTool, Truck } from 'lucide-react';
import SectionDivider from './SectionDivider';

const offerCategories = [
  {
    id: "01",
    title: "Źródła ciepła",
    icon: <Flame size={32} />,
    items: [
      "Piece na drewno 5 klasy",
      "Kotły na Pelet i Ekogroszek",
      "Piece Gazowe",
      "Pompy Ciepła",
      "Panele słoneczne",
      "Podgrzewacze wody gazowe i elektryczne"
    ]
  },
  {
    id: "02",
    title: "Ogrzewanie",
    icon: <Thermometer size={32} />,
    items: [
      "Grzejniki panelowe, żeberkowe, ozdobne oraz łazienkowe",
      "Ogrzewanie podłogowe"
    ]
  },
  {
    id: "03",
    title: "Systemy instalacyjne",
    icon: <Pipette size={32} />,
    items: [
      "Kształtki mosiężne, chromowane, ocynkowane, czarne",
      "C.U Lut i Zacisk / PEX / PE / PP / Stal",
      "Kanalizacja fi 32 - 250",
      "System drenarski",
      "Rury czarne i ocynkowane"
    ]
  },
  {
    id: "04",
    title: "Wyposażenie łazienek",
    icon: <Bath size={32} />,
    items: [
      "Wanny i zabudowy, kabiny i brodziki",
      "Odpływy liniowe",
      "Umywalki i meble łazienkowe",
      "Armatura: baterie, deszczownice",
      "Spłuczki podtynkowe, muszle, bidety i pisuary"
    ]
  },
  {
    id: "05",
    title: "Pompy i urządzenia",
    icon: <Droplet size={32} />,
    items: [
      "Pompy obiegowe, basenowe, hydroforowe",
      "Pompy do studni, zatapialne, szlamowe",
      "Rozdrabniacze do WC",
      "Wodomierze"
    ]
  },
  {
    id: "06",
    title: "Akcesoria i inne",
    icon: <Settings size={32} />,
    items: [
      "Filtry i stacje zmiękczania wody",
      "Przydomowe oczyszczalnie ścieków",
      "Wymienniki ciepłej wody",
      "Naczynia przeponowe i wyrównawcze",
      "Pelet i sól do uzdatniaczy"
    ]
  }
];

const services = [
  {
    icon: <PenTool className="text-yellow-deep" size={24} />,
    title: "Doradztwo i Projektowanie",
    desc: "Pomagamy w doborze optymalnych rozwiązań oraz projektowaniu instalacji."
  },
  {
    icon: <Settings className="text-yellow-deep" size={24} />,
    title: "Montaż i Modernizacja",
    desc: "Zajmujemy się montażem źródeł ciepła oraz modernizacją instalacji."
  },
  {
    icon: <Truck className="text-yellow-deep" size={24} />,
    title: "Transport",
    desc: "Oferujemy transport na terenie województwa Lubuskiego i Dolnośląskiego."
  }
];

export default function OfferSection() {
  return (
    <>
      <section id="oferta" className="py-24 bg-bg-secondary relative">
        <div className="absolute inset-x-0 top-0 h-40 grid-light opacity-5" />
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-0.5 w-10 bg-yellow-primary" />
            <span className="font-barlow font-bold text-yellow-deep uppercase tracking-[0.25em] text-xs">Asortyment</span>
          </div>
          
          <h2 className="font-barlow-condensed font-extrabold text-4xl md:text-6xl text-bg-dark uppercase mb-16 relative">
            W NASZEJ OFERCIE <br /> ZNAJDĄ PAŃSTWO:
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerCategories.map((cat, idx) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 relative overflow-hidden group shadow-sm hover:shadow-xl transition-all border-l-4 border-yellow-primary"
              >
                <div className="absolute top-4 right-4 font-barlow-condensed font-black text-6xl text-bg-dark opacity-5 group-hover:opacity-10 transition-opacity">
                  {cat.id}
                </div>
                <div className="text-yellow-deep mb-6 transform group-hover:scale-110 transition-transform origin-left">
                  {cat.icon}
                </div>
                <h3 className="font-barlow-condensed font-bold text-2xl text-bg-dark uppercase mb-6 tracking-wide">
                  {cat.title}
                </h3>
                <ul className="space-y-3">
                  {cat.items.map((item, i) => (
                    <li key={i} className="font-inter text-sm text-dark-grey flex items-start gap-2">
                       <span className="text-yellow-deep font-bold mt-1.5 h-1.5 w-1.5 bg-yellow-deep shrink-0 shadow-[0_0_8px_rgba(204,153,0,0.5)]" />
                       {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      <section id="uslugi" className="py-24 bg-bg-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-0.5 w-10 bg-yellow-primary" />
            <span className="font-barlow font-bold text-yellow-primary uppercase tracking-[0.25em] text-xs">Uslugi</span>
          </div>
          
          <h2 className="font-barlow-condensed font-extrabold text-4xl md:text-6xl text-white uppercase mb-16">
            Zajmujemy się również:
          </h2>

          <div className="grid md:grid-cols-3 gap-12 mb-20">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="flex flex-col gap-6"
              >
                <div className="w-16 h-16 bg-white/5 border border-white/10 flex items-center justify-center">
                  {service.icon}
                </div>
                <div>
                  <h3 className="font-barlow-condensed font-bold text-2xl text-yellow-primary uppercase mb-4">
                    {service.title}
                  </h3>
                  <p className="font-inter text-gray-400 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border-2 border-yellow-primary p-8 md:p-12 text-center relative overflow-hidden"
          >
            <div className="warning-stripe absolute inset-x-0 top-0 h-1" />
            <h3 className="font-barlow-condensed font-extrabold text-3xl md:text-5xl text-yellow-primary uppercase mb-4">
              Oferujemy transport
            </h3>
            <p className="font-inter text-xl text-white max-w-2xl mx-auto">
              Zapewniamy dostawę zakupionych materiałów na terenie województwa <span className="text-yellow-primary font-bold">Lubuskiego i Dolnośląskiego</span>.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
