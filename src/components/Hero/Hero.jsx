// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const Hero = () => {

  
  return (
    <>
      <div className="w-full h-screen">

        <img className="pointer-events-none cursor-none w-full absolute top-[15%] " src="img/herobg.png" alt="" />
        <img className="pointer-events-none cursor-none w-[80%] absolute top-[-25%] right-[-15%]" src="img/herobg.png" alt="" />

        <div className="text-[#FFFCE1] mt-20  p-1">
          <div className="flex  items-center justify-start ml-10" id="logo_info">
            <p className="text-[13px]">just shipped v1.0</p>
          </div>
          {/* header */}  

          <div>
            <div className="mt-20 flex flex-col items-center justify-center bg-[url(blob:https://www.canva.com/ed0fa7a0-18bc-4f84-9cd9-3a0eeca8119c))]" id="main-info">
              <p className="text-8xl mt-4">Welcome to DIDO</p>
              <p className="text-4xl mt-2">The greatest virtual assistant</p>

              <p className="text-xl mt-5 w-[800px] text-center">
                DiDo is an advanced voice assistant designed to streamline tasks
                through seamless voice commands. It enables users to open apps,
                search within applications, and perform actions efficiently,
                enhancing productivity and user experience.
              </p>
            </div>
          </div>
          {/* middle */}

          <div className="flex gap-4 mt-18 items-center  justify-center" id="footer_info">
            <button onClick={()=> navigate("")} className="bg-blue-900 z-[2]  text-xl p-2 rounded hover:bg-blue-300 hover:rounded-3xl hover:text-blue-900 transition-all duration-500">Download</button>
          </div>
        </div>

          {/* footer */}
      </div>
    </>
  );
};

export default Hero;
