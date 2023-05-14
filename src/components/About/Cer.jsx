import Carousel from "react-bootstrap/Carousel";
import { bootstrap, javascript, node, react } from "../../assets/index";
import "./About.css";

function Cer() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={bootstrap} alt="bootstrap" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={javascript} alt="javascript" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={node} alt="node" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={react} alt="react" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Cer;
