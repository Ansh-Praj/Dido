import React from 'react'

function Footer() {
  return (
  <div className="w-full text-[#111] bg-[#FFFCE1] rounded-tl-[50px]">
    <div className='grid grid-cols-12 p-4'>
        <div className=' flex flex-col '>
          <h1 className='my-2'>LOGO</h1>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Contact</a>
        </div>{/* part 1 */}
        <div className=' col-span-5'>
          <h1 className='my-2'>DIDO</h1>
          <p>&copy; 2025 Your Company. All Rights Reserved.</p>
        
        </div>{/* part 2 */}

        < div className=' col-span-2 flex gap-5'>
        
        </div>{/* part 3 */}
    </div>
  </div>
  )
}

export default Footer