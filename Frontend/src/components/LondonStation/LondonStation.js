import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import domain from "../../Config";

class LondonStation extends React.Component {
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

  goToHogwart = () => {
    console.log("found function")
    const tempdomain = domain();
    fetch(tempdomain + "london/train", {
      credentials: "include",
    })
      .then((response) => {
        console.log(response)
        if (response.ok) {
          return response.json();
        } else {
          window.location.href = "http://localhost:3000/login";
        }
      })
      .then((data) => {
        console.log(data)
        if (data.zone_id === 3) {
          if (data.student) {
            window.location.href = "http://localhost:3000/hogwart";
          } else {
            window.location.href = "http://localhost:3000/hogwart/sorting";
          }
        }
      });
  };

  render() {
    return (
      <Container className="ba bw2 bg-black">
        <Row className="pa0 ba">
          <Col className="pa0">
            <p className="tc f4 moon-gray pa0">Stacja King's Cross</p>
          </Col>
        </Row>
        <Container className="pa1">
          <Row>
            <ul>
              <li
                onClick={this.goToHogwart}
                className="moon-gray f5 link hover: dim pointer"
              >
                Jedź do Hogwartu z peronu 9 3/4
              </li>
            </ul>
          </Row>
          <Link exact={+true} to="/london" style={{ textDecoration: "none" }}>
            <p className="moon-gray pa0 link hover: dim pointer">Powrót</p>
          </Link>
        </Container>
      </Container>
    );
  }
}

export default LondonStation;
