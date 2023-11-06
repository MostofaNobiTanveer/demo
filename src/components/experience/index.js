import React from "react";
import SectionHeader from "../SectionHeader";
import Timeline from "./Timeline";

const Experience = () => {
  return (
    <>
      <SectionHeader
        index="1"
        section="Experience"
        title="Crafting Exceptional User Interfaces Since 2021."
        excerpt="Love to develop clean and aesthetic Web Applications & enjoy
            creating things that live on the internet. Velit perferendis
            accusamus voluptate in cum sequi? Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Debitis ad cum amet inventore."
      />
      <Timeline />
    </>
  );
};

export default Experience;
