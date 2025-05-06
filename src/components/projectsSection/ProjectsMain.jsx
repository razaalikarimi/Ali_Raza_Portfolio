import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";

const projects = [
  {
    name: "Real-Time Chat App",
    year: "Nov 2024",
    align: "right",
    image: "../../public/images/website-img-1.jpg",
    link: "https://snaptalk-8lkt.onrender.com/",
  },
  {
    name: "Rental Marketplace",
    year: "Aug 2024",
    align: "left",
    image: "../../public/images/website-img-2.webp",
    link: "https://staysphere-197f.onrender.com/",
  },
  {
    name: "Text-To-Speech-Converter",
    year: "Jan 2023",
    align: "right",
    image: "../../public/images/website-img-3.jpg",
    link: "https://github.com/razaalikarimi/Text-To-Speech-Converter",
  },
  {
    name: "weather-app",
    year: "May 2024",
    align: "left",
    image: "../../public/images/website-img-4.jpg",
    link: "https://github.com/razaalikarimi/weather-app",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
