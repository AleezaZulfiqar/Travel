import React from 'react'
import popular from "../Assets/popular.png";
import tent from "../Assets/tent.png";
import trailer from "../Assets/trailer.png";
import climb from "../Assets/climb.png";
import camp from "../Assets/camp.png";
const Popular = () => {
  return (
    <div>
      <div style={{backgroundImage:`url(${popular})`}} className='w-100 h-auto max-sm:justify-center'>
        <div className='flex justify-center' id='popular'> 
            <button className='bg-[#d6e6cd] px-6 py-3 rounded-md font-semibold text-lg'>Popular Activities</button>
        </div>
        <div className='flex justify-center mt-5 max-sm:text-center'>
            <h2 className='text-5xl font-bold ' >Explore Real Adventure</h2>
        </div>
        <div className='flex justify-center  flex-wrap gap-4 mt-6 '>
            <div className='bg-slate-400 rounded-2xl relative'>
                <img src={tent} alt='' className='rounded-lg'/>
                <div className='absolute w-[260px] h-[110px] top-52 left-3 bg-white rounded-lg ' >
                <div className='w-[20%] h-[6px] bg-[#63ab45] mt-5 ml-5'></div>
                <div className='flex justify-start w-[50%] h-[60px] mt-3 ml-3'>
                    <p className='text-xl font-semibold capitalize'>Tent camping services</p>
                </div>
                </div>
            </div>
            <div className='bg-slate-400 rounded-2xl relative'>
                <img src={trailer} alt='' className='rounded-lg'/>
                        <div className='absolute w-[260px] h-[110px] top-52 left-3 bg-white rounded-lg ' >
                            <div className='w-[20%] h-[6px] bg-[#63ab45] mt-5 ml-5'></div>
                            <div className='flex justify-start w-[60%] h-[60px] mt-3 ml-3'>
                    <p className='text-xl font-semibold capitalize'>Trailers and rv spots</p>
                </div>
                        </div>
            </div>
            <div className='bg-slate-400 rounded-2xl relative'>
                <img src={climb} alt='' className='rounded-lg'/>
                        <div className='absolute w-[260px] h-[110px] top-52 left-3 bg-white rounded-lg ' >
                        <div className='w-[20%] h-[6px] bg-[#63ab45] mt-5 ml-5'></div>
                        <div className='flex justify-start w-[60%] h-[60px] mt-3 ml-3'>
                    <p className='text-xl font-semibold capitalize flex'>Adventure and climbing</p>
                </div>
                        </div>
            </div>
            <div className='bg-slate-400 rounded-2xl relative'>
                <img src={camp} alt='' className='rounded-lg'/>
                        <div className='absolute w-[260px] h-[110px] top-52 left-3 bg-white rounded-lg ' >
                     <div className='w-[20%] h-[6px] bg-[#63ab45] mt-5 ml-5'></div>
                     <div className='flex justify-start w-[60%] h-[60px] mt-3 ml-3'>
                    <p className='text-xl font-semibold capitalize'>Couple camping or cabin</p>
                </div>
                        </div>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default Popular;
