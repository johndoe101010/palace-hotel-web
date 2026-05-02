import { motion } from "framer-motion";
import { siteImages, siteData } from "@/lib/site";

const Hero = () => {
  return (
    <section className="relative h-[80vh] min-h-[560px] md:h-[calc(100vh-112px)] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={siteImages.heroSlider}
          alt="Concepción Palace Hotel — fachada principal"
          className="w-full h-full object-cover object-[30%_center] md:object-center"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/20 to-ink" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent from-50% to-ink/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/50 via-transparent to-transparent" />
      </div>

      <div className="relative h-full container-luxe flex flex-col justify-end pb-10 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-foreground mb-5 md:mb-8">
            {siteData.tagline.split(" ")[0]}
            <br />
            <span className="italic text-gold">{siteData.tagline.split(" ").slice(1).join(" ")}.</span>
          </h1>
          <p className="text-sm md:text-lg text-foreground/70 max-w-xl leading-relaxed mb-7 md:mb-10 font-light">
            En el corazón de Concepción, rodeado de los atractivos culturales
            más importantes del norte paraguayo. {siteData.totalRooms} habitaciones,
            amplios jardines internos y piscina al aire libre.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4">
            <a
              href={`https://wa.me/${siteData.whatsappRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              Reservar por WhatsApp
            </a>
            <a href="#suites" className="btn-ghost-gold-solid md:btn-ghost-gold">Ver habitaciones</a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3"
      >
        <span className="text-[10px] tracking-[0.4em] text-foreground/50 uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent animate-shimmer" />
      </motion.div>
    </section>
  );
};

export default Hero;
