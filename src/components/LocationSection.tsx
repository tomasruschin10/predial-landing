import { MapPin, Clock, Phone } from "lucide-react";

const LocationSection = () => (
  <section id="ubicacion" className="py-24 bg-background">
    <div className="max-w-[1200px] mx-auto px-6">
      <div className="mb-12 fade-in-up">
        <span className="text-xs font-semibold tracking-widest uppercase text-gold">
          Dónde estamos
        </span>
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-2 mb-3">
          Visitanos en nuestra oficina
        </h2>
        <p className="text-muted-foreground">
          Estamos en Almagro, fácil acceso desde cualquier punto de CABA.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 items-start">
        {/* Info cards */}
        <div className="space-y-4 fade-in-up">
          <div className="bg-surface border border-border rounded-2xl p-6 flex gap-4 items-start">
            <div className="w-10 h-10 bg-gold-light rounded-xl flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-gold" />
            </div>
            <div>
              <p className="font-semibold text-foreground text-sm mb-1">Dirección</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Av. Corrientes 4217<br />
                Almagro, CABA, Argentina
              </p>
            </div>
          </div>

          <div className="bg-surface border border-border rounded-2xl p-6 flex gap-4 items-start">
            <div className="w-10 h-10 bg-gold-light rounded-xl flex items-center justify-center flex-shrink-0">
              <Clock className="w-5 h-5 text-gold" />
            </div>
            <div>
              <p className="font-semibold text-foreground text-sm mb-1">Horarios</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Lunes a Viernes<br />
                10:00 a 18:00 hs
              </p>
            </div>
          </div>

          <div className="bg-surface border border-border rounded-2xl p-6 flex gap-4 items-start">
            <div className="w-10 h-10 bg-gold-light rounded-xl flex items-center justify-center flex-shrink-0">
              <Phone className="w-5 h-5 text-gold" />
            </div>
            <div>
              <p className="font-semibold text-foreground text-sm mb-1">Teléfono</p>
              <a href="tel:+541162216632"
                className="text-muted-foreground text-sm hover:text-gold transition-colors">
                +54 11 6221-6632
              </a>
            </div>
          </div>
        </div>

        {/* Map embed */}
        <div className="lg:col-span-2 fade-in-up-delay-2 rounded-2xl overflow-hidden border border-border shadow-sm h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.064253747123!2d-58.4243775!3d-34.6025367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca625893ffdd%3A0x433fda61676843be!2sPredial!5e0!3m2!1sen!2sar!4v1772643038776!5m2!1sen!2sar"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación Predial"
          />
        </div>
      </div>
    </div>
  </section>
);

export default LocationSection;
