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
            <h1>
              Hello,{" "}
              <span className="wave" role="img" aria-labelledby="wave">
                👋🏻
              </span>
            </h1>
            <h1>I Am Masum, a</h1>
            <h1>
              <span className="brand-text">
                <Typewriter
                  options={{
                    strings: [
                      "Web Developer",
                      "Web Designer",
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
              <Button href="https://github.com/chanatinart02">
                Github
                <span>
                  <FaGithub />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;
