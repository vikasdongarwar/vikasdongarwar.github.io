import React from "react";
import { motion } from "framer-motion";

const Card = ({ image, desc, id, name, git, link, tec }) => {
  return (
    <motion.div
      key={id}
      initial={"hidden"}
      whileInView={"visible"}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      className="max-w-xl h-[90%]  bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 my-8"
    >
      <div className="h-[35%]">
        <img
          className="w-full h-[11rem]  bg-white p-1rem rounded-t-lg "
          src={image}
          alt=""
        />
      </div>
      <div className="h-[60%] p-2 px-5 text-justify flex justify-between flex-col mt-5">
        <div>
          <a href="helo">
            <h5 className=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>
          </a>
          <p className=" text-sm text-gray-700 dark:text-gray-400">{desc}</p>
        </div>

        <div className="">
          <p className=" font-bold text-white mb-2">
            Tech Stacks:
            <span className="text-sm font-normal text-gray-700 dark:text-gray-400">
              {" "}
              {tec}
            </span>{" "}
          </p>

          <div className="flex justify-between">
            <a
              target="_blank"
              rel="noreferrer"
              href={git}
              className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              Repo
              <svg
                className="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            {/* -------------- */}

            <a
              target="_blank"
              rel="noreferrer"
              href={link}
              className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              Live Project
              <svg
                className="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
