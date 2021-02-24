import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Header from '../Header/Header';

const Layout = ({children}) => {
        return (
            <Container className="App pa1">
            <Row>
              <Header user={this.props.user} loadUser={this.props.loadUser} 
              domain={this.props.domain}/>
            </Row>
            <Row className='pa3'>
              <Col>
                {children}
              </Col>
            </Row>
          </Container>
        )
}

export default Layout;