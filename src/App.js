import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import ProfileSummary from './components/ProfileSummary/ProfileSummary';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container pa1">
          <div className='row'>
            <div className='col-sm-12 col-md-12 col-lg-5 col-xl-5'>  
              <ProfileSummary />
            </div>
            <div className='col-sm-12 col-md-12 col-lg-7 col-xl-7'>
              <Navigation />
            </div>
          </div>
        {/* <Location /> */}
      </div>
    );
  }
}

export default App;
