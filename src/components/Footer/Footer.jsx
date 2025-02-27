import React from 'react'

function Footer() {
  return (
  <div className="w-full text-[#111] bg-[#FFFCE1] rounded-tl-[50px]">
    <div className='grid grid-cols-12 p-4'>
        <div className=' col-span-5 p-3'>
            <h1 className='my-2'>DIDO-LOGO</h1>
            <p className='text-xl'>DiDo is an advanced voice assistant designed to streamline tasks
                through seamless voice commands. It enables users to open apps,
                search within applications, and perform actions efficiently,
                enhancing productivity and user experience.</p>
        </div>{/* part 1 */}
        <div className=' col-span-2'>
          <h1 className='my-2'>DIDO</h1>
        
        </div>{/* part 2 */}

        < div className=' col-span-5 flex gap-5'>
        
        </div>{/* part 3 */}
    </div>
  </div>
  )
}

export default Footer