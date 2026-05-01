import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteImages } from "@/lib/site";


const galleryModules = import.meta.glob<string>("../assets/galeria/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
});

const galeriaImages = Object.entries(galleryModules)
  .sort(([a], [b]) => a.localeCompare(b, "es"))
  .map(([path, src]) => ({
    src,
    alt: `Concepción Palace Hotel - ${
      path
        .split("/")
        .pop()
        ?.replace(/\.[^.]+$/, "")
        .replace(/-/g, " ") ?? "galería"
    }`,
  }));

export default function GaleriaPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="relative h-[45vh] min-h-[360px] overflow-hidden">
        <img
          src={siteImages.heroSlider}
          alt="Concepción Palace Hotel"
          className="absolute inset-0 w-full h-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-overlay)" }} />
        <div className="relative z-10 h-full flex items-end pb-12 md:pb-20">
          <div className="container-luxe">
            <span className="eyebrow">Galería</span>
            <h1 className="font-display text-5xl md:text-7xl mt-6">
              Momentos en el <em className="text-gold not-italic">Palace</em>
            </h1>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
            {galeriaImages.map((image, index) => (
              <motion.figure
                key={image.alt}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.8,
                  delay: Math.min(index * 0.035, 0.2),
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mb-6 break-inside-avoid overflow-hidden"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="block w-full h-auto rounded-lg"
                  decoding="async"
                  loading={index < 3 ? "eager" : "lazy"}
                />
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
