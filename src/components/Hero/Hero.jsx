import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./Hero.css";

import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import Button from "react-bootstrap/Button";
import Typewriter from "typewriter-effect";

function Hero() {
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div id="particles-js">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <div style={{ height: "100vh", marginTop: "-56px" }}>
          <div className="home-content-container h-100 d-flex flex-column align-items-center justify-content-center">
            <h1 className="text-center">
              Hello,{" "}
              <span className="wave" role="img" aria-labelledby="wave">
                👋🏻
              </span>
            </h1>
            <h1 className="text-center">I&rsquo;m Chanatinart Kumpungton, a</h1>
            <h1>
              <span className="text-center">
                <Typewriter
                  options={{
                    strings: [
                      "Web Developer",
                      "MERN Stack Dev",
                      "React Developer",
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 25,
                    delay: 50,
                  }}
                />
              </span>
            </h1>
            <div className="social-links mt-">
              <Button
                variant="dark"
                size="lg"
                href="https://github.com/chanatinart02"
              >
                Github
                <span className="m-1">
                  <FaGithub />
                </span>
              </Button>
              <Button
                className="m-3"
                size="lg"
                href="https://www.linkedin.com/in/chanatinart/"
              >
                Linkedin
                <span className="m-1">
                  <FaLinkedin />
                </span>
              </Button>
            </div>
            <Button
              variant="light"
              className="m-2"
              size="lg"
              href="https://drive.google.com/file/d/11wpJK5LE0sEQqvhzYpICQ0rauaxkc78L/view?usp=sharing"
            >
              Download Resume
              <span className="m-1">
                <FaDownload />
              </span>
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;
