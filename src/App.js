import React, { useState } from 'react';
import './App.css';
import LoginForm from './Components/Login/LoginForm';
import NavBar from './Components/Menu/NavBar';
import RegistrationForm from './Components/SignUp/RegistrationForm';
import Home from './Components/Pages/Home';
import Farmer from './Components/Pages/Farmer'
import PrivateRoute from './Components/utils/PrivateRoute';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AlertComponent from './Components/AlertComponent/AlertComponent';

function App () {  
  const [title, updateTitle] = useState(null);
  const [errorMessage, updateErrorMessage] = useState(null);

  return (
    <Router>
    <div className="App">
      <NavBar title={title}/>
        <div className="container d-flex align-items-center flex-column">
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/home" Component={Home} />
            <Route path="/farmer" Component={Farmer} />
            <Route path="/register" exact={true}>
              <RegistrationForm showError={updateErrorMessage} updateTitle={updateTitle}/>
            </Route>
            <Route path="/login">
              <LoginForm showError={updateErrorMessage} updateTitle={updateTitle} />
            </Route>
            <PrivateRoute path="/home" exact={true}>
              <Farmer />
            </PrivateRoute>
          </Switch>
          <AlertComponent errorMessage={errorMessage} hideError={updateErrorMessage}/>
        </div>
    </div>
    </Router>
  );
}

export default App;