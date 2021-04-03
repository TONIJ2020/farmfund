import axios from 'axios';
import React, { Component } from 'react';
import { Redirect } from 'react-router';

export default class Reset extends Component {

    state = {};

    handleSubmit = e => {
        e.preventDafault();

        const data ={
            token: this.props.match.params.id,
            password: this.password,
            password_confirm: this.confirmPassword,
        };

        axios.post('reset', data).then(
            res => {
                console.log(res);
                this.setState({
                    reset: true
                });
            }
        ).catch(
            err => {
                console.log(err);
            }
        )
    };

    render() {
        if(this.state.reset) {
            return <Redirect to={'/login'} />
        }

        return (
            <form onSubmit={this.handleSubmit} className="container">
                <div className="login-wrapper">
                    <h3 className="login-register-header">Reset Password</h3>

                    <div className="form-group">
                        <label>Password</label>
                        <input type='password' 
                        id='password' 
                        placeholder='**********' 
                        onChange={e => this.password = e.target.value}
                        />
                    </div>

                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input type='password' 
                        id='password' 
                        placeholder='**********' 
                        onChange={e => this.confirmPassword = e.target.value}
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

