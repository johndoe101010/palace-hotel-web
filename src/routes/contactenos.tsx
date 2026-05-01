import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { WhatsAppIcon } from "@/components/SocialIcons";
import { siteData, siteImages } from "@/lib/site";


export default function ContactenosPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(
      `Nombre: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    );
    window.location.href = `mailto:${siteData.email}?subject=${encodeURIComponent(
      "Consulta desde la web",
    )}&body=${body}`;
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[45vh] min-h-[340px] overflow-hidden">
        <img
          src={siteImages.heroSlider}
          alt="Concepción Palace Hotel"
          className="absolute inset-0 w-full h-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-overlay)" }} />
        <div className="relative z-10 h-full flex items-end pb-12 md:pb-20">
          <div className="container-luxe">
            <span className="eyebrow">{siteData.city}</span>
            <h1 className="font-display text-5xl md:text-7xl mt-6">
              Contá<em className="text-gold not-italic">ctenos</em>
            </h1>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-luxe grid lg:grid-cols-12 gap-16">
          {/* Datos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-5 space-y-10"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-foreground/50 mb-2">Concepción · Paraguay</p>
              <h2 className="font-display text-3xl md:text-4xl">Estamos para <em className="text-gold not-italic">atenderte</em></h2>
              <div className="gold-divider mt-6" />
            </div>

            <a href={siteData.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-5 group">
              <MapPin className="text-primary mt-1 shrink-0" size={22} strokeWidth={1.3} />
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-foreground/50 mb-1.5">Dirección</div>
                <div className="text-foreground/90 group-hover:text-primary transition-colors">
                  {siteData.address}<br />{siteData.city}
                </div>
              </div>
            </a>

            <a href={`mailto:${siteData.email}`} className="flex items-start gap-5 group">
              <Mail className="text-primary mt-1 shrink-0" size={22} strokeWidth={1.3} />
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-foreground/50 mb-1.5">Reservas — Email</div>
                <div className="text-foreground/90 group-hover:text-primary transition-colors break-all">
                  {siteData.email}
                </div>
              </div>
            </a>

            <a href={`tel:${siteData.phoneRaw}`} className="flex items-start gap-5 group">
              <Phone className="text-primary mt-1 shrink-0" size={22} strokeWidth={1.3} />
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-foreground/50 mb-1.5">Teléfono</div>
                <div className="text-foreground/90 group-hover:text-primary transition-colors">{siteData.phone}</div>
              </div>
            </a>

            <a
              href={`https://wa.me/${siteData.whatsappRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-5 group"
            >
              <WhatsAppIcon className="text-primary mt-1 shrink-0" size={22} />
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-foreground/50 mb-1.5">Celular / WhatsApp</div>
                <div className="text-foreground/90 group-hover:text-primary transition-colors">{siteData.whatsapp}</div>
              </div>
            </a>
          </motion.div>

          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="border border-border/50 bg-card/40 backdrop-blur-sm p-8 md:p-12">
              <span className="eyebrow">Formulario de contacto</span>
              <h3 className="font-display text-3xl md:text-4xl mt-4 mb-2">
                Escribinos tu <em className="text-gold not-italic">consulta</em>
              </h3>
              <p className="text-foreground/70 mb-8 text-sm">
                Para cualquier consulta usá nuestro formulario y te responderemos a la brevedad posible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs uppercase tracking-[0.25em] text-foreground/60 mb-2">Nombre</label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-foreground transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-[0.25em] text-foreground/60 mb-2">Email</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-foreground transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-[0.25em] text-foreground/60 mb-2">Mensaje</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-foreground transition-colors resize-none"
                  />
                </div>
                <button type="submit" className="btn-gold mt-2">Enviar mensaje</button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mapa */}
      <section className="pb-24">
        <div className="container-luxe">
          <div className="aspect-[16/7] w-full overflow-hidden border border-border/50">
            <iframe
              title="Mapa Concepción Palace Hotel"
              src={siteData.mapsEmbedUrl}
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
