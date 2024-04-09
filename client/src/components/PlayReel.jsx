import React from "react";
import vid from "../assets/PlayReel.mp4";

function PlayReel() {
  return (
    <div className="w-full h-screen bg-black text-white relative">
      <div className="video-container bg-red-500 w-32 sm:w-96 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <video loop muted autoPlay className="scale-[1.5]" src={vid}></video>
      </div>
      <div className="overlay absolute w-full h-full flex flex-col items-center py-10 justify-between ">
        <div className="play-reel flex items-center justify-center gap-3 ">
          <svg
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4"
            data-v-669b4a84=""
          >
            <path
              d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
              fill="currentColor"
              data-v-669b4a84=""
            ></path>
          </svg>
          <h3>Work in motion</h3>
        </div>
        <h1 className="flex items-center justify-center gap-20 sm:gap-96">
          <div className="text-5xl font-light sm:text-9xl">Play</div>
          <div className="text-5xl font-light sm:text-9xl">Reel</div>
        </h1>
        <p className="px-10 text-center text-xssm:text-sm">
          Our work is best experienced in motion. Don’t forget to put on your
          headphones.
        </p>
      </div>
    </div>
  );
}

export default PlayReel;
