import React, { Component } from 'react';
import axios from 'axios';
import './LoginRegister.css';

export default class Register extends Component {

    handleSubmit = e => {
        e.preventDefault();
        const data = {
            first_name: this.firstName,
            last_name: this.lastName,
            middle_name: this.middleName,
            phone: this.phone,
            email: this.email,
            address: this.address,
            user_name: this.userName,
            password: this.password,
            password_confirm: this.confirmPassword,
            farmer: this.farmer,
            investor: this.investor,
            consultant: this.consultant
        };
        
        axios.post('register', data).then(
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
                <div className="register-wrapper">
                    <h3 className="login-register-header">Register</h3>

                    <div className="form-group">
                        <label>First Name</label>
                        <input type="text" 
                        id="firstname" 
                        placeholder='First Name' 
                        onChange={e => this.firstName = e.target.value} 
                        />
                    </div>

                    <div className="form-group">
                        <label>Last Name</label>
                        <input type="text" 
                        id="lastname" 
                        placeholder='Last Name'  
                        onChange={e => this.lastName = e.target.value}
                        />
                    </div>

                    <div className="form-group">
                        <label>Middle Name</label>
                        <input type="text" 
                        id="middlename" 
                        placeholder='Middle Name' 
                        onChange={e => this.middleName = e.target.value}
                        />
                    </div>

                    <div className="form-group">
                        <label>Phone</label>
                        <input type="phone" 
                        id="phone" 
                        placeholder='+234-703-567-1234' 
                        onChange={e => this.phone = e.target.value}
                        />
                    </div>
        
                    <div className="form-group">
                        <label>E-mail</label>
                        <input type="email" 
                        id="email" 
                        placeholder='circleafrica@gmail.com' 
                        onChange={e => this.email = e.target.value}
                        />
                    </div>

                    <div className="form-group">
                        <label>Address</label>
                        <input type="text" 
                        id="address" 
                        placeholder='Your residential address'  
                        onChange={e => this.address = e.target.value}
                        />
                    </div>
        
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
                        <label>Confirm Password</label>
                        <input type='password' 
                        id='password' 
                        placeholder='**********' 
                        onChange={e => this.confirmPassword = e.target.value}
                        />
                    </div>
        
                    <div className="form-group radio-input-group">
                        <input className="farmer-radio" 
                        type="radio" 
                        onChange={e => this.farmer = e.target.value}
                        name="gender" /> Farmer
        
                        <input className="investor-radio" type="radio" 
                        onChange={e => this.investor = e.target.value} 
                        name="gender" /> Investor
        
                        <input className="consultant-radio" type="radio" 
                        onChange={e => this.consultant = e.target.value}
                        name="gender" /> Consultant
                    </div>
        
                    <div className="form-group">
                        <input type='submit' 
                        value='Create' 
                        className='submit' 
                        />
                    </div>
                </div>
            </form>
        )
    }
}
