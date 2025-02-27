import React from "react";

const Hero = () => {
  return (
    <>
      <div className="w-full h-[80vh] relative ">

        <img className="z-[1] pointer-events-none cursor-none w-[90%] absolute top-[-25%] right-[-15%] rotate-6" src="img/herobg.png" alt="upar wali" />
        <img className="z-[1] pointer-events-none cursor-none w-full absolute bottom-[20%] opacity-60" src="img/herobg.png" alt="" />

        <div className="text-[#FFFCE1] mt-20 z-10 relative p-1">
          <div className="flex  items-center justify-start px-2" id="logo_info">
            <p className="text-[13px]">just shipped v1.0</p>
          </div>
          {/* header */}  

          <div>
            <div className="mt-20 flex flex-col items-center justify-center" id="main-info">
              <p className="text-5xl text-center whitespace-nowrap font-bold mt-4">Welcome to DIDO</p>
              <p className="text-[1.8rem] mt-10 font-semibold">The greatest virtual assistant</p>

              <p className="text-md px-2 mt-3 w-full text-center leading-6">
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
