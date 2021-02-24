import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

class HomeGarage extends React.Component {
  render() {
    return (
      <Container className="ba bw2 bg-black">
        <Row className="pa0 ba">
          <Col className="pa0">
            <p className="tc f4 moon-gray pa0">Dom</p>
          </Col>
        </Row>
        <Container className="pa1">
          <Row>
            <ul>
              <Link to="/home/packtrunk" style={{ textDecoration: "none" }}>
                <li className="moon-gray f5 link hover: dim pointer">
                  Zapakuj kufer do samochodu
                </li>
              </Link>
              <Link to="/home/car" style={{ textDecoration: "none" }}>
                <li className="moon-gray link hover: dim pointer">
                  Jedź do Hogwartu
                </li>
              </Link>
            </ul>
          </Row>
          <Link exact to="/home" style={{ textDecoration: "none" }}>
            <p className="moon-gray pa0 link hover: dim pointer">Powrót</p>
          </Link>
        </Container>
      </Container>
    );
  }
}

export default HomeGarage;
