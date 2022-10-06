import trianglePattern from "../public/Stack/trianglePattern.svg";
import { motion } from "framer-motion";

export default function Stack() {
  const svgSize = "30";

  const slantedArrow = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="34"
      height="34"
      className="fill-green-400 p-1 border border-green-800 rounded-lg"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M12.36 13.05L17.31 18H5.998V6.688l4.95 4.95 5.656-5.657 1.415 1.414z" />
    </svg>
  );

  const stackIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="40"
      height="40"
      className="mr-4 fill-green-400 bg-black rounded-full p-2"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M20.083 10.5l1.202.721a.5.5 0 0 1 0 .858L12 17.65l-9.285-5.571a.5.5 0 0 1 0-.858l1.202-.721L12 15.35l8.083-4.85zm0 4.7l1.202.721a.5.5 0 0 1 0 .858l-8.77 5.262a1 1 0 0 1-1.03 0l-8.77-5.262a.5.5 0 0 1 0-.858l1.202-.721L12 20.05l8.083-4.85zM12.514 1.309l8.771 5.262a.5.5 0 0 1 0 .858L12 13 2.715 7.429a.5.5 0 0 1 0-.858l8.77-5.262a1 1 0 0 1 1.03 0z" />
    </svg>
  );

  const reactIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={svgSize}
      height={svgSize}
      className="fill-green-400"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M14.448 16.24a21.877 21.877 0 0 1-1.747 2.175c1.672 1.623 3.228 2.383 4.09 1.884.864-.498.983-2.225.414-4.484-.853.19-1.78.334-2.757.425zm-1.31.087a27.512 27.512 0 0 1-2.276 0c.377.492.758.948 1.138 1.364.38-.416.76-.872 1.138-1.364zm5.04-7.894c2.665.764 4.405 2.034 4.405 3.567 0 1.533-1.74 2.803-4.405 3.567.67 2.69.441 4.832-.886 5.598-1.328.767-3.298-.105-5.292-2.03-1.994 1.925-3.964 2.797-5.292 2.03-1.327-.766-1.557-2.908-.886-5.598-2.665-.764-4.405-2.034-4.405-3.567 0-1.533 1.74-2.803 4.405-3.567-.67-2.69-.441-4.832.886-5.598 1.328-.767 3.298.105 5.292 2.03 1.994-1.925 3.964-2.797 5.292-2.03 1.327.766 1.557 2.908.886 5.598zm-.973-.248c.57-2.26.45-3.986-.413-4.484-.863-.499-2.419.261-4.09 1.884.591.643 1.179 1.374 1.746 2.175.978.09 1.904.234 2.757.425zm-10.41 7.63c-.57 2.26-.45 3.986.413 4.484.863.499 2.419-.261 4.09-1.884a21.877 21.877 0 0 1-1.746-2.175 21.877 21.877 0 0 1-2.757-.425zm4.067-8.142a27.512 27.512 0 0 1 2.276 0A20.523 20.523 0 0 0 12 6.31c-.38.416-.76.872-1.138 1.364zm-1.31.087A21.877 21.877 0 0 1 11.3 5.585C9.627 3.962 8.07 3.202 7.209 3.701c-.864.498-.983 2.225-.414 4.484.853-.19 1.78-.334 2.757-.425zm4.342 7.52A25.368 25.368 0 0 0 15.787 12a25.368 25.368 0 0 0-1.893-3.28 25.368 25.368 0 0 0-3.788 0A25.368 25.368 0 0 0 8.213 12a25.368 25.368 0 0 0 1.893 3.28 25.368 25.368 0 0 0 3.788 0zm1.284-.131c.615-.08 1.2-.183 1.75-.304a20.523 20.523 0 0 0-.612-1.667 27.512 27.512 0 0 1-1.138 1.97zM8.822 8.85c-.615.08-1.2.183-1.75.304.17.536.374 1.094.612 1.667a27.512 27.512 0 0 1 1.138-1.97zm-1.75 5.994c.55.121 1.135.223 1.75.304a27.512 27.512 0 0 1-1.138-1.97c-.238.572-.442 1.13-.612 1.666zm-.978-.245c.261-.834.6-1.708 1.01-2.6-.41-.892-.749-1.766-1.01-2.6-2.242.637-3.677 1.604-3.677 2.6s1.435 1.963 3.677 2.6zm10.834-5.445c-.55-.121-1.135-.223-1.75-.304a27.511 27.511 0 0 1 1.138 1.97c.238-.572.442-1.13.612-1.666zm.978.245c-.261.834-.6 1.708-1.01 2.6.41.892.749 1.766 1.01 2.6 2.242-.637 3.677-1.604 3.677-2.6s-1.435-1.963-3.677-2.6zM12 13.88a1.88 1.88 0 1 1 0-3.76 1.88 1.88 0 0 1 0 3.76z" />
    </svg>
  );

  const tailWindIcon = (
    <svg
      fill="none"
      height={svgSize}
      viewBox="0 0 15 15"
      width={svgSize}
      className="fill-green-400 stroke-green-400"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="m7.5 3c-1.86667 0-3.03333 1-3.5 2.99999.7-1 1.51667-1.37499 2.45-1.125.53252.14264.91314.55656 1.33443 1.01475.68631.74639 1.48063 1.61025 3.21557 1.61025 1.8667 0 3.0333-1 3.5-2.99999-.7.99999-1.5167 1.37499-2.45 1.12499-.5325-.14264-.9131-.55655-1.3344-1.01474-.6863-.74639-1.48066-1.61025-3.2156-1.61025zm-3.5 4.49999c-1.86667 0-3.033333.99999-3.5 3.00001.7-1.00002 1.51667-1.37502 2.45-1.12502.53252.14264.91314.55656 1.33443 1.01472.68631.7464 1.48063 1.6103 3.21557 1.6103 1.86667 0 3.0333-1 3.5-3.00002-.7 1-1.51667 1.37502-2.45 1.12502-.53252-.14266-.91314-.55657-1.33443-1.01477-.68631-.74638-1.48063-1.61024-3.21557-1.61024z"
        fillRule="evenodd"
        stroke="#4ade80"
        strokeLinejoin="round"
      />
    </svg>
  );

  const mongoIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 11 24"
      height={svgSize}
      width={svgSize}
      className="fill-green-400"
    >
      <path d="m10.562 9.518c-1.263-5.56-4.242-7.387-4.562-8.086-.262-.408-.508-.879-.711-1.372l-.022-.06c0 .019 0 .031-.005.049v.013.039.015.026.026.012s0 .009 0 .013v-.001.021c0 .003.001.007.001.011s0 .007-.001.011v.02.032l-.009.05v.01.006s0 .004 0 .006v.041h-.005v.016h-.036v.057h-.006v.046h-.024v.038.003s0 .002 0 .003v.01.005s0 .003 0 .005l-.023.017-.005.007v.022h-.005v.018h-.006v.045h-.006v.019h-.005v.018h-.005v.022h-.045v.015h-.005v.019h-.005v.015h-.006v.023h-.005v.006s0 0 0 0v.003s0 .002 0 .004c-.019.009-.035.021-.049.034-.003.003-.006.006-.009.01s0 0 0 0v.058h-.005v-.008h-.005v.01h-.005v.008h-.005v.022h-.061v.01h-.01v.02h-.03v.01h-.005v.006h-.01v.01h-.03v.006h-.005v.058h-.006v.01h-.005v.006h-.005v.006c-.004.006-.009.011-.014.016l-.012.01c-.014.01-.027.021-.039.032-.008.006-.015.011-.022.017l-.049.039-.074.062c-.057.047-.117.1-.186.159-.169.148-.37.338-.6.568l-.015.015c-2.234 2.374-3.637 5.553-3.729 9.059v.018c-.008.155-.013.336-.013.518 0 .22.007.439.02.656l-.001-.03v.009c.112 1.765.628 3.389 1.456 4.808l-.028-.052c.308.54.614.999.948 1.435l-.022-.03c.727.963 1.555 1.795 2.483 2.503l.031.023c.255.766.403 1.647.403 2.563 0 .076-.001.152-.003.227v-.011l.644.215c-.027-.303-.043-.655-.043-1.01 0-.533.035-1.058.102-1.572l-.006.061c.065-.257.186-.48.35-.664l-.001.002c.298-.213.559-.424.806-.651l-.006.006c.018-.019.028-.036.044-.054 2.227-2.09 3.614-5.051 3.614-8.337 0-.801-.082-1.582-.239-2.337l.013.074z" />
    </svg>
  );

  const nodeIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={svgSize}
      height={svgSize}
      className="fill-green-400"
      viewBox="0 0 512 512"
    >
      <g transform="translate(96 96)">
        <path d="M159.917 384a32.536 32.536 0 0 1-16.633-4.599l-52.985-32.44c-7.914-4.562-4.023-6.203-1.443-7.141 10.565-3.781 13.713-5.657 24.947-12.285 1.206-.667 2.747-.424 3.955.322l39.71 23.504c1.476.85 3.557.85 4.931 0l155.188-92.246c1.475-.877 2.415-2.646 2.415-4.441V67.869c0-1.85-.94-3.592-2.449-4.528l-155.12-94.672c-1.478-.894-3.421-.894-4.898 0L2.516 63.374C.972 64.277 0 66.072 0 67.869v186.805c0 1.813.972 3.513 2.481 4.389l39.929 23.972c23.61 12.204 37.59-.17 37.59-14.611V84.725c0-2.652 2.047-4.727 4.596-4.727h22.809c2.515 0 4.597 2.072 4.597 4.727v183.698c0 32.563-19.353 51.248-49.199 51.248-9.156 0-16.397 0-36.552-10.279l-41.584-24.781C-25.629 278.459-32 266.965-32 254.656V65.191c0-12.316 6.371-23.784 16.665-29.917L143.35-59.59c10.027-5.88 23.374-5.88 33.332 0l158.65 94.864C345.63 41.423 352 52.899 352 65.191v189.465c0 12.309-6.37 23.75-16.668 29.953l-158.65 94.774a32.52 32.52 0 0 1-16.698 4.599l-.067.018z" />
        <path d="M208.943 255.998c-64.61 0-84.006-31.61-84.006-59.271 0-2.629 2.048-4.729 4.562-4.729h20.521c2.282 0 4.227 1.7 4.562 4.016 3.084 21.602 16.748 31.15 54.324 31.15 33.399 0 47.091-10.346 47.091-28.684 0-10.592-3.463-18.424-55.407-23.697-43.427-4.441-70.288-14.373-70.288-50.295 0-33.135 26.996-52.49 72.234-52.49 46.128 0 76.462 14 79.173 50.829.102 1.337-.368 2.629-1.241 3.644-.871.965-2.078 1.527-3.353 1.527h-20.591c-2.146 0-4.024-1.562-4.459-3.713-4.401-16.953-16.97-23.402-49.563-23.402-36.486 0-40.746 12.753-40.746 22.607 0 11.963 5.031 15.441 54.294 22.172 48.761 6.663 71.933 16.117 71.933 51.552 0 35.781-28.808 58.783-79.075 58.783l.035.001z" />
      </g>
    </svg>
  );

  const javaScriptIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      className="fill-green-400"
    >
      <path
        fill="#4ade80"
        d="M4.698 3.419l2.057 23.073 9.231 2.563 9.256-2.566L27.301 3.42H4.697zm8.528 5.975l-.409 4.441 9.671.001-.069.76-.665 7.45-.042.478-5.804 1.609-5.796-1.609-.396-4.443h2.84l.202 2.257 3.154.85 3.156-.852.328-3.67-9.671-.001.069-.76.665-7.45.209-2.086h11.287l.131 1.598.403 4.453h-2.841l-.262-2.922-2.889-.174h-.515V9.32l-2.755.074z"
      />
    </svg>
  );

  const cssIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={svgSize}
      height={svgSize}
      className="fill-green-400"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M5 3l-.65 3.34h13.59L17.5 8.5H3.92l-.66 3.33h13.59l-.76 3.81-5.48 1.81-4.75-1.81.33-1.64H2.85l-.79 4 7.85 3 9.05-3 1.2-6.03.24-1.21L21.94 3z" />
    </svg>
  );

  const nextJsIcon = (
    <svg
      height={svgSize}
      viewBox="0 0 32 32"
      width={svgSize}
      className="fill-green-400"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m23.749 30.005c-.119.063-.109.083.005.025.037-.015.068-.036.095-.061 0-.021 0-.021-.1.036zm.24-.13c-.057.047-.057.047.011.016.036-.021.068-.041.068-.047 0-.027-.016-.021-.079.031zm.156-.094c-.057.047-.057.047.011.016.037-.021.068-.043.068-.048 0-.025-.016-.02-.079.032zm.158-.093c-.057.047-.057.047.009.015.037-.02.068-.041.068-.047 0-.025-.016-.02-.077.032zm.213-.141c-.109.073-.147.12-.047.068.067-.041.181-.131.161-.131-.043.016-.079.043-.115.063zm-9.563-29.536c-.073.005-.292.025-.484.041-4.548.412-8.803 2.86-11.5 6.631-1.491 2.067-2.459 4.468-2.824 6.989-.129.88-.145 1.14-.145 2.333 0 1.192.016 1.448.145 2.328.871 6.011 5.147 11.057 10.943 12.927 1.043.333 2.136.563 3.381.704.484.052 2.577.052 3.061 0 2.152-.24 3.969-.771 5.767-1.688.276-.14.328-.177.291-.208-.88-1.161-1.744-2.323-2.609-3.495l-2.557-3.453-3.203-4.745c-1.068-1.588-2.14-3.172-3.229-4.744-.011 0-.025 2.109-.031 4.681-.011 4.505-.011 4.688-.068 4.792-.057.125-.151.229-.276.287-.099.047-.188.057-.661.057h-.541l-.141-.088c-.088-.057-.161-.136-.208-.229l-.068-.141.005-6.271.011-6.271.099-.125c.063-.077.141-.14.229-.187.131-.063.183-.073.724-.073.635 0 .74.025.907.208 1.296 1.932 2.588 3.869 3.859 5.812 2.079 3.152 4.917 7.453 6.312 9.563l2.537 3.839.125-.083c1.219-.813 2.328-1.781 3.285-2.885 2.016-2.308 3.324-5.147 3.767-8.177.129-.88.145-1.141.145-2.333 0-1.193-.016-1.448-.145-2.328-.871-6.011-5.147-11.057-10.943-12.928-1.084-.343-2.199-.577-3.328-.697-.303-.031-2.371-.068-2.631-.041zm6.547 9.677c.151.072.265.208.317.364.027.084.032 1.823.027 5.74l-.011 5.624-.989-1.52-.995-1.521v-4.083c0-2.647.011-4.131.025-4.204.047-.167.161-.307.313-.395.124-.063.172-.068.667-.068.463 0 .541.005.645.063z" />
    </svg>
  );

  return (
    <div
      className="bg-gray-900 h-fit md:h-screen w-full relative pt-24 pb-8"
      id="Stack"
    >
      <div>
        <div className="flex justify-center hidden">
          <div className="md:text-6xl text-3xl text-black shadow-lg border-b-4 border-green-300 p-4 tracking-wider bg-gray-100 w-fit rounded-3xl flex items-center justify-center">
            {stackIcon}
            <div className="h-[2px] w-4 bg-black -ml-4"></div>
            <p className="-mt-2">stack</p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="md:text-8xl text-5xl text-white p-4 tracking-wider w-fit rounded-3xl flex items-center justify-center font-russo">
            <p className="-mt-2">Stack</p>
          </div>
        </div>
        <div className="ml-8 mr-8 flex justify-center flex-col md:flex-row">
          <motion.div
            initial={{ opacity: 0, marginTop: "100px" }}
            whileInView={{ opacity: 1, marginTop: "32px" }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="p-8 rounded-3xl mt-8 px-2 md:w-fit"
          >
            <p className="text-lg text-center mb-2 border-b border-green-300 text-white uppercase font-russo">
              What i started with
            </p>
            {[
              { icon: reactIcon, name: "React" },
              { icon: javaScriptIcon, name: " JavaScript" },
              { icon: cssIcon, name: "CSS" },
            ].map((item) => {
              return (
                <motion.div
                  initial={{ opacity: 0, marginLeft: "50px" }}
                  whileInView={{ opacity: 1, marginLeft: "0px" }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: false }}
                  key={item.name}
                  className="border-b border-gray-600"
                >
                  <div className="relative px-10 flex items-center justify-center py-2 w-fit">
                    <div className="glassWhite p-3 rounded-full">
                      {" "}
                      {item.icon}
                    </div>

                    <p className="ml-6 text-sm text-gray-400">{item.name}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, marginTop: "100px" }}
            whileInView={{ opacity: 1, marginTop: "32px" }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className=" p-8 rounded-3xl mt-8 md:ml-10 px-2"
          >
            <p className="text-lg text-center mb-2 border-b border-green-300 text-white font-russo uppercase">
              What I Learnt To build what i want
            </p>
            {[
              { icon: nextJsIcon, name: "Nextjs" },
              { icon: mongoIcon, name: "Mongo db" },
              { icon: nodeIcon, name: " Node js" },
              { icon: tailWindIcon, name: "Tailwind" },
            ].map((item) => {
              return (
                <motion.div
                  initial={{ opacity: 0, marginLeft: "50px" }}
                  whileInView={{ opacity: 1, marginLeft: "0px" }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: false }}
                  key={item.name}
                  className="border-b border-gray-600"
                >
                  <div className="relative px-10 flex items-center justify-center py-2 w-fit">
                    <div className="glassWhite p-3 rounded-full">
                      {" "}
                      {item.icon}
                    </div>

                    <p className="ml-6 text-sm text-gray-400">{item.name}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
        <div></div>
      </div>
      <motion.div className="absolute right-4 top-16 text-green-400 lg:w-96 w-48 p-2 border-b border-l rounded-bl-xl text-sm hidden md:block">
        I'm exicted to learn new things and apply them quickly. I've learnt more
        technologies like Github, Npm, FramerMotion etc. These are the ones I
        work with the most.
        {slantedArrow}
      </motion.div>
    </div>
  );
}
