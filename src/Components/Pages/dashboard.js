import React, { Component } from 'react';
import '../Styles/dashboard.css';

export default class dashboard extends Component {
constructor(props) {
    super(props)

    this.state = {
         ...JSON.parse(localStorage.getItem("userData"))
    }
}

    render() {
        return (
            <div className='dashboard-div'>
                <div className="welcome-message-div"><h1 className="welcome-message">Hello!  {this.state.firstName} {this.state.lastName}, Welcome to FarmFund.</h1>
                <h4>We are happy to have you in our team and we look forward to working with you. Fill free to contact us at any time.</h4>
                </div>



                <div className="personal-info-div"><h2 className="personal-info">PERSONAL INFORMATION</h2></div>

                <div>
                    <h2 className="info">FULL NAME</h2>
                    <span className="names">
                        <p>First Name: {this.state.firstName}</p>
                        <p>Middle Name: {this.state.middleName}</p>
                        <p>
                        Last Name: {this.state.lastName}</p>
                    </span>
                </div>
                <hr />

                <div>
                    <h2 className="info">CONTACT</h2>
                    <span className="names">
                        <p>Contact Address: {this.state.address}</p>
                        <p>E-mail Address: {this.state.email}</p>
                        <p>
                        Contact Phone Number: {this.state.phone}</p>
                    </span>
                </div>
                <hr />

                <div>
                    <h2 className="info">DESIGNATION</h2>
                    <span className="names">
                        <p>Farmfund Designation: {this.state.track}</p>
                    </span>
                </div>
            </div>
        )
    }
}
