import { useGSAP } from "@gsap/react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import 'lenis/dist/lenis.css'

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
    
    <div className="overflow-y-hidden  bg-[#111]">
      <Header />
      <Hero />
      <section className="w-full h-screen bg-black"></section>
      <section className="w-full h-screen bg-red-600"></section>
      <section className="w-full h-screen bg-red-600"></section>
      <section className="w-full h-screen bg-red-600"></section>
      <section className="w-full h-screen bg-red-600"></section>
      <section className="w-full h-screen bg-red-600"></section>
    </div> 
  
  );
}

export default App;
