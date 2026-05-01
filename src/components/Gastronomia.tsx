import { motion } from "framer-motion";
import { siteImages, siteData } from "@/lib/site";

const platos = [
  { title: "Carne del Norte", desc: "Los mejores cortes y las más tiernas carnes concepcioneras a tu alcance.", img: siteImages.carne },
  { title: "Pescados", desc: "Gran variedad de platos preparados con los pescados más frescos.", img: siteImages.pescado },
  { title: "Pollo", desc: "Platos versátiles e innovadores combinados con la mejor guarnición.", img: siteImages.pollo },
  { title: "Pastas", desc: "Disponibilidad de todas las pastas y variedad de salsas.", img: siteImages.pastas },
];

const Gastronomia = () => {
  return (
    <>
      <section id="gastronomia" className="py-28 md:py-40 bg-secondary/30">
        <div className="container-luxe">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
            >
              <span className="eyebrow mb-6">Restaurante Tagatiya</span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight mb-8">
                La mejor carne del <em className="text-gold not-italic">Norte</em>.
              </h2>
              <div className="gold-divider mb-8" />
              <div className="space-y-5 text-foreground/70 leading-relaxed">
                <p>
                  Para quienes desean probar la mejor carne del Norte de Paraguay
                  o los más exquisitos platos a base de pescados, el hotel ofrece
                  el Restaurante Tagatiya como la mejor opción gastronómica.
                </p>
              </div>
              <a
                href={`https://wa.me/${siteData.whatsappRaw}?text=${encodeURIComponent(
                  "Hola, quisiera reservar mesa en el Restaurante Tagatiya."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost-gold mt-10"
              >
                Reservar mesa
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2 }}
            >
              <img
                src={siteImages.chef}
                alt="Chef del Restaurante Tagatiya preparando carnes del norte"
                loading="lazy"
                width={1600}
                height={1100}
                className="w-full h-[480px] object-cover"
              />
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {platos.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="group"
              >
                <div className="aspect-[3/4] overflow-hidden mb-5">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-contain transition-transform duration-[1400ms] group-hover:scale-105"
                  />
                </div>
                <h3 className="font-display text-xl md:text-2xl mb-2">{p.title}</h3>
                <p className="text-sm text-foreground/60 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gastronomia;
