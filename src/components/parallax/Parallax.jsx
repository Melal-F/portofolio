import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const textVariants = {
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };

  return (
    <div className='parallax scan-lines' ref={ref}>
      {/* Line numbers decoration */}
      <div className='code-decoration line-numbers'>
        {[...Array(6)].map((_, i) => (
          <span key={i}>{(i + 1).toString().padStart(2, "0")}</span>
        ))}
      </div>

      {/* Code snippets decoration */}
      <div className='code-decoration code-snippets'>
        <div className='comment'>{/* Welcome to my digital space */}</div>
        <div>
          <span className='keyword'>const</span> portfolio = {`{`}
        </div>
        <div>
          &nbsp;&nbsp;creator: <span className='string'>&quot;Melal&quot;</span>
          ,
        </div>
        <div>
          &nbsp;&nbsp;passion:{" "}
          <span className='string'>&quot;Building amazing software&quot;</span>
        </div>
        <div>{`}`};</div>
      </div>

      {/* Floating elements */}
      <div className='floating-elements'>
        <div className='element'>{"<code/>"}</div>
      </div>

      {/* Main content */}
      <div className='content-wrapper'>
        <motion.h1 style={{ y: yText }}>
          Hi! I&apos;m <span className='name neon-glow'>Melal</span>
          <span className='role'>Software Developer</span>
        </motion.h1>
        <motion.div
          className='subtitle'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Crafting elegant solutions through code
        </motion.div>
      </div>

      {/* Background elements */}
      <motion.div className='tech-icons' style={{ y: yBg }}>
        <div
          className='icon react'
          style={{ backgroundImage: 'url("/paralaxIcons/react.png")' }}
        ></div>
        <div
          className='icon javascript'
          style={{ backgroundImage: 'url("/paralaxIcons/javaScript.png")' }}
        ></div>
        <div
          className='icon typescript'
          style={{ backgroundImage: 'url("/paralaxIcons/typeScript.png")' }}
        ></div>
        <div
          className='icon python'
          style={{ backgroundImage: 'url("/paralaxIcons/python.png")' }}
        ></div>
        <div
          className='icon csharp'
          style={{ backgroundImage: 'url("/paralaxIcons/cSharp.png")' }}
        ></div>
        <div
          className='icon docker'
          style={{ backgroundImage: 'url("/paralaxIcons/docker.png")' }}
        ></div>
        <div
          className='icon html'
          style={{ backgroundImage: 'url("/paralaxIcons/html.png")' }}
        ></div>
        <div
          className='icon css'
          style={{ backgroundImage: 'url("/paralaxIcons/css.png")' }}
        ></div>
      </motion.div>
      <div className='stars' />
      <div className='scroll-indicator'>
        <span>Explore my journey</span>
      </div>
    </div>
  );
};

export default Parallax;
