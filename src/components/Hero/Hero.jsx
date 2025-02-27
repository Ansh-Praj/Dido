// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const Hero = () => {

  
  return (
    <>
      <div id="home" className="w-full h-[80vh] relative lg:h-screen lg:flex lg:justify-center lg:items-center">

        <img className="z-[1] pointer-events-none cursor-none w-[90%] absolute top-[-30%] right-[-15%] rotate-6 lg:top-[-65%]" src="img/herobg.png" alt="upar wali" />
        <img className="z-[1] pointer-events-none cursor-none w-full absolute bottom-[25%] opacity-60 lg:bottom-[-45%]" src="img/herobg.png" alt="" />

        <div className="mt-20 relative p-1 lg:w-full lg:mt-10">
          <div className="flex items-center justify-start px-5 lg:relative lg:-top-20 " id="logo_info">
            <p className="text-[13px]">just shipped v1.0</p>
          </div>
          {/* header */}  

          <div>
            <div className="mt-20 flex flex-col items-center justify-center lg:mt-0" id="main_info">
              <p className="text-5xl text-center whitespace-nowrap font-bold mt-4 lg:text-7xl">Welcome to DIDO</p>
              <p className="text-[1.8rem] mt-10 font-semibold lg:text-3xl">The greatest virtual assistant</p>

              <p className="text-md px-2 mt-3 w-full text-center leading-6 lg:w-[50vw]">
                DiDo is an advanced voice assistant designed to streamline tasks
                through seamless voice commands. It enables users to open apps,
                search within applications, and perform actions efficiently,
                enhancing productivity and user experience.
              </p>
            </div>
          </div>




          {/* middle */}

        </div>
          <div className="flex gap-4 mt-10 items-center justify-center absolute left-[50%] bottom-[5%]" id="footer_info">
            <video
            className="w-7"
            autoPlay loop muted src="video/scroll down.webm"></video>
          </div>



          {/* footer */}
      </div>
    </>
  );
};

export default Hero;
