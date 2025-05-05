import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

function Download() {
  const downloadContainerRef = useRef();

  useGSAP(() => {
    gsap.from(downloadContainerRef.current, {
      y: '100px',
      duration: 0.8,
      opacity: 0,
      scrollTrigger: {
        trigger: downloadContainerRef.current,
        toggleActions: 'play none none reverse',
        start: 'center bottom',
      }
    });
  }, { scope: downloadContainerRef.current, dependencies: [] });

  return (
    <>
      <div id="download" className="bg-[#FFFCE1] h-[35vh] rounded-b-2xl md:h-[30vh] lg:h-[60vh]">
        <div
          ref={downloadContainerRef}
          className="relative bottom-[30%] w-[90%]  mx-auto bg-[#1C2022] rounded-2xl p-6 shadow-2xl shadow-[#111] lg:w-[80%] lg:max-w-[800px] lg:p-10"
        >
          <div className="flex flex-col items-center mt-5">
            <p className="text-3xl sm:text-4xl lg:text-6xl mb-6 sm:mb-10 lg:mb-20">
              Download it Now
            </p>

            <div className="flex flex-wrap justify-center items-center gap-4 w-full">
              <form className="w-full sm:flex-1">
                <select className="border-2 bg-[#1C2022] outline-none block w-full p-2 text-sm sm:text-base">
                  <option>Select a Platform</option>
                  <option>Windows</option>
                  <option>Linux</option>
                  <option>Mac</option>
                </select>
              </form>

              <div className="flex gap-2 w-full sm:w-auto">
                <button className="border-2 py-2 px-4 sm:px-10 cursor-pointer w-full sm:w-auto">
                  <a href="https://github.com/Krohit22/DIDO-virtual-voise-assistant-" target="_blank">Download</a>
                  
                </button>
                
              </div>
            </div>

            <p className="mt-8 text-sm sm:text-base lg:text-xl text-center w-full max-w-[350px] sm:max-w-[500px] lg:max-w-[800px]">
              Get the latest version of DIDO software for your preferred operating system. Choose your platform and start your secure, fast download now!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Download;