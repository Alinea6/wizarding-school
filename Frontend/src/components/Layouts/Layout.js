import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../Header/Header";

class Layout extends React.Component {
  render() {
    return (
      <Container className="App pa1">
        <Row>
          <Header
            user={this.props.user}
            loadUser={this.props.loadUser}
          />
        </Row>
        <Row className="pa3">
          <Col>{this.props.children}</Col>
        </Row>
      </Container>
    );
  }
}

export default Layout;
