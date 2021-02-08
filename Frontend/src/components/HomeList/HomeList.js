import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';

class HomeList extends React.Component {
    constructor() {
        super();
        this.state = {
            bathroomTask: '',
            livingroomTask: '',
            gardenTask: '',
            frontdoorTask: '',
            trunkTask: '',
            cleanroomTask: '',
            packtrunkTask: ''
        }
        }
    
    componentDidMount(){
        fetch('http://localhost:3003/home/list', {
         credentials: 'include'
        }).then(response => response.json())
        .then(data => {
            this.setState({
                bathroomTask: data.list.bathroom,
                livingroomTask: data.list.livingroom,
                gardenTask: data.list.garden,
                frontdoorTask: data.list.frontdoor,
                trunkTask: data.list.trunk,
                cleanroomTask: data.list.cleanroom,
                packtrunkTask: data.list.packtrunk
            }) 
        }).catch(error => {"Error"})
    }

    
    render() {
        return (
            <Container className='ba bw2 bg-black'>
                <Row className='pa0 ba'> 
                    <Col className='pa0'>
                        <p className="tc f4 moon-gray pa0">Dom</p>
                    </Col>
                </Row>
                <Container className='pa1'>
                    <ul>
                        <li className='moon-gray pa1'>{this.state.bathroomTask}</li>
                        <li className='moon-gray pa1'>{this.state.livingroomTask}</li>
                        <li className='moon-gray pa1'>{this.state.gardenTask}</li>
                        <li className='moon-gray pa1'>{this.state.frontdoorTask}</li>
                        <li className='moon-gray pa1'>{this.state.trunkTask}</li>
                        <li className='moon-gray pa1'>{this.state.cleanroomTask}</li>
                        <li className='moon-gray pa1'>{this.state.packtrunkTask}</li>
                    </ul>
                    <Link exact to='/home' style={{textDecoration: 'none'}}><p className='moon-gray pa1 link hover: dim pointer'>Powrót</p></Link>
                </Container>
            </Container>
        )
    }
}

export default HomeList;