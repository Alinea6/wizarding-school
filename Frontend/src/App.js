import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import Header from './components/Header/Header';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import Sorting from './components/Sorting/Sorting';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      user: {
        login: '',
        role: '',
        hp: 0
      },
      home: {
        bathroom: false, 
        livingroom: false, 
        garden: false,
        frontdoor: false, 
        trunk: false, 
        cleanroom: false, 
        packtrunk: false
      }
    }
  }


  onLoggedInChange=(loggedInChange) =>{
    this.setState({loggedIn: loggedInChange});
  }

  loadUser = (data) => {
    this.setState({user: {
      login: data.login,
      role: data.role,
      hp: data.hp
    }})
  }

  loadTask = (data) => {
    this.setState({home: {
      bathroom: data.bathroom,
      livingroom: data.livingroom,
      garden: data.garden,
      frontdoor: data.frontdoor,
      trunk: data.trunk,
      cleanroom: data.cleanroom,
      packtrunk: data.packtrunk
      }})
  }

  render() {
    const { loggedIn } = this.state;
    return (
      <BrowserRouter>
        <Switch>
        <Route path="/login">
          <SignIn onLoggedInChange={ this.onLoggedInChange} 
          loggedIn= {this.state.loggedIn} 
          loadUser={this.loadUser}
          loadTask={this.loadTask} />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/home/bathroom'> 
          <Container className="App pa1">
            <Row>
              <Header login={this.state.user.login} hp={this.state.user.hp}/>
            </Row>
            <Row className='pa3'>
              <Col>
              <Sorting login={this.state.user.login} fetchLink={'http://localhost:3003/home/bathroom'} 
              loadTask={this.loadTask} taskDone={this.state.home.bathroom} />
              </Col>
            </Row>
          </Container>
          </Route>
          <Route path='/home/livingroom'>
          <Container className="App pa1">
            <Row>
              <Header login={this.state.user.login} hp={this.state.user.hp}/>
            </Row>
            <Row className='pa3'>
              <Col>
              <Sorting login={this.state.user.login} fetchLink={'http://localhost:3003/home/livingroom'} 
              loadTask={this.loadTask} taskDone={this.state.home.livingroom} />
              </Col>
            </Row>
          </Container>
          </Route>
          <Route path='/home/garden'>
          <Container className="App pa1">
            <Row>
              <Header login={this.state.user.login} hp={this.state.user.hp}/>
            </Row>
            <Row className='pa3'>
              <Col>
              <Sorting login={this.state.user.login} fetchLink={'http://localhost:3003/home/garden'} 
              loadTask={this.loadTask} taskDone={this.state.home.garden} />
              </Col>
            </Row>
          </Container>
          </Route>
          <Route path='/home/frontdoor'>
          <Container className="App pa1">
            <Row>
              <Header login={this.state.user.login} hp={this.state.user.hp}/>
            </Row>
            <Row className='pa3'>
              <Col>
              <Sorting login={this.state.user.login} fetchLink={'http://localhost:3003/home/frontdoor'} 
              loadTask={this.loadTask} taskDone={this.state.home.frontdoor} />
              </Col>
            </Row>
          </Container>
          </Route>
          <Route path='/home/trunk'>
          <Container className="App pa1">
            <Row>
              <Header login={this.state.user.login} hp={this.state.user.hp}/>
            </Row>
            <Row className='pa3'>
              <Col>
              <Sorting login={this.state.user.login} fetchLink={'http://localhost:3003/home/trunk'} 
              loadTask={this.loadTask} taskDone={this.state.home.trunk} />
              </Col>
            </Row>
          </Container>
          </Route>
          <Route path='/home/cleanroom'>
          <Container className="App pa1">
            <Row>
              <Header login={this.state.user.login} hp={this.state.user.hp}/>
            </Row>
            <Row className='pa3'>
              <Col>
              <Sorting login={this.state.user.login} fetchLink={'http://localhost:3003/home/cleanroom'} 
              loadTask={this.loadTask} taskDone={this.state.home.cleanroom} />
              </Col>
            </Row>
          </Container>
          </Route>
          <Route path='/home/packtrunk'>
          <Container className="App pa1">
            <Row>
              <Header login={this.state.user.login} hp={this.state.user.hp}/>
            </Row>
            <Row className='pa3'>
              <Col>
              <Sorting login={this.state.user.login} fetchLink={'http://localhost:3003/home/packtrunk'} 
              loadTask={this.loadTask} taskDone={this.state.home.packtrunk} />
              </Col>
            </Row>
          </Container>
          </Route>
          <Route exact path='/'>
            { !loggedIn
            ?<Redirect to='/login' />
            : <Redirect to='home' />}
          </Route>  
        </Switch>
    </BrowserRouter>
    );
  }
}

export default App;
