import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Suites from "@/components/Suites";
import Experiencias from "@/components/Experiencias";
import Gastronomia from "@/components/Gastronomia";
import Eventos from "@/components/Eventos";
import Testimonios from "@/components/Testimonios";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";


export default function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Intro />
      <Suites />
      <Experiencias />
      <Gastronomia />
      <Eventos />
      <Testimonios />
      <Contacto />
      <Footer />
    </main>
  );
}
