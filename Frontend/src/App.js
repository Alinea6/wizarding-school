import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import SignIn from "./components/SignIn/SignIn";
import Register from "./components/Register/Register";
import Layout from "./components/Layouts/Layout";
import NewUser from "./components/NewUser/NewUser";
import Home from "./components/Home/Home";
import HomeCar from "./components/HomeCar/HomeCar";
import HomeGarage from "./components/HomeGarage/HomeGarage";
import HomeList from "./components/HomeList/HomeList";
import HomeRoom from "./components/HomeRoom/HomeRoom";
import Sorting from "./components/Sorting/Sorting";
import London from "./components/London/London";
import LondonStation from "./components/LondonStation/LondonStation";
import HogwartSorting from "./components/HogwartSorting/HogwartSorting";
import domain from "./Config";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      domain: "",
      user: {
        login: "",
        health_points: 0,
        max_health_points: 0,
        action_points: 0,
        max_action_points: 0,
        experience_points: 0,
        pocket: {},
        vault: {},
        house: '',
        level: 0,
        nextLevel: 0
      },
    };
  }

  componentDidMount() {
    const setDomain = domain();
    this.setState({
      domain: setDomain,
    });
  }

  loadUser = (data) => {
    this.setState({
      user: {
        login: data.login,
        health_points: data.health_points,
        max_health_points: data.max_health_points,
        action_points: data.action_points,
        max_action_points: data.max_action_points,
        experience_points: data.experience_points,
        pocket: data.pocket,
        vault: data.vault,
        house: data.house,
        level: data.level,
        nextLevel: data.nextLevel
      },
    });
  };

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <SignIn
              onLoggedInChange={this.onLoggedInChange}
              loggedIn={this.state.loggedIn}
            />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route exact path="/new">
            <Layout
              user={this.state.user}
              loadUser={this.loadUser}
            >
              <NewUser />
            </Layout>
          </Route>
          <Route exact path="/home">
            <Layout
              user={this.state.user}
              loadUser={this.loadUser}
            >
              <Home/>
            </Layout>
          </Route>
          <Route exact path="/london">
            <Layout
              user={this.state.user}
              loadUser={this.loadUser}
            >
              <London/>
            </Layout>
          </Route>
          <Route exact path="/home/room">
            <Layout
              user={this.state.user}
              loadUser={this.loadUser}
            >
              <HomeRoom />
            </Layout>
          </Route>
          <Route exact path="/home/garage">
            <Layout
              user={this.state.user}
              loadUser={this.loadUser}
            >
              <HomeGarage />
            </Layout>
          </Route>
          <Route exact path="/home/car">
            <Layout
              user={this.state.user}
              loadUser={this.loadUser}
              changeLocation={this.changeLocation}
            >
              <HomeCar />
            </Layout>
          </Route>
          <Route exact path="/home/list">
            <Layout
              user={this.state.user}
              loadUser={this.loadUser}
            >
              <HomeList />
            </Layout>
          </Route>
          <Route path="/home/bathroom">
            <Layout
              user={this.state.user}
              loadUser={this.loadUser}
            >
              <Sorting
                fetchLink={"home/bathroom"}
                task={"bathroom"}
                location={"Łazienka"}
              />
            </Layout>
          </Route>
          <Route path="/home/livingroom">
            <Layout
              user={this.state.user}
              loadUser={this.loadUser}
            >
              <Sorting
                fetchLink={"home/livingroom"}
                task={"livingroom"}
                location={"Salon"}
              />
            </Layout>
          </Route>
          <Route path="/home/garden">
            <Layout
              user={this.state.user}
              loadUser={this.loadUser}
            >
              <Sorting
                fetchLink={"home/garden"}
                task={"garden"}
                location={"Ogród"}
              />
            </Layout>
          </Route>
          <Route path="/home/frontdoor">
            <Layout
              user={this.state.user}
              loadUser={this.loadUser}
            >
              <Sorting
                fetchLink={"home/frontdoor"}
                task={"frontdoor"}
                location={"Ulica"}
              />
            </Layout>
          </Route>
          <Route path="/home/trunk">
            <Layout
              user={this.state.user}
              loadUser={this.loadUser}
            >
              <Sorting
                fetchLink={"home/trunk"}
                task={"trunk"}
                location={"Twój pokój"}
              />
            </Layout>
          </Route>
          <Route path="/home/cleanroom">
            <Layout
              user={this.state.user}
              loadUser={this.loadUser}
            >
              <Sorting
                fetchLink={"home/cleanroom"}
                task={"cleanroom"}
                location={"Twój pokój"}
              />
            </Layout>
          </Route>
          <Route path="/home/packtrunk">
            <Layout
              user={this.state.user}
              loadUser={this.loadUser}
            >
              <Sorting
                fetchLink={"home/packtrunk"}
                task={"packtrunk"}
                location={"Garaż"}
              />
            </Layout>
          </Route>
          <Route path="/london/station">
            <Layout
              user={this.state.user}
              loadUser={this.loadUser}
            >
              <LondonStation/>
            </Layout>
          </Route>
          <Route path="/hogwart/sorting">
            <Layout
              user={this.state.user}
              loadUser={this.loadUser}
            >
              <HogwartSorting/>
            </Layout>
          </Route>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
