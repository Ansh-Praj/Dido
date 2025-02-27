import React from "react";

function Download() {
  return (
    <>

     
      <div className="bg-[#FFFCE1] h-[55vh] ">

                <div className="relative bottom-[50%] h-[500px] w-[400px] text-[#FFFCE1] mx-auto bg-[#232B2B] rounded-2xl p-10">

                      <div className=" flex flex-col items-center mt-5 ">
                          <p className="sm:text-6xl sm:mb-20 text-[30px] mb-10 ">Download it now</p>

                          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 ">
                            <form className="grow ">
                              <select className="border-2  border-white text-[#FFFCE1]   outline-none block w-full p-2 bg-[#232B2B]">
                                <option selected>Select an Pletform</option>
                                <option>Window</option>
                                <option>Linux</option>
                                <option>Mac</option>
                              </select>
                            </form>
                            
                              <div className="flex gap-2">
                                    <button className="border-2 py-2 px-10 cursor-pointer ">Download</button>
                                    <a href="#" className="border-2  px-10 py-2 cursor-pointer">Help</a> 
                              </div>
                          </div>
                          <p className="sm:w-[800px] mt-12 mb:w-[400px] w-[350px] text-xl text-center ">Get the latest version of DIDO software for your preferred operating system. Choose your platform and start your secure, fast download now!</p>
                      </div>

                </div>
        </div>
    </>
  );
}

export default Download;
