import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProjectItem from "./ProjectItem";
import project0 from "../public/assets/projects/project0.png";
import project1 from "../public/assets/projects/project1.png";
import project2 from "../public/assets/projects/project2.png";
import project3 from "../public/assets/projects/project3.png";

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase  text-gray-500'>
          Projects
        </p>
        <h2 className='py-4'>What I have Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Project 0'
            backgroundImg={project0}
            projectUrl='/project0'
          />

          <ProjectItem
            title='Project 1'
            backgroundImg={project1}
            projectUrl='/project1'
          />
          <ProjectItem
            title='Project 2'
            backgroundImg={project2}
            projectUrl='/project2'
          />
          <ProjectItem
            title='Project 3'
            backgroundImg={project3}
            projectUrl='/project3'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
