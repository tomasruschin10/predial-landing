import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { MapPin, BedDouble, Bath, Car, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const properties = [
  {
    slug: null,
    id: 1,
    type: "departamento",
    image: "https://predial.ar/wp-content/uploads/2026/02/65905_38988215970175720422505012731360852924805149537826088779711684759600023360718-1067x600.jpg",
    location: "Villa Urquiza",
    price: "Consultar precio",
    title: "Blanco Encalada 5600 · 2, 3 y 4 ambientes en pozo",
    sqm: 55,
    beds: 2,
    baths: 1,
    garage: true,
    virtual: false,
    entrega: "2028"
  },
  {
    slug: null,
    id: 2,
    type: "departamento",
    image: "https://predial.ar/wp-content/uploads/2026/02/66518_44327868533353209463125948779197643956197912307383874810844849753179517413760-881x600.jpg",
    location: "Palermo",
    price: "Consultar precio",
    title: "Atacalco 1700 · Monoambientes y 2 ambientes con amenities",
    sqm: 42,
    beds: 1,
    baths: 1,
    garage: false,
    virtual: false,
    entrega: "2026"
  },
  {
    slug: "/emprendimiento/montaneses-2400",
    id: 3,
    type: "departamento",
    image: "https://predial.ar/wp-content/uploads/2026/02/58466_46224271198343283133956269440519186955083430107073655160591272647994198295503-1067x600.jpg",
    location: "Belgrano",
    price: "Consultar precio",
    title: "Montañeses 2400 · 2 y 3 ambientes con amenities",
    sqm: 75,
    beds: 2,
    baths: 2,
    garage: true,
    virtual: true,
    entrega: "2027"
  },
  {
    slug: null,
    id: 4,
    type: "departamento",
    image: "https://predial.ar/wp-content/uploads/2026/02/39679_71073899028990413328624142776075570836872456661275394649622492606545959304910-1067x600.jpg",
    location: "Almagro",
    price: "Consultar precio",
    title: "Humahuaca 3900 · 1, 2 y 3 ambientes en pozo",
    sqm: 38,
    beds: 1,
    baths: 1,
    garage: false,
    virtual: false,
    entrega: "2026"
  },
  {
    slug: null,
    id: 5,
    type: "departamento",
    image: "https://predial.ar/wp-content/uploads/2026/02/58914_85406616359834359403114642818696675507906475512111042145843863015182620111425-1071x600.jpg",
    location: "Villa Crespo",
    price: "Consultar precio",
    title: "Av. Scalabrini Ortiz 300 · 1, 2 y 3 ambientes con balcón",
    sqm: 50,
    beds: 2,
    baths: 1,
    garage: false,
    virtual: false,
    entrega: "2026"
  }
];

type FilterType = "todas" | "en obra" | "a entregar";

const PropertiesSection = () => {
  const [filter, setFilter] = useState<FilterType>("todas");
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === "left" ? -320 : 320, behavior: "smooth" });
    }
  };

  const filtered = properties.filter((p) => {
    if (filter === "todas") return true;
    if (filter === "en obra") return parseInt(p.entrega) >= 2026;
    if (filter === "a entregar") return parseInt(p.entrega) <= 2025;
    return true;
  });

  return (
    <section id="propiedades" className="py-24 bg-background">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="mb-12 fade-in-up">
          <span className="text-xs font-semibold tracking-widest uppercase text-gold">
            Emprendimientos
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-2 mb-3">
            Proyectos disponibles en CABA
          </h2>
          <p className="text-muted-foreground">
            Elegí por zona o etapa de obra. Financiación en pesos.
          </p>
        </div>

        {/* Filter tabs + scroll buttons */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex gap-2">
            {(["todas", "en obra", "a entregar"] as FilterType[]).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium capitalize transition-all ${
                  filter === f
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/70"
                }`}>
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>
          {/* Desktop scroll buttons */}
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-2 rounded-full border border-border bg-surface hover:bg-muted transition-colors"
              aria-label="Anterior">
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 rounded-full border border-border bg-surface hover:bg-muted transition-colors"
              aria-label="Siguiente">
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div ref={scrollRef} className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>

          {filtered.map((prop) => (
            <div
              key={prop.id}
              className="flex-shrink-0 w-80 lg:w-72 xl:w-80 snap-start bg-surface rounded-2xl overflow-hidden border border-border hover:border-gold/40 hover:shadow-lg transition-all duration-300 group">

              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={prop.image}
                  alt={prop.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />

                {/* Badges */}
                <div className="absolute top-3 left-3">
                  <span className="flex items-center gap-1 bg-dark/80 backdrop-blur-sm text-primary-foreground text-xs px-2.5 py-1.5 rounded-full font-medium">
                    <MapPin className="w-3 h-3" />
                    {prop.location}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="bg-gold text-accent-foreground text-xs px-2.5 py-1.5 rounded-full font-semibold">
                    {prop.price}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 flex gap-1.5">
                  <span className="bg-surface/90 backdrop-blur-sm text-foreground text-xs px-2 py-1 rounded-full font-medium border border-border">
                    Entrega {prop.entrega}
                  </span>
                  {prop.virtual && (
                    <span className="bg-surface/90 backdrop-blur-sm text-foreground text-xs px-2 py-1 rounded-full font-medium border border-border">
                      🎬 Tour virtual
                    </span>
                  )}
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-semibold text-foreground text-sm leading-snug mb-3 line-clamp-2">
                  {prop.title}
                </h3>
                <div className="flex items-center gap-1 text-xs text-muted-foreground mb-4">
                  <span className="font-medium text-foreground">Desde {prop.sqm} m²</span>
                  <span className="mx-1">·</span>
                  <BedDouble className="w-3.5 h-3.5" />
                  <span>{prop.beds} dorm.</span>
                  <span className="mx-1">·</span>
                  <Bath className="w-3.5 h-3.5" />
                  <span>{prop.baths} baño{prop.baths > 1 ? "s" : ""}</span>
                  {prop.garage && (
                    <>
                      <span className="mx-1">·</span>
                      <Car className="w-3.5 h-3.5" />
                      <span>Cochera</span>
                    </>
                  )}
                </div>
                {prop.slug ? (
                  <Link
                    to={prop.slug}
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gold text-accent-foreground text-sm font-semibold hover:bg-gold/90 active:scale-[0.98] transition-all group/btn">
                    Ver emprendimiento
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                ) : (
                  <button
                    onClick={() => document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" })}
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gold text-accent-foreground text-sm font-semibold hover:bg-gold/90 active:scale-[0.98] transition-all group/btn">
                    Quiero más información
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
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

export default PropertiesSection;
