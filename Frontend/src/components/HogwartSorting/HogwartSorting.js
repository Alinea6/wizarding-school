import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import domain from "../../Config";

class HogwartSorting extends React.Component {
  constructor() {
    super();
    this.state = {
      introduction: "",
      beforeCeremony: true,
      result: "",
      resultText: "",
      hatstall: false,
      hatstallText: "",
      options: [],
    };
  }

  componentDidMount() {
    const tempdomain = domain();
    fetch(tempdomain + "hogwart/beforesorting", {
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
        } else if (data.zone_id === 1) {
          window.location.href = "http://localhost:3000/home";
        }
        this.setState({
          introduction: data.introduction,
        });
      });
  }

  onSortingCeremony = () => {
    const tempdomain = domain();
    fetch(tempdomain + "hogwart/sorting", {
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
        if (data.result) {
          this.setState({
            beforeCeremony: false,
            result: data.result,
            resultText: data.resultText,
            introduction: "",
          });
        } else {
          this.setState({
            beforeCeremony: false,
            hatstall: data.hatstall,
            hatstallText: data.hatstallText,
            options: data.options,
            introduction: "",
          });
        }
      });
  };

  onHatstall = (option) => {
    const tempdomain = domain();
    fetch(tempdomain + "hogwart/sorting", {
      method: "put",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        option: option,
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
        if (data.result) {
          this.setState({
            result: data.result,
            resultText: data.resultText,
            hatstall: false,
            hatstallText: "",
          });
        }
      });
  };

  render() {
    return (
      <Container className="ba bw2 bg-black">
        <Row className="pa0 ba">
          <Col className="pa0">
            <p className="tc f4 moon-gray pa0">Ceremonia Przydziału</p>
          </Col>
        </Row>
        <Container className="pa1">
          <Row>
            {this.state.beforeCeremony ? (
              <div>
                <p className="tj moon-gray pa1">{this.state.introduction}</p>
                <ul>
                  <li
                    className="moon-gray f5 link hover: dim pointer"
                    onClick={this.onSortingCeremony}
                  >
                    Przystąp do Ceremonii Przydziału
                  </li>
                </ul>
              </div>
            ) : this.state.result ? (
              <div>
                <p className="tj moon-gray pa1">{this.state.resultText}</p>
                <ul>
                  <Link
                    exact={+true}
                    to="/hogwart"
                    style={{ textDecoration: "none" }}
                  >
                    <li className="moon-gray f5 link hover: dim pointer">
                      Usiądź przy stole swojego domu
                    </li>
                  </Link>
                </ul>
              </div>
            ) : (
              <div>
                <p className="tj moon-gray pa1">{this.state.hatstallText}</p>
                <ul>
                  {this.state.options.map((option, i) => (
                    <li
                      className="moon-gray f5 link hover: dim pointer"
                      key={i}
                      onClick={() => this.onHatstall(option)}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </Row>
        </Container>
      </Container>
    );
  }
}

export default HogwartSorting;
