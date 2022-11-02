import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>
            LET´S WORK TOGETHER
          </p>
          <h1 className='py-4 text-gray-700'>
            Hello, I am <span className='text-[#5651e5]'>Carlos</span>
          </h1>
          <h1 className='py-2 text-gray-700'>A Full Stack Developer</h1>
          <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
            We develop strategies, products, and solutions to evolve and
            transform the Sports Industry at a high speed.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
