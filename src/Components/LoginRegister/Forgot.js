import axios from 'axios';
import React, { Component } from 'react';

export default class Forgot extends Component {

    handleSubmit = e => {
        e.preventDafault();

        const data ={
            email: this.email
        };

        axios.post('forgot', data).then(
            res => {
                console.log(res)
            }
        ).catch(
            err => {
                console.log(err);
            }
        )
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="container">
                <div className="login-wrapper">
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
