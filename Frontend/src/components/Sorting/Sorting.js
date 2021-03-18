import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import domain from "../../Config";

class Sorting extends React.Component {
  constructor() {
    super();
    this.state = {
      introduction: "",
      choice1: "",
      choice2: "",
      choice3: "",
      choice4: "",
      taskDoneText: "",
      taskDone: false,
    };
  }

  componentDidMount() {
    const tempdomain = domain();
    fetch(tempdomain + this.props.fetchLink, {
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
        this.setState({
          introduction: data.introduction,
          choice1: data.choice1,
          choice2: data.choice2,
          choice3: data.choice3,
          choice4: data.choice4,
          taskDoneText: data.taskDoneText,
        });
        if (data.homeTasks[this.props.task]) {
          this.setState({ taskDone: true });
        }
      })
      .catch((error) => {
        "Loading error";
      });
  }

  onChoiceClick(choice) {
    const tempdomain = domain();
    fetch(tempdomain + this.props.fetchLink, {
      method: "put",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        choice: choice,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          window.location.href = "http://localhost:3000/login";
        }
      })
      .then((data) => {
        if (data.homeTasks[this.props.task]) {
          this.setState({ taskDone: true });
        }
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
        {!this.state.taskDone ? (
          <Container className="pa0">
            <Row className="pa1">
              <p className="tj pa1 moon-gray">{this.state.introduction}</p>
            </Row>
            <Row>
              <ul>
                <li
                  onClick={() => this.onChoiceClick("choice1")}
                  className="moon-gray link hover: dim pointer tj pa1"
                >
                  {this.state.choice1}
                </li>
                <li
                  onClick={() => this.onChoiceClick("choice2")}
                  className="moon-gray link hover: dim pointer tj pa1"
                >
                  {this.state.choice2}
                </li>
                <li
                  onClick={() => this.onChoiceClick("choice3")}
                  className="moon-gray link hover: dim pointer tj pa1"
                >
                  {this.state.choice3}
                </li>
                <li
                  onClick={() => this.onChoiceClick("choice4")}
                  className="moon-gray link hover: dim pointer tj pa1"
                >
                  {this.state.choice4}
                </li>
              </ul>
            </Row>
            <Link exact to="/home" style={{ textDecoration: "none" }}>
              <p className="moon-gray pa1 link hover: dim pointer">Powrót</p>
            </Link>
          </Container>
        ) : (
          <Container className="pa0">
            <Row className="pa1">
              <p className="tj pa2 moon-gray">{this.state.taskDoneText}</p>
            </Row>
            <Row style={{ justifyContent: "center" }}>
              <Link exact to="/home" style={{ textDecoration: "none" }}>
                <p className="moon-gray pa1 link hover: dim pointer">Powrót</p>
              </Link>
            </Row>
          </Container>
        )}
      </Container>
    );
  }
}

export default Sorting;
