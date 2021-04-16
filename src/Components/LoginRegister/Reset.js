import axios from 'axios';
import React, { Component } from 'react';
import { Redirect } from 'react-router';
import './LoginRegister.css';

export class Reset extends Component {

    state = {};

    handleSubmit = e => {
        e.preventDefault();

        const data ={
            token: this.props.match.params.id,
            password: this.password,
            password_confirm: this.confirmPassword
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
                this.setState({
                    message: err.response.data.message
                })
            }
        )
    };

    render() {
        if(this.state.reset) {
            return <Redirect to={'/login'} />
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
                <div className="reset-wrapper">
                    {error}
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

