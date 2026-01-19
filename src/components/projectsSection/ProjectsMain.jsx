// import { motion } from "framer-motion";
// import { fadeIn } from "../../framerMotion/variants";
// import ProjectsText from "./ProjectsText";
// import SingleProject from "./SingleProject";

// const projects = [
//   {
//     name: "Elite Courses",
//     year: "Oct 2025",
//     align: "right",
//     image: "../../public/images/website-img-1.jpg",
//     link: "https://elitecoursesf.onrender.com/",
//   },
//   {
//     name: "SnapTalk",
//     year: "Mar 2025",
//     align: "right",
//     image: "../../public/images/website-img-1.jpg",
//     link: "https://snaptalkbackend.onrender.com/login",
//   },
//   {
//     name: "Rental Marketplace",
//     year: "Dec 2024",
//     align: "left",
//     image: "../../public/images/website-img-2.webp",
//     link: "https://staysphere-197f.onrender.com/",
//   },
//   {
//     name: "Text-To-Speech-Converter",
//     year: "Jan 2023",
//     align: "right",
//     image: "../../public/images/website-img-3.jpg",
//     link: "https://github.com/razaalikarimi/Text-To-Speech-Converter",
//   },
//   {
//     name: "weather-app",
//     year: "May 2024",
//     align: "left",
//     image: "../../public/images/website-img-4.jpg",
//     link: "https://github.com/razaalikarimi/weather-app",
//   },
// ];

// const ProjectsMain = () => {
//   return (
//     <div id="projects" className="max-w-[1200px] mx-auto px-4">
//       <motion.div
//         variants={fadeIn("top", 0)}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: false, amount: 0.7 }}
//       >
//         <ProjectsText />
//       </motion.div>
//       <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
//         {projects.map((project, index) => {
//           return (
//             <SingleProject
//               key={index}
//               name={project.name}
//               year={project.year}
//               align={project.align}
//               image={project.image}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default ProjectsMain;
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";

const projects = [
  {
    name: "Elite Courses",
    year: "Oct 2025",
    align: "right",
    image: "/images/website-img-1.jpg",
    link: "https://elitecoursesf.onrender.com/",
  },
  {
    name: "SnapTalk",
    year: "Mar 2025",
    align: "left",
    image: "/images/website-img-1.jpg",
    link: "https://snaptalkbackend.onrender.com/login",
  },
  {
    name: "Rental Marketplace",
    year: "Dec 2024",
    align: "right",
    image: "/images/website-img-2.webp",
    link: "https://staysphere-197f.onrender.com/",
  },
  {
    name: "Novelty Art Press",
    year: "Dec 2025",
    align: "left",
    image: "/images/website-img-1.jpg",
    link: "https://novelty-art-press.vercel.app/",
  },
  {
    name: "Carbon Crunch",
    year: "Jan 2026",
    align: "right",
    image: "/images/website-img-1.jpg",
    link: "https://fault-tolerant-data-processing-syst.vercel.app/",
  },
  {
    name: "File Sharing Web App",
    year: "Nov 2025",
    align: "left",
    image: "/images/website-img-1.jpg",
    link: "https://file-sharing-app-wyiw.onrender.com/",
  },
  {
    name: "Text-To-Speech Converter",
    year: "Jan 2023",
    align: "right",
    image: "/images/website-img-3.jpg",
    link: "https://github.com/razaalikarimi/Text-To-Speech-Converter",
  },
  {
    name: "Weather App",
    year: "May 2024",
    align: "left",
    image: "/images/website-img-4.jpg",
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
        {projects.map((project) => (
          <SingleProject
            key={project.name}
            name={project.name}
            year={project.year}
            align={project.align}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsMain;
