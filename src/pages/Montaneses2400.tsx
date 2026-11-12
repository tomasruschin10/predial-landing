import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  MapPin, BedDouble, Bath, CheckCircle, ArrowLeft,
  ChevronLeft, ChevronRight, Waves, Flame, WashingMachine,
  Sun, Accessibility, Zap, Droplets
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HubSpotForm from "@/components/HubSpotForm";

const images = [
  "https://predial.ar/wp-content/uploads/2026/02/58466_11229123732950317542799026270771537342427906512552601283422898519777663941128-480x600.jpg",
  "https://predial.ar/wp-content/uploads/2026/02/58466_45672097017035402079591876090709261500170946808366543937609570096753925412343-600x600.jpg",
  "https://predial.ar/wp-content/uploads/2026/02/58466_46224271198343283133956269440519186955083430107073655160591272647994198295503-1067x600.jpg",
  "https://predial.ar/wp-content/uploads/2026/02/58466_63751203493055172968603938845968039200231131182437795029047661811294178674844-1067x600.jpg",
  "https://predial.ar/wp-content/uploads/2026/02/58466_37327445561689657027326030738222403223964332521064757638003494823880428392125-1068x600.jpg",
  "https://predial.ar/wp-content/uploads/2026/02/58466_65687714240046497855384914252899192550443703967024673066464176415116280966768-1068x600.jpg",
  "https://predial.ar/wp-content/uploads/2026/02/58466_92744752473562747232482515210560917744433743503930774941921833523717330890431.jpg",
  "https://predial.ar/wp-content/uploads/2026/02/58466_29332879960375434071563460164971470105994016270067509545066838170919855088668.jpg",
  "https://predial.ar/wp-content/uploads/2026/02/58466_5122552984078701979169393876418339656494128219918471484415321480320948198899.jpg",
  "https://predial.ar/wp-content/uploads/2026/02/58466_52958052168093617540963787995268833583116350005907568654303951310513089875457-1067x600.jpg",
];

const units = [
  {
    id: "8B",
    name: "Montañeses 2400 – 8° B",
    price: "USD 223.033",
    beds: 2,
    baths: 1,
    sqm: 66.92,
    ambientes: 2,
  },
  {
    id: "3C",
    name: "Montañeses 2400 – 3° C",
    price: "USD 109.500",
    beds: 1,
    baths: 1,
    sqm: 35.93,
    ambientes: 1,
  },
];

const features = [
  { icon: Accessibility, label: "Acceso para movilidad reducida" },
  { icon: Droplets, label: "Agua corriente y potable" },
  { icon: Zap, label: "Electricidad" },
  { icon: WashingMachine, label: "Laundry" },
  { icon: Flame, label: "Parrilla" },
  { icon: Sun, label: "Solarium" },
  { icon: Waves, label: "Planos conforme a obra" },
  { icon: CheckCircle, label: "Preinstalación de A/C" },
];

const sections = [
  { id: "descripcion", label: "Descripción" },
  { id: "unidades", label: "Unidades" },
  { id: "galeria", label: "Galería" },
  { id: "tour-virtual", label: "Tour virtual" },
];

// Floating WhatsApp — shown only after scroll
const FloatingWhatsApp = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const href = `https://wa.me/5491162216632?text=${encodeURIComponent("Hola, me interesa el emprendimiento Montañeses 2400. ¿Podemos hablar?")}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className={`fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all duration-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
    >
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
      </svg>
    </a>
  );
};

// Mobile sticky section nav
const SectionNav = () => {
  const [active, setActive] = useState("descripcion");
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 400);
      for (const s of [...sections].reverse()) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(s.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    // offset: navbar (64px) + subnav (40px) + extra breathing room (12px)
    const offset = 116;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <div
      className={`md:hidden fixed top-16 left-0 right-0 z-40 bg-primary/95 backdrop-blur-md border-b border-primary-foreground/10 transition-all duration-300 ${show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}`}
    >
      <div className="flex overflow-x-auto" style={{ scrollbarWidth: "none" }}>
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => scrollTo(s.id)}
            className={`flex-shrink-0 px-4 py-2.5 text-xs font-medium transition-colors border-b-2 ${
              active === s.id
                ? "border-gold text-primary-foreground"
                : "border-transparent text-primary-foreground/50 hover:text-primary-foreground/80"
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>
    </div>
  );
};

// Gallery carousel (below hero)
const Gallery = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setCurrent((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="bg-dark rounded-2xl overflow-hidden border border-border">
      {/* Main image with nav */}
      <div className="relative" style={{ height: "clamp(200px, 45vw, 400px)" }}>
        <img
          src={images[current]}
          alt={`Montañeses 2400 imagen ${current + 1}`}
          className="w-full h-full object-cover transition-opacity duration-500"
        />
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-dark/50 backdrop-blur-sm border border-primary-foreground/20 flex items-center justify-center hover:bg-dark/70 transition-all"
        >
          <ChevronLeft className="w-4 h-4 text-primary-foreground" />
        </button>
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-dark/50 backdrop-blur-sm border border-primary-foreground/20 flex items-center justify-center hover:bg-dark/70 transition-all"
        >
          <ChevronRight className="w-4 h-4 text-primary-foreground" />
        </button>
        <div className="absolute bottom-3 right-3 bg-dark/60 backdrop-blur-sm text-primary-foreground text-xs px-2.5 py-1 rounded-full font-medium border border-primary-foreground/20">
          {current + 1} / {images.length}
        </div>
      </div>
      {/* Thumbnails */}
      <div className="py-2.5 px-3 overflow-x-auto flex gap-2" style={{ scrollbarWidth: "none" }}>
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden border-2 transition-all ${
              i === current ? "border-gold" : "border-transparent opacity-60 hover:opacity-90"
            }`}
          >
            <img src={img} alt="" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
};

const Montaneses2400 = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <SectionNav />
      <main className="pt-16">

        {/* ── Hero: static image + overlay info ── */}
        <section
          className="relative bg-dark overflow-hidden flex flex-col"
          style={{ minHeight: "clamp(460px, 65vh, 680px)" }}
        >
          <img
            src={images[0]}
            alt="Montañeses 2400"
            className="w-full h-full object-cover absolute inset-0"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark/92 via-dark/50 to-dark/25" />

          {/* Top badges */}
          <div className="absolute top-4 left-4 flex gap-2 z-10">
            <span className="bg-gold text-accent-foreground text-xs font-semibold px-3 py-1.5 rounded-full">
              Entrega inmediata
            </span>
            <span className="bg-dark/60 backdrop-blur-sm text-primary-foreground text-xs font-medium px-3 py-1.5 rounded-full border border-primary-foreground/20">
              Emprendimiento
            </span>
          </div>

          {/* Bottom info — pt-16 keeps clear of the top badges on mobile */}
          <div className="relative z-10 flex flex-col justify-end flex-1 px-5 pb-7 pt-16">
            <div className="max-w-[1200px] mx-auto">
              {/* Location */}
              <div className="flex items-start gap-1.5 mb-2.5 max-w-full">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/75 text-sm leading-snug">
                  Montañeses entre Monroe y Blanco Encalada · Belgrano, CABA
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-4">
                Montañeses 2400
              </h1>

              {/* Pills */}
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 mb-5">
                {[
                  { label: "Monoambientes", sub: "desde USD 109.500" },
                  { label: "2 Ambientes", sub: "desde USD 223.033" },
                  { label: "Amenities", sub: "Parrilla · Laundry · Solarium" },
                ].map((u) => (
                  <div key={u.label} className="min-w-0 bg-dark/60 backdrop-blur-sm border border-primary-foreground/20 rounded-xl px-3 py-2">
                    <p className="text-primary-foreground font-semibold text-xs">{u.label}</p>
                    <p className="text-primary-foreground/65 text-xs mt-0.5 leading-tight">{u.sub}</p>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
                  className="bg-gold text-accent-foreground font-semibold px-6 py-3 rounded-xl hover:bg-gold/90 active:scale-[0.98] transition-all text-sm tracking-wide"
                >
                  Quiero más información
                </button>
                <a
                  href={`https://wa.me/5491162216632?text=${encodeURIComponent("Hola, me interesa el emprendimiento Montañeses 2400. ¿Podemos hablar?")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#25D366]/90 backdrop-blur-sm text-white font-semibold px-5 py-3 rounded-xl hover:bg-[#25D366] active:scale-[0.98] transition-all text-sm"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white flex-shrink-0">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>



        {/* ── Main content ── */}
        <div className="max-w-[1200px] mx-auto px-5 py-12">
          {/* Back link */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a emprendimientos
          </Link>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left: info */}
            <div className="lg:col-span-2 min-w-0 space-y-10">

              {/* Title block */}
              <div id="descripcion">
                <span className="text-xs font-semibold tracking-widest uppercase text-gold mb-3 block">
                  Emprendimiento · Belgrano
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
                  Montañeses 2400
                </h2>
                <div className="flex items-start gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-sm leading-snug break-words">Montañeses entre Monroe y Blanco Encalada, Belgrano, CABA</span>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Sobre el emprendimiento</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Belgrano se posiciona para ser el barrio más demandado de la Ciudad de Buenos Aires. El crecimiento invita residentes, turistas y eventuales transeúntes que encuentran en el barrio <strong className="text-foreground">servicios, seguridad y accesibilidad</strong>.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Sobre la calle Montañeses, entre Monroe y Blanco Encalada, a metros de la Av. Del Libertador y con cercanía a los puntos más neurálgicos de la Capital Federal.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Este edificio se desarrolla a distancia caminable del nuevo polo gastronómico de Buenos Aires, de los centros de salud y entidades educativas más reconocidas, sobre una cuadra tranquila, arbolada e hiperconectada.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  El edificio cuenta con una amplia gama de amenities, incluyendo <strong className="text-foreground">sector de parrillas y Laundry</strong>. Posee acceso para personas con movilidad reducida.
                </p>
              </div>

              {/* Info básica */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-5">Información básica</h3>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Tipo", value: "Edificio" },
                    { label: "Estado", value: "Emprendimiento" },
                    { label: "Entrega", value: "Inmediata" },
                  ].map((item) => (
                    <div key={item.label} className="min-w-0 bg-surface border border-border rounded-2xl p-4 text-center">
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1 truncate">{item.label}</p>
                      <p className="font-semibold text-foreground text-sm sm:text-base truncate">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Características */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-5">Características</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {features.map(({ icon: Icon, label }) => (
                    <div key={label} className="flex flex-col items-center gap-2 bg-surface border border-border rounded-2xl p-4 text-center hover:border-gold/40 transition-colors">
                      <div className="w-9 h-9 bg-gold-light rounded-full flex items-center justify-center">
                        <Icon className="w-4 h-4 text-gold" />
                      </div>
                      <span className="text-xs text-muted-foreground leading-tight">{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Unidades disponibles */}
              <div id="unidades">
                <h3 className="text-xl font-semibold text-foreground mb-5">Unidades disponibles</h3>
                <div className="space-y-4">
                  {units.map((unit) => (
                    <div
                      key={unit.id}
                      className="bg-surface border border-border rounded-2xl p-5 hover:border-gold/40 hover:shadow-md transition-all"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">{unit.name}</h4>
                          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <BedDouble className="w-3.5 h-3.5" />
                              {unit.ambientes} ambiente{unit.ambientes > 1 ? "s" : ""}
                            </span>
                            <span className="text-border">·</span>
                            <span className="flex items-center gap-1">
                              <Bath className="w-3.5 h-3.5" />
                              {unit.baths} baño
                            </span>
                            <span className="text-border">·</span>
                            <span className="font-medium text-foreground">{unit.sqm} m²</span>
                          </div>
                        </div>
                        <div className="flex flex-col sm:items-end gap-2">
                          <span className="text-lg font-bold text-foreground">{unit.price}</span>
                          <button
                            onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
                            className="bg-gold text-accent-foreground text-sm font-semibold px-5 py-2 rounded-xl hover:bg-gold/90 active:scale-[0.98] transition-all whitespace-nowrap"
                          >
                            Consultar unidad
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Video tour */}
              <div id="tour-virtual">
                <h3 className="text-xl font-semibold text-foreground mb-5">Tour virtual</h3>
                <div className="rounded-2xl overflow-hidden border border-border aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/jGzAQ_53EO8"
                    title="Montañeses 2477 - Tour virtual"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </div>

              {/* Galería */}
              <div id="galeria">
                <h3 className="text-xl font-semibold text-foreground mb-5">Galería</h3>
                <Gallery images={images} />
              </div>

            </div>

            {/* Right: sticky form */}
            <div className="lg:col-span-1">
              <div
                id="contact-form"
                className="sticky top-24 bg-surface border border-border rounded-2xl p-7 shadow-sm"
              >
                <h2 className="text-lg font-semibold text-foreground mb-1">Consultá por este emprendimiento</h2>
                <p className="text-sm text-muted-foreground mb-6">
                  Dejanos tus datos y un asesor te contacta.
                </p>
                <HubSpotForm />
                <p className="text-center text-xs text-muted-foreground pt-4">
                  🔒 Predial Propiedades S.R.L. · Mat. CUCICBA 3269
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Montaneses2400;
