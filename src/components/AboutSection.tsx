import aboutTeam from "@/assets/about-team.jpg";
import { ArrowRight } from "lucide-react";

const AboutSection = () => {
  const scrollToHero = () => {
    document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="nosotros" className="py-24 bg-surface-muted">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] fade-in-up order-2 lg:order-1">
            <img
              src={aboutTeam}
              alt="Equipo Predial"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-surface/95 backdrop-blur-sm rounded-xl p-4 flex items-center gap-4">
                <div className="bg-gold-light rounded-full p-3">
                  <span className="text-xl">🏗️</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">+50 emprendimientos</p>
                  <p className="text-xs text-muted-foreground">Proyectos comercializados en CABA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="fade-in-up-delay-2 order-1 lg:order-2">
            <span className="text-xs font-semibold tracking-widest uppercase text-gold">
              Quiénes somos
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-2 mb-6 leading-tight">
              Especialistas en{" "}
              <span className="text-gold">emprendimientos desde el pozo</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Somos parte del Grupo Predial, referentes en la comercialización
                de emprendimientos de primera línea en Buenos Aires. Trabajamos
                con los desarrolladores más reconocidos de la ciudad.
              </p>
              <p>
                Te acompañamos desde la elección del proyecto hasta la escritura:
                analizamos planos, cronogramas de obra, fideicomisios y opciones
                de financiación para que tu inversión sea segura.
              </p>
              <p>
                Nuestro equipo conoce barrio por barrio el mercado de pozo:
                dónde invertir, qué proyectos tienen mejor proyección y cómo
                maximizar tu capital.
              </p>
            </div>
            <button
              onClick={scrollToHero}
              className="mt-8 inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-xl font-medium text-sm hover:bg-primary/90 transition-all group"
            >
              Hablar con un asesor
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
