import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';


class Home extends React.Component {
    render() {
        return(
            <Container className='ba bw2 bg-black'>
                <Row className='pa0 ba'> 
                    <Col className='pa0'>
                        <p className="tc f4 moon-gray pa0">Dom</p>
                    </Col>
                </Row>
                <Container>
                    <Row>
                        <Col>
                            <Link to='' style={{textDecoration: 'none'}}>
                                <p className='moon-gray link hover:dim pointer'>Twój pokój</p>
                            </Link>
                        </Col>
                        <Col>
                            <Link to='/home/livingroom' style={{textDecoration: 'none'}}>
                                <p className='moon-gray hover:dim pointer'>Salon</p>
                            </Link>
                        </Col>
                        <Col>
                            <Link to='/home/bathroom' style={{textDecoration: 'none'}}>
                                <p className='moon-gray hover:dim pointer'>Łazienka</p>
                            </Link>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Link to='/home/frontdoor' style={{textDecoration: 'none'}}>
                                <p className='moon-gray hover:dim pointer'>Drzwi wejściowe</p>
                            </Link>
                        </Col>
                        <Col>
                            <Link to='' style={{textDecoration: 'none'}}>
                                <p className='moon-gray hover:dim pointer'>Garaż</p>
                            </Link>
                        </Col>
                        <Col>
                            <Link to='/home/garden' style={{textDecoration: 'none'}}>
                                <p className='moon-gray hover:dim pointer'>Ogród</p>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </Container>
        )
    }
}

export default Home;