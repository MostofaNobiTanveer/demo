import React from "react";
import SectionHeader from "../SectionHeader";
import projects from "../../assests/data/projects";
import Project from "./Project";

const Projects = () => {
  return (
    <>
      <SectionHeader
        index="2"
        section="Projects"
        title="Turning Ideas into Interactive Experiences."
        excerpt="Love to develop clean and aesthetic Web Applications & enjoy
            creating things that live on the internet. Velit perferendis
            accusamus voluptate in cum sequi? Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Debitis ad cum amet inventore."
      />
      <div>
        {projects.map((project) => (
          <Project id={project.id} project={project} />
        ))}
      </div>
    </>
  );
};

export default Projects;
