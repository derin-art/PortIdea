export default function header() {
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

  return (
    <div className="glassWhite fixed w-full z-50">
      <div className="w-full h-8 font-grotesk p-6 relative pb-8">
        <div className="flex items-center h-full">
          <button className="text-gray-500 ml-8 border-green-300 rounded hover:border-green-500 duration-300">
            Projects
          </button>
          <button className="text-gray-500 ml-8 border-green-300 rounded border-b-4">
            Home
          </button>
          <button className="text-gray-500 ml-8 border-green-300 rounded">
            Stack
          </button>
          <button className="text-gray-500 ml-8 border-green-300 rounded">
            Portfolio
          </button>
        </div>
        <div className="absolute right-4 top-2 flex font-grotesk text-white font-bold ">
          <div className="flex p-2 text-sm rounded-lg bg-gray-800 px-4 ">
            {" "}
            <p className="mr-1">Email </p>
            {emailIIcon}
          </div>
          <div className="flex ml-6 bg-green-400 p-2 text-sm rounded-lg px-4">
            {" "}
            <p className="mr-1">Call</p> {phoneIcon}
          </div>
        </div>
      </div>
    </div>
  );
}
