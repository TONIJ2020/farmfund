import React, { useState } from 'react';
import {useSpring, animated} from 'react-spring';
import './LoginRegister.css'

function LoginRegister() {
    const [registrationFormStatus, setRegistrationFormStatus] = useState(false);
    const loginProps = useSpring({
        left: registrationFormStatus ? -500 : 0,
        opacity: registrationFormStatus ? 0 : 1
    })
    const registerProps = useSpring({
        left: registrationFormStatus ? 0 : 500,
        opacity: registrationFormStatus ? 1 : 0
    })

    const loginBtnProps = useSpring({
        borderBottom: registrationFormStatus ? 'solid 0px transparent' : 'solid 2px #70C217' 
    })
    const registerBtnProps = useSpring({
        borderBottom: registrationFormStatus ? 'solid 2px #70C217' : 'solid 0px transparent' 
    })

    function registerClicked() { setRegistrationFormStatus(true)}
    function loginClicked() { setRegistrationFormStatus(false)}

    return (
        <div className="login-register-wrapper">
            <div className="nav-buttons">
                <animated.button onClick= {loginClicked} id="loginBtn" style={loginBtnProps}>Login</animated.button>
                <animated.button onClick= {registerClicked} id="registerBtn" style={registerBtnProps}>Register</animated.button>
            </div>
            <div className="form-group">
                <animated.form action='' id='loginform' style={loginProps}><LoginForm /></animated.form>
                <animated.form action='' id='registerform' style={registerProps}><RegisterForm /></animated.form> 
            </div>
            <animated.div className="forgot-panel" style={loginProps}><a href="#forgot">Forgot your password</a></animated.div>
        </div>
    )
}

function LoginForm() {
    return (
    <React.Fragment>
        <label for='username'>Username</label>
        <input type='text' id='username' />
        <label for='password'>Password</label>
        <input type='text' id='password' />
        <input type='submit' value='submit' className='submit' />
    </React.Fragment>
    )
}

function RegisterForm() {
    return (
        <React.Fragment>
            <label for="firstname">First Name</label>
            <input type="text" id="firstname" />
            <label for="lastname">Last Name</label>
            <input type="text" id="lastname" />
            <label for="middlename">Middle Name</label>
            <input type="text" id="middlename" />
            <label for="phone">Phone</label>
            <input type="text" id="phone" />
            <label for="email">E-mail</label>
            <input type="text" id="email" />
            <label for="address">Address</label>
            <input type="text" id="address" />
            <div className="radio-input-group">
                <input className="farmer-radio" type="radio" value="Male" name="gender" /> Farmer
                <input className="investor-radio" type="radio" value="Female" name="gender" /> Investor
                <input className="consultant-radio" type="radio" value="Other" name="gender" /> Consultant
            </div>
            <input type='submit' value='submit' className='submit' />
        </React.Fragment>
    )
}

export default LoginRegister;
