import { motion } from "framer-motion";
import { siteImages, siteData } from "@/lib/site";

const Intro = () => {
  return (
    <section id="hotel" className="py-28 md:py-40 bg-background relative overflow-hidden">
      <div className="container-luxe grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -top-4 -left-4 w-24 h-24 border-l border-t border-primary/40" />
          <img
            src={siteImages.sala}
            alt="Sala del Concepción Palace Hotel"
            loading="lazy"
            width={1600}
            height={1100}
            className="w-full h-[520px] object-cover relative z-10"
          />
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r border-b border-primary/40" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="eyebrow mb-6">El hotel</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight mb-8">
            Le acerca lo mejor de <em className="text-gold not-italic">Concepción</em>.
          </h2>
          <div className="gold-divider mb-8" />
          <div className="space-y-5 text-foreground/70 leading-relaxed">
            <p>
              Ubicado en el centro mismo de la ciudad de Concepción y rodeado de
              los atractivos culturales más importantes, el Concepción Palace
              Hotel ofrece la oportunidad para hacer contacto con la rica
              historia de la ciudad, a través de museos, casonas y monumentos.
            </p>
            <p>
              Amplios jardines internos, piscina al aire libre y espacio para
              eventos. Es el lugar ideal para quien llega por trabajo, paseo o
              vacaciones.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-12 pt-10 border-t border-border/50">
            {[
              { n: String(siteData.totalRooms), l: "Habitaciones" },
              { n: String(siteData.totalSuites), l: "Suites" },
              { n: `${siteData.checkIn}h`, l: "Check-in" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-4xl md:text-5xl text-gold mb-1">{s.n}</div>
                <div className="text-xs uppercase tracking-[0.25em] text-foreground/60">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;
