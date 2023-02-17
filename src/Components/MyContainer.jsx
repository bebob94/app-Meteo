import { Col, Container, Row } from "react-bootstrap";
import MyCityCard from "./MyCityCard";
import "../App.css";
const MyContainer = () => {
  return (
    <Container>
      <Row>
        <Col xs={8} className="m-2 bigCard justify-content-center">
          <MyCityCard location={"Muravera"} />
        </Col>
        <Col>
          <Row className="justify-content-center">
            <Col xs={2} className=" normalCard">
              <MyCityCard location={"Milano"} />
            </Col>
            <Col xs={2} className="normalCard">
              <MyCityCard location={"London"} />
            </Col>
            <Col xs={2} className="normalCard">
              <MyCityCard location={"Dublin"} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default MyContainer;
