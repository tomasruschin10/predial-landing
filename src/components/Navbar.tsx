import logo from "@/assets/logo.png";

const Navbar = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary backdrop-blur-md border-b border-primary-foreground/10">
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="Predial Emprendimientos" className="h-9 object-contain" />
        </div>

        <nav className="hidden md:flex items-center gap-8">
        {[
            { label: "Emprendimientos", id: "propiedades" },
            { label: "Nosotros", id: "nosotros" },
            { label: "Testimonios", id: "testimonios" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          onClick={() => scrollToSection("hero")}
          className="bg-gold text-accent-foreground text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-gold/90 transition-all"
        >
          Consultar
        </button>
      </div>
    </header>
  );
};

export default Navbar;
