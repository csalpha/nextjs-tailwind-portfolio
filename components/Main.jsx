import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import image from "../public/assets/carlos.png";
import Image from "next/image";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import BackgroundCircles from "./BackgroundCircles";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

const Main = () => {
  const [text, count] = useTypewriter({
    words: [
      "Hello! The name's Carlos!",
      "Guy-Who-Loves-Sports.tsx",
      "<ButLovesToCode-More />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        {/* <div> */}
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
          <BackgroundCircles />
          <Image
            src={image}
            alt='image'
            className='relative rounded-full h-32 w-32 mx-auto object-cover'
          />

          <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
              Full Stack Developer
            </h2>
            <h1 className='sm:text-2sm md:text-4xl lg:text-6xl font-semibold px-10'>
              <span>{text}</span>
              <Cursor cursorColor='#F7AB4A' />
            </h1>
            {/* <div className='pt-5'>
              <Link href='#about'>
                <button className='heroButton'>About</button>
              </Link>
              <Link href='#experience'>
                <button className='heroButton'>Experience</button>
              </Link>
              <Link href='#skills'>
                <button className='heroButton'>Skills</button>
              </Link>
              <Link href='#projects'>
                <button className='heroButton'>Projects</button>
              </Link>
            </div> */}
          </div>
          <motion.div
            initial={{
              x: -500,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.5,
            }}
            className='flex flex-row items-center'
          >
            {/* social icons */}
            <SocialIcon
              url='https://www.youtube.com/channel/UCJtSl1227biHNWp2fnSBQdQ/'
              fgColor='gray'
              bgColor='transparent'
              target='_blank'
            />

            <SocialIcon
              url='https://www.github.com/csalpha'
              fgColor='gray'
              bgColor='transparent'
              target='_blank'
            />
            <SocialIcon
              url='https://www.linkedin.com/in/carlos-serodio-6b7404126/'
              fgColor='gray'
              bgColor='transparent'
              target='_blank'
            />
          </motion.div>

          {/* <p className='uppercase text-sm tracking-widest text-gray-600'>
            LET´S WORK TOGETHER
          </p>
          <h1 className='py-4 text-gray-700'>
            Hello, I am <span className='text-[#5651e5]'>Carlos</span>
          </h1>
          <h1 className='py-2 text-gray-700'>A Full Stack Developer</h1>
          <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
            We develop strategies, products, and solutions to evolve and
            transform the Sports Industry at a high speed.
          </p> */}
          {/* <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/carlos-serodio-6b7404126/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg bg-white shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/csalpha'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg bg-white shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            <Link href='/#contact'>
              <div className='rounded-full shadow-lg bg-white shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </Link>
            <Link href='/resume'>
              <div className='rounded-full shadow-lg bg-white shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Main;
