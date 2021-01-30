import React from 'react';
import {Container, Row, Col, ProgressBar} from 'react-bootstrap';
import './ProfileSummary.css'

let lifeNow = 100
let actionPointsNow=100 
let experienceNow=25

const ProfileSummary = () => {
    return (
        <Container className='ba bw2' style={{display: 'grid'}}>
            <Row className='pa0'>
                <Col className=' pa0 ba bg-black'>
                    <p className='tc f4 silver link pointer'>{'Login'}</p>
                </Col>
            </Row>
            <Row className='pa0'>
                <Col xs={6} sm={6} md={6} lg={6} xl={6} className='pa0 bg-black'>
                    <p className='pa0 f7 silver'>{'Punkty Życia: 10/10'}</p>
                </Col>
                <Col xs={6} sm={6} md={6} lg={6} xl={6} className='pa0 bg-black'>
                    <p className='pa0 f7 silver'>{'Dom: nieprzydzielony'}</p>
                </Col>
            </Row>
            <Row className='pa0'>
                <Col xs={6} sm={6} md={6} lg={6} xl={6} className='pa0 bg-black'>
                    <ProgressBar striped variant="danger" now={lifeNow} />
                </Col>
                <Col xs={6} sm={6} md={6} lg={6} xl={6} className='pa0 bg-black'>
                    <p className='pa0 f7 silver link pointer underline'>{'Karta postaci'}</p>
                </Col>
            </Row>
            <Row className='row pa0'>
                <Col xs={6} sm={6} md={6} lg={6} xl={6} className='pa0 bg-black'>
                    <p className='pa0 f7 silver'>{'Punkty Akcji: 10/10'}</p>
                </Col>
                <Col xs={6} sm={6} md={6} lg={6} xl={6} className='pa0 bg-black'>
                    <p className='pa0 f7 silver'>{'Pieniądze: 0g 0s 0k'}</p>
                </Col>
            </Row>
            <Row className='pa0'>
                <Col xs={6} sm={6} md={6} lg={6} xl={6} className='pa0 bg-black'>
                    <ProgressBar striped variant="success" now={actionPointsNow} />
                </Col>
                <Col xs={6} sm={6} md={6} lg={6} xl={6} className='pa0 bg-black'>
                    <p className='pa0 f7 silver'>{'Skrytka: 0g 0s 0k'}</p>
                </Col>
            </Row>
            <Row className='pa0'>
                <Col xs={6} sm={6} md={6} lg={6} xl={6} className='pa0 bg-black'>
                    <p className='pa0 f7 silver'>{'Doświadczenie: 25/100'}</p>
                </Col>
                <Col xs={6} sm={6} md={6} lg={6} xl={6} className='pa0 bg-black'>
                    <p className='pa0 f7 silver'>{'Poziom: 1'}</p>
                </Col>
            </Row>
            <Row className='pa0'>
                <Col xs={6} sm={6} md={6} lg={6} xl={6} className='pa0 bg-black'>
                    <ProgressBar striped variant="warning" now={experienceNow} />
                </Col>
                <Col xs={6} sm={6} md={6} lg={6} xl={6} className='pa0 bg-black'>
                    <p className='pa0 f6 silver'></p>
                </Col>
            </Row>
        </Container>
    )
}

export default ProfileSummary;