import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import HomeLayout from './components/Layouts/HomeLayout';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import HomeSortingLayout from './components/Layouts/HomeSortingLayout';
import HomeRoomLayout from './components/Layouts/HomeRoomLayout';
import HomeGarageLayout from './components/Layouts/HomeGarageLayout';
import HomeListLayout from './components/Layouts/HomeListLayout';
import HomeCarLayout from './components/Layouts/HomeCarLayout';
import domain from './config';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      domain: '',
      loggedIn: false,
      user: {
        login: '',
        health_points: 0,
        max_health_points: 0,
        action_points: 0,
        max_action_points: 0,
        experience_points: 0,
        pocket: 0,
        vault: 0
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

  componentDidMount(){
    const setDomain = domain()
    this.setState({
      domain: setDomain
    })
  }

  onLoggedInChange=(loggedInChange) =>{
    this.setState({loggedIn: loggedInChange});
  }

  loadUser = (data) => {
    this.setState({user: {
      login: data.login,
      health_points: data.health_points,
      max_health_points: data.max_health_points,
      action_points: data.action_points,
      max_action_points: data.max_action_points,
      experience_points: data.experience_points,
      pocket: data.pocket,
      vault: data.vault
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
    return (
      <BrowserRouter>
        <Switch>
        <Route path="/login">
          <SignIn onLoggedInChange={ this.onLoggedInChange} 
          loggedIn= {this.state.loggedIn}
          domain={this.state.domain} />
        </Route>
        <Route path='/register'>
          <Register domain={this.state.domain}/>
        </Route>
        <Route exact path='/home'>
          <HomeLayout user={this.state.user} loadUser={this.loadUser} 
          domain={this.state.domain}/>
        </Route>
        <Route exact path='/home/room'>
          <HomeRoomLayout user={this.state.user} loadUser={this.loadUser}
          domain={this.state.domain}/>
        </Route>
        <Route exact path='/home/garage'>
          <HomeGarageLayout user={this.state.user} loadUser={this.loadUser}
          domain={this.state.domain}/>
        </Route>
        <Route exact path='/home/car'>
          <HomeCarLayout user={this.state.user} loadUser={this.loadUser}
          domain={this.state.domain}/>
        </Route>
        <Route exact path='/home/list'>
          <HomeListLayout user={this.state.user} loadUser={this.loadUser}
          domain={this.state.domain}/>
        </Route>
        <Route path='/home/bathroom'>
          <HomeSortingLayout user={this.state.user} loadUser={this.loadUser}
              fetchLink={'home/bathroom'} domain={this.state.domain}
              loadTask={this.loadTask} taskDone={this.state.home.bathroom}/>   
        </Route>
        <Route path='/home/livingroom'>
          <HomeSortingLayout user={this.state.user} loadUser={this.loadUser}
              fetchLink={'home/livingroom'} domain={this.state.domain}
              loadTask={this.loadTask} taskDone={this.state.home.livingroom}/>
        </Route>
          <Route path='/home/garden'>
            <HomeSortingLayout user={this.state.user} loadUser={this.loadUser}
              fetchLink={'home/garden'} domain={this.state.domain}
              loadTask={this.loadTask} taskDone={this.state.home.garden}/>
          </Route>
          <Route path='/home/frontdoor'>
            <HomeSortingLayout user={this.state.user} loadUser={this.loadUser}
            fetchLink={'home/frontdoor'} domain={this.state.domain} 
            loadTask={this.loadTask} taskDone={this.state.home.frontdoor}/>
          </Route>
          <Route path='/home/trunk'>
            <HomeSortingLayout user={this.state.user} loadUser={this.loadUser}
              fetchLink={'home/trunk'} domain={this.state.domain}
              loadTask={this.loadTask} taskDone={this.state.home.trunk}/>
          </Route>
          <Route path='/home/cleanroom'>
            <HomeSortingLayout user={this.state.user} loadUser={this.loadUser}
              fetchLink={'home/cleanroom'} domain={this.state.domain} 
              loadTask={this.loadTask} taskDone={this.state.home.cleanroom}/>
          </Route>
          <Route path='/home/packtrunk'>
            <HomeSortingLayout user={this.state.user} loadUser={this.loadUser}
              fetchLink={'home/packtrunk'} domain={this.state.domain}
              loadTask={this.loadTask} taskDone={this.state.home.packtrunk}/>
          </Route>
          <Route exact path='/'>
            <Redirect to='/login' />
          </Route>  
        </Switch>
    </BrowserRouter>
    );
  }
}

export default App;
