import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { siteImages, siteData } from "@/lib/site";

const rooms = [
  {
    name: "Suite",
    bed: "1 Cama Matrimonial",
    capacity: "2 adultos",
    img: siteImages.suiteHero,
    facilities: [
      "Aire Acondicionado",
      "Cama King Size",
      "Caja Fuerte Electrónica",
      "Free Wi-Fi",
      "Frigobar",
      "Hervidora",
      "Máquina de Café",
      "Sala de Estar Interna",
      "Secador de Pelo",
      "TV a Cable",
    ],
  },
  {
    name: "Doble Twin",
    bed: "2 Camas Single",
    capacity: "2 adultos",
    img: siteImages.dobleTwin,
    facilities: [
      "Aire Acondicionado",
      "Caja Fuerte Electrónica",
      "Free Wi-Fi",
      "Frigobar",
      "Secador de Pelo",
      "TV a Cable",
    ],
  },
  {
    name: "Triple",
    bed: "3 Camas Single",
    capacity: "3 adultos",
    img: siteImages.tripleSoltero,
    facilities: [
      "Aire Acondicionado",
      "Caja Fuerte Electrónica",
      "Free Wi-Fi",
      "Frigobar",
      "Secador de Pelo",
      "TV a Cable",
    ],
  },
  {
    name: "Matrimonial",
    bed: "1 Cama Matrimonial",
    capacity: "2 adultos",
    img: siteImages.matrimonial,
    facilities: [
      "Aire Acondicionado",
      "Caja Fuerte Electrónica",
      "Free Wi-Fi",
      "Frigobar",
      "Secador de Pelo",
      "TV a Cable",
    ],
  },
  {
    name: "Matrimonial Triple",
    bed: "1 Matrimonial + 1 Single",
    capacity: "3 adultos",
    img: siteImages.tripleMatrimonial,
    facilities: [
      "Aire Acondicionado",
      "Caja Fuerte Electrónica",
      "Free Wi-Fi",
      "Frigobar",
      "Secador de Pelo",
      "TV a Cable",
    ],
  },
];

const Suites = () => {
  return (
    <section id="suites" className="py-28 md:py-40 bg-secondary/30 relative">
      <div className="container-luxe">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
          <div className="max-w-xl">
            <span className="eyebrow mb-6">Habitaciones & Suites</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight">
              Confortables habitaciones y <em className="text-gold not-italic">suites</em>.
            </h2>
          </div>
          <p className="text-foreground/65 max-w-md leading-relaxed">
            El hotel cuenta con {siteData.totalRooms} habitaciones, de las cuales
            {" "}{siteData.totalSuites} son amplias suites. Singles, dobles, triples,
            matrimoniales y suites para cada ocasión.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {rooms.map((r, i) => (
            <motion.article
              key={r.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: (i % 3) * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="group bg-card border border-border/50 hover:border-primary/40 transition-all duration-700 overflow-hidden flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={r.img}
                  alt={`${r.name} — Concepción Palace Hotel`}
                  loading="lazy"
                  width={1280}
                  height={640}
                  className="w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent opacity-90" />
                <div className="absolute top-5 left-5 text-[10px] tracking-[0.3em] uppercase text-primary bg-ink/60 backdrop-blur-sm px-3 py-1.5 border border-primary/30">
                  {r.capacity}
                </div>
              </div>
              <div className="p-7 md:p-8 flex flex-col flex-1">
                <h3 className="font-display text-2xl md:text-3xl mb-2">{r.name}</h3>
                <p className="text-xs uppercase tracking-[0.2em] text-primary mb-5">{r.bed}</p>
                <ul className="text-xs text-foreground/60 leading-relaxed mb-6 flex flex-wrap gap-x-3 gap-y-1">
                  {r.facilities.slice(0, 6).map((f) => (
                    <li key={f} className="before:content-['·'] before:mr-2 before:text-primary first:before:content-none first:before:mr-0">
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between pt-5 border-t border-border/50 mt-auto">
                  <span className="text-xs uppercase tracking-[0.2em] text-foreground/50">
                    Consultar tarifa
                  </span>
                  <a
                    href={`https://wa.me/${siteData.whatsappRaw}?text=${encodeURIComponent(
                      `Hola, quisiera reservar la habitación ${r.name}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/70 hover:text-primary transition-colors group/link inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em]"
                  >
                    Reservar
                    <ArrowUpRight size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Suites;
