import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Navigation.css";

class Navigation extends React.Component {
  onLoggedOut = () => {
    fetch("http://localhost:3003/logout");
  };

  render() {
    return (
      <nav style={{ display: "grid" }}>
        <Container className="ba bw2">
          <Row className="pa0">
            <Col className="pa0 ba bg-black hover: dim">
              <p className="tc f4 light-silver link pointer">{"Lokacja"}</p>
            </Col>
            <Col className="pa0 ba bg-black hover: dim">
              <p className="tc f4 light-silver link pointer">{"Wielka Sala"}</p>
            </Col>
            <Col className="pa0 ba bg-black hover: dim">
              <p className="tc f4 light-silver link pointer">
                {"Pokój Wspólny"}
              </p>
            </Col>
            <Col className="pa0 ba bg-black hover: dim">
              <p className="tc f4 light-silver link pointer">{"Lekcje"}</p>
            </Col>
          </Row>
          <Row className="pa0">
            <Col className="pa0 ba bg-black hover: dim">
              <p className="tc f4 light-silver link pointer">{"Kufer"}</p>
            </Col>
            <Col className="pa0 ba bg-black hover: dim">
              <p className="tc f4 light-silver link pointer">{"Poczta"}</p>
            </Col>
            <Col className="pa0 ba bg-black hover: dim">
              <p className="tc f4 light-silver link pointer">{"Regulamin"}</p>
            </Col>
            <Col className="pa0 ba bg-black hover: dim">
              <p className="tc f4 light-silver link pointer">
                {"Izba Pamięci"}
              </p>
            </Col>
          </Row>
          <Row className="pa0">
            <Col className="pa0 ba bg-black hover: dim">
              <p className="tc f4 light-silver link pointer">{"Poradnik"}</p>
            </Col>
            {/* {<p>Prasa</p>} - Prorok Codzienny, Żongler
                            <p> Pokój Nauczycielski</p> - Opcje dla rang */}
            <Col className="pa0 ba bg-black hover: dim">
              <p className="tc f4 light-silver link pointer">{"Ustawienia"}</p>
            </Col>
            <Col
              onClick={this.onLoggedOut}
              className="pa0 ba bg-black hover: dim"
            >
              <p className="tc f4 light-silver link pointer">{"Wyloguj"}</p>
            </Col>
          </Row>
        </Container>
      </nav>
    );
  }
}

export default Navigation;
