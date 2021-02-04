import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Header from '../Header/Header';
import Sorting from '../Sorting/Sorting';

class HomeLivingRoomLayout extends React.Component {
    render() {
        return (
            <Container className="App pa1">
            <Row>
              <Header login={this.props.login} hp={this.props.hp}/>
            </Row>
            <Row className='pa3'>
              <Col>
              <Sorting login={this.props.login} fetchLink={'http://localhost:3003/home/livingroom'} 
              loadTask={this.props.loadTask} taskDone={this.props.livingroom} />
              </Col>
            </Row>
          </Container>
        )
    }
}

export default HomeLivingRoomLayout;