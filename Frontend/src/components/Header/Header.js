import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Navigation from '../Navigation/Navigation.js';
import ProfileSummary from '../ProfileSummary/ProfileSummary.js';

class Header extends React.Component {
    render() {
        return (
            <Container>
                <Row className='pa3'>
                    <Col xs={12} sm={12} md={5} lg={5} xl={5}>  
                        <ProfileSummary login={this.props.login} hp={this.props.hp} />
                    </Col>
                    <Col xs={12} sm={12} md={7} lg={7} xl={7}>
                        <Navigation />
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default Header;