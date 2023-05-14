import { Col, Row } from "react-bootstrap";

import {
  SiVisualstudiocode,
  SiPostman,
  SiFigma,
  SiVercel,
} from "react-icons/si";

function Tools() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p style={{ fontSize: "1.2rem" }}>Visual studio code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <p style={{ fontSize: "1.2rem" }}>Postman</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <p style={{ fontSize: "1.2rem" }}>Vercel</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma />
        <p style={{ fontSize: "1.2rem" }}>Figma</p>
      </Col>
    </Row>
  );
}

export default Tools;
