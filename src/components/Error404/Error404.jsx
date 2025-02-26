// eslint-disable-next-line no-unused-vars
import React from 'react'

function Error404() {
  return (
    <>
      <div className=' w-screen h-screen text-[#FFFCE1] flex items-center justify-center'>
          <div className='text-center '>
             <div className='!mb-5  flex gap-4 !mb-10'>
              <p className='text-5xl'>404 |</p>
              <p className='text-xl flex items-center'>This page could not be found.</p>
             </div>
             <a href="#" className="bg-blue-900  text-xl !py-2 !px-5 rounded hover:bg-blue-300 hover:rounded-3xl hover:text-blue-900 transition-all duration-500">Home</a>
          </div>
      </div>
    </>
  )
}

export default Error404