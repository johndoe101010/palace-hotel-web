import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { siteData } from "@/lib/site";
import { WhatsAppIcon } from "@/components/SocialIcons";

const Contacto = () => {
  return (
    <section id="contacto" className="py-28 md:py-40 bg-background">
      <div className="container-luxe">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="eyebrow mb-6">Reservas & Contacto</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight mb-8">
              Su próxima estadía <em className="text-gold not-italic">comienza aquí</em>.
            </h2>
            <div className="gold-divider mb-10" />

            <div className="space-y-7">
              <a href={siteData.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-5 group">
                <MapPin className="text-primary mt-1 shrink-0" size={22} strokeWidth={1.3} />
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-foreground/50 mb-1.5">Dirección</div>
                  <div className="text-foreground/90 group-hover:text-primary transition-colors">
                    {siteData.address}
                    <br />
                    {siteData.city}
                  </div>
                </div>
              </a>

              <a href={`tel:${siteData.phoneRaw}`} className="flex items-start gap-5 group">
                <Phone className="text-primary mt-1 shrink-0" size={22} strokeWidth={1.3} />
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-foreground/50 mb-1.5">Teléfono</div>
                  <div className="text-foreground/90 group-hover:text-primary transition-colors">
                    {siteData.phone}
                  </div>
                </div>
              </a>

              <a
                href={`https://wa.me/${siteData.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-5 group"
              >
                <WhatsAppIcon className="text-primary mt-1 shrink-0" size={22} />
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-foreground/50 mb-1.5">WhatsApp</div>
                  <div className="text-foreground/90 group-hover:text-primary transition-colors">
                    {siteData.whatsapp}
                  </div>
                </div>
              </a>

              <a href={`mailto:${siteData.email}`} className="flex items-start gap-5 group">
                <Mail className="text-primary mt-1 shrink-0" size={22} strokeWidth={1.3} />
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-foreground/50 mb-1.5">Email</div>
                  <div className="text-foreground/90 group-hover:text-primary transition-colors">
                    {siteData.email}
                  </div>
                </div>
              </a>

              <div className="flex items-start gap-5">
                <Clock className="text-primary mt-1 shrink-0" size={22} strokeWidth={1.3} />
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-foreground/50 mb-1.5">Horarios</div>
                  <div className="text-foreground/90">
                    Check-in {siteData.checkIn} hs · Check-out {siteData.checkOut} hs
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.15 }}
            className="bg-card border border-border/50 overflow-hidden flex flex-col"
          >
            <div className="aspect-[4/3] w-full bg-secondary/40">
              <iframe
                title="Ubicación Concepción Palace Hotel"
                src={siteData.mapsEmbedUrl}
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="p-8 md:p-10">
              <h3 className="font-display text-2xl md:text-3xl mb-3">Reservá ahora mismo</h3>
              <p className="text-sm text-foreground/65 mb-7 leading-relaxed">
                Escribinos por WhatsApp y te respondemos al instante con
                disponibilidad y tarifas.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/${siteData.whatsappRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold flex-1"
                >
                  WhatsApp
                </a>
                <a href={`mailto:${siteData.email}`} className="btn-ghost-gold flex-1">
                  Enviar email
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
