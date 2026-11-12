import logo from "@/assets/logo-footer.png";
import { Instagram, Youtube, Linkedin, Phone } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    {/* Main footer */}
    <div className="max-w-[1200px] mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
      {/* Logo + descripción */}
      <div className="md:col-span-2">
        <img src={logo} alt="Predial" className="h-10 object-contain mb-5" />
        <p className="text-primary-foreground/60 text-sm leading-relaxed max-w-sm">
          Tu próxima inversión inmobiliaria. Te acompañamos en todo el proceso
          de comprar, invertir o alquilar tu próxima propiedad. Más de 50 años
          de experiencia en el rubro inmobiliario.
        </p>
        {/* Social */}
        <div className="flex gap-3 mt-6">
          <a href="https://www.instagram.com/predialok/" target="_blank" rel="noopener noreferrer"
            className="w-9 h-9 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors">
            <Instagram className="w-4 h-4" />
          </a>
          <a href="https://www.youtube.com/@GrupoPredial" target="_blank" rel="noopener noreferrer"
            className="w-9 h-9 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors">
            <Youtube className="w-4 h-4" />
          </a>
          <a href="https://ar.linkedin.com/company/predial-propiedades" target="_blank" rel="noopener noreferrer"
            className="w-9 h-9 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors">
            <Linkedin className="w-4 h-4" />
          </a>
          {/* WhatsApp */}
          <a href="https://wa.me/5491162216632" target="_blank" rel="noopener noreferrer"
            className="w-9 h-9 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors">
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Contacto */}
      <div>
        <h4 className="text-sm font-semibold uppercase tracking-widest mb-5 text-primary-foreground/50">Contacto</h4>
        <ul className="space-y-3 text-sm text-primary-foreground/70">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-gold">📍</span>
            <span>Av. Corrientes 4217, Almagro<br />CABA, Argentina</span>
          </li>
          <li className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-gold flex-shrink-0" />
            <a href="tel:+541162216632" className="hover:text-primary-foreground transition-colors">
              +54 11 6221-6632
            </a>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-gold">✉️</span>
            <a href="mailto:info@predial.ar" className="hover:text-primary-foreground transition-colors">
              info@predial.ar
            </a>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-primary-foreground/40 text-xs">Lun–Vie 10:00 a 18:00 hs</span>
          </li>
        </ul>
      </div>

      {/* Links */}
      <div>
        <h4 className="text-sm font-semibold uppercase tracking-widest mb-5 text-primary-foreground/50">Emprendimientos</h4>
        <ul className="space-y-2.5 text-sm text-primary-foreground/70">
          {[
            { label: "Palermo", href: "https://predial.ar/propiedad/66518-2/" },
            { label: "Belgrano", href: "https://predial.ar/propiedad/58466-2/" },
            { label: "Villa Urquiza", href: "https://predial.ar/propiedad/65905-2/" },
            { label: "Almagro", href: "https://predial.ar/propiedad/39679-2/" },
            { label: "Villa Crespo", href: "https://predial.ar/propiedad/58914-2/" },
            { label: "Ver todos", href: "https://predial.ar/emprendimientos/" },
          ].map((link) => (
            <li key={link.label}>
              <a href={link.href} target="_blank" rel="noopener noreferrer"
                className="hover:text-gold transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="border-t border-primary-foreground/10">
      <div className="max-w-[1200px] mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-primary-foreground/30">
        <span>© 2025 Predial · Emprendimientos en Buenos Aires</span>
        <a href="https://predial.ar" target="_blank" rel="noopener noreferrer"
          className="hover:text-primary-foreground/60 transition-colors">
          predial.ar
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
