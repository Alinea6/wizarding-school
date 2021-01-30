import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import Navigation from './components/Navigation/Navigation';
import ProfileSummary from './components/ProfileSummary/ProfileSummary';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
    }
  }


  onLoggedInChange=(loggedInChange) =>{
    this.setState({loggedIn: loggedInChange});
  }

  render() {
    const { loggedIn } = this.state;
    return (
      <BrowserRouter>
        <Switch>
        <Route path="/login">
          <SignIn onLoggedInChange={ this.onLoggedInChange }/>
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/home'> 
          <Container className="App pa1">
            <Row>
              <Col xs={12} sm={12} md={5} lg={5} xl={5} className='col-sm-12 col-md-12 col-lg-5 col-xl-5'>  
                <ProfileSummary />
              </Col>
              <Col xs={12} sm={12} md={7} lg={7} xl={7} className='col-sm-12 col-md-12 col-lg-7 col-xl-7'>
                <Navigation onLoggedInChange={ this.onLoggedInChange }/>
              </Col>
            </Row>
            <Row>
              <Col>
              {/* <Location /> */} 
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
