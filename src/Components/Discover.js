import React from 'react'
import main from "../Assets/main.png";
import hiking from "../Assets/hiking.png";
import call from "../Assets/call.png"
const Discover = () => {
  return (
    <div>
      <div className='flex flex-row flex-wrap justify-center gap-6 mt-14 max-sm:mt-20 max-sm:justify-center overflow-x-hidden' id='about'>
        <div className='h-auto w-auto' data-aos="fade-right">
            <img src={main} alt='' className='max-sm:w-[360px]'/>
        </div>
        <div data-aos="fade-left">
            <button className='capitalize px-4 py-4 bg-[#e0eeda] text-lg font-semibold font-sans max-sm:ml-8'>Who we are</button>
            <div className='mt-5  w-[600px] max-sm:w-[350px] '>
                <h1 className='text-5xl  font-semibold capitalize font-sans max-sm:text-3xl max-sm:text-center'>Great opportunity for adventure & travels</h1>
            </div>
            <div className='flex flex-col flex-wrap gap-2 justify-center max-sm:w-[350px] '>
                <div className='flex flex-row  w-auto h-auto mt-7' >
                     <div>
                        <img src={hiking} alt=''/>
                     </div>
                     <div className='flex flex-col flex-wrap ml-5'>
                        <div >
                            <h2 className='text-black-100 font-semibold text-2xl max-sm:text-xl'>Mountain hiking</h2>
                            <p className='text-lg  text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        
                     </div>
                </div>
                <div className='flex flex-row  w-auto h-auto mt-7'>
                     <div>
                        <img src={hiking} alt=''/>
                     </div>
                     <div className='flex flex-col flex-wrap ml-5'>
                        <div >
                            <h2 className='text-black-100 font-semibold text-2xl'>Mountain biking</h2>
                            <p className='text-lg  text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        
                     </div>
                </div>
                <div className='flex flex-row  w-auto h-auto mt-7 '>
                     <div>
                        <img src={hiking} alt=''/>
                     </div>
                     <div className='flex flex-col flex-wrap ml-5'>
                        <div >
                            <h2 className='text-black-100 font-semibold text-2xl'>fishing & boat</h2>
                            <p className='text-lg  text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        
                     </div>
                </div>
                

                
                <div className='flex flex-row flex-wrap gap-4 mt-4 justify-start'>
                    <div>
                    <button className='bg-[#64ac46] px-8 py-3 text-white font-semibold text-lg rounded-lg'>Discover More</button>
                    </div>
                    <div className='flex flex-row flex-wrap gap-3'>
                        <div>
                        <img src={call} alt=''/>
                        </div>
                        <div>
                            <p>call experts</p>
                            <p>(+91) 8888888888</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Discover;
