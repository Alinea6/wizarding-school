import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import domain from "../../Config";

class HomeGarage extends React.Component {
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
            <p className="tc f4 moon-gray pa0">Garaż</p>
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
          <Link exact={+true} to="/home" style={{ textDecoration: "none" }}>
            <p className="moon-gray pa0 link hover: dim pointer">Powrót</p>
          </Link>
        </Container>
      </Container>
    );
  }
}

export default HomeGarage;
