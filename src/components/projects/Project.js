import React, { useRef, useState } from "react";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

const Project = ({ project }) => {
  const [maskX, setMaskX] = useState(0);
  const [maskY, setMaskY] = useState(0);

  const imageRef = useRef(null);

  const handleMouseMove = (e) => {
    const width = imageRef.current.clientWidth;
    const height = imageRef.current.clientHeight;

    const oX = (e.nativeEvent.offsetX / width) * 100;
    const oY = (e.nativeEvent.offsetY / height) * 100;

    setMaskX(oX + (oY - 50) * 0.4);
    setMaskY(oX + (oY - 50) * -0.4);
  };

  const handleMouseOut = () => {
    setMaskX(0);
    setMaskY(0);
  };
  return (
    <div className="grid grid-cols-12 gap-10 grid-flow-dense mb-72">
      <div className="col-span-full text-sm mb-4">00{project.id}/</div>
      <div className="2xl:col-span-5 xl:col-span-6 col-span-full max-w-2xl">
        <h1 className="text-5xl tracking-tight">{project.title}</h1>
      </div>
      <div className="xl:col-span-6 xl:col-start-7 col-span-full max-w-3xl col-start-1">
        <p className="text-lg opacity-80">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          ratione quasi, similique, sequi fuga neque obcaecati delectus
          consequatur illo quo molestiae corporis porro libero quae, eligendi
          aliquam incidunt architecto dolor? 
        </p>
      </div>
      <div className="xl:col-span-6 xl:col-start-7 col-start-1 col-span-full flex gap-20 items-start">
        <div className="">
          <p className="text-sm opacity-80 mb-1">Company</p>
          <a
            href="https://themewagon.com/"
            rel="noreferrer"
            target="_blank"
            className="text-orange hover:underline"
          >
            Themewagon
          </a>
        </div>
        <div className="">
          <p className="text-sm opacity-80 mb-1">Role</p>
          <p>Front—end developer</p>
        </div>
      </div>
      <div className="col-span-6 col-start-1">
        <button className="flex items-center gap-2 group">
          <span className="h-14 w-14 group-hover:scale-[0.85] transition duration-300 rounded-full border bg-[#333] text-white flex items-center justify-center">
            <HiOutlineArrowUpRight className="text-lg" />
          </span>{" "}
          <span className="scale-0 group-hover:scale-100 transition duration-300 origin-left">
            Go to Preview
          </span>
        </button>
      </div>
      
      {/* <div
        className="col-span-12 relative cursor-pointer"
        onMouseOut={handleMouseOut}
        onMouseMove={handleMouseMove}
        ref={imageRef}
      >
        <div className="w-full h-96 bg-white flex items-center justify-center">
          <img
            src="https://falconreact.prium.me/static/media/falcon.fa3b1ec66baa6b31819e.png"
            alt=""
            className="absolute h-20 w-20 object-cover"
          />
        </div>
        <div
          style={{
            clipPath: `polygon(0 0, ${maskX}% 0, ${maskY}% 100%, 0 100%)`,
          }}
          className="project__image-clone absolute w-full h-full top-0 left-0 bg-gray-300"
        >
          <img
            src="https://falconreact.prium.me/static/media/falcon-mode-dark.287d941d55a122344214.jpg"
            alt=""
            className="absolute h-full w-full object-cover"
          />
        </div>
      </div> */}
      <div
        className="p-3 rounded-2xl border bg-black/[0.03] col-span-full"
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.01) 0px 289px 116px, rgba(0, 0, 0, 0.03) 0px 163px 98px, rgba(0, 0, 0, 0.05) 0px 72px 72px, rgba(0, 0, 0, 0.06) 0px 18px 40px, rgba(0, 0, 0, 0.06) 0px 0px 0px",
        }}
      >
        <div className="relative w-full pt-[35rem] rounded-lg overflow-hidden border">
          <img
            src="https://prium.github.io/falcon/v3.18.0/assets/img/generic/falcon-mode-default.jpg"
            alt=""
            className="absolute h-full w-full top-0 left-0 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
