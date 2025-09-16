import Image from "next/image";
import Hero from "./section/Hero";
import CardShow from "./section/CardShow";
import Navbar from "./components/Navbar";
import About from "./section/About";
import Showcase from "./section/Showcase";
import Contact from "./section/Contact";
import Footer from "./section/Footer";

export default function Home() {
  return (
    <div className="h-full w-full bg-[#000] overflow-hidden">
      <Hero />
      <About />
      <Showcase />
      <Contact />
    </div>
  );
}
