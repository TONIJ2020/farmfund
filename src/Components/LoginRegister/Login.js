import axios from 'axios';
import React, { Component } from 'react';
import { Redirect } from 'react-router';
import './LoginRegister.css';

export default class Login extends Component {

    state = {};

    handleSubmit = e => {
        e.preventDefault();

        const data = {
            user_Name: this.userName,
            password: this.password
        }

        axios.post('login', data)
            .then(res => {
                localStorage.setItem('token', res.data.token);
                this.setState ({
                    loggedIn: true
                });
                this.props.setUser(res.data.user);
            })
            .catch(err => {
                this.setState({
                    message: err.response.data.message
                })
            })
    };

    
    render() {
        if(this.state.loggedIn) {
            return <Redirect to={'/'} />;
        }

        let error = '';

        if(this.state.message) {
            error = (
                <div className="alert alert-danger" role="alert">
                    {this.state.message}
                </div>
            )
        }

        return (
            <form onSubmit={this.handleSubmit} className="container">
                <div className="login-wrapper">
                    {error}
                    <h3 className="login-register-header">Login</h3>

                    <div className="form-group">
                        <label>Username</label>
                        <input type='text' 
                        id='username' 
                        placeholder='Username' 
                        onChange={e => this.userName = e.target.value}
                        />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type='password' 
                        id='password' 
                        placeholder='**********' 
                        onChange={e => this.password = e.target.value}
                        />
                    </div>
        
                    <div className="form-group">
                        <input type='submit' 
                        value='Login' 
                        className='submit' 
                        />
                    </div>

                    <a href="/forgot" className="forgot-password">Forgot Password?</a>
                </div>
            </form>
        )
    }
}
