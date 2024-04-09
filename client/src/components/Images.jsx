import React from "react";
import img1 from "../assets/Images1.webp";
import img2 from "../assets/images2.webp";
import img3 from "../assets/Images3.webp";
import vid1 from "../assets/images-vid-2.mp4";
import vid2 from "../assets/images-vid.mp4";
function Images() {
  return (
    <div className="w-full sm:h-[125vh] h-[70vh] bg-white flex items-center justify-center relative overflow-hidden">
      <div className="absolute bg-red-500 w-24 top-24 right-7 sm:h-[30%] sm:w-48 sm:right-[26%] h-[25%] ">
        <img src={img2} className="w-full h-full object-cover" alt="" />
      </div>
      <div className="absolute w-40 top-[33%] left-1 h-[20%] sm:h-[30%] sm:left-[15%] sm:w-96 ">
        <video
          muted
          loop
          autoPlay
          src={vid1}
          className="w-full h-full object-cover"
        ></video>
      </div>
      <div className="absolute bg-red-500 w-36 h-[30%] sm:h-[40%] sm:left-[14%] sm:w-96 sm:-bottom-[15%]  left-0 bottom-0">
        <img src={img3} className="w-full h-full object-cover" alt="" />
      </div>
      <div className="absolute   bg-red-500 w-36 h-[30%] sm:h-[40%] sm:right-[19%] sm:w-[20%] right-0 -bottom-5">
        <video
          src={vid2}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
        ></video>
      </div>
      <div className="w-[40%] sm:w-[25%] h-2/3 sm:h-[80%] bg-red-500 ">
        <img src={img1} className="w-full h-full object-cover" alt="" />
      </div>
    </div>
  );
}

export default Images;
