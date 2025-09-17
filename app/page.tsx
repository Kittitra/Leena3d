import Hero from "./section/Hero";
import About from "./section/About";
import Showcase from "./section/Showcase";
import Contact from "./section/Contact";

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
