import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import domain from "../../Config";

class HogwartSorting extends React.Component {
  constructor(){
    super();
    this.state = {
      introduction: '',
      beforeCeremony: true,
      result: '',
      resultText: '',
      hatstall: false,
      hatstallText: '',
      options: 0,
      options: {}
    }
  }
  
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
            {this.state.beforeCeremony ?(
              <div>
              <p className="tj moon-gray pa1">{this.state.introduction}</p>
              <ul>
              <li
                className="moon-gray f5 link hover: dim pointer"
              >
                Przystąp do Ceremonii Przydziału
              </li>
            </ul>
            </div>
            ) :(
              this.state.result ?(
                <div>
              <p className="tj moon-gray pa1">{this.state.resultText}</p>
              <ul>
              <li
                className="moon-gray f5 link hover: dim pointer"
              >
                Usiądź przy stole swojego domu
              </li>
            </ul>
            </div>
              ) : (
                <div>
              <p className="tj moon-gray pa1">{this.state.hatstallText}</p>
              <ul>
              {this.state.options.map((option, i) => <li
                className="moon-gray f5 link hover: dim pointer"
                key={i}
              >
                {option}
              </li>)
              }
            </ul>
            </div>
              )
            )}
          </Row>
        </Container>
      </Container>
    );
  }
}

export default HogwartSorting;
