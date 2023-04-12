import React, { useContext } from "react";
import heroBg from "../assets/webdev.svg";
import { TypeAnimation } from "react-type-animation";
import { contactLinks } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";
import cloud from "../assets/cloudBg2.jpg";
import cloudDark from "../assets/cloudDark2.jpg";
import trans from "../assets/trans1.png";
import vikas from "./VikasDongarwar.pdf";
const Home = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      <div
        style={
          darkMode
            ? { backgroundImage: `url('${cloud}')`, backgroundSize: "cover" }
            : { backgroundImage: `url('${cloudDark}')`, backgroundSize: "cover" }
        }
      >
        <main
          className=" mx-auto max-w-7xl px-4 sm:px-6 py-20 md:mt-0 lg:px-8 flex flex-col justify-center md:flex-row items-center md:justify-between h-screen"
          id="/"
        >
          <div className="  sm:text-center lg:text-left">
            <h1 className="  text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <motion.span
                className={darkMode ? "block text-black" : " text-white"}
              >
                Hi, I am Vikas
              </motion.span>
              <span className=" block text-violet-500 z-0 lg:inline">
                <TypeAnimation
                  sequence={[
                    "Front End Developer",
                    1000,
                    "MERN Stack Developer",
                    1000,
                  ]}
                  wrapper="div"
                  cursor={true}
                  repeat={Infinity}
                  style={{ fontSize: ".8em" }}
                />
              </span>
            </h1>
            <p
              className={
                darkMode
                  ? "mt-3 text-base text-black sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                  : "mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
              }
            >
              I am pursuing Full Stack Web-development from Masai School
            </p>
            <div className="flex md:justify-start ">
              {contactLinks.map((el, i) => (
                <a
                  key={i}
                  target="_blank"
                  rel="noreferrer"
                  href={el.link}
                  className="mr-5 cursor-pointer mt-8 hover:scale-125"
                >
                  <img alt="" src={el.url} />
                  {/* <p className="text-md mt-2 hover:hidden">{el.name}</p> */}
                </a>
              ))}
            </div>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="mt-3 sm:mt-0 cursor-pointer w-1/2">
                <a
                  href={vikas} //"https://drive.google.com/file/d/1pNVdYWb4dIqKoryYfiHFsypd4Zst5zwp/view?usp=sharing"
                  download="./VikasDongarwar.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-violet-500 hover:bg-blue-500 md:py-4 md:text-lg md:px-10"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
          {/* <div className="  m-auto"> */}
          <motion.img
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
            // src={heroBg}
            alt=""
            className="md:w-3/6 hidden  sm:block m-auto "
          />
          {/* </div> */}
        </main>
      </div>
    </>
  );
};

export default Home;
