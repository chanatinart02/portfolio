import Layout from "../Layout";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import avatar from "../../assets/Avatar-Maker.png";
import Skills from "./Skills";
import Tools from "./Tools";
import Cer from "./Cer";
import { resumeLink } from "../data";

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
            <div className="col-md-8 d-flex align-items-center">
              <p style={{ fontSize: "1.5rem" }} className="text-white">
                After three fulfilling years in Human Resources, I discovered my
                passion for coding. This journey began at The odin Project and
                continued through Generation Thailand’s Junior Software
                Developer Bootcamp. I've honed technical skills and learned
                agile collaboration. Now, I'm eager to bring my creativity,
                determination, and strong work ethic to your team, seeking new
                challenges and opportunities to innovate.
              </p>
            </div>
            <div className="col-md-4 d-flex justify-content-center flex-column">
              <img src={avatar} className="avatar" alt="Gift" />
              <Button
                variant="light"
                className="m-2"
                size="lg"
                href={resumeLink}
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
