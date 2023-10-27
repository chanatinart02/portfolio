import Layout from "../Layout";

import Masonry from "react-masonry-css";
import "./Projects.css";
import { justFit, bootstrapWeb, tailwind } from "../../assets/index";

import { motion } from "framer-motion";
import ProjectItems from "./ProjectItems";

function Project() {
  const projects = [
    {
      img: justFit,
      title: "JustFit-App",
      description: "Activity tracking using MERN Stack.",
      technology: ["React", "Bootstrap", "Express", "MongoDB"],
      livesite: "https://just-fit-app.vercel.app/",
      github: "https://github.com/chanatinart02/JustFit-App",
    },
    {
      img: bootstrapWeb,
      title: "Bootstrap5-responsive-web",
      description: "Responsive page with Bootstrap5.",
      technology: ["HTML5", "Bootstrap5"],
      livesite: "https://chanatinart02.github.io/Bootstrap5-responsive-web/",
      github: "https://github.com/chanatinart02/Bootstrap5-responsive-web",
    },
    {
      img: tailwind,
      title: " Responsive Website with Tailwind",
      description:
        "Fully Responsive Website with Modern UI/UX in React JS with Tailwind",
      technology: ["React", "Tailwind"],
      livesite: "https://chanatinart02.github.io/Modern-UI-UX-website/",
      github: "https://github.com/chanatinart02/Modern-UI-UX-website",
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
