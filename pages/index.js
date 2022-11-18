import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import Main from "../components/Main";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div
      className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0
    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7AD0A]/80'
    >
      <Head>
        <title>NEXT | Digital Transformation </title>
        <meta name='description' content='content' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
