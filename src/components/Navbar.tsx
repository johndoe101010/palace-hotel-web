import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { siteData } from "@/lib/site";
import logoGold from "@/assets/logo-gold.png";

const links: Array<{ label: string; href: string }> = [
  { label: "Hotel", href: "/#hotel" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Habitaciones & Suites", href: "/habitaciones-suites" },
  { label: "Restaurante", href: "/#gastronomia" },
  { label: "Eventos", href: "/#eventos" },
  { label: "Contáctenos", href: "/contactenos" },
  { label: "Galería", href: "/galeria" },
];

const navLinkClass =
  "text-xs uppercase tracking-[0.25em] whitespace-nowrap text-foreground/80 hover:text-primary transition-colors duration-500";
const mobileNavLinkClass =
  "text-sm uppercase tracking-[0.25em] text-foreground/80 hover:text-primary";

const isCurrentPath = (href: string) => {
  if (typeof window === "undefined") return false;
  const [path] = href.split("#");
  return path !== "/" && window.location.pathname === path;
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 inset-x-0 z-50 bg-ink transition-all duration-700 ${
        scrolled ? "py-3 border-b border-border/40" : "py-5"
      }`}
    >
      <div className="container-luxe flex items-center justify-between lg:justify-center lg:gap-12 xl:gap-16">
        <a href="/" className="flex items-center shrink-0" aria-label="Concepción Palace Hotel — inicio">
          <img
            src={logoGold}
            alt="Concepción Palace Hotel"
            className={`w-auto transition-all duration-500 ${scrolled ? "h-12 md:h-14" : "h-14 md:h-20"}`}
          />
        </a>

        <div className="hidden lg:flex items-center justify-center gap-8 xl:gap-10">
          <nav className="flex items-center gap-7 xl:gap-9">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`${navLinkClass} ${isCurrentPath(link.href) ? "text-primary" : ""}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href={`https://wa.me/${siteData.whatsappRaw}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex btn-gold !py-3 !px-6"
          >
            Reservar
          </a>
        </div>

        <button
          aria-label="Menú"
          onClick={() => setOpen(!open)}
          className="lg:hidden text-foreground p-2"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 bg-ink/95 backdrop-blur-md ${
          open ? "max-h-[32rem] mt-4 border-t border-border/40" : "max-h-0"
        }`}
      >
        <nav className="container-luxe flex flex-col py-6 gap-5">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`${mobileNavLinkClass} ${isCurrentPath(link.href) ? "text-primary" : ""}`}
            >
              {link.label}
            </a>
          ))}
          <a
            href={`https://wa.me/${siteData.whatsappRaw}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="btn-gold mt-2 self-start"
          >
            Reservar
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
