import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle, ArrowLeft, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";

const Gracias = () => {
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
        <div className="w-full max-w-md text-center py-20">
          {/* Icon */}
          <div className="w-20 h-20 bg-gold-light rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-10 h-10 text-gold" />
          </div>

          {/* Heading */}
          <h1 className="text-3xl font-bold text-foreground mb-3">
            ¡Recibimos tu consulta!
          </h1>
          <p className="text-muted-foreground text-base leading-relaxed mb-10">
            Uno de nuestros asesores se va a comunicar con vos en las próximas horas con las mejores opciones según tu zona y presupuesto.
          </p>

          {/* What's next card */}
          <div className="bg-surface border border-border rounded-2xl p-6 mb-8 text-left space-y-4">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">
              ¿Qué pasa ahora?
            </p>
            {[
              { step: "1", text: "Revisamos tu consulta y tus preferencias de zona." },
              { step: "2", text: "Te enviamos emprendimientos disponibles que se ajustan a tu búsqueda." },
              { step: "3", text: "Coordinamos una reunión o llamada para asesorarte sin compromiso." },
            ].map(({ step, text }) => (
              <div key={step} className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-gold text-accent-foreground text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  {step}
                </span>
                <p className="text-sm text-foreground leading-relaxed">{text}</p>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://wa.me/5491100000000?text=Hola%2C%20quiero%20saber%20más%20sobre%20los%20emprendimientos"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-gold text-accent-foreground font-semibold py-3.5 rounded-xl hover:bg-gold/90 active:scale-[0.98] transition-all text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              Escribinos por WhatsApp
            </a>
            <button
              onClick={() => navigate("/")}
              className="flex-1 flex items-center justify-center gap-2 border border-border text-foreground font-medium py-3.5 rounded-xl hover:bg-muted transition-all text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver al inicio
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Gracias;
