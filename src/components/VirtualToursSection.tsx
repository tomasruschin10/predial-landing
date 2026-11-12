import { Search, Zap, ShieldCheck, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Recorrés el proyecto antes de invertir",
    description: "Visualizás distribución, terminaciones y amenities antes de que la obra esté terminada.",
  },
  {
    icon: Zap,
    title: "Comparás opciones fácilmente",
    description: "Accedés a renders 3D y recorridos virtuales de múltiples emprendimientos en minutos.",
  },
  {
    icon: ShieldCheck,
    title: "Tomás decisiones con más información",
    description: "Evaluás el potencial de cada unidad antes de comprometer tu inversión.",
  },
];

const VirtualToursSection = () => {
  const scrollToHero = () => {
    document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="tours" className="py-24 bg-background">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <div className="fade-in-up">
          <span className="text-xs font-semibold tracking-widest uppercase text-gold">
            Tours virtuales
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-2 mb-4">
            Conocé el proyecto<br className="hidden md:block" /> antes de que esté construido
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-16">
            Recorridos 3D y renders fotorrealistas para que visualices tu futuro
            departamento exactamente como va a quedar.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`fade-in-up-delay-${i + 1} bg-surface border border-border rounded-2xl p-8 text-left hover:border-gold/40 hover:shadow-sm transition-all`}
            >
              <div className="w-12 h-12 bg-gold-light rounded-xl flex items-center justify-center mb-5">
                <f.icon className="w-5 h-5 text-gold" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>

        <button
          onClick={scrollToHero}
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-medium text-sm hover:bg-primary/90 transition-all group fade-in-up"
        >
          Ver emprendimientos con tour virtual
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default VirtualToursSection;
