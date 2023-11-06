import React from "react";
import html5 from "../assests/images/download.png";
import css3 from "../assests/images/CSS3_logo.svg.png";
import js from "../assests/images/JavaScript-logo.png";
import bs from "../assests/images/bs.png";
import TechItem from "./TechItem";

const techs = [
  {
    name: "HTML 5",
    image: html5,
  },
  {
    name: "CSS 3",
    image: css3,
  },
  {
    name: "Pug",
    image: bs,
  },
  {
    name: "SCSS",
    image: bs,
  },
  {
    name: "Bootstrap",
    image: bs,
  },
  {
    name: "Tailwind CSS",
    image: bs,
  },
  {
    name: "Javascript",
    image: bs,
  },
  {
    name: "Typescript",
    image: bs,
  },
  {
    name: "React",
    image: bs,
  },
  {
    name: "Redux",
    image: bs,
  },
  {
    name: "Next.js",
    image: bs,
  },
  {
    name: "Gsap",
    image: bs,
  },
  {
    name: "Gsap",
    image: bs,
  },
];

const TechStacks = () => {
  return (
    <div>
      <div class="px-4 sm:px-0">
        <h3 class="text-base font-semibold leading-7 text-gray-900">
          Applicant Information
        </h3>
        <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
          Personal details and application.
        </p>
      </div>
      <div class="mt-6 border-t border-gray-100">
        <dl class="divide-y divide-gray-100">
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-6 text-gray-900">
              Front—end
            </dt>
            <dd class="mt-1 leading-6 text-gray-700 sm:col-span-2 sm:mt-0 flex gap-2 flex-wrap max-w-xl">
              
              {techs.map((item, index) => {
                return (
                  <TechItem key={index} item={item} />
                )
              })}
            </dd>
          </div>
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-6 text-gray-900">
              Back—end
            </dt>
            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              Backend Developer
            </dd>
          </div>
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-6 text-gray-900">Tools</dt>
            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              margotfoster@example.com
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default TechStacks;
