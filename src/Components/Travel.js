



import React from 'react';
import friends from "../Assets/friends.png";
import smile from "../Assets/smile.png";
import block from "../Assets/block.png";
import star from "../Assets/star.png";

const Travel = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${friends})` }}
        className="bg-cover bg-center bg-no-repeat relative max-sm:mt-24 w-100 "
      >
        <div className="w-full h-full min-h-[600px] sm:min-h-[700px] md:min-h-[800px] lg:min-h-[850px] xl:min-h-[600px] 
        flex flex-col lg:flex-row px-4 py-6 relative mt-10">

          {/* Overlay */}
          <div className="absolute top-0 left-0 w-full h-full z-0 
          bg-[linear-gradient(to_right,_rgba(0,0,0,0.9),_rgba(0,128,0,0.6),_rgba(0,0,0,0.9))]">
          </div>

          {/* Left Section */}
          <div className="z-10 lg:w-1/2 w-full flex flex-col gap-7 justify-center mt-16 ml-10 
          max-sm:ml-0 max-sm:mt-10 max-sm:items-center max-sm:px-4 ">
            <button className="bg-[#2d2e2d] px-9 py-4 text-[#e6891f] text-xl rounded-md w-fit">
  Are you ready to travel?
</button>


            <div className="w-[500px] md:w-[500px] max-sm:w-full text-left max-sm:text-center">
              <h1 className="text-5xl font-bold text-white capitalize max-sm:text-3xl">
                Ready to travel with real adventure & enjoy Natural
              </h1>
            </div>

            <button className="bg-[#63ab45] text-white capitalize font-semibold px-9 py-3 text-base rounded-md w-fit">
  Check Availability
</button>

          </div>

          {/* Right Section */}
          <div className="z-10 lg:w-1/2 w-full flex flex-col gap-16 justify-center mt-8 
          max-sm:mt-16 max-sm:items-center max-md:mt-20 px-4">

            {/* Row 1 */}
            <div className="flex flex-wrap justify-center gap-x-28 gap-y-10">
              <div className="flex flex-col items-center gap-2">
                <img src={smile} alt="Happy Traveller" className="w-[80px] h-auto" />
                <div className="text-center">
                  <h3 className="text-white font-bold text-4xl">976 +</h3>
                  <p className="text-white font-semibold text-lg">Happy Traveller</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <img src={block} alt="Tent Sites" className="w-[80px] h-auto" />
                <div className="text-center">
                  <h3 className="text-white font-bold text-4xl">866 +</h3>
                  <p className="text-white font-semibold text-lg">Tent Sites</p>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex flex-wrap justify-center gap-x-28 gap-y-10">
              <div className="flex flex-col items-center gap-2">
                <img src={star} alt="Positive Review" className="w-[80px] h-auto" />
                <div className="text-center">
                  <h3 className="text-white font-bold text-4xl">986 +</h3>
                  <p className="text-white font-semibold text-lg">Positive Review</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <img src={block} alt="Award Winning" className="w-[80px] h-auto" />
                <div className="text-center">
                  <h3 className="text-white font-bold text-4xl">976 +</h3>
                  <p className="text-white font-semibold text-lg">Award Winning</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Travel;

