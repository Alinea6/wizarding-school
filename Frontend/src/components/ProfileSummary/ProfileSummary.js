import React from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import domain from '../../Config';
import "./ProfileSummary.css";

class ProfileSummary extends React.Component {
  constructor() {
    super();
    this.state = {
      healthPercentage: 0,
      actionPercentage: 0,
      experiencePercentage: 0
    };
  }

  componentDidMount() {
    const tempdomain = domain()
    fetch(tempdomain + "stats", {
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
        this.props.loadUser(data);
        const healthPercentage = Math.round(
          (data.health_points / data.max_health_points) * 100
        );
        const actionPercentage = Math.round(
          (data.action_points / data.max_action_points) * 100
        );
        const experiencePercentage = Math.round(
          (data.experience_points / data.nextLevel)*100
        );
        this.setState({
          healthPercentage: healthPercentage,
          actionPercentage: actionPercentage,
          experiencePercentage: experiencePercentage
        });
      })
      .catch((error) => {
        "Error";
      });
  }

  render() {
    return (
      <Container className="ba bw2" style={{ display: "grid" }}>
        <Row className="pa0">
          <Col className=" pa0 ba bg-black">
            <p className="tc f4 light-silver link pointer">
              {this.props.user.login}
            </p>
          </Col>
        </Row>
        <Row className="pa0">
          <Col xs={6} sm={6} md={6} lg={6} xl={6} className="pa0 bg-black">
            <p className="pa0 f7 light-silver">{`Punkty Życia: ${this.props.user.health_points}/${this.props.user.max_health_points}`}</p>
          </Col>
          <Col xs={6} sm={6} md={6} lg={6} xl={6} className="pa0 bg-black">
            <p className="pa0 f7 light-silver">{`Dom: ${this.props.user.house}`}</p>
          </Col>
        </Row>
        <Row className="pa0">
          <Col xs={6} sm={6} md={6} lg={6} xl={6} className="pa0 bg-black">
            <ProgressBar
              striped
              variant="danger"
              now={this.state.healthPercentage}
            />
          </Col>
          <Col xs={6} sm={6} md={6} lg={6} xl={6} className="pa0 bg-black">
            <p className="pa0 f7 light-silver link pointer underline">
              {"Karta postaci"}
            </p>
          </Col>
        </Row>
        <Row className="row pa0">
          <Col xs={6} sm={6} md={6} lg={6} xl={6} className="pa0 bg-black">
            <p className="pa0 f7 light-silver">{`Punkty Akcji: ${this.props.user.action_points}/${this.props.user.max_action_points}`}</p>
          </Col>
          <Col xs={6} sm={6} md={6} lg={6} xl={6} className="pa0 bg-black">
            <p className="pa0 f7 light-silver">{`Pieniądze: ${this.props.user.pocket.g}g ${this.props.user.pocket.s}s ${this.props.user.pocket.k}k`}</p>
          </Col>
        </Row>
        <Row className="pa0">
          <Col xs={6} sm={6} md={6} lg={6} xl={6} className="pa0 bg-black">
            <ProgressBar
              striped
              variant="success"
              now={this.state.actionPercentage}
            />
          </Col>
          <Col xs={6} sm={6} md={6} lg={6} xl={6} className="pa0 bg-black">
            <p className="pa0 f7 light-silver">{`Skrytka: ${this.props.user.vault.g}g ${this.props.user.vault.s}s ${this.props.user.vault.k}k`}</p>
          </Col>
        </Row>
        <Row className="pa0">
          <Col xs={6} sm={6} md={6} lg={6} xl={6} className="pa0 bg-black">
            <p className="pa0 f7 light-silver">{`Doświadczenie: ${this.props.user.experience_points}/${this.props.user.nextLevel}`}</p>
          </Col>
          <Col xs={6} sm={6} md={6} lg={6} xl={6} className="pa0 bg-black">
            <p className="pa0 f7 light-silver">{`Poziom: ${this.props.user.level}`}</p>
          </Col>
        </Row>
        <Row className="pa0">
          <Col xs={6} sm={6} md={6} lg={6} xl={6} className="pa0 bg-black">
            <ProgressBar striped variant="warning" now={this.state.experiencePercentage} />
          </Col>
          <Col xs={6} sm={6} md={6} lg={6} xl={6} className="pa0 bg-black">
            <p className="pa0 f6 light-silver"></p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ProfileSummary;
