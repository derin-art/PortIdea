import { motion, AnimatePresence } from "framer-motion";
import Crud from "../public/projects/Store.jpeg";

export default function Ecommerce() {
  return (
    <motion.div className="bg-gray-900 md:h-fit w-full h-screen overflow-x-hidden pb-10">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        exit={{ opacity: 0 }}
        className="text-white  md:pt-32 pt-20 flex flex-col md:flex-row"
      >
        <div className="text-5xl text-green-500 font-russo md:hidden p-2">
          Ecommerce App
        </div>
        <div className="   flex flex-col ">
          {" "}
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            exit={{ opacity: 0 }}
            src={Crud.src}
            className="w-96  md:w-fit p-1 -ml-4 border"
          ></motion.img>
          <motion.div
            initial={{ opacity: 0, marginLeft: "-50px" }}
            whileInView={{ opacity: 1, marginLeft: "0px" }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="mt-8 hidden md:block"
          >
            <div className="ml-4 flex">
              <p className="text-white text-lg font-russo mr-4 text-green-400  rounded-full bg-green-900 h-fit px-[10px]">
                1
              </p>
              <motion.div className="text-base font-grotesk text-white  w-96">
                Right out of the gate from the Frontend Course I took I knew an
                Ecommerce site was a valuable capstone project. That's exactly
                what this project represents, my practical introduction to
                building my Api, working with routes, requests and the seamless
                data sharing that React Context provides.
              </motion.div>
            </div>
            <div className="ml-4 flex mt-4">
              <p className="text-white text-lg font-russo mr-4 text-green-400  rounded-full bg-green-900 h-fit px-[9px]">
                2
              </p>
              <motion.div className="text-base font-grotesk text-white  w-96">
                Right out of the gate from the Frontend Course I took I knew an
                Ecommerce site was a valuable capstone project. That's exactly
                what this project represents, my practical introduction to
                building my Api, working with routes, requests and the seamless
                data sharing that React Context provides.
              </motion.div>
            </div>
          </motion.div>
        </div>
        <div className="md:hidden">
          <motion.div className="text-sm font-grotesk text-white p-2">
            Right out of the gate from the Frontend Course I took I knew an
            Ecommerce site was a valuable capstone project. That's exactly what
            this project represents, my practical introduction to building my
            Api, working with routes, requests and the seamless data sharing
            that React Context provides.
          </motion.div>
          <motion.div
            initial={{ opacity: 0, marginTop: "-10px" }}
            whileInView={{ opacity: 1, marginTop: "20px" }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="mt-8  md:hidden"
          >
            <div className="ml-4 flex">
              <p className="text-white text-lg  font-russo mr-4 text-green-400  rounded-full bg-green-900 h-fit px-[10px]">
                1
              </p>
              <motion.div className="md:text-base text-sm font-grotesk text-white  w-96">
                Right out of the gate from the Frontend Course I took I knew an
                Ecommerce site was a valuable capstone project. That's exactly
                what this project represents, my practical introduction to
                building my Api, working with routes, requests and the seamless
                data sharing that React Context provides.
              </motion.div>
            </div>
            <div className="ml-4 flex mt-4">
              <p className="text-white text-lg font-russo mr-4 text-green-400  rounded-full bg-green-900 h-fit px-[9px]">
                2
              </p>
              <motion.div className="md:text-base text-sm font-grotesk text-white  w-96">
                Right out of the gate from the Frontend Course I took I knew an
                Ecommerce site was a valuable capstone project. That's exactly
                what this project represents, my practical introduction to
                building my Api, working with routes, requests and the seamless
                data sharing that React Context provides.
              </motion.div>
            </div>
          </motion.div>
        </div>
        <div className="text-5xl text-green-500 font-russo mt-24 ml-10 flex md:w-full w-fit flex-col hidden md:block">
          <div className="hidden md:block">Ecommerce App</div>
          <motion.div className="text-lg font-grotesk text-white">
            Right out of the gate from the Frontend Course I took I knew an
            Ecommerce site was a valuable capstone project. That's exactly what
            this project represents, my practical introduction to building my
            Api, working with routes, requests and the seamless data sharing
            that React Context provides.
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
