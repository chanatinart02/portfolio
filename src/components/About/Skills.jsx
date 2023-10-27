import { Col, Row } from "react-bootstrap";
import "./About.css";

import {
  DiJavascript1,
  DiReact,
  DiCss3,
  DiNodejs,
  DiMongodb,
  DiHtml5,
  DiGit,
} from "react-icons/di";
import { SiBootstrap, SiTailwindcss, SiSass, SiExpress } from "react-icons/si";

function Skills() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p style={{ fontSize: "1.2rem" }}>JavaScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
        <p style={{ fontSize: "1.2rem" }}>HTML5</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
        <p style={{ fontSize: "1.2rem" }}>CSS3</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p style={{ fontSize: "1.2rem" }}>React.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <p style={{ fontSize: "1.2rem" }}>Node.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
        <p style={{ fontSize: "1.2rem" }}>Express.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <p style={{ fontSize: "1.2rem" }}>MongoDB</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <p style={{ fontSize: "1.2rem" }}>Git</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap />
        <p style={{ fontSize: "1.2rem" }}>Bootstrap</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
        <p style={{ fontSize: "1.2rem" }}>Tailwind</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSass />
        <p style={{ fontSize: "1.2rem" }}>SASS</p>
      </Col>
    </Row>
  );
}

export default Skills;
