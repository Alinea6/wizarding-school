import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Header from '../Header/Header';
import HomeCar from '../HomeCar/HomeCar';

class HomeCarLayout extends React.Component {
    render() {
        return (
            <Container className="App pa1">
            <Row>
              <Header login={this.props.login} hp={this.props.hp}/>
            </Row>
            <Row className='pa3'>
              <Col>
                <HomeCar />
              </Col>
            </Row>
          </Container>
        )
    }
}

export default HomeCarLayout;