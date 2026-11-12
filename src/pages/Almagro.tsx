import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { CheckCircle, MapPin, BedDouble, Bath, Car, ArrowRight, ChevronLeft, ChevronRight, Star, Clock, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import HubSpotForm from "@/components/HubSpotForm";
import heroBg from "@/assets/hero-bg.jpg";
import aboutTeam from "@/assets/about-team.jpg";

// ── Propiedades de Almagro ──────────────────────────────────────────────────
const properties = [
  {
    slug: null,
    id: 1,
    image: "https://predial.ar/wp-content/uploads/2026/02/39679_71073899028990413328624142776075570836872456661275394649622492606545959304910-1067x600.jpg",
    location: "Almagro",
    price: "Consultar precio",
    title: "Humahuaca 3900 · 1, 2 y 3 ambientes en pozo",
    sqm: 38,
    beds: 1,
    baths: 1,
    garage: false,
    entrega: "2026",
  },
  {
    slug: null,
    id: 2,
    image: "https://predial.ar/wp-content/uploads/2026/02/66518_44327868533353209463125948779197643956197912307383874810844849753179517413760-881x600.jpg",
    location: "Almagro / Palermo",
    price: "Consultar precio",
    title: "Atacalco 1700 · Monoambientes y 2 ambientes con amenities",
    sqm: 42,
    beds: 1,
    baths: 1,
    garage: false,
    entrega: "2026",
  },
  {
    slug: "/emprendimiento/montaneses-2400",
    id: 3,
    image: "https://predial.ar/wp-content/uploads/2026/02/58466_46224271198343283133956269440519186955083430107073655160591272647994198295503-1067x600.jpg",
    location: "Belgrano / Almagro",
    price: "Consultar precio",
    title: "Montañeses 2400 · 2 y 3 ambientes con amenities",
    sqm: 75,
    beds: 2,
    baths: 2,
    garage: true,
    entrega: "2027",
  },
];

const testimonials = [
  {
    name: "Cecilia Morán",
    date: "hace 1 mes",
    rating: 5,
    text: "Compré mi primer departamento en Almagro gracias al equipo de Predial. Me guiaron en cada paso y la financiación en pesos fue clave para cerrar la operación.",
    initial: "C",
  },
  {
    name: "Rodrigo Villegas",
    date: "hace 3 meses",
    rating: 5,
    text: "El barrio de Almagro está creciendo muchísimo y Predial conoce perfectamente los proyectos disponibles. Muy buena experiencia de principio a fin.",
    initial: "R",
  },
  {
    name: "Natalia Benítez",
    date: "hace 4 meses",
    rating: 4,
    text: "Me recomendaron emprendimientos según mi presupuesto y zona. Terminé comprando en Almagro, cerca de todo. Los recomiendo sin dudas.",
    initial: "N",
  },
];

// ── Hero ────────────────────────────────────────────────────────────────────
const HeroSection = () => (
  <section id="hero" className="relative min-h-screen flex items-center">
    <div className="absolute inset-0 z-0">
      <img src={heroBg} alt="Departamentos en venta en Almagro" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-dark/65" />
    </div>
    <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 py-24 lg:py-32">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="fade-in-up">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase mb-6 text-primary-foreground/70">
            Departamentos · Almagro · CABA
          </span>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            Departamentos en venta{" "}
            <span className="text-gold">en Almagro</span>
          </h1>
          <p className="text-lg mb-10 leading-relaxed max-w-lg text-primary-foreground/80">
            Encontrá tu próximo departamento en uno de los barrios con mayor
            proyección de Buenos Aires. Emprendimientos en pozo, financiación en
            pesos y entrega garantizada.
          </p>
          <ul className="space-y-3">
            {[
              "Proyectos seleccionados en Almagro y alrededores",
              "Financiación en pesos y cuotas ajustadas",
              "Asesoramiento personalizado desde el pozo",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-primary-foreground/85">
                <CheckCircle className="w-5 h-5 text-primary-foreground flex-shrink-0" />
                <span className="text-sm font-medium text-primary-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="fade-in-up-delay-2 bg-surface rounded-2xl p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-foreground mb-1">
            Recibí opciones en Almagro
          </h2>
          <p className="text-sm text-muted-foreground mb-6">
            Completá tus datos y te enviamos los mejores proyectos de la zona.
          </p>
          <HubSpotForm />
        </div>
      </div>
    </div>
  </section>
);

// ── Properties ──────────────────────────────────────────────────────────────
const PropertiesSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({ left: dir === "left" ? -320 : 320, behavior: "smooth" });
  };

  return (
    <section id="propiedades" className="py-24 bg-background">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="mb-12 fade-in-up">
          <span className="text-xs font-semibold tracking-widest uppercase text-gold">Emprendimientos</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-2 mb-3">
            Proyectos disponibles en Almagro
          </h2>
          <p className="text-muted-foreground">Departamentos en pozo con financiación en pesos. Entrega garantizada.</p>
        </div>

        <div className="flex items-center justify-end mb-10">
          <div className="hidden md:flex gap-2">
            <button onClick={() => scroll("left")} className="p-2 rounded-full border border-border bg-surface hover:bg-muted transition-colors" aria-label="Anterior">
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <button onClick={() => scroll("right")} className="p-2 rounded-full border border-border bg-surface hover:bg-muted transition-colors" aria-label="Siguiente">
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>

        <div ref={scrollRef} className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          {properties.map((prop) => (
            <div key={prop.id} className="flex-shrink-0 w-80 lg:w-72 xl:w-80 snap-start bg-surface rounded-2xl overflow-hidden border border-border hover:border-gold/40 hover:shadow-lg transition-all duration-300 group">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={prop.image} alt={prop.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-3 left-3">
                  <span className="flex items-center gap-1 bg-dark/80 backdrop-blur-sm text-primary-foreground text-xs px-2.5 py-1.5 rounded-full font-medium">
                    <MapPin className="w-3 h-3" />{prop.location}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="bg-gold text-accent-foreground text-xs px-2.5 py-1.5 rounded-full font-semibold">{prop.price}</span>
                </div>
                <div className="absolute bottom-3 left-3">
                  <span className="bg-surface/90 backdrop-blur-sm text-foreground text-xs px-2 py-1 rounded-full font-medium border border-border">
                    Entrega {prop.entrega}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-foreground text-sm leading-snug mb-3 line-clamp-2">{prop.title}</h3>
                <div className="flex items-center gap-1 text-xs text-muted-foreground mb-4">
                  <span className="font-medium text-foreground">Desde {prop.sqm} m²</span>
                  <span className="mx-1">·</span>
                  <BedDouble className="w-3.5 h-3.5" /><span>{prop.beds} dorm.</span>
                  <span className="mx-1">·</span>
                  <Bath className="w-3.5 h-3.5" /><span>{prop.baths} baño{prop.baths > 1 ? "s" : ""}</span>
                  {prop.garage && (<><span className="mx-1">·</span><Car className="w-3.5 h-3.5" /><span>Cochera</span></>)}
                </div>
                {prop.slug ? (
                  <Link to={prop.slug} className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gold text-accent-foreground text-sm font-semibold hover:bg-gold/90 active:scale-[0.98] transition-all group/btn">
                    Ver emprendimiento <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                ) : (
                  <button onClick={() => document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" })} className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gold text-accent-foreground text-sm font-semibold hover:bg-gold/90 active:scale-[0.98] transition-all group/btn">
                    Quiero más información <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ── About ───────────────────────────────────────────────────────────────────
const AboutSection = () => (
  <section id="nosotros" className="py-24 bg-surface-muted">
    <div className="max-w-[1200px] mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative rounded-2xl overflow-hidden aspect-[4/3] fade-in-up order-2 lg:order-1">
          <img src={aboutTeam} alt="Equipo Predial en Almagro" className="w-full h-full object-cover" />
          <div className="absolute bottom-6 left-6 right-6">
            <div className="bg-surface/95 backdrop-blur-sm rounded-xl p-4 flex items-center gap-4">
              <div className="bg-gold-light rounded-full p-3"><span className="text-xl">🏗️</span></div>
              <div>
                <p className="font-semibold text-foreground text-sm">+50 emprendimientos</p>
                <p className="text-xs text-muted-foreground">Proyectos comercializados en CABA</p>
              </div>
            </div>
          </div>
        </div>
        <div className="fade-in-up-delay-2 order-1 lg:order-2">
          <span className="text-xs font-semibold tracking-widest uppercase text-gold">Quiénes somos</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-2 mb-6 leading-tight">
            Especialistas en <span className="text-gold">Almagro y sus alrededores</span>
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>Somos parte del Grupo Predial, con oficina en Almagro sobre Av. Corrientes 4217. Conocemos el barrio mejor que nadie y trabajamos con los mejores desarrolladores de la zona.</p>
            <p>Te asesoramos en la elección del proyecto ideal: analizamos planos, cronogramas de obra, fideicomisos y opciones de financiación para que tu inversión sea segura y rentable.</p>
            <p>Almagro es uno de los barrios con mayor crecimiento inmobiliario de CABA: buena conectividad, oferta gastronómica y cultural, y precios con potencial de valorización.</p>
          </div>
          <button onClick={() => document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" })} className="mt-8 inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-xl font-medium text-sm hover:bg-primary/90 transition-all group">
            Hablar con un asesor
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  </section>
);

// ── Testimonials ─────────────────────────────────────────────────────────────
const TestimonialsSection = () => (
  <section id="testimonios" className="py-24 bg-background">
    <div className="max-w-[1200px] mx-auto px-6">
      <div className="mb-12 fade-in-up text-center">
        <span className="text-xs font-semibold tracking-widest uppercase text-gold">Testimonios</span>
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-2 mb-3">Lo que dicen nuestros clientes</h2>
        <div className="flex items-center justify-center gap-2 mt-4">
          <div className="flex gap-0.5">
            {[1,2,3,4,5].map((s) => <Star key={s} className={`w-5 h-5 ${s <= 4 ? "fill-gold text-gold" : "fill-gold/40 text-gold/40"}`} />)}
          </div>
          <span className="text-foreground font-semibold text-sm">4.1</span>
          <span className="text-muted-foreground text-sm">· 296 reseñas en Google</span>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div key={t.name} className={`fade-in-up-delay-${Math.min(i + 1, 4)} bg-surface rounded-2xl p-6 border border-border hover:border-gold/30 hover:shadow-sm transition-all`}>
            <div className="flex gap-0.5 mb-4">
              {[1,2,3,4,5].map((s) => <Star key={s} className={`w-4 h-4 ${s <= t.rating ? "fill-gold text-gold" : "fill-muted text-muted"}`} />)}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">"{t.text}"</p>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
                <span className="text-accent-foreground text-sm font-semibold">{t.initial}</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.date}</p>
              </div>
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
      <div className="text-center mt-10">
        <a href="https://share.google/zQfSvvw0bnrFsqLax" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors border border-border rounded-xl px-5 py-2.5 hover:border-gold/40 bg-surface">
          Ver todas las reseñas en Google
        </a>
      </div>
    </div>
  </section>
);

// ── Location ─────────────────────────────────────────────────────────────────
const LocationSection = () => (
  <section id="ubicacion" className="py-24 bg-surface-muted">
    <div className="max-w-[1200px] mx-auto px-6">
      <div className="mb-12 fade-in-up">
        <span className="text-xs font-semibold tracking-widest uppercase text-gold">Dónde estamos</span>
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-2 mb-3">Visitanos en Almagro</h2>
        <p className="text-muted-foreground">Nuestra oficina está en el corazón de Almagro, fácil acceso desde toda CABA.</p>
      </div>
      <div className="grid lg:grid-cols-3 gap-8 items-start">
        <div className="space-y-4 fade-in-up">
          {[
            { icon: MapPin, title: "Dirección", content: <>Av. Corrientes 4217<br />Almagro, CABA, Argentina</> },
            { icon: Clock, title: "Horarios", content: <>Lunes a Viernes<br />10:00 a 18:00 hs</> },
            { icon: Phone, title: "Teléfono", content: <a href="tel:+541162216632" className="text-muted-foreground text-sm hover:text-gold transition-colors">+54 11 6221-6632</a> },
          ].map(({ icon: Icon, title, content }) => (
            <div key={title} className="bg-surface border border-border rounded-2xl p-6 flex gap-4 items-start">
              <div className="w-10 h-10 bg-gold-light rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-gold" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm mb-1">{title}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{content}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="lg:col-span-2 fade-in-up-delay-2 rounded-2xl overflow-hidden border border-border shadow-sm h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.064253747123!2d-58.4243775!3d-34.6025367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca625893ffdd%3A0x433fda61676843be!2sPredial!5e0!3m2!1sen!2sar!4v1772643038776!5m2!1sen!2sar"
            width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
            referrerPolicy="no-referrer-when-downgrade" title="Ubicación Predial Almagro"
          />
        </div>
      </div>
    </div>
  </section>
);

// ── CTA ──────────────────────────────────────────────────────────────────────
const CtaSection = () => (
  <section className="py-28 bg-primary relative overflow-hidden">
    <div className="absolute inset-0 opacity-[0.06]"
      style={{ backgroundImage: `radial-gradient(circle at 30% 50%, hsl(var(--gold)) 0%, transparent 60%), radial-gradient(circle at 70% 50%, hsl(var(--gold)) 0%, transparent 60%)` }} />
    <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center fade-in-up">
      <span className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 text-primary-foreground/60">Empezá a invertir hoy</span>
      <h2 className="text-3xl lg:text-5xl font-bold text-primary-foreground mb-5 leading-tight">
        ¿Listo para comprar tu<br className="hidden md:block" /> departamento en Almagro?
      </h2>
      <p className="text-primary-foreground/65 max-w-lg mx-auto mb-10 leading-relaxed">
        Dejanos tus datos y te enviamos los emprendimientos disponibles en Almagro según tu presupuesto y plazo de entrega.
      </p>
      <button onClick={() => document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" })}
        className="inline-flex items-center gap-2 bg-gold text-accent-foreground px-8 py-4 rounded-xl font-semibold text-sm hover:bg-gold/90 active:scale-[0.98] transition-all group">
        Quiero ver opciones en Almagro
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
      <p className="text-primary-foreground/40 text-xs mt-5">Sin compromiso · Respuesta en menos de 24 hs</p>
    </div>
  </section>
);

// ── Page ─────────────────────────────────────────────────────────────────────
const Almagro = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-16">
      <HeroSection />
      <PropertiesSection />
      <AboutSection />
      <TestimonialsSection />
      <LocationSection />
      <CtaSection />
    </main>
    <Footer />
    <WhatsAppButton />
  </div>
);

export default Almagro;
