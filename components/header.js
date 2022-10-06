import react, { useState } from "react";
import { useRouter } from "next/dist/client/router";

export default function header() {
  const [headerColor, setHeaderColor] = useState("");
  const emailIIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="20"
      height="20"
      className="fill-white"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M22 20.007a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V19h18V7.3l-8 7.2-10-9V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v16.007zM4.434 5L12 11.81 19.566 5H4.434zM0 15h8v2H0v-2zm0-5h5v2H0v-2z" />
    </svg>
  );

  const emailAltIIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="25"
      height="25"
      className="fill-green-400 p-1 border rounded-full bg-green-400 bg-opacity-50 border-green-800"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M22 20.007a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V19h18V7.3l-8 7.2-10-9V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v16.007zM4.434 5L12 11.81 19.566 5H4.434zM0 15h8v2H0v-2zm0-5h5v2H0v-2z" />
    </svg>
  );

  const phoneIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="20"
      height="20"
      className="fill-white"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M21 16.42v3.536a1 1 0 0 1-.93.998c-.437.03-.794.046-1.07.046-8.837 0-16-7.163-16-16 0-.276.015-.633.046-1.07A1 1 0 0 1 4.044 3H7.58a.5.5 0 0 1 .498.45c.023.23.044.413.064.552A13.901 13.901 0 0 0 9.35 8.003c.095.2.033.439-.147.567l-2.158 1.542a13.047 13.047 0 0 0 6.844 6.844l1.54-2.154a.462.462 0 0 1 .573-.149 13.901 13.901 0 0 0 4 1.205c.139.02.322.042.55.064a.5.5 0 0 1 .449.498z" />
    </svg>
  );
  const phoneAltIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      className="fill-green-400 p-1 border rounded-full bg-green-400 bg-opacity-50 border-green-800"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M21 16.42v3.536a1 1 0 0 1-.93.998c-.437.03-.794.046-1.07.046-8.837 0-16-7.163-16-16 0-.276.015-.633.046-1.07A1 1 0 0 1 4.044 3H7.58a.5.5 0 0 1 .498.45c.023.23.044.413.064.552A13.901 13.901 0 0 0 9.35 8.003c.095.2.033.439-.147.567l-2.158 1.542a13.047 13.047 0 0 0 6.844 6.844l1.54-2.154a.462.462 0 0 1 .573-.149 13.901 13.901 0 0 0 4 1.205c.139.02.322.042.55.064a.5.5 0 0 1 .449.498z" />
    </svg>
  );

  const listenScrollEvent = (e) => {
    if (window.scrollY > 400) {
      setHeaderColor("red");
    } else {
      setHeaderColor("black");
    }
  };

  react.useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  }, []);

  const router = useRouter();

  return (
    <div className="glassWhite fixed w-full z-50 ">
      <div className="w-full h-8 font-grotesk p-6 pl-2 relative pb-8">
        <div className="flex items-center h-full text-xs md:text-base">
          <button className="text-gray-400 md:ml-8 ml-1 border-green-300 rounded hover:border-green-500 duration-300">
            <a href="/#Projects">Projects</a>
          </button>
          <button className="text-gray-400 md:ml-8 ml-3 border-green-400 rounded">
            Home
          </button>
          <button className="text-gray-400 md:ml-8 ml-3 border-green-300 rounded">
            <a href="/#Stack">Stack</a>
          </button>
          <button className="text-gray-400 md:ml-8 ml-3 border-green-300 rounded">
            <a href="/#Portfolio">Portfolio</a>
          </button>
        </div>
        <div className="absolute right-4 top-2 flex font-grotesk text-white font-bold hidden md:flex">
          <div className="flex p-2 md:text-sm text-xs rounded-lg bg-gray-800 md:px-4 items-center ">
            {" "}
            <p className="mr-1">Email </p>
            {emailIIcon}
          </div>
          <div className="flex md:ml-6 ml-2 bg-green-400 p-2 md:text-sm text-xs rounded-lg md:px-4 items-center">
            {" "}
            <p className="mr-1">Call</p> {phoneIcon}
          </div>
        </div>
        <div className="absolute right-2 top-2 flex font-grotesk text-white text-xs md:hidden">
          <div className="p-1 flex items-center">
            {emailAltIIcon} <p className="ml-1">Email</p>{" "}
          </div>
          <div className="p-1 flex items-center">
            {phoneAltIcon}
            <p className="ml-1">Call</p>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
