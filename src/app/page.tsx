import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import GalleryRoller from "@/components/GalleryRoller";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Intro />
      <GalleryRoller />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
