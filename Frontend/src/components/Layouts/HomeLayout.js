import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Header from '../Header/Header';
import Home from '../Home/Home';

class HomeLayout extends React.Component {
    render() {
        return (
            <Container className="App pa1">
            <Row>
              <Header user={this.props.user} loadUser={this.props.loadUser} 
              domain={this.props.domain}/>
            </Row>
            <Row className='pa3'>
              <Col>
                <Home />
              </Col>
            </Row>
          </Container>
        )
    }
}

export default HomeLayout;