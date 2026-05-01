import { motion } from "framer-motion";
import { Users, BedDouble } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteImages, siteData } from "@/lib/site";


const facilitiesBase = [
  "Aire Acondicionado",
  "Caja Fuerte Electrónica",
  "Free Wi-Fi",
  "Frigobar",
  "Secador de Pelo",
  "TV a Cable",
];

const habitaciones = [
  {
    name: "Suite",
    img: siteImages.suiteHero,
    bed: "1 Cama Matrimonial King Size",
    capacity: 2,
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
    name: "Triple Soltero",
    img: siteImages.tripleSoltero,
    bed: "3 Camas Single",
    capacity: 3,
    facilities: facilitiesBase,
  },
  {
    name: "Triple Matrimonial",
    img: siteImages.tripleMatrimonial,
    bed: "1 Cama Matrimonial y 1 Cama Single",
    capacity: 3,
    facilities: facilitiesBase,
  },
  {
    name: "Matrimonial",
    img: siteImages.matrimonial,
    bed: "1 Cama Matrimonial",
    capacity: 2,
    facilities: facilitiesBase,
  },
  {
    name: "Doble Twin",
    img: siteImages.dobleTwin,
    bed: "2 Camas Single",
    capacity: 2,
    facilities: facilitiesBase,
  },
];

export default function HabitacionesSuitesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[55vh] min-h-[400px] overflow-hidden">
        <img
          src={siteImages.suiteHero}
          alt="Suite del Concepción Palace Hotel"
          className="absolute inset-0 w-full h-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-overlay)" }} />
        <div className="relative z-10 h-full flex items-end pb-16 md:pb-24">
          <div className="container-luxe">
            <span className="eyebrow">{siteData.totalRooms} habitaciones · {siteData.totalSuites} suites</span>
            <h1 className="font-display text-5xl md:text-7xl mt-6 max-w-4xl">
              Habitaciones &amp; <em className="text-gold not-italic">Suites</em>
            </h1>
            <p className="mt-6 max-w-xl text-foreground/75">
              Singles, dobles, triples, matrimoniales y suites — confort y elegancia para cada ocasión.
            </p>
          </div>
        </div>
      </section>

      {/* Listado */}
      <section className="py-20 md:py-28">
        <div className="container-luxe space-y-24 md:space-y-36">
          {habitaciones.map((room, i) => (
            <motion.article
              key={room.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="lg:col-span-7 relative overflow-hidden">
                <img
                  src={room.img}
                  alt={`Habitación ${room.name}`}
                  className="w-full aspect-[16/10] object-cover"
                />
              </div>
              <div className="lg:col-span-5 space-y-6">
                <span className="eyebrow">Habitación</span>
                <h2 className="font-display text-4xl md:text-5xl">
                  <em className="text-gold not-italic">{room.name}</em>
                </h2>
                <div className="flex flex-wrap gap-6 text-sm text-foreground/75">
                  <span className="inline-flex items-center gap-2">
                    <Users size={16} className="text-gold" /> {room.capacity} adultos
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <BedDouble size={16} className="text-gold" /> {room.bed}
                  </span>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-foreground/60 mb-3">Servicios</p>
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-foreground/80">
                    {room.facilities.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-primary rounded-full" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href={`https://wa.me/${siteData.whatsappRaw}?text=${encodeURIComponent(
                    `Hola, quisiera reservar una habitación ${room.name}.`,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold mt-2"
                >
                  Reservar por WhatsApp
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
