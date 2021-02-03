import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

class Sorting extends React.Component {
    constructor() {
        super();
        this.state = {
            introduction: '',
            choice1: '',
            choice2: '',
            choice3: '',
            choice4: '',
            taskDoneText: ''
        }
    }

    componentDidMount(){
       fetch(this.props.fetchLink) 
       .then(response => response.json())
       .then(data =>{
        this.setState({
            introduction: data.introduction,
            choice1: data.choice1,
            choice2: data.choice2,
            choice3: data.choice3,
            choice4: data.choice4,
            taskDoneText: data.taskDoneText
        })
       }).catch(error=> {"Loading error"})
    }

    onChoiceClick(choice) {
        fetch(this.props.fetchLink, {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                login: this.props.login,
                choice: choice
            })
        }).then(response => response.json())
        .then(data =>{
            this.props.loadTask(data.homeTasks)
        })
    }

    render() {
        return (
            <Container className='ba bw2 bg-black'>
                <Row className='pa0 ba'> 
                    <Col className='pa0'>
                        <p className="tc f4 moon-gray pa0">Dom</p>
                    </Col>
                </Row>
                { !this.props.taskDone
                ?<Container className='pa0'>
                    <Row className='pa1'>
                        <p className='tj pa1 moon-gray'>{this.state.introduction}</p>
                    </Row>
                    <Row>
                        <ul>
                            <li onClick={()=>this.onChoiceClick('choice1')} className='moon-gray link hover: dim pointer tj pa1'>{this.state.choice1}</li>
                            <li onClick={()=>this.onChoiceClick('choice2')} className='moon-gray link hover: dim pointer tj pa1'>{this.state.choice2}</li>
                            <li onClick={()=>this.onChoiceClick('choice3')} className='moon-gray link hover: dim pointer tj pa1'>{this.state.choice3}</li>
                            <li onClick={()=>this.onChoiceClick('choice4')}className='moon-gray link hover: dim pointer tj pa1'>{this.state.choice4}</li>
                        </ul>                        
                    </Row>
                </Container>
                : <Container className='pa0'>
                    <Row className='pa1'>
                        <p className='tj pa2 moon-gray'>{this.state.taskDoneText}</p>
                    </Row>
                    <Row style={{justifyContent: 'center'}}>
                        <p className='tc moon-gray link hover: dim pointer'>Powrót</p>
                    </Row>
                </Container>}
            </Container>
        )
    }
}

export default Sorting;