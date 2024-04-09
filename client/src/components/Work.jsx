import React, { useState } from "react";
import vid1 from "../assets/work-1.mp4";
import vid2 from "../assets/work-2.mp4";
import vid3 from "../assets/work-3.mp4";
import vid4 from "../assets/work-4.mp4";

function Work() {
  const [elem, setelem] = useState([
    {
      heading: "Pixel Flakes",
      subheading: "Archietectural Marketing agency",
      image:
        "https://a.storyblok.com/f/133769/2400x2990/20d07e6f0c/pixelflakes-hero.jpg/m/1300x1620/filters:quality(90)",
      video: vid1,
    },
    {
      heading: "Columbia Pictures",
      subheading: "celebrating the century of the pictures",
      image:
        "https://a.storyblok.com/f/133769/2400x2990/540fb12941/columbia-pictures-thumbnail.jpg/m/1300x1620/filters:quality(90)",
      video: vid2,
    },
    {
      heading: "Rino & Relle",
      subheading: "effortless chic lifestyle",
      image:
        "https://a.storyblok.com/f/133769/2400x2990/b66359da25/rino-pelle-hero.jpg/m/1300x1620/filters:quality(90)",
      video: vid3,
    },
    {
      heading: "Aebele Interiors",
      subheading: "luxurious designing experience",
      image:
        "https://a.storyblok.com/f/133769/2400x2990/3e8f8d08f7/aebele-interiors-hero.jpg/m/1300x1620/filters:quality(90)",
      video: vid4,
    },
  ]);
  return (
    <div className="w-full relative">
      <div className="max-w-screen-2xl mx-auto py-20 px-5  sm:px-24">
        <div className="featured flex gap-3">
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
          <h3 className="capitalized sm:text-2xl">Featured Projects</h3>
        </div>
        <h1 className="text-6xl sm:text-[10rem] my-5">Work</h1>
        <p className="leading-2 sm:text-lg text-md">
          Highlights of cases that we passionately built with forward-thinking
          clients and friends over the years.
        </p>

        <div className="elems mt-10">
          {elem.map((items, index) => {
            return (
              <div
                key={index}
                className={`sm:px-[10vw]  sm:items-center elem w-full  sm:flex sm:gap-[8vw] mt-10`}
              >
                <div className="video w-full h-[104vw] sm:h-[30vw] sm:w-1/3 bg-red-500 overflow-hidden relative">
                  <img
                    src={items.image}
                    className="hidden sm:block w-full h-full object-cover"
                    alt=""
                  />
                  <video
                    muted
                    autoPlay
                    loop
                    src={items.video}
                    className="block sm:hidden w-full h-full object-cover scale-[1.3]"
                  ></video>
                </div>
                <div className="mt-4">
                  <h3 className="font-semibold sm:text-4xl">{items.heading}</h3>
                  <h3 className="capitalize opacity-50 sm:text-xl">
                    {items.subheading}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Work;
