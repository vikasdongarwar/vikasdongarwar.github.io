import React, { useContext } from "react";
import Card from "../components/Card";
import { projectsData } from "../constants";
import { ThemeContext } from "../themeProvider";

const Projects = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      id="projects"
      className={darkMode ? "bg-white text-black" : "bg-gray-900 text-white"}
    >
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4  pt-24 pb-12">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center">
          Projects
        </h2>
        <h4 className="mt-16 text-3xl font-semibold text-blue-600">
          What I Built
        </h4>
        <div className="mt-8 w-fit lg:grid md:grid-cols-2 sm:grid-cols-1 m-auto lg:grid-cols-3 gap-4 items-stretch flex-wrap">
          {projectsData.map((elem, i) => (
            <Card
              key={i}
              image={elem.img}
              id={elem.id}
              desc={elem.desc}
              name={elem.name}
              git={elem.github}
              link={elem.link}
              tec={elem.tec}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
