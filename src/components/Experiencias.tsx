import { motion } from "framer-motion";
import { Wifi, Waves, Car, Trees, Users, UtensilsCrossed, Clock, Building2 } from "lucide-react";
import { siteData } from "@/lib/site";

const items = [
  { icon: Wifi, title: "Free Wi-Fi", desc: "En las habitaciones y áreas comunes." },
  { icon: Waves, title: "Piscina al aire libre", desc: "Para huéspedes, rodeada de jardines." },
  { icon: Car, title: "Estacionamiento", desc: "Amplio estacionamiento cubierto." },
  { icon: Trees, title: "Jardines internos", desc: "Espacios amplios para descansar." },
  { icon: UtensilsCrossed, title: "Restaurante Tagatiya", desc: "Carnes del Norte, pescados, pollo y pastas." },
  { icon: Users, title: "Salón Atyha", desc: "Eventos sociales y empresariales hasta 200 personas." },
  { icon: Building2, title: "Quincho Palace", desc: "Espacio íntimo para hasta 50 personas." },
  { icon: Clock, title: "Check-in / Check-out", desc: `Check-in ${siteData.checkIn} hs · Check-out ${siteData.checkOut} hs.` },
];

const Experiencias = () => {
  return (
    <section id="experiencias" className="py-28 md:py-40 bg-background">
      <div className="container-luxe">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="eyebrow mb-6 justify-center" style={{ display: 'inline-flex' }}>Servicios</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight mt-6">
            Comodidades para una <em className="text-gold not-italic">estadía perfecta</em>.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border/40">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.08 }}
              className="bg-background p-8 md:p-10 group hover:bg-card transition-colors duration-500"
            >
              <it.icon className="text-primary mb-6 group-hover:scale-110 transition-transform duration-500" size={28} strokeWidth={1.2} />
              <h3 className="font-display text-xl md:text-2xl mb-3">{it.title}</h3>
              <p className="text-sm text-foreground/60 leading-relaxed">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiencias;
