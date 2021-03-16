import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Layouts from '../Pages/Layouts';
import Home from '../Pages/Home'
import Farmer from '../Pages/Farmer';
import LoginRegister from '../LoginRegister/LoginRegister';

const AppRoute = ({ Component, path, exact, ...rest }) => {
    return (
        <Route exact={exact} path={path} {...rest} render={(props) => {
            return (
                <Layouts>
                    <Component {...rest} {...props} />
                </Layouts>
            )
        }} />
    )
}

const PrivateRoute = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <AppRoute exact path="/farmer" Component={Farmer} />
                    {/* <AppRoute path="/farmer" Component={Farmer} /> */}
                    <AppRoute path="/loginregister" Component={LoginRegister} />
              </Switch>
            </BrowserRouter>
        </>
    )
}
export default PrivateRoute;