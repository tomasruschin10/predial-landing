import { useState, type ReactNode } from "react";
import { MapPin, XCircle } from "lucide-react";

interface CabaGateProps {
  children: ReactNode;
}

const CabaGate = ({ children }: CabaGateProps) => {
  const [answer, setAnswer] = useState<"yes" | "no" | null>(null);

  if (answer === "yes") return <>{children}</>;

  if (answer === "no") {
    return (
      <div className="text-center py-6">
        <XCircle className="w-12 h-12 text-gold mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-foreground mb-2">
          Lo sentimos, tu propiedad no califica
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Operamos exclusivamente en la Ciudad Autónoma de Buenos Aires (CABA), por lo que no
          podemos realizar tasaciones fuera de esta zona.
        </p>
        <button
          onClick={() => setAnswer(null)}
          className="mt-6 text-xs text-muted-foreground underline hover:text-foreground"
        >
          Me equivoqué, volver
        </button>
      </div>
    );
  }

  return (
    <div className="py-4">
      <div className="flex items-center gap-2 mb-4">
        <MapPin className="w-5 h-5 text-gold" />
        <p className="font-semibold text-foreground">¿Tu propiedad está ubicada en CABA?</p>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={() => setAnswer("yes")}
          className="bg-gold text-accent-foreground font-semibold py-3 rounded-xl hover:bg-gold/90 transition-all text-sm"
        >
          Sí
        </button>
        <button
          onClick={() => setAnswer("no")}
          className="border border-border text-foreground font-semibold py-3 rounded-xl hover:border-gold/40 transition-all text-sm"
        >
          No
        </button>
      </div>
    </div>
  );
};

export default CabaGate;
