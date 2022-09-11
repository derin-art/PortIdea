import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import PortPhoto from "../public/PortPhoto.png";
import Photo from "../public/PortPhoto1.png";
import react from "react";
import blob from "../public/blobanimation.svg";
import codePattern from "../public/codePattern3.svg";
import Stack from "../components/Stack";
import Projects from "../components/Projects";
import { motion, useTime, useTransform } from "framer-motion";
/* import codePattern from "../public/Stack/trianglePattern.svg"; */

export default function Home() {
  const [isHoverd, setIsHovered] = react.useState(false);

  const time = useTime();
  const opacity = useTransform(
    time,
    [0, 1000], // For every 4 seconds...
    [0, 1], // ...rotate 360deg
    { clamp: false }
  );

  const downArrow = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="44"
      height="44"
      className="fill-green-400 border border-green-800 rounded-full"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm1 10V8h-2v4H8l4 4 4-4h-3z" />
    </svg>
  );

  const slantedArrow = (
    <motion.svg
      animate={{
        rotate: [0, 360],
      }}
      transition={{
        duration: 0.8,
        ease: "backOut",
      }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="35"
      height="35"
      className="fill-green-400 border p-1 rounded-lg border-green-800"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M12 13H4v-2h8V4l8 8-8 8z" />
    </motion.svg>
  );

  const homeIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      className="fill-green-300"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M19 20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9H0l10.327-9.388a1 1 0 0 1 1.346 0L22 11h-3v9zm-8-5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
    </svg>
  );

  return (
    <div className="font-grotesk scrollbar-thin scrollbar-thumb-green-300 scrollbar-track-gray-900 overflow-y-auto h-screen scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
      <motion.div className="h-screen w-full bg-gray-800 relative">
        <div className="flex justify-center w-full items-center"></div>

        <div className="flex items-center  mt-40 p-2 flex-col">
          <motion.div
            initial={{ translatey: -150, opacity: 0 }}
            animate={{
              translateY: [-150, 0, 10, 0],
              opacity: [0.2, 0.5, 1],
            }}
            transition={{
              duration: 0.8,
              ease: "backOut",
            }}
            className="lg:text-9xl md:text-7xl text-5xl text-gray-700 font-russo"
          >
            <span className="text-white">Hi, i'm Derin and i'm a </span>
            <span className="p-1">Frontend Engineer</span>
          </motion.div>
          <motion.div className="text-green-400 self-start ml-2 w-96 md:text-base text-sm   border-b border-l border-white rounded-bl-2xl mt-4 p-2">
            I enjoy working with and building systems for Frontend apps.
            Essentially Figuring out the puzzle of how each piece fits to create
            an Awesome App.
            <div className="text-gray-500 flex items-center mt-2">
              <p className="mr-2">More About Me</p> {slantedArrow}
            </div>
          </motion.div>
          <div className="absolute right-8 bottom-32 text-gray-400 flex items-center animate-bounce">
            {downArrow} <p className="ml-2">Scroll Down</p>
          </div>
          <motion.div
            initial={{ translateX: -50, opacity: 0 }}
            animate={{
              translateX: [-50, 0, 10, 0],
              opacity: [0.2, 0.5, 1],
            }}
            transition={{
              duration: 0.5,
              ease: "backOut",
            }}
            className={`text-7xl border-2 font-russo hidden z-20 py-24 shadow-md border-t-[40px] text-gray-900 w-[650px] tracking-wide leading-12 border-green-300 rounded-[40px] relative px-12 glassWhite`}
          >
            <div className="absolute top-[18px] flex left-4">
              <motion.div
                animate={{
                  scale: [0.6, 0.9, 1.2, 1.4, 1, 0.9, 0.8],
                  opacity: [1, 0.7, 0.5, 0.3, 0.1, 0.3, 0.5, 0.7, 1],
                }}
                transition={{
                  duration: 0.7,
                  ease: "linear",
                  repeat: Infinity,
                  repeatDelay: 0.5,
                  delay: 0,
                }}
                className="h-6 w-6 glassWhite  ml-4 rounded-full"
              ></motion.div>
              <motion.div
                animate={{
                  scale: [0.6, 0.9, 1.2, 1.4, 1, 0.9, 0.8],
                  opacity: [1, 0.7, 0.5, 0.3, 0.1, 0.3, 0.5, 0.7, 1],
                }}
                transition={{
                  duration: 0.7,
                  ease: "linear",
                  repeat: Infinity,
                  repeatDelay: 0.5,
                  delay: 0.5,
                }}
                className="h-6 w-6 glassWhite ml-4 rounded-full"
              ></motion.div>
              <motion.div
                animate={{
                  scale: [0.6, 0.9, 1.2, 1.4, 1, 0.9, 0.8],
                  opacity: [1, 0.7, 0.5, 0.3, 0.1, 0.3, 0.5, 0.7, 1],
                }}
                transition={{
                  duration: 0.7,
                  ease: "linear",
                  repeat: Infinity,
                  repeatDelay: 0.5,
                  delay: 1,
                }}
                className="h-6 w-6 glassWhite ml-4 rounded-full"
              ></motion.div>
            </div>
            <span className="text-gray-800">/› </span>Hi, i'm{" "}
            <span className="text-gray-900">Derin </span>
            and i'm a<span className="text-gray-900"> Frontend Engineer</span>
            <span>...</span>
            <span className="animate-ping">|</span>
          </motion.div>
          <motion.div className="w-[300px] h-[300px] ml-20 relative z-10 hidden">
            <div className="h-full w-8 bg-transparent hidden from-slate-500 items-center via-slate-300 flex flex-col to-slate-400 absolute right-4 -top-0 rounded-r-2xl ">
              <div className="mt-4 animate-pulse">😊</div>
              <div className="animate-pulse">🤦‍♂️</div>
              <div className="animate-pulse">😎</div>
            </div>
            <div className="text-xs absolute bottom-4 left-8">
              08-7-2021 W32 N42
            </div>
            <img
              src={Photo.src}
              onMouseOver={() => {
                setIsHovered(true);
              }}
              onMouseLeave={() => {
                setIsHovered(false);
              }}
              className="object-fit shadow-lg rounded-3xl border-[15px] border-gray-100 object-none bg-white duration-300 h-full"
            ></img>
          </motion.div>
          <motion.img
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            src={codePattern.src}
            className="absolute top-2 h-[220px] hidden"
            style={{ rotate: "8deg" }}
          ></motion.img>
          <motion.img
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            src={codePattern.src}
            className="absolute bottom-2 h-[220px] right-2 hidden"
            style={{ rotate: "2deg" }}
          ></motion.img>
        </div>
      </motion.div>
      <Stack></Stack>
      <Projects></Projects>
    </div>
  );
}
