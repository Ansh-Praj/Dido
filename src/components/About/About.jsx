import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useEffect } from 'react';

 function About() {
  useEffect(() => {

    const ctx = gsap.context(()=>{


      if(window.innerWidth < 640){
        gsap.from("#box-1", {
          opacity: 0,
          y: '-150px',
          duration: 0.5,
          scrollTrigger: {
            trigger: "#about",
            start: "bottom bottom",
            toggleActions: "play none none reverse",
          }
        });
    
        gsap.from("#box-2", {
          opacity: 0,
          x: '150px',
          duration: 0.5,
          scrollTrigger: {
            trigger: "#about",
            start: "bottom bottom",
            toggleActions: "play none none reverse",
          }
        });
    
        gsap.from("#box-3", {
          opacity: 0,
          x: '-150px',
          duration: 0.5,
          scrollTrigger: {
            trigger: "#about",
            start: "bottom bottom",
            toggleActions: "play none none reverse",
          }
        });
      }
      
      else if (window.innerWidth > 640){

        gsap.from("#box-1", {
          opacity: 0,
          y: '-150px',
          duration: 0.5,
          scrollTrigger: {
            trigger: "#about",
            start: "center-=50px bottom",
            toggleActions: "play none none reverse",
          }
        });
    
        gsap.from("#box-2", {
          opacity: 0,
          x: '150px',
          duration: 0.5,
          scrollTrigger: {
            trigger: "#about",
            start: "center-=50px bottom",
            toggleActions: "play none none reverse",
          }
        });
    
        gsap.from("#box-3", {
          opacity: 0,
          x: '-150px',
          duration: 0.5,
          scrollTrigger: {
            trigger: "#about",
            start: "center-=50px bottom",
            toggleActions: "play none none reverse",
          }
        });
      }
    })

    return () => ctx.revert();
  }, []);

  return (
    <div id="about" className="w-full h-auto px-4 sm:px-10 lg:px-20">
      <div className='grid grid-cols-1 lg:grid-cols-2 w-full gap-10'>
        <div className='mb-10 lg:mb-20'>
          <div>
          <iframe className="w-[200vw] h-[100vh] absolute top-[22%] left-[0%]  hidden lg:block" src='https://my.spline.design/happyrobotbuttoncopy-d8802461684714bd9ef8af07a6a40d85/' frameBorder='0' ></iframe>
          {/* <iframe className='w-[200vw] h-[100vh] absolute top-[14%] right-[-20%] hidden lg:block' src='https://my.spline.design/happyrobotbuttoncopy-13434c870202a6c8a6b79f718f32f267/' frameborder='0' width='100%' height='100%'></iframe> */}

            <h1 className='text-2xl sm:text-3xl lg:text-5xl'>What Is Dido?</h1>
            <p className='mt-5 text-sm sm:text-base'>Dido is an AI-powered voice assistant designed to work seamlessly across multiple operating systems, including Windows, macOS, and Linux. It allows users to perform various tasks using voice commands, making it a versatile tool for productivity, entertainment, and system management.</p>
            <p className='mt-3 text-sm sm:text-base'>Dido is a real product, it would likely be available for download for Windows, macOS, and Linux.</p>
          </div>

          <div className='gap-10'>
            <h1 className='text-2xl sm:text-3xl mb-4 mt-10'>How Dido Works :</h1>
            <div className='text-sm sm:text-base'>
              <p>The software uses advanced speech recognition to understand and process commands.</p>
              <p>Based on the command, Dido performs the requested task, such as opening an app, searching the web, or setting a reminder.</p>
              <p>Dido provides verbal or visual feedback to confirm the completion of tasks.</p>
            </div>
          </div>

          <div className='mt-10 flex flex-col sm:flex-row gap-5'>
            <h1 className='text-2xl sm:text-3xl'>Key Features of Dido :</h1>
            <div className='mt-3 text-sm sm:text-base'>
              <p>Cross-Platform Compatibility</p>
              <p>Voice Command Support</p>
              <p>AI-Powered Intelligence</p>
              <p>Task Automation</p>
              <p>Integration with Apps and Services</p>
              <p>Privacy and Security</p>
              <p>Search Capabilities</p>
            </div>
          </div>
        </div>

        
        <div className='relative h-32 lg:h-auto'> 
          <h1 id="box-1" className='bg-yellow-100 w-[150px] h-[150px] border absolute right-[30%] top-[-50%] lg:w-[250px] lg:h-[250px]    lg:right-[10%] lg:top-[5%] z-1'></h1>
          <h1 id="box-2" className='bg-yellow-200 w-[150px] h-[150px] border absolute right-[7%] top-[10%] lg:w-[250px] lg:h-[250px]   lg:right-[-4%] lg:top-[35%]'></h1>
          <h1 id="box-3" className='bg-yellow-300 w-[150px] h-[150px] border absolute right-[53%] top-[10%] lg:w-[250px] lg:h-[250px]  lg:right-[40%] lg:top-[28%] z-1'></h1>
        </div>
      </div>
    </div>
  );
}

export default About;