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
        pocket: 0,
        vault: 0,
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
              domain={this.state.domain}
            />
          </Route>
          <Route path="/register">
            <Register domain={this.state.domain} />
          </Route>
          <Route exact path="/new">
            <Layout
              user={this.state.user}
              loadUser={this.loadUser}
              domain={this.state.domain}
            >
              <NewUser 
              domain={this.state.domain}/>
            </Layout>
          </Route>
          <Route exact path="/home">
            <Layout
              user={this.state.user}
              loadUser={this.loadUser}
              domain={this.state.domain}
            >
              <Home />
            </Layout>
          </Route>
          <Route exact path="/home/room">
            <Layout
              user={this.state.user}
              loadUser={this.loadUser}
              domain={this.state.domain}
            >
              <HomeRoom />
            </Layout>
          </Route>
          <Route exact path="/home/garage">
            <Layout
              user={this.state.user}
              loadUser={this.loadUser}
              domain={this.state.domain}
            >
              <HomeGarage />
            </Layout>
          </Route>
          <Route exact path="/home/car">
            <Layout
              user={this.state.user}
              loadUser={this.loadUser}
              domain={this.state.domain}
            >
              <HomeCar domain={this.state.domain} />
            </Layout>
          </Route>
          <Route exact path="/home/list">
            <Layout
              user={this.state.user}
              loadUser={this.loadUser}
              domain={this.state.domain}
            >
              <HomeList domain={this.state.domain} />
            </Layout>
          </Route>
          <Route path="/home/bathroom">
            <Layout
              user={this.state.user}
              loadUser={this.loadUser}
              domain={this.state.domain}
            >
              <Sorting
                fetchLink={"home/bathroom"}
                domain={this.state.domain}
                task={"bathroom"}
              />
            </Layout>
          </Route>
          <Route path="/home/livingroom">
            <Layout
              user={this.state.user}
              loadUser={this.loadUser}
              domain={this.state.domain}
            >
              <Sorting
                fetchLink={"home/livingroom"}
                domain={this.state.domain}
                task={"livingroom"}
              />
            </Layout>
          </Route>
          <Route path="/home/garden">
            <Layout
              user={this.state.user}
              loadUser={this.loadUser}
              domain={this.state.domain}
            >
              <Sorting
                fetchLink={"home/garden"}
                domain={this.state.domain}
                task={"garden"}
              />
            </Layout>
          </Route>
          <Route path="/home/frontdoor">
            <Layout
              user={this.state.user}
              loadUser={this.loadUser}
              domain={this.state.domain}
            >
              <Sorting
                fetchLink={"home/frontdoor"}
                domain={this.state.domain}
                task={"frontdoor"}
              />
            </Layout>
          </Route>
          <Route path="/home/trunk">
            <Layout
              user={this.state.user}
              loadUser={this.loadUser}
              domain={this.state.domain}
            >
              <Sorting
                fetchLink={"home/trunk"}
                domain={this.state.domain}
                task={"trunk"}
              />
            </Layout>
          </Route>
          <Route path="/home/cleanroom">
            <Layout
              user={this.state.user}
              loadUser={this.loadUser}
              domain={this.state.domain}
            >
              <Sorting
                fetchLink={"home/cleanroom"}
                domain={this.state.domain}
                task={"cleanroom"}
              />
            </Layout>
          </Route>
          <Route path="/home/packtrunk">
            <Layout
              user={this.state.user}
              loadUser={this.loadUser}
              domain={this.state.domain}
            >
              <Sorting
                fetchLink={"home/packtrunk"}
                domain={this.state.domain}
                task={"packtrunk"}
              />
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
