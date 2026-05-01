import { motion } from "framer-motion";
import jannik from "@/assets/reviews/jannik-wiebe.png";
import andrea from "@/assets/reviews/andrea-paredes.png";
import carlos from "@/assets/reviews/carlos-meilicke.png";

const testimonios = [
  {
    name: "Jannik Wiebe",
    role: "Reseña en Google",
    text: "Excelente atención, muy lindo patio y la comida buenísima.",
    avatar: jannik,
    href: "https://maps.app.goo.gl/EoaPncKKkg5iRc9v7",
  },
  {
    name: "Andrea Paredes",
    role: "Reseña en Google",
    text: "Todo de maravilla! Cada que vengamos a Concepción, tenemos lugar fijo para hospedarnos.",
    avatar: andrea,
    href: "https://maps.app.goo.gl/GGa3k23ptmQHzrWr8",
  },
  {
    name: "Carlos Meilicke",
    role: "Reseña en Google",
    text: "Bien ubicado, muy buena atención, el desayuno excelente… estuvimos por poco tiempo pero hasta quisimos quedarnos más. Recomendado!",
    avatar: carlos,
    href: "https://maps.app.goo.gl/DYYoZ68seg5Xem7W9",
  },
];

const Testimonios = () => {
  return (
    <section className="py-28 md:py-40 bg-background">
      <div className="container-luxe">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="eyebrow mb-6 justify-center" style={{ display: "inline-flex" }}>Opiniones</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight mt-6">
            La voz de nuestros <em className="text-gold not-italic">huéspedes</em>.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonios.map((t, i) => (
            <motion.a
              key={t.name}
              href={t.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="bg-card/40 border border-border/50 p-8 md:p-10 relative block group hover:border-primary/60 transition-colors duration-500"
            >
              <div className="font-display text-6xl text-gold leading-none mb-4">“</div>
              <p className="text-foreground/80 leading-relaxed mb-8 italic font-light">
                {t.text}
              </p>
              <footer className="pt-6 border-t border-border/50 flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  loading="lazy"
                  className="w-12 h-12 rounded-full object-cover border border-primary/40"
                />
                <div>
                  <div className="font-display text-lg group-hover:text-primary transition-colors">{t.name}</div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-primary mt-1">{t.role}</div>
                </div>
              </footer>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonios;
