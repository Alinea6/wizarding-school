import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../Header/Header";
import Sorting from "../Sorting/Sorting";

class HomeSortingLayout extends React.Component {
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
            <Sorting
              login={this.props.login}
              fetchLink={this.props.fetchLink}
              domain={this.props.domain}
              loadTask={this.props.loadTask}
              taskDone={this.props.taskDone}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default HomeSortingLayout;
