import { siteData } from "@/lib/site";
import { FacebookIcon, InstagramIcon, TripadvisorIcon, WhatsAppIcon } from "@/components/SocialIcons";
import logoGold from "@/assets/logo-gold.png";

const socialLinks = [
  { label: "WhatsApp", href: `https://wa.me/${siteData.whatsappRaw}`, icon: WhatsAppIcon },
  { label: "Facebook", href: siteData.facebookUrl, icon: FacebookIcon },
  { label: "Instagram", href: siteData.instagramUrl, icon: InstagramIcon },
  { label: "Tripadvisor", href: siteData.tripadvisorUrl, icon: TripadvisorIcon },
];

const Footer = () => {
  return (
    <footer className="bg-ink border-t border-border/40 py-14">
      <div className="container-luxe">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <img
              src={logoGold}
              alt="Concepción Palace Hotel"
              className="h-20 w-auto mb-5"
              loading="lazy"
            />
            <p className="text-sm text-foreground/55 leading-relaxed max-w-xs">
              {siteData.tagline}. En el centro de Concepción, rodeado de los
              atractivos culturales más importantes del norte paraguayo.
            </p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] text-primary mb-5">Navegación</h4>
            <ul className="space-y-3 text-sm text-foreground/60">
              <li><a href="#hotel" className="hover:text-primary transition-colors">El hotel</a></li>
              <li><a href="#suites" className="hover:text-primary transition-colors">Habitaciones</a></li>
              <li><a href="#experiencias" className="hover:text-primary transition-colors">Servicios</a></li>
              <li><a href="#gastronomia" className="hover:text-primary transition-colors">Restaurante</a></li>
              <li><a href="#eventos" className="hover:text-primary transition-colors">Eventos</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] text-primary mb-5">Contacto</h4>
            <ul className="space-y-3 text-sm text-foreground/60">
              <li>{siteData.address}</li>
              <li>{siteData.city}</li>
              <li>Tel: {siteData.phone}</li>
              <li>WhatsApp: {siteData.whatsapp}</li>
              <li>{siteData.email}</li>
            </ul>
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-9 w-9 items-center justify-center border border-border/60 text-foreground/65 hover:text-primary hover:border-primary/60 transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-foreground/40">
          <div>© {new Date().getFullYear()} {siteData.name}. Todos los derechos reservados.</div>
          <div className="tracking-[0.2em] uppercase">Concepción · Paraguay</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
