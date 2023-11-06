import React from "react";

const Timeline = () => {
  return (
    <div className="grid grid-cols-12 items-start mb-40">
      <div className="col-span-full grid grid-cols-5 justify-items-end text-end">
        <div className="relative w-full flex flex-col items-end">
          <div className="absolute w-full border-t border-dashed border-gray-300"></div>
          <div className="relative h-3 w-3 bg-[#333333] opacity-80 rounded-full -mt-[6px] mb-6"></div>
          <h4>2021</h4>
          <p>Self taught Developer</p>
        </div>
        <div className="relative w-full flex flex-col items-end text-end">
          <div className="absolute w-full border-t border-dashed border-gray-300"></div>
          <div className="relative h-3 w-3 bg-orange rounded-full -mt-[6px] mb-6"></div>
          <h4>2022</h4>
          <p className="pl-16">
            Started my journey as a <br /> Front-end Developer at <br />
            <a
              href="https://technext.it/"
              rel="noreferrer"
              target="_blank"
              className="text-orange hover:underline"
            >
              Technext limited
            </a>
          </p>
        </div>
        <div className="relative w-full flex flex-col items-end text-end">
          <div className="absolute w-full border-t border-dashed border-orange"></div>
          <div className="relative h-3 w-3 bg-orange rounded-full -mt-[6px] mb-6">
            <div className="absolute w-6 h-6 border-orange border rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
          </div>
          <h4>2023</h4>
          <p className="pl-16">
            Journey continued at <br />
            <a
              href="https://technext.it/"
              rel="noreferrer"
              target="_blank"
              className="text-orange hover:underline"
            >
              Technext limited
            </a>
          </p>
        </div>
        <div className="relative w-full flex flex-col items-end text-end">
          <div className="absolute w-full border-t border-dashed border-orange"></div>
          <div className="relative h-3 w-3 bg-[#333333] opacity-80 rounded-full -mt-[6px] mb-6"></div>
          <h4>2024</h4>
          <p className="pl-16">
            Learning and crafting amazing web experiences.
          </p>
        </div>
        <div className="relative w-full flex flex-col items-end text-end">
          <div className="absolute w-full border-t border-dashed border-gray-300"></div>
          <div className="relative h-3 w-3 bg-[#333333] opacity-80 rounded-full -mt-[6px] mb-6"></div>
          <h4>2025</h4>
          <p className="pl-16">Yet to come more web exelency.</p>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
