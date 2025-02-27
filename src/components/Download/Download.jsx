import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
 
function Download() {
 
  const downloadContainerRef = useRef()
 
  useGSAP(()=>{
    gsap.from(downloadContainerRef.current, {
      y: '100px',
      duration: 0.8,
      opacity: 0,
      scrollTrigger: {
        trigger: downloadContainerRef.current,
        toggleActions: 'play none none reverse',
        start: 'center bottom',
      }
    })
  }, {scope: downloadContainerRef.current, dependencies: []})
 
  return (
    <>
 
      <div id="download" className="bg-[#FFFCE1] h-[45vh] rounded-b-2xl lg:h-[60vh]">
 
        <div ref={downloadContainerRef} className="relative bottom-[30%]  w-[400px] mx-auto bg-[#1C2022] rounded-2xl p-10 shadow-2xl shadow-[#111] lg:w-[80%]  ">
 
          <div className=" flex flex-col items-center mt-5 ">
              <p className="sm:text-6xl sm:mb-20 text-[30px] mb-10 ">Download it Now</p>
 
              <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 ">
                <form className="grow ">
                  <select className="border-2 outline-none block w-full p-2">
                    <option>Select an Platform</option>
                    <option>Window</option>
                    <option>Linux</option>
                    <option>Mac</option>
                  </select>
                </form>
               
                  <div className="flex gap-2">
                        <button className="border-2 py-2 px-10 cursor-pointer ">Download</button>
                        <a href="#" className="border-2  px-10 py-2 cursor-pointer">Help</a>
                  </div>
              </div>
              <p className="sm:w-[800px] mt-12 mb:w-[400px] w-[350px] text-xl text-center ">Get the latest version of DIDO software for your preferred operating system. Choose your platform and start your secure, fast download now!</p>
          </div>
        </div>
      </div>
    </>
  );
}
 
export default Download;
 
 