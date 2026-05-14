import { Facebook, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-dark text-white pt-20 pb-10 overflow-hidden relative">
      <div className="absolute top-0 left-0 right-0 h-1 warning-stripe" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex flex-col mb-6">
              <span className="font-barlow-condensed font-extrabold text-3xl text-yellow-primary tracking-tight leading-none">
                HURTOWNIA KUROWSKI
              </span>
              <span className="font-barlow font-medium text-xs tracking-[0.2em] text-gray-400 mt-2">
                MATERIAŁY INSTALACYJNE I BUDOWLANE
              </span>
            </div>
            <p className="font-inter text-gray-400 text-sm max-w-md leading-relaxed mt-4">
              Jesteśmy liderem w dostarczaniu profesjonalnych rozwiązań grzewczych i sanitarnych w regionie. Stawiamy na jakość, rzetelność i wieloletnie doświadczenie.
            </p>
            <div className="flex gap-4 mt-8">
              <a href="https://www.facebook.com/profile.php?id=100067810644936" target="_blank" rel="noreferrer" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-yellow-primary hover:text-bg-dark transition-colors">
                <Facebook size={20} />
              </a>
              <a href="tel:535489480" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-yellow-primary hover:text-bg-dark transition-colors">
                <Phone size={20} />
              </a>
              <a href="mailto:hurtownia.kurowski@gmail.com" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-yellow-primary hover:text-bg-dark transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
             <h4 className="font-barlow-condensed font-bold text-xl uppercase tracking-widest mb-6 border-b border-yellow-primary inline-block">Nawigacja</h4>
             <ul className="space-y-4 font-barlow text-sm">
               <li><a href="#oferta" className="text-gray-400 hover:text-yellow-primary transition-colors">Oferta</a></li>
               <li><a href="#uslugi" className="text-gray-400 hover:text-yellow-primary transition-colors">Usługi</a></li>
               <li><a href="#godziny" className="text-gray-400 hover:text-yellow-primary transition-colors">Godziny Otwarcia</a></li>
               <li><a href="#kontakt" className="text-gray-400 hover:text-yellow-primary transition-colors">Kontakt</a></li>
             </ul>
          </div>

          <div>
             <h4 className="font-barlow-condensed font-bold text-xl uppercase tracking-widest mb-6 border-b border-yellow-primary inline-block">Lokalizacja</h4>
             <address className="not-italic font-barlow text-sm text-gray-400 space-y-2">
               <p>Zdzisław Kurowski</p>
               <p>ul. Dworcowa 33</p>
               <p>68-100 Żagań</p>
               <p className="pt-2 text-white font-bold">Woj. Lubuskie</p>
             </address>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-barlow text-xs text-gray-500">
            &copy; {currentYear} Hurtownia Kurowski. Wszelkie prawa zastrzeżone.
          </p>
          <div className="flex gap-6 font-barlow text-[10px] text-gray-600 uppercase tracking-widest font-bold">
            <span>Projekt i doradztwo</span>
            <span>Instalacje Sanitarne</span>
            <span>Ogrzewanie</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
