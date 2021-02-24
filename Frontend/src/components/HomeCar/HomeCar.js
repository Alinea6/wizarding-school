import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

class HomeCar extends React.Component {
  constructor() {
    super();
    this.state = {
      Gryff: 0,
      Rav: 0,
      Huff: 0,
      Slyth: 0,
    };
  }

  componentDidMount() {
    fetch(this.props.domain + "home/car", {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          Gryff: data.Gryff,
          Rav: data.Rav,
          Huff: data.Huff,
          Slyth: data.Slyth,
        });
      })
      .catch((error) => {
        "Error";
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
            <ul>
              <li className="moon-gray">{`Gryff: ${this.state.Gryff}`}</li>
              <li className="moon-gray">{`Rav: ${this.state.Rav}`}</li>
              <li className="moon-gray">{`Huff: ${this.state.Huff}`}</li>
              <li className="moon-gray">{`Slyth: ${this.state.Slyth}`}</li>
            </ul>
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
