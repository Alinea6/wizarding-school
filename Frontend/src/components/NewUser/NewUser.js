import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import domain from '../../Config';

class NewUser extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
    };
  }

  componentDidMount() {
    const tempdomain = domain()
    fetch(tempdomain + "new", {
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
          text: data.text,
        });
      })
      .catch((error) => {
        "Loading error";
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
            <p className="tj pa1 moon-gray">{this.state.text}</p>
          </Row>
          <Link exact to="/home" style={{ textDecoration: "none" }}>
            <p className="moon-gray pa0 link hover: dim pointer">Kontynuuj</p>
          </Link>
        </Container>
      </Container>
    );
  }
}

export default NewUser;
