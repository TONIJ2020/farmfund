import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Pages/Home';
import {  BrowserRouter, Route, Switch } from "react-router-dom"; 
import NavBar from './Components/Menu/NavBar';
import Login from './Components/LoginRegister/Login';
import Register from './Components/LoginRegister/Register';
import Footer from './Components/Footer/Footer';
import axios from 'axios';
import {Forgot} from './Components/LoginRegister/Forgot';
import {Reset} from './Components/LoginRegister/Reset';
import Projects from './Components/Projects/Projects';
import Adaobifarm from './Components/Projects/Adaobifarm';
import Uchefarm from './Components/Projects/Uchefarm';
import Okorofarm from './Components/Projects/Okorofarm';

export default class App extends Component {

  state = {};

  componentDidMount = () => {
    axios.get('user').then(
      res => {
        this.setUser(res.data);
      },
      err => {
        console.log(err)
      }
    )
  };

  setUser = user => {
    this.setState({
      user: user
    });
  }

  render() {

    return (
      <BrowserRouter>
        <div className="App">
          <NavBar user={this.state.user} setUser={this.setUser} />
            <div className="container d-flex align-items-center flex-column">
              <Switch>
                <Route exact path="/" component={() => <Home user={this.state.user} />} />
                <Route exact path="/login" component={() => <Login setUser={this.setUser} />} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/forgot" component={Forgot} />
                <Route exact path="/reset:id" component={Reset} />
                <Route exact path="/adaobifarm" component={Adaobifarm} />
                <Route exact path="/uchefarm" component={Uchefarm} />
                <Route exact path="/okorofarm" component={Okorofarm} />
                <Route exact path="/projects" component={Projects} />
              </Switch>
            </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}