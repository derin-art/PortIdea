import { motion } from "framer-motion";

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
    width="24"
    height="24"
    className="fill-gray-400 hover:fill-green-300 duration-300"
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z" />
  </svg>
);

const liveIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    className="fill-gray-400 hover:fill-green-300 duration-300"
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
    <div className="h-screen w-screen bg-gray-800 pt-20">
      <div className="flex item-center justify-center">
        <div className="text-6xl text-black shadow-lg border-b-4 border-green-300 p-5 tracking-wider bg-gray-100 w-fit rounded-3xl flex items-center justify-center">
          {ProjectIcon}
          <div className="h-[2px] w-4 bg-black -ml-1"></div>
          <p className="-mt-2">projects</p>
        </div>
      </div>
      <div>
        <motion.div
          initial={{ opacity: 0, marginTop: "150px" }}
          whileInView={{ opacity: 1, marginTop: "32px" }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-10 flex items-center justify-center"
        >
          <div className="h-96 w-64 glassWhite rounded-3xl flex-col flex relative">
            <div className="h-64 w-full bg-gray-600 rounded-3xl absolute bottom-0">
              <div className="w-full h-full relative">
                <div className="flex absolute -top-3 flex items-center justify-center w-full">
                  {folder}
                </div>
                <button className="absolute bottom-2 left-3 flex items-center justify-center">
                  {githubIcon}
                  <p className="text-sm text-gray-300 ml-1">github</p>
                </button>
                <button className="absolute bottom-2 right-3 flex items-center justify-center">
                  <p className="text-sm text-gray-300 mr-1">Live</p>
                  {liveIcon}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
