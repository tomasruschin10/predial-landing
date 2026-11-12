import { Clock, CheckCircle, Star, ArrowRight, Phone, Calendar, TrendingUp, Shield, Award, Users, Camera, Megaphone, Mail, UserCheck, ShieldCheck, Sparkles, Box } from "lucide-react";
import NavbarTasacion from "@/components/NavbarTasacion";
import FooterTasacion from "@/components/FooterTasacion";
import WhatsAppButton from "@/components/WhatsAppButton";
import HubSpotEmbedForm from "@/components/HubSpotEmbedForm";
import CabaGate from "@/components/CabaGate";
import heroBg from "@/assets/hero-bg.jpg";
import aboutTeam from "@/assets/about-team.jpg";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Completá tus datos",
    desc: "Completás el formulario con los datos de tu propiedad.",
  },
  {
    number: "02",
    icon: Calendar,
    title: "Agendamos la visita",
    desc: "Un tasador profesional visitará tu propiedad dentro de las 24 horas.",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Recibí tu informe final",
    desc: "Recibí un informe con valor de mercado, propiedades comparables y recomendaciones de venta.",
  },
];

const differentials = [
  {
    icon: UserCheck,
    title: "Criterio profesional",
    desc: "Analizamos variables. Un experto matriculado visita tu propiedad, conoce la calle y el mercado real del barrio.",
  },
  {
    icon: Award,
    title: "Especialistas en CABA",
    desc: "Trayectoria comprobada en el mercado porteño. Conocemos cada barrio, sus precios y sus particularidades.",
  },
  {
    icon: Clock,
    title: "Agilidad total",
    desc: "Coordinamos la visita a tu propiedad dentro de las 24 horas de recibida tu solicitud.",
  },
];

const marketingPillars = [
  {
    icon: Megaphone,
    title: "Marketing de Alto Impacto",
    desc: "No tercerizamos. Tenemos un equipo propio especializado en real estate dedicado a mover tu propiedad rápido.",
  },
  {
    icon: Users,
    title: "Atención inmediata",
    desc: "Equipo humano exclusivo para responder consultas. Ningún interesado en tu propiedad queda sin respuesta.",
  },
  {
    icon: Camera,
    title: "Fotografía profesional + Tour virtual",
    desc: "Material audiovisual de alta calidad y recorridos virtuales 3D que filtran visitas reales y aceleran la venta.",
  },
  {
    icon: Sparkles,
    title: "Máxima visibilidad",
    desc: "Avisos Súper Destacados en Zonaprop, campañas segmentadas en Meta Ads (Facebook e Instagram) y email marketing a nuestra base de compradores activos.",
  },
];

const channels = [
  { name: "Zonaprop", desc: "Avisos Súper Destacados para máxima visibilidad" },
  { name: "Meta Ads y Redes sociales", desc: "Campañas segmentadas en Facebook e Instagram" },
  { name: "Email Marketing", desc: "Difusión a nuestra base de compradores activos" },
];

const testimonials = [
  {
    name: "Gabriela Morales",
    date: "hace 1 mes",
    rating: 5,
    text: "Pedí la tasación un lunes a la mañana y el martes al mediodía ya tenían un asesor en mi departamento. La rapidez fue impresionante.",
    initial: "G",
  },
  {
    name: "Roberto Sánchez",
    date: "hace 2 meses",
    rating: 5,
    text: "Me dieron un valor muy realista, no inflado para engancharme. Eso me generó mucha confianza. Al final vendí con ellos y fue todo impecable.",
    initial: "R",
  },
  {
    name: "Valeria Núñez",
    date: "hace 3 meses",
    rating: 5,
    text: "El informe fue muy completo, con comparables del barrio y proyecciones. Se nota el conocimiento del mercado porteño que tienen.",
    initial: "V",
  },
];

const scrollToHero = () => document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });

// ── Hero ──────────────────────────────────────────────────────────────────────
const HeroSection = () => (
  <section id="hero" className="relative min-h-screen flex items-center">
    <div className="absolute inset-0 z-0">
      <video
        src="/hero-tasacion.mp4"
        autoPlay
        muted
        loop
        playsInline
        poster={heroBg}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-dark/70" />
    </div>
    <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 py-24 lg:py-32">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="fade-in-up">
          <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/40 text-gold text-xs font-semibold px-4 py-2 rounded-full mb-6">
            <Clock className="w-3.5 h-3.5" />
            Visita a tu propiedad en menos de 24 hs
          </div>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            Tasamos tu propiedad rápido y con precisión
          </h1>
          <p className="text-lg mb-8 leading-relaxed max-w-lg text-primary-foreground/80">
            Sabemos de la importancia del valor de tu propiedad. Agendamos la visita en 24 horas
            y te entregamos un informe de tasación preciso con el valor real
            de mercado de tu propiedad.
          </p>
          <ul className="space-y-3 mb-8">
            {[
              "Informe detallado con valor de mercado real",
              "Tasadores profesionales con experiencia en CABA",
              "50 años de trayectoria en el mercado",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-primary-foreground/80 text-sm">
                <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="fade-in-up-delay-2 bg-surface rounded-2xl p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-foreground mb-1">
            Solicitá tu tasación
          </h2>
          <p className="text-sm text-muted-foreground mb-6">
            Coordinamos la tasación en menos de 24 hs.
          </p>
          <CabaGate><HubSpotEmbedForm portalId="45058290" formId="dda191b2-6474-45d8-96ab-faa66240fd65" region="na1" /></CabaGate>
        </div>
      </div>
    </div>
  </section>
);

// ── Process ───────────────────────────────────────────────────────────────────
const ProcessSection = () => (
  <section id="proceso" className="py-20 bg-primary text-primary-foreground">
    <div className="max-w-[1200px] mx-auto px-6">
      <div className="text-center mb-14 fade-in-up">
        <span className="text-xs font-semibold tracking-widest uppercase text-gold">Proceso de tasación</span>
        <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mt-2">
          Tu tasación lista en 24hs. <br />
          Rápido, profesional y preciso.
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8 relative">
        <div className="hidden md:block absolute top-10 left-[calc(16.6%+1.5rem)] right-[calc(16.6%+1.5rem)] h-px bg-primary-foreground/15" />
        {steps.map(({ number, icon: Icon, title, desc }, i) => (
          <div key={number} className={`fade-in-up-delay-${i + 1} flex flex-col items-center text-center relative`}>
            <div className="w-20 h-20 rounded-2xl bg-gold/20 border border-gold/30 flex flex-col items-center justify-center mb-6 relative z-10">
              <Icon className="w-7 h-7 text-gold" />
            </div>
            <span className="text-xs font-bold tracking-widest text-gold/60 mb-2">{number}</span>
            <h3 className="font-semibold text-primary-foreground text-base mb-2">{title}</h3>
            <p className="text-sm text-primary-foreground/60 leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <button
          onClick={scrollToHero}
          className="inline-flex items-center gap-2 bg-gold text-accent-foreground font-semibold px-8 py-4 rounded-xl hover:bg-gold/90 active:scale-[0.98] transition-all text-sm group"
        >
          QUIERO MI TASACIÓN AHORA
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  </section>
);

// ── Differentials ─────────────────────────────────────────────────────────────
const DifferentialsSection = () => (
  <section id="diferenciales" className="py-24 bg-surface">
    <div className="max-w-[1200px] mx-auto px-6">
      <div className="mb-14 fade-in-up max-w-2xl">
        <span className="text-xs font-semibold tracking-widest uppercase text-gold">Por qué elegirnos</span>
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-2 mb-3">
          Tasaciones reales por expertos
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Cada tasación la realiza un experto matriculado que conoce la calle
          y el mercado real de cada barrio de CABA.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {differentials.map(({ icon: Icon, title, desc }, i) => (
          <div key={title} className={`fade-in-up-delay-${Math.min(i + 1, 4)} bg-background border border-border rounded-2xl p-6 hover:border-gold/40 hover:shadow-sm transition-all`}>
            <div className="w-12 h-12 bg-gold-light rounded-2xl flex items-center justify-center mb-4">
              <Icon className="w-6 h-6 text-gold" />
            </div>
            <h3 className="font-semibold text-foreground mb-2 text-sm">{title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ── Marketing / Cómo vendemos ─────────────────────────────────────────────────
const MarketingSection = () => (
  <section id="marketing" className="py-24 bg-background">
    <div className="max-w-[1200px] mx-auto px-6">
      <div className="mb-14 fade-in-up max-w-2xl">
        <span className="text-xs font-semibold tracking-widest uppercase text-gold">Cómo vendemos tu propiedad</span>
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-2 mb-3">
          No solo tasamos tu propiedad, la vendemos
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Después de la tasación, si decidís vender con nosotros, ponemos a trabajar nuestra
          estructura completa: marketing interno, fotografía profesional y pauta en los principales canales.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
        {marketingPillars.map(({ icon: Icon, title, desc }, i) => (
          <div key={title} className={`fade-in-up-delay-${Math.min(i + 1, 4)} bg-surface border border-border rounded-2xl p-6 hover:border-gold/40 hover:shadow-sm transition-all`}>
            <div className="w-12 h-12 bg-gold-light rounded-2xl flex items-center justify-center mb-4">
              <Icon className="w-6 h-6 text-gold" />
            </div>
            <h3 className="font-semibold text-foreground mb-2 text-sm">{title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>

      {/* Channels detail */}
      <div className="bg-primary rounded-3xl p-8 lg:p-12 fade-in-up">
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-gold">Máxima visibilidad</span>
            <h3 className="text-2xl lg:text-3xl font-bold text-primary-foreground mt-2 mb-4 leading-tight">
              Tu propiedad, en todos los canales que importan
            </h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Combinamos los portales líderes, redes sociales y nuestra base propia
              de compradores activos para maximizar la exposición.
            </p>
          </div>
          <div className="lg:col-span-2 grid sm:grid-cols-3 gap-4">
            {channels.map((c, i) => {
              const icons = [Megaphone, Sparkles, Mail];
              const Icon = icons[i];
              return (
                <div key={c.name} className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl p-5">
                  <Icon className="w-5 h-5 text-gold mb-3" />
                  <p className="font-semibold text-primary-foreground text-sm mb-1">{c.name}</p>
                  <p className="text-xs text-primary-foreground/60 leading-relaxed">{c.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

    </div>
  </section>
);

// ── About ─────────────────────────────────────────────────────────────────────
const AboutSection = () => (
  <section id="nosotros" className="py-24 bg-surface">
    <div className="max-w-[1200px] mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative rounded-2xl overflow-hidden aspect-[4/3] fade-in-up">
          <img src={aboutTeam} alt="Equipo Predial tasadores" className="w-full h-full object-cover" />
          <div className="absolute bottom-6 left-6 right-6">
            <div className="bg-surface/95 backdrop-blur-sm rounded-xl p-4 flex items-center gap-4">
              <div className="bg-gold-light rounded-full p-3">
                <ShieldCheck className="w-5 h-5 text-gold" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">Matrícula CUCICBA 3269</p>
                <p className="text-xs text-muted-foreground">Predial Propiedades S.R.L.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="fade-in-up-delay-2">
          <span className="text-xs font-semibold tracking-widest uppercase text-gold">Quiénes somos</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-2 mb-6 leading-tight">
            Más de <span className="text-gold">50 años tasando</span> el mercado porteño
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed text-sm">
            <p>
              Predial es una de las inmobiliarias más experimentadas de Buenos Aires. Trayectoria comprobada
              de más de 50 años en CABA, garantía de confianza y conocimiento real del sector.
            </p>
            <p>
              A diferencia de valuaciones automáticas o algoritmos, nuestras tasaciones son realizadas por
              profesionales matriculados que visitan la propiedad en persona, analizan su estado real y lo
              comparan con el mercado vigente del barrio.
            </p>
            <p>
              Operamos exclusivamente en CABA. Conocemos cada barrio, cada calle y cada particularidad
              del mercado porteño.
            </p>
          </div>
          <button
            onClick={scrollToHero}
            className="mt-8 inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-xl font-medium text-sm hover:bg-primary/90 transition-all group"
          >
            Agendá tu tasación
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  </section>
);

// ── Testimonials ──────────────────────────────────────────────────────────────
const TestimonialsSection = () => (
  <section id="testimonios" className="py-24 bg-background">
    <div className="max-w-[1200px] mx-auto px-6">
      <div className="mb-12 fade-in-up text-center">
        <span className="text-xs font-semibold tracking-widest uppercase text-gold">Testimonios</span>
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-2 mb-3">Lo que dicen quienes tasaron con nosotros</h2>
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

// ── CTA Bottom ────────────────────────────────────────────────────────────────
const CtaSection = () => (
  <section className="py-20 bg-primary text-primary-foreground">
    <div className="max-w-[700px] mx-auto px-6 text-center fade-in-up">
      <span className="inline-flex items-center gap-2 bg-gold/20 border border-gold/40 text-gold text-xs font-semibold px-4 py-2 rounded-full mb-6">
        <Clock className="w-3.5 h-3.5" />
        Visita coordinada en menos de 24 hs
      </span>
      <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
        ¿Querés saber cuánto vale tu propiedad?
      </h2>
      <p className="text-primary-foreground/70 leading-relaxed mb-8">
        Dejanos tus datos y nuestro equipo te contactará en menos de 24hs.
      </p>
      <button
        onClick={scrollToHero}
        className="inline-flex items-center gap-2 bg-gold text-accent-foreground font-semibold px-8 py-4 rounded-xl hover:bg-gold/90 active:scale-[0.98] transition-all text-sm group"
      >
        Agendá tu tasación
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  </section>
);

// ── Page ──────────────────────────────────────────────────────────────────────
const Tasacion = () => (
  <div className="min-h-screen bg-background">
    <NavbarTasacion />
    <HeroSection />
    <ProcessSection />
    <DifferentialsSection />
    <MarketingSection />
    <AboutSection />
    <TestimonialsSection />
    <CtaSection />
    <FooterTasacion />
    <WhatsAppButton />
  </div>
);

export default Tasacion;
