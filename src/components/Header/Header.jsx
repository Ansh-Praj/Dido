import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Lottie from "lottie-react";
import { useEffect, useRef } from "react";
import { useState } from "react"
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpened, setIsMenuOpened] = useState(false)

  const menuRef = useRef()
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
    
    const tl = gsap.timeline()
    // tl.to('.mobile-navbar-items', {
    //   top: 0,
    //   duration: 1,
    //   ease: 'power1.inOut'
    // })

    // tl.to('.mobile-navbar-items ul a', {
    //   opacity: 1,
    //   stagger: 0.1,
    //   duration: 0.3
    // })

    // tl.pause()


    // if(isMenuOpened) {
    //   tl.play()
    // } else if (isMenuOpened === false) {
    //   tl.reverse()
    // }
    
  })

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
  

  return (
    <header className={`fixed inset-x-0 transition-colors duration-200 z-50 text-secondary ${isScrolled ? 'bg-[#111]' : ''}`}>
      <nav className='w-full flex justify-between items-center px-8 py-4 font-bold'>

        <h1 className='text-xl transition-colors duration-150'>DIDO</h1>
        {/* larger screens */}
        <ul className='lg:flex justify-between w-1/4 hidden'>
          <li><a 
          className={`  ${isScrolled ? 'hover:bg-black' : 'hover:bg-primary'} hover:text-secondary px-2 py-1 rounded transition-colors duration-150`}
          href="#">Home</a></li>
          <li><a 
          className={`${isScrolled ? 'hover:bg-black' : 'hover:bg-primary'} hover:text-secondary px-2 py-1 rounded transition-colors duration-150`}
          href="#">About</a></li>
          <li><a 
          className={`${isScrolled ? 'hover:bg-black' : 'hover:bg-primary'} hover:text-secondary px-2 py-1 rounded transition-colors duration-150`}
          href="#">FAQ</a></li>
          <li><a 
          className={`${isScrolled ? 'hover:bg-black' : 'hover:bg-primary'} hover:text-secondary px-2 py-1 rounded transition-colors duration-150`}
          href="#">Support</a></li>
        </ul>

        <div className="lg:block hidden">
          <button className={`${isScrolled ? 'hover:bg-black' : 'hover:bg-primary'} hover:text-secondary border border-gray-400    transition-colors duration-150 px-6 py-3 cursor-pointer flex items-center gap-x-2`}>Download <FaArrowRightLong  /></button>
        </div>
        



        {/* smaller screens */}
        <IoIosMenu onClick={handleMenuClick} className="lg:hidden" cursor={'pointer'} size={'30'}/>

        <div 
        ref={navbarMenuRef}
        className="fixed bottom-[100lvh] left-0 w-full h-screen flex flex-col justify-center bg-black/30 backdrop-blur-sm">

          <IoClose onClick={handleCloseClick} id="close-menu-icon" className="fixed top-[8lvh]  right-4" size={40}/>

          <div className="flex flex-col px-10 text-3xl gap-8">
            <a className="" href="#">Home</a>
            <a className="" href="#">About</a>
            <a className="" href="#">FAQ</a>
            <a className="" href="#">Support</a>
          </div>
        </div>
        


      </nav>
    </header>
  )
}

export default Header





