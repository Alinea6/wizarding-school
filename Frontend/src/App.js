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
    return (
      <BrowserRouter>
        <Switch>
        <Route path="/login">
          <SignIn onLoggedInChange={ this.onLoggedInChange} 
          loggedIn= {this.state.loggedIn} 
          loadUser={this.loadUser}
          loadTask={this.loadTask}
          domain={this.state.domain} />
        </Route>
        <Route path='/register'>
          <Register domain={this.state.domain}/>
        </Route>
        <Route exact path='/home'>
          <HomeLayout login={this.state.user.login} hp={this.state.user.hp} 
          domain={this.state.domain}/>
        </Route>
        <Route exact path='/home/room'>
          <HomeRoomLayout login={this.state.user.login} hp={this.state.user.hp}
          domain={this.state.domain}/>
        </Route>
        <Route exact path='/home/garage'>
          <HomeGarageLayout login={this.state.user.login} hp={this.state.user.hp}
          domain={this.state.domain}/>
        </Route>
        <Route exact path='/home/car'>
          <HomeCarLayout login={this.state.user.login} hp={this.state.user.hp}
          domain={this.state.domain}/>
        </Route>
        <Route exact path='/home/list'>
          <HomeListLayout login={this.state.user.login} hp={this.state.user.hp}
          domain={this.state.domain}/>
        </Route>
        <Route path='/home/bathroom'>
          <HomeSortingLayout login={this.state.user.login} hp={this.state.user.hp}
              fetchLink={'home/bathroom'} domain={this.state.domain}
              loadTask={this.loadTask} taskDone={this.state.home.bathroom}/>   
        </Route>
        <Route path='/home/livingroom'>
          <HomeSortingLayout login={this.state.user.login} hp={this.state.user.hp}
              fetchLink={'home/livingroom'} domain={this.state.domain}
              loadTask={this.loadTask} taskDone={this.state.home.livingroom}/>
        </Route>
          <Route path='/home/garden'>
            <HomeSortingLayout login={this.state.user.login} hp={this.state.user.hp}
              fetchLink={'home/garden'} domain={this.state.domain}
              loadTask={this.loadTask} taskDone={this.state.home.garden}/>
          </Route>
          <Route path='/home/frontdoor'>
            <HomeSortingLayout login={this.state.user.login} hp={this.state.user.hp}
            fetchLink={'home/frontdoor'} domain={this.state.domain} 
            loadTask={this.loadTask} taskDone={this.state.home.frontdoor}/>
          </Route>
          <Route path='/home/trunk'>
            <HomeSortingLayout login={this.state.user.login} hp={this.state.user.hp}
              fetchLink={'home/trunk'} domain={this.state.domain}
              loadTask={this.loadTask} taskDone={this.state.home.trunk}/>
          </Route>
          <Route path='/home/cleanroom'>
            <HomeSortingLayout login={this.state.user.login} hp={this.state.user.hp}
              fetchLink={'home/cleanroom'} domain={this.state.domain} 
              loadTask={this.loadTask} taskDone={this.state.home.cleanroom}/>
          </Route>
          <Route path='/home/packtrunk'>
            <HomeSortingLayout login={this.state.user.login} hp={this.state.user.hp}
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
