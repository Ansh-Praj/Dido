import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

function About() {

  useGSAP(()=>{
    gsap.from("#box-1",{
      opacity:0,
      y:'-150px',
      duration:0.5,
      scrollTrigger:{
        trigger:"#about",
        start:"center bottom",
        toggleActions:"play none none reverse"
      }
    })

    gsap.from("#box-2",{
      opacity:0,
      x:'150px',
      duration:0.5,
      scrollTrigger:{
        trigger:"#about",
        start:"center bottom",
        toggleActions:"play none none reverse"
      }
    })

    gsap.from("#box-3",{
      opacity:0,
      x:'-150px',
      duration:0.5,
      scrollTrigger:{
        trigger:"#about",
        start:"center bottom",
        toggleActions:"play none none reverse"
      }
    })
  })



  return (
    <div id="about" className="w-full h-screen mt-10 px-20 hidden lg:block">

      <div className='grid grid-cols-2 w-full gap-10 '>
      
          <div className='mb-20'>
              <div>
                <h1 className='text-3xl'>What Is Dido ?</h1>
                <p className=' mt-5'>Dido is an AI-powered voice assistant designed to work seamlessly across multiple operating systems, including Windows, macOS, and Linux. It allows users to perform various tasks using voice commands, making it a versatile tool for productivity, entertainment, and system management.</p>
                <p className=' mt-3'>Dido is a real product, it would likely be available for download for Windows, macOS, and Linux.</p>
              </div>
              {/* row 1 */}

              <div className='gap-10'>
                    <h1 className='text-3xl mb-4 mt-10'>How Dido Works :</h1>
                      <div className=''>
                        <p>The software uses advanced speech recognition to understand and process commands.</p>
                        <p>Based on the command, Dido performs the requested task, such as opening an app, searching the web, or setting a reminder.</p>
                        <p>Dido provides verbal or visual feedback to confirm the completion of tasks.</p>
                      </div>
              </div>
              {/* row 2 */}

              
              <div className='mt-10 flex gap-5'>
                  <h1 className='text-3xl'>Key Features of Dido :</h1>
                    <div className='mt-3'>
                      <p>Cross-Platform Compatibility</p>
                      <p>Voice Command Support</p>
                      <p>AI-Powered Intelligence</p>
                      <p>Task Automation</p>
                      <p>Integration with Apps and Services</p>
                      <p>Privacy and Security</p>
                      <p>Search Capabilities</p>
                    </div>
              </div>
              {/* row 3 */}

         </div>{/* side 1 */}

            <div className=' relative hidden lg:block'>
                <h1 id="box-1" className='bg-yellow-100 w-[250px] h-[250px] border absolute right-[10%] top-[5%] z-1'></h1>
                <h1 id="box-2" className='bg-yellow-200 w-[250px] h-[250px] border absolute right-[-4%] top-[35%]'></h1>
                <h1 id="box-3" className='bg-yellow-300 w-[250px] h-[250px] border absolute right-[40%] top-[28%] z-1'></h1>
            </div>{/* side 2 */}


      </div>
    </div>
  )
}

export default About