import { useEffect } from "react";
import { useState } from "react"
import { FaArrowRightLong } from "react-icons/fa6";

function Header() {

  const [isScrolled, setIsScrolled] = useState(false)

  
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      if(window.scrollY < 45){
        setIsScrolled(false)
      } else {
        setIsScrolled(true)
      }
        
    })

  }, [])
  

  return (
    <header className={`fixed inset-x-0 ${isScrolled ? 'bg-white text-black' : 'bg-transparent text-white'} transition-colors duration-200 `}>
      <nav className='w-full flex justify-between items-center px-16 py-5 font-bold'>

        <h1 className='text-xl transition-colors duration-150'>DIDO</h1>

        <ul className='flex justify-between w-1/4'>
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

        <div>
          <button className={`${isScrolled ? 'hover:bg-black' : 'hover:bg-primary'} hover:text-secondary border border-gray-400    transition-colors duration-150 px-6 py-3 cursor-pointer flex items-center gap-x-2`}>Download <FaArrowRightLong /></button>
        </div>
      </nav>
    </header>
  )
}

export default Header





