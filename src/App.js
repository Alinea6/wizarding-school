import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Navigation from './components/Navigation/Navigation';
import ProfileSummary from './components/ProfileSummary/ProfileSummary';
import SignIn from './components/SignIn/SignIn';
import './App.css';


class App extends Component {
  render() {
    return (
      <Container className="App pa1">
          <Row>
            <Col xs={12} sm={12} md={5} lg={5} xl={5} className='col-sm-12 col-md-12 col-lg-5 col-xl-5'>  
              <ProfileSummary />
            </Col>
            <Col xs={12} sm={12} md={7} lg={7} xl={7} className='col-sm-12 col-md-12 col-lg-7 col-xl-7'>
              <Navigation />
            </Col>
          </Row>
          <Row>
            <Col>
              <SignIn />
            </Col>
          </Row>
        {/* <Location /> */}
      </Container>
    );
  }
}

export default App;
