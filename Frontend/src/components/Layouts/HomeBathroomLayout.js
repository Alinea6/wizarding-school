import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Header from '../Header/Header';
import Sorting from '../Sorting/Sorting';

class HomeBathroomLayout extends React.Component {
    render() {
        return(
            <Container className="App pa1">
            <Row>
              <Header login={this.props.login} hp={this.props.hp}/>
            </Row>
            <Row className='pa3'>
              <Col>
              <Sorting login={this.props.login} fetchLink={'http://localhost:3003/home/bathroom'} 
              loadTask={this.props.loadTask} taskDone={this.props.bathroom} />
              </Col>
            </Row>
          </Container>
        )
    }
}

export default HomeBathroomLayout;