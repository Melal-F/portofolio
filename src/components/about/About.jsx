import "./about.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const About = () => {
  return (
    <div className='about'>
      <div className='wrapper'>
        <motion.div
          className='textContainer'
          variants={textVariants}
          initial='initial'
          animate='animate'
        >
          <motion.h2 variants={textVariants}>About Me</motion.h2>
          <motion.p variants={textVariants}>
            🚀Hey there, I'm <motion.strong>Melal</motion.strong>, a
            passionate Software Developer in Phoenix, AZ, armed with a Master's
            in Data Analytics. My coding journey began with SQL and Python for
            data analysis and evolving into{" "}
            <motion.strong>Software Development</motion.strong> through building
            many cool projects. Outside the tech world, I find joy in learning
            languages and playing soccer. I'm excited to contribute to
            innovative projects and explore new horizons. 
            {/* Connect with me on{" "}
            <a
              href='https://www.linkedin.com/in/thang-ta-a68660240/'
              target='_blank'
              rel='noreferrer'
            >
              <img src='/linkedIn.png' alt='' />
            </a> */}
            explore my coding adventures on{" "}
            <a
              href='https://github.com/Melal-F'
              target='_blank'
              rel='noreferrer'
            >
              <img src='/github.png' alt='' />
            </a>
            . Let's code something extraordinary!!!
            <motion.div className='skillsContainer'>
              <motion.p>
                Here are a few <motion.strong>technologies</motion.strong> I've
                been working with recently:
              </motion.p>
              <motion.div className='skills'>
                <motion.ul>
                  <motion.li>JavaScript/TypeScript</motion.li>
                  <motion.li>NextJS/ReactJS/React Native</motion.li>
                  <motion.li>TailwindCSS/Bootstrap/MUI</motion.li>
                  <motion.li>Redux/State Management</motion.li>
                  <motion.li>HTML/CSS</motion.li>
                  <motion.li>C#/ASP.NET Core</motion.li>
                </motion.ul>
                <motion.ul>
                  <motion.li>NodeJS/ExpressJS/NestJS</motion.li>
                  <motion.li>Python/FastAPI</motion.li>
                  <motion.li>PostgreSQL/MongoDB/Redis</motion.li>
                  <motion.li>Docker/Docker Compose</motion.li>
                  <motion.li>AWS/Azure</motion.li>
                  <motion.li>Git/GitHub</motion.li>
                </motion.ul>
              </motion.div>
            </motion.div>
          </motion.p>
          <motion.div variants={textVariants} className='buttons'>
            <a href='/assignment_cv_portofolio.pdf' target='_blank' rel='noreferrer'>
              <span className='keyword'>View</span>
              <span className='param'>My</span>
              <span>Resume</span>
            </a>
            <a href='#Portfolio'>Check Out My Works</a>
            <a href='#Contact'>Contact Me</a>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className='slidingTextContainer'
        variants={sliderVariants}
        initial='initial'
        animate='animate'
      >
        MELAL F
      </motion.div>
      <div className='imageContainer'>
        <img src='/about.png' alt='' />
      </div>
    </div>
  );
};

export default About;
