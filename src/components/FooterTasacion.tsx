import logo from "@/assets/logo-footer.png";
import { Instagram, Youtube, Linkedin, ShieldCheck } from "lucide-react";

const FooterTasacion = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="max-w-[1200px] mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
      {/* Logo + descripción */}
      <div className="md:col-span-2">
        <img src={logo} alt="Predial" className="h-10 object-contain mb-5" />
        <p className="text-primary-foreground/60 text-sm leading-relaxed max-w-md">
          Más de 50 años tasando y comercializando propiedades en CABA.
          Tasaciones realizadas por profesionales matriculados que conocen
          el mercado porteño barrio por barrio.
        </p>
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
        </div>
      </div>

      {/* Respaldo profesional */}
      <div>
        <div className="flex items-start gap-3 bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl p-4">
          <ShieldCheck className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
          <div className="text-sm text-primary-foreground/75 leading-relaxed">
            <p className="font-semibold text-primary-foreground">Gabriel Brodsky</p>
            <p className="text-xs mt-1">Predial Propiedades S.R.L.</p>
            <p className="text-xs mt-1 text-gold">Mat. CUCICBA 3269</p>
          </div>
        </div>
        <p className="text-xs text-primary-foreground/50 mt-4 leading-relaxed">
          Av. Corrientes 4217, Almagro · CABA<br />
          Lun–Vie 10:00 a 18:00 hs
        </p>
      </div>
    </div>

    <div className="border-t border-primary-foreground/10">
      <div className="max-w-[1200px] mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-primary-foreground/30">
        <span>© 2025 Predial · Tasaciones en CABA</span>
        <a href="https://predial.ar" target="_blank" rel="noopener noreferrer"
          className="hover:text-primary-foreground/60 transition-colors">
          predial.ar
        </a>
      </div>
    </div>
  </footer>
);

export default FooterTasacion;
