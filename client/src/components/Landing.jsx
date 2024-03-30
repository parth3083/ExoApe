import React from "react";

function Landing() {
  return (
    <div className=" relative w-full h-[150vh] sm:h-[300vh]">
      <div className="picture w-full h-full">
        <img
          src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/2400x3395/filters:quality(90)"
          className="w-full h-full object-cover"
          alt=""
        />
      </div>

      <div className="absolute top-0 w-full">
        <div className=" text-white max-w-screen-2xl h-full mx-auto px-5 sm:px-24">
          <div className="para leading-tight mt-72 sm:mt-[29rem]">
            <p className="text-md sm:text-2xl">Global Digital Design partnering with</p>
            <p className="text-md sm:text-2xl">
              brands and business that create exceptional
            </p>
            <p className="text-md sm:text-2xl">
              experiences where people live, work, and unwind.
            </p>
          </div>
          <div className="headings mt-7 leading-5">
            <h1 className="text-7xl sm:text-[17rem] tracking-tighter sm:tracking-tight leading-none">Design</h1>
            <h1 className="text-7xl sm:text-[17rem] tracking-tighter sm:tracking-tight leading-none">Digital</h1>
            <h1 className="text-7xl sm:text-[17rem] tracking-tighter sm:tracking-tight leading-none">
              Experience
            </h1>
          </div>
          <div className="para2 mt-16 sm:mt-24 ">
            <p className="text-md sm:text-2xl tracking-tighter leading-none">
              We helped experienced-driven companies thrive
            </p>
            <p className="text-md sm:text-2xl tracking-tighter leading-none">
              by making their audience feel the refined
            </p>
            <p className="text-md sm:text-2xl tracking-tighter leading-none">
              intricacies of their brand and product in the
            </p>
            <p className="text-md sm:text-2xl tracking-tighter leading-none">
              digital space. Unforgettable journeys start
            </p>
            <p className="text-md sm:text-2xl tracking-tighter leading-none">
              with a click.
            </p>
          </div>
          <a
            href="#"
            className="text-white text-sm sm:text-xl mt-16 sm:mt-28 cursor-pointer inline-block border-b-[0.3px] border-zinc-100"
          >
            The studio
          </a>
        </div>
      </div>
    </div>
  );
}

export default Landing;
