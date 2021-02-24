import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../Header/Header";
import HomeList from "../HomeList/HomeList";

class HomeGarageLayout extends React.Component {
  render() {
    return (
      <Container className="App pa1">
        <Row>
          <Header
            user={this.props.user}
            loadUser={this.props.loadUser}
            domain={this.props.domain}
          />
        </Row>
        <Row className="pa3">
          <Col>
            <HomeList domain={this.props.domain} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default HomeGarageLayout;
