import axios from 'axios';
import React, { Component } from 'react';

export default class Forgot extends Component {

    state = {};

    handleSubmit = e => {
        e.preventDafault();

        const data ={
            email: this.email
        };

        axios.post('forgot', data).then(
            res => {
                this.setState({
                    message: res.data.message
                    // cls: 'success'
                })
            }
        ).catch(
            err => {
                this.setState({
                    message: err.response.data.message
                    // cls: 'danger'
                })
            }
        )
    };

    render() {

        let message = '';

        if(this.state.message) {
            const cls = 'alert alert-' + this.state.cls;
            message = (
                <div className={cls} role="alert">
                    {this.state.message}
                </div>
            )
        }

        return (
            <form onSubmit={this.handleSubmit} className="container">
                <div className="login-wrapper">
                    {message}

                    <h3 className="login-register-header">Forgot Password</h3>

                    <div className="form-group">
                        <label>E-mail</label>
                        <input type="email" 
                        id="email" 
                        placeholder='circleafrica@gmail.com' 
                        onChange={e => this.email = e.target.value}
                        />
                    </div>
        
                    <div className="form-group">
                        <input type='submit' 
                        value='submit' 
                        className='submit' 
                        />
                    </div>
                </div>
            </form>
        )
    }
}
