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
import { useRef } from "react";
import Footer from "./components/Footer/Footer";

gsap.registerPlugin(ScrollTrigger)

function App() {

  const cursorRef = useRef(null)

  useGSAP(()=>{
    const lenis = new Lenis();

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);


  })

  // window.addEventListener('mousemove', (e)=>{

  //   const ctx = gsap.context(()=>{
  //     gsap.to(cursorRef.current, {
  //       top: e.pageY,
  //       left: e.pageX,
  //       duration: 0.3,
  //       ease: 'none'
  //     })

  //   })
    
  //   // cursorRef.current.style.top = e.pageY + 'px'
  //   // cursorRef.current.style.left = e.pageX + 'px'
  // })

  return (
    <div className="overflow-hidden relative  bg-[#111]">
      <Header />
      <Hero />
      <section className="w-full h-[8vh] bg-[#111] lg:h-[50vh]"></section>
      <About />
      <section className="w-full h-[20vh] bg-[#111]"></section>
      <Download />
      <FAQ />
      <section className="w-full h-[50vh] bg-[#111]"></section>

      {/* <div ref={cursorRef} className="size-5 rounded-full -translate-x-1/2 -translate-y-1/2 absolute bg-secondary top-19 left-19"></div> */}

    </div>
 
  );
}

export default App;
