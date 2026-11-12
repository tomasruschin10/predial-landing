import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Martín Suárez",
    date: "hace 2 meses",
    rating: 5,
    text: "Excelente atención de principio a fin. Me asesoraron muy bien en la elección del emprendimiento y estuvieron disponibles en cada etapa. Recomendable.",
    initial: "M",
  },
  {
    name: "Luciana Ferreyra",
    date: "hace 3 meses",
    rating: 5,
    text: "Muy profesionales. Compramos un departamento en pozo en Palermo y el proceso fue transparente y sin sorpresas. El equipo de Predial nos acompañó en todo.",
    initial: "L",
  },
  {
    name: "Diego Romero",
    date: "hace 4 meses",
    rating: 4,
    text: "Buena experiencia. Encontré lo que buscaba en Villa Urquiza. La financiación en pesos fue clave para cerrar la operación. Los recomiendo.",
    initial: "D",
  },
  {
    name: "Valeria Gómez",
    date: "hace 5 meses",
    rating: 5,
    text: "Primera vez invirtiendo en pozo y la verdad que Predial me generó mucha confianza. Explicaron todo con claridad y el seguimiento fue impecable.",
    initial: "V",
  },
  {
    name: "Pablo Etcheverry",
    date: "hace 6 meses",
    rating: 5,
    text: "Más de 40 años en el mercado y se nota. Conocen cada barrio, cada proyecto. La atención personalizada marca la diferencia.",
    initial: "P",
  },
];

const TestimonialsSection = () => (
  <section id="testimonios" className="py-24 bg-surface-muted">
    <div className="max-w-[1200px] mx-auto px-6">
      {/* Header */}
      <div className="mb-12 fade-in-up text-center">
        <span className="text-xs font-semibold tracking-widest uppercase text-gold">
          Testimonios
        </span>
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-2 mb-3">
          Lo que dicen nuestros clientes
        </h2>
        <div className="flex items-center justify-center gap-2 mt-4">
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star
                key={s}
                className={`w-5 h-5 ${s <= 4 ? "fill-gold text-gold" : "fill-gold/40 text-gold/40"}`}
              />
            ))}
          </div>
          <span className="text-foreground font-semibold text-sm">4.1</span>
          <span className="text-muted-foreground text-sm">· 296 reseñas en Google</span>
        </div>
      </div>

      {/* Cards grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div
            key={t.name}
            className={`fade-in-up-delay-${Math.min(i + 1, 4)} bg-surface rounded-2xl p-6 border border-border hover:border-gold/30 hover:shadow-sm transition-all`}
          >
            {/* Stars */}
            <div className="flex gap-0.5 mb-4">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star
                  key={s}
                  className={`w-4 h-4 ${s <= t.rating ? "fill-gold text-gold" : "fill-muted text-muted"}`}
                />
              ))}
            </div>

            {/* Text */}
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              "{t.text}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
                <span className="text-accent-foreground text-sm font-semibold">{t.initial}</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.date}</p>
              </div>
              {/* Google logo */}
              <div className="ml-auto">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA to Google reviews */}
      <div className="text-center mt-10">
        <a
          href="https://share.google/zQfSvvw0bnrFsqLax"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors border border-border rounded-xl px-5 py-2.5 hover:border-gold/40 bg-surface"
        >
          Ver todas las reseñas en Google
          <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
        </a>
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
