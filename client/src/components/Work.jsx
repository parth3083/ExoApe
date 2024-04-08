import React, { useState } from "react";

function Work() {
  const [elem, setelem] = useState([
    {
      heading: "Pixel Flakes",
      subheading: "Archietectural Marketing agency",
      image:
        "https://a.storyblok.com/f/133769/2400x2990/20d07e6f0c/pixelflakes-hero.jpg/m/1300x1620/filters:quality(90)",
      video:
        "https://download-video.akamaized.net/v3-1/playback/bfac2114-1cd7-4a50-8b21-ec941cbfb811/1f289d51?__token__=st=1712545885~exp=1712560285~acl=%2Fv3-1%2Fplayback%2Fbfac2114-1cd7-4a50-8b21-ec941cbfb811%2F1f289d51%2A~hmac=3f194330d1466d41445ce537297ff24e5316e6884df4deb7e811ed7fad8e8cbb&r=dXMtd2VzdDE%3D",
    },
    {
      heading: "Columbia Pictures",
      subheading: "celebrating the century of the pictures",
      image:
        "https://a.storyblok.com/f/133769/2400x2990/540fb12941/columbia-pictures-thumbnail.jpg/m/1300x1620/filters:quality(90)",
      video:
        "https://download-video.akamaized.net/v3-1/playback/4bdb3586-71c8-40be-b000-2ba5691333a3/dee0a4f7?__token__=st=1712546654~exp=1712561054~acl=%2Fv3-1%2Fplayback%2F4bdb3586-71c8-40be-b000-2ba5691333a3%2Fdee0a4f7%2A~hmac=7053e882adb1f9d308770553cdb6d4d4cd0d67d6bd25f4d66daf684c16246902&r=dXMtY2VudHJhbDE%3D",
    },
    {
      heading: "Rino & Relle",
      subheading: "effortless chic lifestyle",
      image:
        "https://a.storyblok.com/f/133769/2400x2990/b66359da25/rino-pelle-hero.jpg/m/1300x1620/filters:quality(90)",
      video:
        "https://download-video.akamaized.net/v3-1/playback/66710880-7060-4d65-965e-38a29da54c52/5ac47112?__token__=st=1712546736~exp=1712561136~acl=%2Fv3-1%2Fplayback%2F66710880-7060-4d65-965e-38a29da54c52%2F5ac47112%2A~hmac=7a2354de6366a40399f406437f9913dfd6cd0450821801a34d22599a1cc7347f&r=dXMtY2VudHJhbDE%3D",
    },
    {
      heading: "Aebele Interiors",
      subheading: "luxurious designing experience",
      image:
        "https://a.storyblok.com/f/133769/2400x2990/3e8f8d08f7/aebele-interiors-hero.jpg/m/1300x1620/filters:quality(90)",
      video:
        "https://download-video.akamaized.net/v3-1/playback/57423169-59cb-4b8a-ad09-3bd812a12ee7/4ce94964?__token__=st=1712546788~exp=1712561188~acl=%2Fv3-1%2Fplayback%2F57423169-59cb-4b8a-ad09-3bd812a12ee7%2F4ce94964%2A~hmac=973880ec49b521bde72abae682fe71aaca2187c7c7e9643acc499adba599d507&r=dXMtd2VzdDE%3D",
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
            const flexDirectionClass = index % 2 === 0 ? "flex" : "flex-row-reverse";
            return (
              <div key={index} className={`sm:px-[10vw]  sm:items-center elem w-full sm:flex sm:gap-[8vw] mt-10`}>
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
                  <h3 className="capitalize opacity-50 sm:text-xl">{items.subheading}</h3>
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
