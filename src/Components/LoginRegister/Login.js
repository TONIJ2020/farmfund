import axios from 'axios';
import React, { Component } from 'react';
import { withRouter } from 'react-router';
import '../Styles/LoginRegister.css';

class Login extends Component {

    state = {};

    handleSubmit = e => {
        e.preventDefault();

        const data = {
            email: this.email,
            password: this.password
        }

        axios.post('/user/sign-in', data)
            .then(res => {
                localStorage.setItem('userData', JSON.stringify(res.data.user));
                this.setState ({
                    loggedIn: true
                });
                this.props.setUser(res.data.user);
                this.props.history.push("/dashboard");
            }).catch(err => {
                this.setState({
                    message: err.response.data.message
                })
            })
    };
    
    render() {
        let error = '';

        if(this.state.message) {
            error = (
                <div className="alert alert-danger" role="alert">
                    <p>Invalid Parameter</p>
                </div>
            )
        }

        return (
            <form onSubmit={this.handleSubmit} className="container">
                <div className="login-wrapper">
                    {error}
                    <h3 className="login-register-header">Login</h3>

                    <div className="form-group">
                        <label>E-mail</label>
                        <input type="email" 
                        id="email" 
                        placeholder='circleafrica@gmail.com' 
                        onChange={e => this.email = e.target.value}
                        required/>
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type='password' 
                        id='password' 
                        placeholder='Password' 
                        onChange={e => this.password = e.target.value}
                        required/>
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

export default withRouter(Login);
