import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import domain from "../../Config";

class HomeRoom extends React.Component {
  componentDidMount() {
    const tempdomain = domain();
    fetch(tempdomain + "home", {
      credentials: "include",
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          window.location.href = "http://localhost:3000/login";
        }
      })
      .then((data) => {
        if (data.zone_id === 2) {
          window.location.href = "http://localhost:3000/london";
        } else if (data.zone_id === 3) {
          window.location.href = "http://localhost:3000/hogwart";
        }
      });
  }
  
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
              <Link to="/home/list" style={{ textDecoration: "none" }}>
                <li className="moon-gray f5 link hover: dim pointer">
                  Lista zadań
                </li>
              </Link>
              <Link to="/home/cleanroom" style={{ textDecoration: "none" }}>
                <li className="moon-gray link hover: dim pointer">
                  Posprzątaj pokój
                </li>
              </Link>
              <Link to="/home/trunk" style={{ textDecoration: "none" }}>
                <li className="moon-gray link hover: dim pointer">
                  Spakuj kufer
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

export default HomeRoom;
