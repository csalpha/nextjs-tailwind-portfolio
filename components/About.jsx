import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/keyboard.jpg";
import image from "../public/assets/projects/project0.png";

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center pu-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-1 tracking-widest  text-gray-500'>
            About
          </p>
          <h2 className='py-4'>So, who am I?</h2>
          <p className='py-2 text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p className='py-2 text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            illum suscipit ducimus nam a maxime adipisci et debitis fuga? Fuga
            eveniet quia dolorum rerum dolore sit velit ullam accusamus? Rerum.
          </p>
          <p className='py-2 text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            illum suscipit ducimus nam a maxime adipisci et debitis fuga? Fuga
            eveniet quia dolorum rerum dolore sit velit ullam accusamus? Rerum.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl bg-white shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={image} alt='/' width='520' height='400' />
        </div>
      </div>
    </div>
  );
};

export default About;
