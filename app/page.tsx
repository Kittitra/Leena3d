'use client';

import Hero from "./section/Hero";
import About from "./section/About";
import Showcase from "./section/Showcase";
import Contact from "./section/Contact";
import { useProgress } from "@react-three/drei";
import { Spinner } from "@/components/ui/shadcn-io/spinner";
import { Suspense } from "react";

function Loader() {
  const { progress } = useProgress();
  return (
    <div className="flex flex-col gap-10 h-screen w-full items-center justify-center bg-black text-white">
      <Spinner size={50} variant="ellipsis" />
      <p>{progress.toFixed(0)} % loaded</p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="h-full w-full bg-[#000] overflow-hidden">
      <Suspense fallback={<Loader />}>
        <Hero />
        <About />
        <Showcase />
        <Contact />
      </Suspense>
    </div>
  );
}
