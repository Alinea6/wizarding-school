import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import domain from "../../Config";

class Home extends React.Component {
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
            <Col>
              <Link to="/home/room" style={{ textDecoration: "none" }}>
                <p className="moon-gray link hover: dim pointer pa1">
                  Twój pokój
                </p>
              </Link>
            </Col>
            <Col>
              <Link to="/home/livingroom" style={{ textDecoration: "none" }}>
                <p className="moon-gray hover: dim pointer pa1">Salon</p>
              </Link>
            </Col>
            <Col>
              <Link to="/home/bathroom" style={{ textDecoration: "none" }}>
                <p className="moon-gray hover: dim pointer pa1">Łazienka</p>
              </Link>
            </Col>
          </Row>
          <Row>
            <Col>
              <Link to="/home/frontdoor" style={{ textDecoration: "none" }}>
                <p className="moon-gray hover: dim pointer pa1">
                  Drzwi wejściowe
                </p>
              </Link>
            </Col>
            <Col>
              <Link to="/home/garage" style={{ textDecoration: "none" }}>
                <p className="moon-gray hover: dim pointer pa1">Garaż</p>
              </Link>
            </Col>
            <Col>
              <Link to="/home/garden" style={{ textDecoration: "none" }}>
                <p className="moon-gray hover: dim pointer pa1">Ogród</p>
              </Link>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default Home;
