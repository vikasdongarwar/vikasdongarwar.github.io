import React, { useContext } from "react";
import { techSktackF, techStack } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";
import heroBg from "../assets/vikasImage.png";
import GitHubCalendar from "react-github-calendar";
const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div id="about" className={darkMode === true ? "bg-white" : "bg-gray-900 "}>
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 md:mt-0 pt-24 pb-12">
        <h2
          className={
            darkMode
              ? "text-5xl font-bold px-4 md:px-0 text-center"
              : "text-5xl font-bold px-4 md:px-0 text-center text-white"
          }
        >
          About Me
        </h2>
        <div className="">
          <motion.div>
            <h4 className="mt-12 text-3xl font-semibold text-blue-500">
              A bit about me
            </h4>

            <div className="p-2 lg:flex lg:flex-row sm:flex-col lg:justify-between ">
              <div className="lg:w-3/5 ">
                <p
                  className={
                    darkMode
                      ? "mt-4 text-xl text-justify text-gray-500"
                      : "mt-4 text-xl text-justify text-white"
                  }
                >
                  I am a Mechanical Engineer and I am
                  currently pursuing Full Stack Web Development from Masai
                  School. I am comfortable in working with groups, and have
                  built different Websites as a Team. I take into consideration
                  the user experience while writing reusable and efficient code.
                  I passionately combine good design, technology. I aim get
                  exposure to the real world, understand various aspects and
                  implementations of myself to gain new vision and versions
                  which enhances my skills and abilities.
                </p>
              </div>

              <div style={{ width:'200px'}} className="lg:w-1/4 sm:w-1/4 md:w-1/4 m-auto mt-5 lg:mt-[-1rem] ">
                <img
                style={{borderRadius:"5px", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}
                  // className="rounded-full ..."
                  src={heroBg}
                  alt="Profile_Image"
                />
              </div>
            </div>
          </motion.div>

          <motion.div>
            <h4 className="mt-12 text-3xl font-semibold text-blue-500">
              Technologies and Tools
            </h4>
            <p
              className={
                darkMode
                  ? "mt-4 text-xl text-justify text-gray-500"
                  : "mt-4 text-xl text-justify text-white"
              }
            >
              Using a combination of cutting-edge technologies and reliable
              open-source software I build user-focused, performant websites for
              smartphones and desktops.
            </p>
          </motion.div>

          <h4 className="mt-12 text-2xl font-semibold text-blue-500">
            Frontend
          </h4>
          <motion.div className="flex flex-wrap mt-8 justify-between ">
            {techSktackF.map((el, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView={"visible"}
                variants={{
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      type: "spring",
                    },
                  },
                  hidden: { opacity: 1, y: 80 },
                }}
                className="py-2 px-4 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 cursor-pointer md:w-48 w-40"
              >
                <img alt="" src={el.link} className="w-12" />
                <h4 className="text-md ml-4">{el.name}</h4>
              </motion.div>
            ))}
          </motion.div>
          <h4 className="mt-12 text-2xl font-semibold text-blue-500">
            Backend
          </h4>
          <motion.div className="flex flex-wrap mt-8 justify-between ">
            {techStack.map((el, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView={"visible"}
                variants={{
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      type: "spring",
                    },
                  },
                  hidden: { opacity: 1, y: 80 },
                }}
                className="py-2 px-4 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 cursor-pointer md:w-48 w-40"
              >
                <img alt="" src={el.link} className="w-12" />
                <h4 className="text-md ml-4">{el.name}</h4>
              </motion.div>
            ))}
          </motion.div>

          <div>
            <h4 className="mt-12 text-3xl font-semibold text-blue-500">
              Days I Code
            </h4>
            <div className="w-[95%] m-auto  mt-5 lg:flex justify-center gap-10 ">
              <div
                className={
                  darkMode === true
                    ? "text-gray-900 lg:w-[60%]"
                    : "text-white lg:w-[60%]"
                }
              >
                <GitHubCalendar color="#3b82f6" username="vikasdongarwar" />
              </div>
              <div className=" lg:w-[30%] lg:mt-[1rem] sm:mt-[5rem] sm:m-auto">
                <img
                  src="https://github-readme-stats.vercel.app/api?username=vikasdongarwar&show_icons=true&hide=&count_private=true&title_color=0891b2&text_color=ffffff&icon_color=0891b2&bg_color=000000&hide_border=true&show_icons=true"
                  alt="Github stats"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

// https://camo.githubusercontent.com/855092ce9583dfa5a3854f6d495d6b4319584c87d51301dda39f276ca0edb36c/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d487375646565702673686f775f69636f6e733d74727565266c6f63616c653d656e

{/* <a href="http://www.github.com/vikasdongarwar"><img src="https://github-readme-stats.vercel.app/api?username=vikasdongarwar&show_icons=true&hide=&count_private=true&title_color=0891b2&text_color=ffffff&icon_color=0891b2&bg_color=000000&hide_border=true&show_icons=true" alt="vikasdongarwar's GitHub stats" /></a> */}