import { ArrowRight } from "lucide-react";

const CtaSection = () => {
  const scrollToHero = () => {
    document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-28 bg-primary relative overflow-hidden">
      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `radial-gradient(circle at 30% 50%, hsl(var(--gold)) 0%, transparent 60%),
                            radial-gradient(circle at 70% 50%, hsl(var(--gold)) 0%, transparent 60%)`
        }} />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center fade-in-up">
        <span className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 text-primary-foreground/60">
          Empezá a invertir hoy
        </span>
        <h2 className="text-3xl lg:text-5xl font-bold text-primary-foreground mb-5 leading-tight">
          ¿Listo para comprar tu<br className="hidden md:block" /> departamento en pozo?
        </h2>
        <p className="text-primary-foreground/65 max-w-lg mx-auto mb-10 leading-relaxed">
          Dejanos tus datos y te enviamos los emprendimientos disponibles según
          tu zona, presupuesto y plazo de entrega.
        </p>
        <button
          onClick={scrollToHero}
          className="inline-flex items-center gap-2 bg-gold text-accent-foreground px-8 py-4 rounded-xl font-semibold text-sm hover:bg-gold/90 active:scale-[0.98] transition-all group">
          Quiero ver opciones disponibles
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
        <p className="text-primary-foreground/40 text-xs mt-5">
          Sin compromiso · Respuesta en menos de 24 hs
        </p>
      </div>
    </section>
  );
};

export default CtaSection;
