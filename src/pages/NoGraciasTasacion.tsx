import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, ArrowLeft, MessageCircle, Home } from "lucide-react";
import logo from "@/assets/logo.png";

const NoGraciasTasacion = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Minimal Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-primary border-b border-primary-foreground/10">
        <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center">
          <button onClick={() => navigate("/")} className="flex items-center">
            <img src={logo} alt="Predial Emprendimientos" className="h-9 object-contain" />
          </button>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 flex items-center justify-center px-6 pt-16">
        <div className="w-full max-w-lg text-center py-20">

          {/* Icon */}
          <div className="w-20 h-20 bg-gold-light rounded-full flex items-center justify-center mx-auto mb-8">
            <MapPin className="w-10 h-10 text-gold" />
          </div>

          {/* Heading */}
          <h1 className="text-3xl font-bold text-foreground mb-3">
            Solo operamos en CABA
          </h1>
          <p className="text-muted-foreground text-base leading-relaxed mb-10">
            Gracias por contactarnos. Por el momento, nuestro equipo de tasación
            trabaja exclusivamente con propiedades ubicadas en la Ciudad Autónoma
            de Buenos Aires.
          </p>

          {/* Info card */}
          <div className="bg-surface border border-border rounded-2xl p-6 mb-8 text-left space-y-4">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">
              ¿Dónde sí trabajamos?
            </p>
            {[
              { icon: "📍", text: "Almagro, Palermo, Belgrano y Villa Urquiza" },
              { icon: "🏙️", text: "Todos los barrios de la Ciudad de Buenos Aires" },
              { icon: "🏢", text: "Departamentos, PH y unidades en emprendimientos CABA" },
            ].map(({ icon, text }) => (
              <div key={text} className="flex items-start gap-3">
                <span className="text-lg flex-shrink-0 mt-0.5">{icon}</span>
                <p className="text-sm text-foreground leading-relaxed">{text}</p>
              </div>
            ))}
          </div>

          {/* Suggestion */}
          <div className="bg-gold-light border border-gold/20 rounded-2xl p-5 mb-8 text-left">
            <p className="text-sm font-semibold text-foreground mb-1">
              ¿Tenés una propiedad en CABA?
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Si además tenés o conocés una propiedad en la ciudad, podemos
              ayudarte. Escribinos y te asesoramos sin cargo.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://wa.me/5491162216632?text=Hola%2C%20quisiera%20consultar%20sobre%20una%20propiedad%20en%20CABA"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-gold text-accent-foreground font-semibold py-3.5 rounded-xl hover:bg-gold/90 active:scale-[0.98] transition-all text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              Consultanos igual
            </a>
            <button
              onClick={() => navigate("/")}
              className="flex-1 flex items-center justify-center gap-2 border border-border text-foreground font-medium py-3.5 rounded-xl hover:bg-muted transition-all text-sm"
            >
              <Home className="w-4 h-4" />
              Ver emprendimientos
            </button>
          </div>

          {/* Back link */}
          <button
            onClick={() => navigate(-1)}
            className="mt-6 flex items-center justify-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mx-auto"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Volver atrás
          </button>

        </div>
      </main>
    </div>
  );
};

export default NoGraciasTasacion;
