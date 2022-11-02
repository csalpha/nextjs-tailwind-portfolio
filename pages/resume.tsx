import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const resume = () => {
  return (
    <>
      <Head>
        <title>Carlos | Resume</title>
        <meta
          name='description'
          content='I’m a Full-Stack web developer trying building exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Carlos Serôdio</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/carlos-serodio-6b7404126/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href='https://github.com/csalpha'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              <span className='px-1'></span> Full Stack Developer Javascript |
              React
            </p>
          </div>
        </div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
          eaque exercitationem sit nulla, molestias, inventore non pariatur
          tempore accusamus eveniet possimus tenetur molestiae numquam facilis
          cumque! Debitis, obcaecati dolore! Quae.
          {/* I'm someone with the ability to work on all “layers” of software
          development. Curious, obstinate, committed to customer satisfaction.
          Diverse analytical skills, team collaboration and relationship
          building. Engaged professional with solid interpersonal skills. */}
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Full-Stack Developer
            <span className='px-2'>|</span> HTML
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>React
            <span className='px-2'>|</span>NextJS
            <span className='px-2'>|</span>Typescript
            <span className='px-2'>|</span>TailwindCSS
            {/* <span className='px-2'>|</span>MaterialUI
            <span className='px-2'>|</span>ChakraUI */}
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>Virtual BSS</span>
            <span className='px-2'>|</span>Lisboa, Portugal
          </p>
          <p className='py-1 italic'>
            Full Stack Developer
            {/* ( jun 2017 - present) */}
          </p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
              accusantium animi tempore at optio, eius nam nesciunt reiciendis
              quia eos reprehenderit porro perspiciatis tenetur sunt? Voluptatum
              architecto aspernatur perspiciatis totam?
              {/* Working on a Health Tech project in full production phase
              scheduled to be built in accordance with best practices as well as
              safety and quality requirements. */}
            </li>
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
              necessitatibus, illo iusto inventore aut, qui eum ut ullam, libero
              obcaecati perspiciatis ducimus commodi repudiandae. Id ullam
              deserunt nulla accusantium dolorem!
              {/* Frontend project with Javascript, React and React-Native */}
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
              aspernatur, incidunt voluptate architecto consectetur blanditiis
              inventore expedita, repellendus odio eum tempore a aliquid nihil,
              in dicta sed fugit mollitia nemo!
              {/* Responsible for creating the project pages using Material-UI. */}
            </li>
          </ul>
        </div>

        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>AlentApp</span>
            <span className='px-2'>|</span>Évora, Portugal
          </p>
          <p className='py-1 italic'>
            Full Stack Developer
            {/* | April 2021 - Set 2021 */}
          </p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
              ratione nihil laboriosam quaerat molestiae veniam eos commodi
              eligendi, delectus, vitae minus. Obcaecati aliquam dolor corporis
              eveniet minima impedit sapiente laudantium.
              {/* Mainly worked on two products: performance and demand improvements
              aimed at a better experience for internal employees of a
              telecommunications company and another that includes refactoring
              the code of the web application that Wrightia has. */}
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              explicabo quod enim officiis voluptates tempore rerum dolorem
              asperiores velit hic! Qui eligendi magni blanditiis fugit
              deleniti, eveniet distinctio esse doloremque.
              {/* Implementing solutions in compliance with the best practices as
              well as afety and quality requirements. */}
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              explicabo quod enim officiis voluptates tempore rerum dolorem
              asperiores velit hic! Qui eligendi magni blanditiis fugit
              deleniti, eveniet distinctio esse doloremque.
            </li>
          </ul>
        </div>

        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>Capgemini</span>
            <span className='px-2'>|</span>Évora, Portugal
          </p>
          <p className='py-1 italic'>
            Full Stack Developer
            {/* | April 2021 - Set 2021 */}
          </p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              explicabo quod enim officiis voluptates tempore rerum dolorem
              asperiores velit hic! Qui eligendi magni blanditiis fugit
              deleniti, eveniet distinctio esse doloremque.
              {/* Mainly worked on two products: performance and demand improvements
              aimed at a better experience for internal employees of a
              telecommunications company and another that includes refactoring
              the code of the web application that Wrightia has. */}
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              explicabo quod enim officiis voluptates tempore rerum dolorem
              asperiores velit hic! Qui eligendi magni blanditiis fugit
              deleniti, eveniet distinctio esse doloremque.
              {/* Implementing solutions in compliance with the best practices as
              well as afety and quality requirements. */}
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              explicabo quod enim officiis voluptates tempore rerum dolorem
              asperiores velit hic! Qui eligendi magni blanditiis fugit
              deleniti, eveniet distinctio esse doloremque.
              {/* Implementing solutions in compliance with the best practices as
              well as afety and quality requirements. */}
            </li>
          </ul>
        </div>

        {/* <h5 className='text-center underline text-[18px] py-4'>
          Other Professional Experience
        </h5>

        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>Évora - Portugal</span>
            <span className='px-2'>|</span>Évora - Portugal 
          </p>
          <p className='py-1 italic'>Developer (2012 – 2020)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              I worked as a Developer for the last ten years, attending
              to the most diverse types of people, many of whom with the most
              diverse types of clinical pathologies, in addition to promoting
              health as well as promoting aesthetic improvements and well-being.
            </li>
          </ul>
        </div> */}
      </div>
    </>
  );
};

export default resume;
