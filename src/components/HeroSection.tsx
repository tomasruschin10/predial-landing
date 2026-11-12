import { CheckCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import HubSpotForm from "@/components/HubSpotForm";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Emprendimiento moderno en Buenos Aires"
          className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-dark/65" />
      </div>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div className="fade-in-up">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase mb-6 text-primary-foreground/70">
              Emprendimientos · Buenos Aires
            </span>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Invertí en tu próximo{" "}
              <span className="text-gold">departamento en pozo</span>
            </h1>
            <p className="text-lg mb-10 leading-relaxed max-w-lg text-primary-foreground/80">
              Accedé a los mejores emprendimientos de CABA: Palermo, Belgrano,
              Villa Urquiza, Almagro y más. Financiación en pesos, entrega
              garantizada.
            </p>
            <ul className="space-y-3">
              {[
                "Emprendimientos seleccionados en CABA",
                "Financiación en pesos y cuotas",
                "Asesoramiento durante toda la obra",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-primary-foreground/85">
                  <CheckCircle className="w-5 h-5 text-primary-foreground flex-shrink-0" />
                  <span className="text-sm font-medium text-primary-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: HubSpot Form */}
          <div className="fade-in-up-delay-2 bg-surface rounded-2xl p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-foreground mb-1">
              Recibí opciones de emprendimientos
            </h2>
            <p className="text-sm text-muted-foreground mb-6">
              Completá tus datos y te enviamos proyectos según tu zona y presupuesto.
            </p>
            <HubSpotForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
