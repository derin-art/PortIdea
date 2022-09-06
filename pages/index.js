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

        <div className="flex items-center justify-center text-purple-900 mt-40 p-2">
          <motion.div
            initial={{ translateX: -150, opacity: 0 }}
            animate={{
              translateX: [-150, 0, 10, 0],
              opacity: [0.2, 0.5, 1],
            }}
            transition={{
              duration: 0.5,
              ease: "backOut",
            }}
            className={`text-5xl border-2 bg-black z-20 py-24 shadow-md border-t-[40px] text-slate-200 w-[650px] tracking-wide leading-12 border-green-300 rounded-3xl relative p-12 glassWhite`}
          >
            <div className="absolute -top-[5px] hidden h-8 bg-gradient-to-r from-green-500 via-green-300 to-green-400  w-full left-0 rounded-t-3xl flex items-center">
              <div className="h-4 w-4 bg-green-200 ml-4 rounded-full animate-pulse"></div>
              <div className="h-4 w-4 bg-green-200 ml-4 rounded-full animate-pulse "></div>
              <div className="h-4 w-4 bg-green-200 ml-4 rounded-full animate-pulse"></div>
            </div>
            <div className="absolute top-[18px] flex left-4">
              <motion.div
                animate={{
                  scale: [0.6, 0.9, 1.2, 1.4, 1, 0.9, 0.8],
                  opacity: [1, 0.7, 0.5, 0.3, 0.1, 0.3, 0.5, 0.7, 1],
                }}
                transition={{
                  duration: 0.5,
                  ease: "linear",
                  repeat: Infinity,
                  repeatDelay: 1,
                  delay: 1,
                }}
                className="h-6 w-6 glassWhite ml-4 rounded-full"
              ></motion.div>
              <motion.div
                animate={{
                  scale: [0.6, 0.9, 1.2, 1.4, 1, 0.9, 0.8],
                  opacity: [1, 0.7, 0.5, 0.3, 0.1, 0.3, 0.5, 0.7, 1],
                }}
                transition={{
                  duration: 0.5,
                  ease: "linear",
                  repeat: Infinity,
                  repeatDelay: 1,
                  delay: 1.5,
                }}
                className="h-6 w-6 glassWhite ml-4 rounded-full"
              ></motion.div>
              <motion.div
                animate={{
                  scale: [0.6, 0.9, 1.2, 1.4, 1, 0.9, 0.8],
                  opacity: [1, 0.7, 0.5, 0.3, 0.1, 0.3, 0.5, 0.7, 1],
                }}
                transition={{
                  duration: 0.5,
                  ease: "linear",
                  repeat: Infinity,
                  repeatDelay: 1,
                  delay: 2,
                }}
                className="h-6 w-6 glassWhite ml-4 rounded-full"
              ></motion.div>
            </div>
            /› Hi, i'm <span className="text-green-300">Derin </span>and i'm a
            <span className="text-green-300"> Frontend Engineer</span>
            <span>...</span>
            <span className="animate-ping">|</span>
          </motion.div>
          <motion.div className="w-[300px] h-[300px] ml-20 relative z-10">
            <div className="h-full w-8 bg-transparent from-slate-500 items-center via-slate-300 flex flex-col to-slate-400 absolute right-4 -top-0 rounded-r-2xl ">
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
              className="object-fit shadow-lg rounded-3xl border-[15px] border-gray-100 object-none bg-slate-200 duration-300 h-full"
            ></img>
          </motion.div>
          <motion.img
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            src={codePattern.src}
            className="absolute top-2 h-[220px]"
            style={{ rotate: "8deg" }}
          ></motion.img>
          <motion.img
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            src={codePattern.src}
            className="absolute bottom-2 h-[220px] right-2"
            style={{ rotate: "2deg" }}
          ></motion.img>
        </div>
      </motion.div>
      <Stack></Stack>
      <Projects></Projects>
    </div>
  );
}
