import React from "react";
import pattern from "../assests/images/pattern.gif";
import SectionHeader from "./SectionHeader";
import { BsCircleFill } from "react-icons/bs";

const Hero = () => {
  return (
    <>
      <SectionHeader
        index="0"
        section="About"
        title="Creative Front—end Developer Based in Bangladesh."
        excerpt="Love to develop clean and aesthetic Web Applications & enjoy
      creating things that live on the internet. Velit perferendis
      accusamus voluptate in cum sequi? Lorem ipsum dolor sit, amet
      consectetur adipisicing elit. Debitis ad cum amet inventore."
      />
      {/* <div className="grid grid-cols-12 py-40 items-start">
        <div className="col-span-2 mt-2">
          <p className="text-sm">00/ About</p>
        </div>
        <p class="col-start-5 col-span-full text-4xl tracking-tight mb-20 leading-snug">
          <BsCircleFill className="text-xl inline-block mr-20 mb-1" /> Creative
          Front—end Developer Based in Bangladesh. Love to develop clean and
          aesthetic Web Applications & enjoy creating things that live on the
          internet.
        </p>
        <p class="col-start-7 col-span-full text-lg opacity-80">
          Love to develop clean and aesthetic Web Applications & enjoy creating
          things that live on the internet. Velit perferendis accusamus
          voluptate in cum sequi? Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Debitis ad cum amet inventore.
        </p>
      </div> */}
      <div
        className="p-3 rounded-2xl border bg-black/[0.03] col-span-full"
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.01) 0px 289px 116px, rgba(0, 0, 0, 0.03) 0px 163px 98px, rgba(0, 0, 0, 0.05) 0px 72px 72px, rgba(0, 0, 0, 0.06) 0px 18px 40px, rgba(0, 0, 0, 0.06) 0px 0px 0px",
        }}
      >
        <div className="bg-white pt-[32rem] rounded-xl relative overflow-hidden border">
          <div className="w-[200%] absolute h-full top-0">
            <div
              className="w-full overflow-hidden -ml-52"
              style={{ transform: "matrix(1, 0.27, -0.8, 0.7, 0, 0)" }}
            >
              <div
                className="flex w-[200%] overflow-hidden hover:pause"
                style={{ animation: "bannermove 50s linear infinite" }}
              >
                <div className="w-full">
                  <ul className="flex">
                    <li className="my-0 mx-3">
                      <img
                        src="https://www.inkyy.com/images/preview-img-1.png"
                        alt=""
                        className="transition-all"
                      />
                    </li>
                    <li className="my-0 mx-3">
                      <img
                        src="https://www.inkyy.com/images/preview-img-1.png"
                        alt=""
                        className="transition-all"
                      />
                    </li>
                    <li className="my-0 mx-3">
                      <img
                        src="https://www.inkyy.com/images/preview-img-1.png"
                        alt=""
                        className="transition-all"
                      />
                    </li>
                    <li className="my-0 mx-3">
                      <img
                        src="https://www.inkyy.com/images/preview-img-1.png"
                        alt=""
                        className="transition-all"
                      />
                    </li>
                    <li className="my-0 mx-3">
                      <img
                        src="https://www.inkyy.com/images/preview-img-1.png"
                        alt=""
                        className="transition-all"
                      />
                    </li>
                    <li className="my-0 mx-3">
                      <img
                        src="https://www.inkyy.com/images/preview-img-1.png"
                        alt=""
                        className="transition-all"
                      />
                    </li>
                    <li className="my-0 mx-3">
                      <img
                        src="https://www.inkyy.com/images/preview-img-1.png"
                        alt=""
                        className="transition-all"
                      />
                    </li>
                    <li className="my-0 mx-3">
                      <img
                        src="https://www.inkyy.com/images/preview-img-1.png"
                        alt=""
                        className="transition-all"
                      />
                    </li>
                    <li className="my-0 mx-3">
                      <img
                        src="https://www.inkyy.com/images/preview-img-1.png"
                        alt=""
                        className="transition-all"
                      />
                    </li>
                    <li className="my-0 mx-3">
                      <img
                        src="https://www.inkyy.com/images/preview-img-1.png"
                        alt=""
                        className="transition-all"
                      />
                    </li>
                    <li className="my-0 mx-3">
                      <img
                        src="https://www.inkyy.com/images/preview-img-1.png"
                        alt=""
                        className="transition-all"
                      />
                    </li>
                    <li className="my-0 mx-3">
                      <img
                        src="https://www.inkyy.com/images/preview-img-1.png"
                        alt=""
                        className="transition-all"
                      />
                    </li>
                    <li className="my-0 mx-3">
                      <img
                        src="https://www.inkyy.com/images/preview-img-1.png"
                        alt=""
                        className="transition-all"
                      />
                    </li>
                    <li className="my-0 mx-3">
                      <img
                        src="https://www.inkyy.com/images/preview-img-1.png"
                        alt=""
                        className="transition-all"
                      />
                    </li>
                    <li className="my-0 mx-3">
                      <img
                        src="https://www.inkyy.com/images/preview-img-1.png"
                        alt=""
                        className="transition-all"
                      />
                    </li>
                    <li className="my-0 mx-3">
                      <img
                        src="https://www.inkyy.com/images/preview-img-1.png"
                        alt=""
                        className="transition-all"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div dir="rtl" className="w-[200%] absolute h-full top-1/2">
            <div
              className="w-full overflow-hidden mr-52"
              style={{ transform: "matrix(1, 0.27, -0.8, 0.7, 0, 0)" }}
            >
              <div
                className="flex w-[200%] overflow-hidden"
                style={{ animation: "bannermovertl 50s linear infinite" }}
              >
                <div className="w-full">
                  <ul className="flex">
                    <li className="my-0 mx-3">
                      <img
                        src="https://www.inkyy.com/images/preview-img-1.png"
                        alt=""
                        className="transition-all"
                      />
                    </li>
                    <li className="my-0 mx-3">
                      <img
                        src="https://www.inkyy.com/images/preview-img-1.png"
                        alt=""
                        className="transition-all"
                      />
                    </li>
                    <li className="my-0 mx-3">
                      <img
                        src="https://www.inkyy.com/images/preview-img-1.png"
                        alt=""
                        className="transition-all"
                      />
                    </li>
                    <li className="my-0 mx-3">
                      <img
                        src="https://www.inkyy.com/images/preview-img-1.png"
                        alt=""
                        className="transition-all"
                      />
                    </li>
                    <li className="my-0 mx-3">
                      <img
                        src="https://www.inkyy.com/images/preview-img-1.png"
                        alt=""
                        className="transition-all"
                      />
                    </li>
                    <li className="my-0 mx-3">
                      <img
                        src="https://www.inkyy.com/images/preview-img-1.png"
                        alt=""
                        className="transition-all"
                      />
                    </li>
                    <li className="my-0 mx-3">
                      <img
                        src="https://www.inkyy.com/images/preview-img-1.png"
                        alt=""
                        className="transition-all"
                      />
                    </li>
                    <li className="my-0 mx-3">
                      <img
                        src="https://www.inkyy.com/images/preview-img-1.png"
                        alt=""
                        className="transition-all"
                      />
                    </li>
                    <li className="my-0 mx-3">
                      <img
                        src="https://www.inkyy.com/images/preview-img-1.png"
                        alt=""
                        className="transition-all"
                      />
                    </li>
                    <li className="my-0 mx-3">
                      <img
                        src="https://www.inkyy.com/images/preview-img-1.png"
                        alt=""
                        className="transition-all"
                      />
                    </li>
                    <li className="my-0 mx-3">
                      <img
                        src="https://www.inkyy.com/images/preview-img-1.png"
                        alt=""
                        className="transition-all"
                      />
                    </li>
                    <li className="my-0 mx-3">
                      <img
                        src="https://www.inkyy.com/images/preview-img-1.png"
                        alt=""
                        className="transition-all"
                      />
                    </li>
                    <li className="my-0 mx-3">
                      <img
                        src="https://www.inkyy.com/images/preview-img-1.png"
                        alt=""
                        className="transition-all"
                      />
                    </li>
                    <li className="my-0 mx-3">
                      <img
                        src="https://www.inkyy.com/images/preview-img-1.png"
                        alt=""
                        className="transition-all"
                      />
                    </li>
                    <li className="my-0 mx-3">
                      <img
                        src="https://www.inkyy.com/images/preview-img-1.png"
                        alt=""
                        className="transition-all"
                      />
                    </li>
                    <li className="my-0 mx-3">
                      <img
                        src="https://www.inkyy.com/images/preview-img-1.png"
                        alt=""
                        className="transition-all"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[200%] absolute h-full top-full">
            <div
              className="w-full overflow-hidden -ml-52"
              style={{ transform: "matrix(1, 0.27, -0.8, 0.7, 0, 0)" }}
            >
              <div
                className="flex w-[200%] overflow-hidden hover:pause"
                style={{ animation: "bannermove 50s linear infinite" }}
              >
                <div className="w-full">
                  <ul className="flex">
                    <li className="my-0 mx-3">
                      <img
                        src="https://www.inkyy.com/images/preview-img-1.png"
                        alt=""
                        className="transition-all"
                      />
                    </li>
                    <li className="my-0 mx-3">
                      <img
                        src="https://www.inkyy.com/images/preview-img-1.png"
                        alt=""
                        className="transition-all"
                      />
                    </li>
                    <li className="my-0 mx-3">
                      <img
                        src="https://www.inkyy.com/images/preview-img-1.png"
                        alt=""
                        className="transition-all"
                      />
                    </li>
                    <li className="my-0 mx-3">
                      <img
                        src="https://www.inkyy.com/images/preview-img-1.png"
                        alt=""
                        className="transition-all"
                      />
                    </li>
                    <li className="my-0 mx-3">
                      <img
                        src="https://www.inkyy.com/images/preview-img-1.png"
                        alt=""
                        className="transition-all"
                      />
                    </li>
                    <li className="my-0 mx-3">
                      <img
                        src="https://www.inkyy.com/images/preview-img-1.png"
                        alt=""
                        className="transition-all"
                      />
                    </li>
                    <li className="my-0 mx-3">
                      <img
                        src="https://www.inkyy.com/images/preview-img-1.png"
                        alt=""
                        className="transition-all"
                      />
                    </li>
                    <li className="my-0 mx-3">
                      <img
                        src="https://www.inkyy.com/images/preview-img-1.png"
                        alt=""
                        className="transition-all"
                      />
                    </li>
                    <li className="my-0 mx-3">
                      <img
                        src="https://www.inkyy.com/images/preview-img-1.png"
                        alt=""
                        className="transition-all"
                      />
                    </li>
                    <li className="my-0 mx-3">
                      <img
                        src="https://www.inkyy.com/images/preview-img-1.png"
                        alt=""
                        className="transition-all"
                      />
                    </li>
                    <li className="my-0 mx-3">
                      <img
                        src="https://www.inkyy.com/images/preview-img-1.png"
                        alt=""
                        className="transition-all"
                      />
                    </li>
                    <li className="my-0 mx-3">
                      <img
                        src="https://www.inkyy.com/images/preview-img-1.png"
                        alt=""
                        className="transition-all"
                      />
                    </li>
                    <li className="my-0 mx-3">
                      <img
                        src="https://www.inkyy.com/images/preview-img-1.png"
                        alt=""
                        className="transition-all"
                      />
                    </li>
                    <li className="my-0 mx-3">
                      <img
                        src="https://www.inkyy.com/images/preview-img-1.png"
                        alt=""
                        className="transition-all"
                      />
                    </li>
                    <li className="my-0 mx-3">
                      <img
                        src="https://www.inkyy.com/images/preview-img-1.png"
                        alt=""
                        className="transition-all"
                      />
                    </li>
                    <li className="my-0 mx-3">
                      <img
                        src="https://www.inkyy.com/images/preview-img-1.png"
                        alt=""
                        className="transition-all"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
