import { useGSAP } from "@gsap/react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import 'lenis/dist/lenis.css'
import Download from "./components/Download/Download";
import FAQ from "./components/FAQ/FAQ";
import About from "./components/About/About";

gsap.registerPlugin(ScrollTrigger)

function App() {

  useGSAP(()=>{
    const lenis = new Lenis();

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);


  })

  return (
    <div className="relative overflow-x-hidden bg-[#111]">
      <Hero />
      <FAQ />
    </div>
  );
}

export default App;
