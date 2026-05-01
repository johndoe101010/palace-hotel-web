import { motion } from "framer-motion";
import { Waves, Users, Building2, UtensilsCrossed, Dumbbell, Crown, Car } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteImages, siteData } from "@/lib/site";


const servicios = [
  { icon: Waves, label: "Piscina al Aire Libre" },
  { icon: Users, label: "Quincho Palace climatizado para 50 personas" },
  { icon: Building2, label: "77 habitaciones, 3 suites con dos ambientes" },
  { icon: UtensilsCrossed, label: "Restaurante para 120 personas" },
  { icon: Dumbbell, label: "Gimnasio" },
  { icon: Crown, label: "Salón VIP" },
  { icon: Car, label: "Amplio estacionamiento cubierto" },
];

const valores = [
  {
    titulo: "Honestidad",
    desc: "Con las relaciones personales, con la sociedad, con nuestro trabajo y con nuestros clientes — transparencia, honradez y responsabilidad.",
  },
  {
    titulo: "Respeto",
    desc: "Respetamos y apreciamos a nuestros clientes, nuestro personal y nuestros asociados, escuchando opiniones y recomendaciones.",
  },
  {
    titulo: "Competitividad",
    desc: "Competimos con calidad en nuestros servicios buscando el bienestar socioeconómico y progreso de nuestros clientes.",
  },
  {
    titulo: "Servicio al cliente",
    desc: "Conocer las necesidades, sentimientos y expectativas para incrementar la satisfacción de cada huésped.",
  },
];

export default function NosotrosPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] overflow-hidden">
        <img
          src={siteImages.staff}
          alt="Equipo del Concepción Palace Hotel"
          className="absolute inset-0 w-full h-full object-cover animate-slow-zoom md:animate-none md:object-[center_72%]"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-overlay)" }} />
        <div className="relative z-10 h-full flex items-end pb-16 md:pb-24">
          <div className="container-luxe">
            <span className="eyebrow">Concepción · Paraguay</span>
            <h1 className="font-display text-5xl md:text-7xl mt-6 max-w-3xl">
              Nuestra <em className="text-gold not-italic">historia</em>
            </h1>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 md:py-32">
        <div className="container-luxe grid lg:grid-cols-12 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-6 text-base md:text-lg leading-relaxed text-foreground/80"
          >
            <p>
              Ubicado en el centro mismo de la ciudad de Concepción y rodeado de los atractivos
              culturales más importantes, el <em className="text-gold not-italic">Concepción Palace Hotel</em>
              {" "}ofrece la oportunidad de hacer contacto con la rica historia de la ciudad, a
              través de museos, casonas y monumentos que evocan su mayor apogeo.
            </p>
            <p>
              El hotel cuenta con {siteData.totalRooms} habitaciones y {siteData.totalSuites} amplias
              suites. Los huéspedes disfrutan de frigobar, confortables camas King Size, TV a cable,
              Internet y caja fuerte electrónica.
            </p>
            <p>
              Contamos con un amplio estacionamiento interno cubierto con monitoreo, jardines internos,
              piscina al aire libre y espacios para eventos como el salón Atyha (hasta 200 personas)
              y el Quincho Palace (50 personas).
            </p>
            <p>
              Para quienes desean probar la mejor carne del Norte de Paraguay o los más exquisitos
              platos a base de pescados, el Restaurante <em className="text-gold not-italic">Tagatiya</em> es
              la mejor opción gastronómica.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src={siteImages.tagatiya}
                alt="Restaurante Tagatiya"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Misión, Visión */}
      <section className="py-20 md:py-28 bg-secondary/30 border-y border-border/40">
        <div className="container-luxe grid md:grid-cols-2 gap-12">
          <div>
            <span className="eyebrow">Misión</span>
            <p className="mt-6 text-foreground/80 leading-relaxed text-lg">
              Ser una empresa hotelera con un claro enfoque en satisfacer las necesidades de sus
              clientes ya sean de negocios, turistas o locales, ofreciendo muy buena calidad con
              relación a su precio.
            </p>
          </div>
          <div>
            <span className="eyebrow">Visión</span>
            <p className="mt-6 text-foreground/80 leading-relaxed text-lg">
              Ser una organización líder, sólida y firme, ofreciendo día a día nuevas alternativas de
              servicios con innovación y tecnología, contribuyendo de esta manera con el desarrollo
              económico y social de la región.
            </p>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-24 md:py-32">
        <div className="container-luxe">
          <div className="text-center mb-16">
            <span className="eyebrow justify-center">Nuestros valores</span>
            <h2 className="font-display text-4xl md:text-5xl mt-6">
              La eficiencia en todo <em className="text-gold not-italic">procedimiento</em>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {valores.map((v, i) => (
              <motion.div
                key={v.titulo}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.05 }}
                className="border border-border/50 p-8 bg-card/40 backdrop-blur-sm"
              >
                <h3 className="font-display text-2xl text-gold mb-3">{v.titulo}</h3>
                <p className="text-foreground/75 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compromiso medio ambiente con galería */}
      <section className="py-24 md:py-32 bg-secondary/30 border-y border-border/40">
        <div className="container-luxe grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-7 grid grid-cols-2 gap-6"
          >
            <img src={siteImages.panelesSolares} alt="Paneles solares" className="aspect-[4/5] object-cover w-full" />
            <img src={siteImages.tanqueDeAgua} alt="Tanque de agua" className="aspect-[4/5] object-cover w-full mt-8" />
            <p className="col-span-2 text-xs text-foreground/50">
              Imágenes de referencia.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-5 space-y-6"
          >
            <span className="eyebrow">Compromiso con el medio ambiente</span>
            <h2 className="font-display text-4xl md:text-5xl">
              Sustentables por <em className="text-gold not-italic">naturaleza</em>
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              <strong className="text-foreground">Agua de lluvia:</strong> contamos con un sistema
              de reciclaje que recoge el agua de la azotea, la filtra y la almacena en tanques —
              llegando a guardar aproximadamente 27.000 litros — para uso en baños y riego.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              <strong className="text-foreground">Energía solar:</strong> el panel solar abastece
              de agua caliente a 17 termo-tanques durante los días soleados; en la noche se calienta
              mediante resistencias eléctricas de 2.000 W cada una.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-24 md:py-32">
        <div className="container-luxe">
          <div className="text-center mb-16">
            <span className="eyebrow justify-center">Servicios</span>
            <h2 className="font-display text-4xl md:text-5xl mt-6">
              Todo lo que ofrecemos para tu <em className="text-gold not-italic">estadía</em>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicios.map(({ icon: Icon, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="border border-border/50 p-6 flex items-center gap-4 bg-card/40 hover:border-primary/40 transition-colors"
              >
                <Icon className="text-gold shrink-0" size={28} />
                <span className="text-sm tracking-wide">{label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
