import { useEffect, type ComponentType } from "react";
import HomePage from "@/routes/index";
import GaleriaPage from "@/routes/galeria";
import ContactenosPage from "@/routes/contactenos";
import HabitacionesSuitesPage from "@/routes/habitaciones-suites";
import NosotrosPage from "@/routes/nosotros";

const pageMeta: Record<string, { title: string; description: string }> = {
  "/": {
    title: "Concepción Palace Hotel — Hospitalidad Concepcionera",
    description:
      "Hotel boutique en el corazón de Concepción, Paraguay. Habitaciones, suites, restaurante Tagatiya, piscina y salón de eventos.",
  },
  "/nosotros": {
    title: "Nosotros — Concepción Palace Hotel",
    description: "Historia, misión, visión, valores y servicios del Concepción Palace Hotel.",
  },
  "/habitaciones-suites": {
    title: "Habitaciones & Suites — Concepción Palace Hotel",
    description: "Habitaciones y suites del Concepción Palace Hotel en Concepción, Paraguay.",
  },
  "/galeria": {
    title: "Galería — Concepción Palace Hotel",
    description: "Galería de fotos del Concepción Palace Hotel: piscina, restaurante, lobby, patio y momentos del hotel.",
  },
  "/contactenos": {
    title: "Contáctenos — Concepción Palace Hotel",
    description: "Reservas y consultas del Concepción Palace Hotel en Concepción, Paraguay.",
  },
};

const routes: Record<string, ComponentType> = {
  "/": HomePage,
  "/nosotros": NosotrosPage,
  "/habitaciones-suites": HabitacionesSuitesPage,
  "/galeria": GaleriaPage,
  "/contactenos": ContactenosPage,
};

const normalizePath = (pathname: string) => {
  const cleaned = pathname.replace(/\/$/, "") || "/";
  return routes[cleaned] ? cleaned : "/";
};

function App() {
  const currentPath = normalizePath(window.location.pathname);
  const Page = routes[currentPath];

  useEffect(() => {
    const meta = pageMeta[currentPath] ?? pageMeta["/"];
    document.title = meta.title;
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (description) description.content = meta.description;
  }, [currentPath]);

  return <Page />;
}

export default App;
