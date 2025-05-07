import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import Services from "@/components/layout/Services";
import Advantages from "@/components/layout/Advantages";
import Contact from "@/components/layout/Contact";
import Projects from "@/components/layout/Projects";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B1120]">
      <Header />
      <Hero />
      {/* Suppression du div avec la flèche qui crée un espace supplémentaire */}
      <Services />
      <Advantages />
      <Contact />
      <Projects />
      <Footer />
    </main>
  );
}
