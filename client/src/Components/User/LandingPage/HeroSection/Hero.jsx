import React from "react";
import image from '../../../../Assets/undefined_image.png'
function Hero() {
  return (
    <div className="flex w-full h-screen">
        
      <div className="w-1/2">
      <div className="lg:px-12 mt-12 text-start">
      <h1 className="text-connect py-2 font-normal text-8xl" >Connect.</h1>
      <h1 className="text-connect py-2 font-normal text-8xl">Grow.</h1>
      <h1 className="text-connect py-2 font-normal text-8xl">Succeed.</h1>
      </div>
      <p className="text-start lg:px-12 mt-1.5 text-connect font-thin text-2xl">Empowering Futures,Creating Oppertunities</p>
      </div>
      <div className="w-1/2 mt-6 mr-3">
          <img
            className="w-full h-4/5 object-cover"
            src = {image}
            //src="https://static.wixstatic.com/media/11062b_aee05e9b72894b4ca343dd1fde3fc08f~mv2.jpg/v1/fill/w_564,h_1038,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_aee05e9b72894b4ca343dd1fde3fc08f~mv2.jpg"
            alt="Hero"
          />
        </div>
      </div>
  );
}

export default Hero;
