import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        Hi, I'm Ali Raza Karimi, a passionate web developer with hands-on
        experience in full-stack development using the MERN stack (MongoDB,
        Express.js, React.js, Next.js, Node.js). I enjoy building real-world
        projects that solve problems and create value — like a real-time chat
        app, a rental marketplace, and a video lecture engagement tracker.{" "}
        <br /> I'm also exploring Data Analytics with tools like Power BI,
        Python, MySQL, and Excel, and I have a strong foundation in Java, MySQL,
        PostgreSQL, SQLite, Git, Docker, CI/CD and Data Structures & Algorithms,
        regularly practicing on platforms like LeetCode.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
