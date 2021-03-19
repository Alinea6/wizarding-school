import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import domain from "../../Config";

class London extends React.Component {
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
        if (data.zone_id === 1) {
          window.location.href = "http://localhost:3000/home";
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
            <p className="tc f4 moon-gray pa0">Londyn</p>
          </Col>
        </Row>
        <Container className="pa1">
          <Row>
            <ul>
              <Link to="/london/station" style={{ textDecoration: "none" }}>
                <li className="moon-gray f5 link hover: dim pointer">
                  Stacja King's Cross
                </li>
              </Link>
            </ul>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default London;
