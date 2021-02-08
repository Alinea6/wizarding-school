import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Header from '../Header/Header';
import HomeGarage from '../HomeGarage/HomeGarage';

class HomeGarageLayout extends React.Component {
    render() {
        return (
            <Container className="App pa1">
            <Row>
              <Header login={this.props.login} hp={this.props.hp}/>
            </Row>
            <Row className='pa3'>
              <Col>
                <HomeGarage />
              </Col>
            </Row>
          </Container>
        )
    }
}

export default HomeGarageLayout;