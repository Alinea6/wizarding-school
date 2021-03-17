import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import domain from "../../Config";

class HomeCar extends React.Component {
  constructor() {
    super();
    this.state = {
      homeDone: false,
      text: "",
    };
  }

  componentDidMount() {
    const tempdomain = domain();
    fetch(tempdomain + "home/car", {
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
        this.setState({
          homeDone: data.homeDone,
          text: data.text,
        });
      })
      .catch((error) => {
        "Error";
      });
  }

  goToLondon = () => {
    const tempdomain = domain();
    fetch(tempdomain + "home/ride", {
      credentials: "include",
    }).then((data) => {
      if (data.text) {
        this.setState({
          homeDone: data.homeDone,
          text: data.text,
        });
      } else {
        this.props.changeLocation(data["zone_id"]);
      }
    });
  };

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
            <p className="tj moon-gray pa1">{this.state.text}</p>
            {this.state.homeDone ? (
              <ul>
                <li
                  className="moon-gray link hover: dim pointer pa1"
                  onClick={this.goToLondon}
                >
                  Wsiądź do samochodu
                </li>
              </ul>
            ) : (
              <p></p>
            )}
          </Row>
          <Link exact to="/home" style={{ textDecoration: "none" }}>
            <p className="moon-gray pa0 link hover: dim pointer">Powrót</p>
          </Link>
        </Container>
      </Container>
    );
  }
}

export default HomeCar;
