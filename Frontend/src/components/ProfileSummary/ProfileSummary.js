import React from 'react';
import {Container, Row, Col, ProgressBar} from 'react-bootstrap';
import './ProfileSummary.css'

const maxHealthPoints=10
let actionPointsNow=100 
let experienceNow=25

const ProfileSummary = ({login, hp}) => {
    const healthPercentage = Math.round((hp/maxHealthPoints*100))

    return (
        <Container className='ba bw2' style={{display: 'grid'}}>
            <Row className='pa0'>
                <Col className=' pa0 ba bg-black'>
                    <p className='tc f4 light-silver link pointer'>{login}</p>
                </Col>
            </Row>
            <Row className='pa0'>
                <Col xs={6} sm={6} md={6} lg={6} xl={6} className='pa0 bg-black'>
                    <p className='pa0 f7 light-silver'>{`Punkty Życia: ${hp}/${maxHealthPoints}`}</p>
                </Col>
                <Col xs={6} sm={6} md={6} lg={6} xl={6} className='pa0 bg-black'>
                    <p className='pa0 f7 light-silver'>{'Dom: nieprzydzielony'}</p>
                </Col>
            </Row>
            <Row className='pa0'>
                <Col xs={6} sm={6} md={6} lg={6} xl={6} className='pa0 bg-black'>
                    <ProgressBar striped variant="danger" now={healthPercentage} />
                </Col>
                <Col xs={6} sm={6} md={6} lg={6} xl={6} className='pa0 bg-black'>
                    <p className='pa0 f7 light-silver link pointer underline'>{'Karta postaci'}</p>
                </Col>
            </Row>
            <Row className='row pa0'>
                <Col xs={6} sm={6} md={6} lg={6} xl={6} className='pa0 bg-black'>
                    <p className='pa0 f7 light-silver'>{'Punkty Akcji: 10/10'}</p>
                </Col>
                <Col xs={6} sm={6} md={6} lg={6} xl={6} className='pa0 bg-black'>
                    <p className='pa0 f7 light-silver'>{'Pieniądze: 0g 0s 0k'}</p>
                </Col>
            </Row>
            <Row className='pa0'>
                <Col xs={6} sm={6} md={6} lg={6} xl={6} className='pa0 bg-black'>
                    <ProgressBar striped variant="success" now={actionPointsNow} />
                </Col>
                <Col xs={6} sm={6} md={6} lg={6} xl={6} className='pa0 bg-black'>
                    <p className='pa0 f7 light-silver'>{'Skrytka: 0g 0s 0k'}</p>
                </Col>
            </Row>
            <Row className='pa0'>
                <Col xs={6} sm={6} md={6} lg={6} xl={6} className='pa0 bg-black'>
                    <p className='pa0 f7 light-silver'>{'Doświadczenie: 25/100'}</p>
                </Col>
                <Col xs={6} sm={6} md={6} lg={6} xl={6} className='pa0 bg-black'>
                    <p className='pa0 f7 light-silver'>{'Poziom: 1'}</p>
                </Col>
            </Row>
            <Row className='pa0'>
                <Col xs={6} sm={6} md={6} lg={6} xl={6} className='pa0 bg-black'>
                    <ProgressBar striped variant="warning" now={experienceNow} />
                </Col>
                <Col xs={6} sm={6} md={6} lg={6} xl={6} className='pa0 bg-black'>
                    <p className='pa0 f6 light-silver'></p>
                </Col>
            </Row>
        </Container>
    )
}

export default ProfileSummary;