import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Press from "@/components/Press";
import Contact from "@/components/Contact";
import Social from "@/components/Social";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Press />
      <Contact />
      <Social />
      <Footer />
    </main>
  );
}
