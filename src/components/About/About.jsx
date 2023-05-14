import Layout from "../Layout";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import avatar from "../../assets/Avatar-Maker.png";
import Skills from "./Skills";
import Tools from "./Tools";
import Cer from "./Cer";

function About() {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container pb-5">
          <div className="row">
            <h1 className="text-white text-center my-4">About Me</h1>
            <div className="col-md-8">
              <p style={{ fontSize: "1.2rem" }} className="text-white">
                Before discovering my passion for coding, I spent three
                fulfilling years working in Human Resources. This experience
                allowed me to develop strong communication skills, which I use
                to effectively collaborate with colleagues from diverse
                backgrounds. <br />
                <br />
                Since then, I have immersed myself in the world of programming,
                beginning my journey at freeCodeCamp and continuing to expand my
                knowledge and expertise through Generation Thailand&rsquo;s
                Junior Software Developer (Fullstack) Bootcamp. During this
                time, I have gained valuable technical skills and learned how to
                collaborate effectively with others using agile methodologies.
                <br />
                <br />
                Today, I remain dedicated to honing my technical and soft
                skills, driven by my unwavering passion for development. I am
                always seeking new challenges and opportunities to innovate and
                create value for your organization. With my creativity,
                determination, and strong work ethic, I am confident that I can
                make a meaningful contribution to your team.
              </p>
            </div>
            <div className="col-md-4 d-flex justify-content-center flex-column">
              <img src={avatar} className="avatar" alt="Gift" />
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
          <h1 className="text-white text-center">My skills</h1>
          <Skills />
          <h1 className="text-white text-center">Tools I use</h1>
          <Tools />
          <h1 className="text-white text-center">Certificates</h1>
          <Cer />
        </div>
      </motion.div>
    </Layout>
  );
}

export default About;
