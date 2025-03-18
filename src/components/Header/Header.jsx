import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useState } from "react"
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  const navbarMenuRef = useRef()
  const menuTimeline = useRef()

  
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      if(window.scrollY < 45){
        setIsScrolled(false)
      } else {
        setIsScrolled(true)
      }
    })

  }, [])

  useEffect(()=>{

    gsap.set(navbarMenuRef.current.querySelectorAll('a'),{
      opacity: 0
    })

    menuTimeline.current = gsap.timeline({paused: true})

    menuTimeline.current
    .to(navbarMenuRef.current, {
      bottom: 0,
      duration: 1,
      ease: 'power1.inOut'
    })
    .to(navbarMenuRef.current.querySelectorAll('a'), {
      opacity: 1,
      stagger: 0.1,
      duration: 0.3
    })



  }, [])

  function handleMenuClick(){
        
    menuTimeline.current.play()
    
  }

  function handleCloseClick(){
    
    menuTimeline.current.reverse()

  }

  function handleJumpTo(e){
    const c = e.target.name
    const el = document.querySelector(c);

    window.scrollTo({
      top: el.offsetTop - 320,
      behavior: "smooth"
    })
    
    
  }

  useGSAP(()=>{
    const tl = gsap.timeline()
    tl.to('header', {
      top: '0',
      duration: 0.5
    })
    tl.from('#logo_info > p', {
      x: '-80px',
      opacity: 0,
      duration: 0.5
    })
    .from('#home #main_info > p:first-child', {
      opacity: 0,
      duration: 0.5
    })
    .from('#home #main_info > p:nth-child(2)', {
      opacity: 0,
      duration: 0.5
    })
    .from('#home #main_info > p:nth-child(3)', {
      opacity: 0,
      duration: 0.5
    })
    .from('#home img:first-child', {
      opacity: 0,
      y: '-200px',
      duration: 0.5
    })
    .from('#home img:nth-child(2)', {
      opacity: 0,
      y: '100px',
      duration: 0.5
    })
    .from('#home video', {
      opacity: 0,
      y: '100px',
      duration: 0.5
    })
    
  }, [])
  

  return (
    <header className={`-top-[100px] fixed inset-x-0 transition-colors duration-200 z-50  ${isScrolled ? 'bg-[#111] ' : ''}`}>
      <nav className='w-full flex justify-between items-center px-8 py-4 font-bold'>

        <a 
        onClick={(e) => handleJumpTo(e)}
        className="cursor-pointer"
        name="#home">
          <img className="w-20" name="#home"
            src="img/whitelogo.png" alt=""/>
        </a>

        {/* larger screens */}
        <ul className='lg:flex justify-between w-1/4 hidden'>
          <li className="hover:scale-115 duration-300"><a 
          onClick={(e) => handleJumpTo(e)}
          className={`hover:bg-secondary hover:text-[#111] cursor-pointer  px-2 py-1 rounded transition-colors duration-150 `}
          name="#home">Home</a></li>
          <li className="hover:scale-115 duration-300"><a 
          onClick={(e) => handleJumpTo(e)}
          className={`hover:bg-secondary hover:text-[#111] cursor-pointer  px-2 py-1 rounded transition-colors duration-150 `}
          name="#about">About</a></li>
          <li className="hover:scale-115 duration-300"><a 
          onClick={(e) => handleJumpTo(e)}
          className={`hover:bg-secondary hover:text-[#111] cursor-pointer  px-2 py-1 rounded transition-colors duration-150`}
          name="">Support Us</a></li>
        </ul>

        <div className="lg:block hidden">
          <button 
          onClick={(e) => handleJumpTo(e)}
          className={` border border-gray-400 transition-colors duration-150 px-6 py-3 cursor-pointer flex items-center gap-x-2 hover:bg-secondary hover:text-[#111]`} 
          name="#download"
          >Download <FaArrowRightLong  /></button>
        </div>
        



        {/* smaller screens */}
        <IoIosMenu onClick={handleMenuClick} className="lg:hidden" cursor={'pointer'} size={'30'}/>

        <div 
        ref={navbarMenuRef}
        className="fixed bottom-[100lvh] left-0 w-full h-screen flex flex-col justify-center bg-black/30 backdrop-blur-sm">

          <IoClose onClick={handleCloseClick} id="close-menu-icon" className="fixed top-[8lvh]  right-4" size={40}/>

          <div className="flex flex-col px-10 text-3xl gap-8">
            <a className="" name="#home" onClick={(e)=>handleJumpTo(e)}>Home</a>
            <a className="" name="#about" onClick={(e)=>handleJumpTo(e)}>About</a>
            <a className="" name='' onClick={(e)=>handleJumpTo(e)}>Support Us</a>
            <a className="" name="#download"  onClick={(e)=>handleJumpTo(e)}>Download</a>
          </div>
        </div>
        


      </nav>
    </header>
  )
}

export default Header





