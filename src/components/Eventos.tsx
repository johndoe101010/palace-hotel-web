import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { siteData } from "@/lib/site";
import salonEventos from "@/assets/salon-eventos.jpg";

const Eventos = () => {
  return (
    <section id="eventos" className="relative py-28 md:py-40 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={salonEventos}
          alt="Salón de eventos del Concepción Palace Hotel"
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
      </div>

      <div className="relative container-luxe">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="max-w-2xl"
        >
          <span className="eyebrow mb-6">Eventos</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight mb-8">
            Salones para cada <em className="text-gold not-italic">ocasión</em>.
          </h2>
          <div className="gold-divider mb-8" />
          <p className="text-foreground/75 leading-relaxed mb-12">
            Disfrute de nuestros salones para conferencias, cumpleaños o cualquier
            evento social y empresarial, con el más sofisticado soporte de
            nuestros profesionales.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            <div className="bg-card/60 backdrop-blur-sm border border-border/50 p-7">
              <Users className="text-primary mb-4" size={26} strokeWidth={1.3} />
              <h3 className="font-display text-2xl mb-1">Salón Atyha</h3>
              <p className="text-xs uppercase tracking-[0.25em] text-primary mb-3">Hasta 200 personas</p>
              <p className="text-sm text-foreground/65">Ideal para eventos sociales y empresariales de gran formato.</p>
            </div>
            <div className="bg-card/60 backdrop-blur-sm border border-border/50 p-7">
              <Users className="text-primary mb-4" size={26} strokeWidth={1.3} />
              <h3 className="font-display text-2xl mb-1">Quincho Palace</h3>
              <p className="text-xs uppercase tracking-[0.25em] text-primary mb-3">Hasta 50 personas</p>
              <p className="text-sm text-foreground/65">Espacio íntimo y cálido para reuniones más reducidas.</p>
            </div>
          </div>

          <a
            href={`https://wa.me/${siteData.whatsappRaw}?text=${encodeURIComponent(
              "Hola, quisiera solicitar una cotización para un evento."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            Solicitar cotización
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Eventos;
