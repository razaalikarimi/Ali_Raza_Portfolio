import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
import { fadeIn } from "../../framerMotion/variants";
import SingleExperience from "./SingleExperience";

const experiences = [
  {
    job: "Front-End Developer",
    company: "KVL Business Solutions",
    date: "Feb 2025 - Present",
    responsibilities: [
"Developing full-stack MERN applications with AI integration,",
"Creating high-performance RESTful APIs using Node.js, Express.js, and FastAPI,",
"Automating business processes to enhance user experience and efficiency.",
    ],
  },
  {
    job: "Full-Stack Developer",
    company: "National Institute of Electronics & Information Technology",
    date: "Dec 2024 - Jan 2025",
    responsibilities: [
"Designed responsive UIs using HTML, CSS, and JavaScript for better usability.",
"Led full-stack development and collaboration to deliver fast, reliable web apps.",
    ],
  },
  {
    job: "Web Developer Intern ",
    company: "codeSoft",
    date: "Nov 2023 - Apr 2024",
    responsibilities: [
"Guiding students in building real-world web projects.",
"Explaining core concepts of MERN stack development.",
"Supporting learners in debugging and improving their code.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
