import Layout from "../Layout";

import Masonry from "react-masonry-css";
import "./Projects.css";
import { colmar, findHat } from "../../assets/index";

import { motion } from "framer-motion";
import ProjectItems from "./ProjectItems";

function Project() {
  const projects = [
    {
      img: colmar,
      title: "Colmar webpage",
      description: "Landing page Using HTML, CSS, and GitHub pages.",
      technology: ["HTML", "CSS"],
      livesite: "https://chanatinart02.github.io/Colmar-Webpage/",
      github: "https://github.com/chanatinart02/Colmar-Webpage",
    },
    {
      img: findHat,
      title: "Find my hat",
      description: "Command line game.  ",
      technology: ["JAVASCRIPT"],
      livesite: "https://replit.com/@chanatinart02/JSD4-Find-Your-Hat",
      github: "",
    },
  ];
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 2,
    500: 1,
  };
  return (
    <Layout>
      {" "}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container">
          <h1 className="text-white text-center my-4">My Projects</h1>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {projects.map((project) => (
              <ProjectItems project={project}></ProjectItems>
            ))}
          </Masonry>
        </div>
      </motion.div>
    </Layout>
  );
}

export default Project;
