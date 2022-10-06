import { motion } from "framer-motion";
import storeImg from "../public/projects/porP2edit.jpg";
import Router from "next/router";
import Link from "next/link";
import crudImg from "../public/projects/Crud2Ed.png";

const ProjectIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="40"
    height="40"
    className="fill-green-300 bg-black p-2 rounded-full"
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M3 21a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2H20a1 1 0 0 1 1 1v3H4v9.996L6 11h16.5l-2.31 9.243a1 1 0 0 1-.97.757H3z" />
  </svg>
);

const githubIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="30"
    height="30"
    className="fill-green-400 hover:fill-green-300 duration-300 p-1  bg-opacity-25 rounded-lg border border-green-800 "
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z" />
  </svg>
);

const liveIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="30"
    height="30"
    className="fill-green-400 hover:fill-green-300 duration-300 p-1  bg-opacity-25 rounded-full border border-green-800 "
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M1.181 12C2.121 6.88 6.608 3 12 3c5.392 0 9.878 3.88 10.819 9-.94 5.12-5.427 9-10.819 9-5.392 0-9.878-3.88-10.819-9zM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0-2a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
  </svg>
);

const folder = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="40"
    height="40"
    className="bg-gray-600 p-2 rounded-full fill-gray-400"
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M22 10H12v7.382c0 1.409.632 2.734 1.705 3.618H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2H21a1 1 0 0 1 1 1v4zm-8 2h8v5.382c0 .897-.446 1.734-1.187 2.23L18 21.499l-2.813-1.885A2.685 2.685 0 0 1 14 17.383V12z" />
  </svg>
);

export default function Projects() {
  return (
    <div className="h-fit w-screen bg-gray-800 pt-20 pb-40" id="Projects">
      <div className="flex item-center justify-center">
        <div className="text-6xl text-black shadow-lg hidden border-b-4 border-green-300 p-5 bg-gray-100 w-fit rounded-3xl flex items-center justify-center">
          {ProjectIcon}
          <div className="h-[2px] w-4 bg-black -ml-1"></div>
          <p className="-mt-2">projects</p>
        </div>
        <div className="md:text-8xl text-5xl text-white flex items-center justify-center font-russo">
          <motion.p
            initial={{ opacity: 0, marginLeft: "-150px" }}
            whileInView={{ opacity: 1, marginLeft: "0px" }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="-mt-2"
          >
            Projects
          </motion.p>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-center flex-col">
          <motion.div className="mt-24 flex md:flex-row flex-col p-3 items-center justify-center w-screen">
            <div className="">
              <motion.p
                initial={{ opacity: 0, marginLeft: "-150px" }}
                whileInView={{ opacity: 1, marginLeft: "0px" }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
                className="md:text-7xl text-6xl mr-4 text-gray-900 font-russo border-l-2 border-gray-900 hidden"
              >
                E-Commerce App
              </motion.p>
              <motion.p className="md:text-7xl text-5xl text-gray-900 font-russo border-l-2 border-gray-900">
                E-Commerce App
              </motion.p>
              <div className=" mt-4 md:w-96 w-fit text-white">
                <p className="">
                  An app used for shoping and buying stuff the app is important
                  nasas jasmas sdmsmdmsd msdmsdmsdm
                </p>
                <div>
                  <div className="w-[340px] relative md:hidden overflow-hidden">
                    <motion.div
                      initial={{ opacity: 0, marginLeft: "-150px" }}
                      whileInView={{ opacity: 1, marginLeft: "0px" }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: false }}
                      className="w-full h-24 bg-gray-900 absolute bottom-0 left-0 rounded-bl-xl"
                    ></motion.div>
                    <motion.div
                      initial={{ opacity: 0, marginTop: "150px" }}
                      whileInView={{ opacity: 1, marginTop: "0px" }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: false }}
                      className="w-24 h-full bg-gray-800 absolute top-0 left-0 bg-opacity-75 rounded-bl-xl"
                    ></motion.div>
                    <img
                      src={storeImg.src}
                      className="ml-0  w-full border-green-800 border-l rounded-bl-xl"
                    ></img>
                  </div>
                  <div className="flex mt-2">
                    <div className="flex items-center text-sm text-gray-400">
                      <p className="mr-2 ">Github</p>
                      {githubIcon}
                    </div>
                    <div className="flex items-center  ml-2 text-sm text-gray-400 ">
                      <p className="mr-2 ">Live Site</p>
                      {liveIcon}
                    </div>
                  </div>
                  <div className="text-green-400 border-b w-fit border-green-800">
                    <Link href="/Ecommerce">Read More</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[450px] relative hidden md:block">
              <motion.div
                initial={{ opacity: 0, marginLeft: "-150px" }}
                whileInView={{ opacity: 1, marginLeft: "0px" }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
                className="w-full h-24 bg-gray-900 absolute bottom-0 left-4 rounded-bl-xl"
              ></motion.div>
              <motion.div
                initial={{ opacity: 0, marginTop: "150px" }}
                whileInView={{ opacity: 1, marginTop: "0px" }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
                className="w-24 h-full bg-gray-800 absolute top-0 left-4 bg-opacity-75 rounded-bl-xl"
              ></motion.div>
              <img
                src={storeImg.src}
                className="ml-4  w-full border-green-800 border-l rounded-bl-xl"
              ></img>
            </div>
          </motion.div>

          <motion.div className="mt-24 flex md:flex-row flex-col p-3 items-center  w-screen lg:justify-center relative">
            <div className="">
              <motion.p
                initial={{ opacity: 0, marginLeft: "-150px" }}
                whileInView={{ opacity: 1, marginLeft: "0px" }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
                className="md:text-7xl text-6xl mr-4 text-gray-900 font-russo border-l-2 border-gray-900 hidden"
              >
                Crud App
              </motion.p>
              <motion.p className="md:text-7xl text-5xl text-gray-900 font-russo border-l-2 border-gray-900 lg:w-[620px] md:w-[400px]">
                Crud App
              </motion.p>
              <div className=" mt-4 md:w-96 w-fit text-white">
                <p className="">
                  An app used for shoping and buying stuff the app is important
                  nasas jasmas sdmsmdmsd msdmsdmsdm
                </p>

                <div>
                  <div className="w-[340px] relative md:hidden overflow-hidden">
                    <motion.div
                      initial={{ opacity: 0, marginLeft: "-150px" }}
                      whileInView={{ opacity: 1, marginLeft: "0px" }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: false }}
                      className="w-full h-24 bg-gray-900 absolute bottom-0 left-0 rounded-bl-xl"
                    ></motion.div>
                    <motion.div
                      initial={{ opacity: 0, marginTop: "150px" }}
                      whileInView={{ opacity: 1, marginTop: "0px" }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: false }}
                      className="w-24 h-full bg-gray-800 absolute top-0 left-0 bg-opacity-75 rounded-bl-xl"
                    ></motion.div>
                    <img
                      src={crudImg.src}
                      className="ml-0  w-full border-green-800 border-l rounded-bl-xl"
                    ></img>
                  </div>
                  <div className="flex mt-2">
                    <div className="flex items-center text-sm text-gray-400">
                      <p className="mr-2 ">Github</p>
                      {githubIcon}
                    </div>
                    <div className="flex items-center  ml-2 text-sm text-gray-400 ">
                      <p className="mr-2 ">Live Site</p>
                      {liveIcon}
                    </div>
                  </div>
                  <div className="text-green-400 border-b w-fit border-green-800">
                    <Link href="/Crud">Read More</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute right-4 lg:relative lg:ml-6">
              {" "}
              <div className="w-[450px] relative hidden md:block ">
                <motion.div
                  initial={{ opacity: 0, marginLeft: "-150px" }}
                  whileInView={{ opacity: 1, marginLeft: "0px" }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: false }}
                  className="w-full h-24 bg-gray-900 absolute bottom-0 left-4 rounded-bl-xl"
                ></motion.div>
                <motion.div
                  initial={{ opacity: 0, marginTop: "150px" }}
                  whileInView={{ opacity: 1, marginTop: "0px" }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: false }}
                  className="w-24 h-full bg-gray-800 absolute top-0 left-4 bg-opacity-75 rounded-bl-xl"
                ></motion.div>
                <img
                  src={crudImg.src}
                  className="ml-4  w-full border-green-800 border-l rounded-bl-xl "
                ></img>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
