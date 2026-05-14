import { Clock } from 'lucide-react';

const schedule = [
  { day: "Poniedziałek", hours: "07:30 - 17:00" },
  { day: "Wtorek", hours: "07:30 - 17:00" },
  { day: "Środa", hours: "07:30 - 17:00" },
  { day: "Czwartek", hours: "07:30 - 17:00" },
  { day: "Piątek", hours: "07:30 - 17:00" },
  { day: "Sobota", hours: "08:00 - 14:00" },
  { day: "Niedziela", hours: "ZAMKNIĘTE", closed: true }
];

export default function OpeningHours() {
  return (
    <section id="godziny" className="py-24 bg-bg-primary relative overflow-hidden">
      <div className="absolute left-10 top-1/2 -translate-y-1/2 font-barlow-condensed font-black text-[12rem] text-bg-dark opacity-[0.03] select-none pointer-events-none uppercase">
        TIME
      </div>
      
      <div className="max-w-4xl mx-auto px-4 md:px-6 relative">
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="w-16 h-16 bg-yellow-primary flex items-center justify-center mb-6 shadow-lg">
            <Clock size={32} className="text-bg-dark" />
          </div>
          <h2 className="font-barlow-condensed font-extrabold text-4xl md:text-5xl text-bg-dark uppercase tracking-tight">
            Godziny Otwarcia
          </h2>
          <div className="h-1 w-20 bg-yellow-primary mt-4" />
        </div>

        <div className="bg-bg-secondary border border-border-light shadow-xl overflow-hidden">
          {schedule.map((item, idx) => (
            <div 
              key={idx} 
              className={`flex items-center justify-between p-6 md:px-12 border-b border-border-light last:border-0 ${item.closed ? 'bg-red-50/50' : 'hover:bg-yellow-pale transition-colors'}`}
            >
              <span className={`font-barlow-condensed font-bold text-xl uppercase ${item.closed ? 'text-red-600' : 'text-bg-dark'}`}>
                {item.day}
              </span>
              <span className={`font-barlow-condensed font-black text-xl md:text-2xl ${item.closed ? 'text-red-700' : 'text-yellow-deep'}`}>
                {item.hours}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
