import React, { Component } from 'react';
import { Redirect } from 'react-router';
import '../Styles/dashboard.css';
import Home from '../../Components/Assets/home_24px.png';
import Transactions from "../../Components/Assets/timeline_24px_outlined.png";
import Projects from "../../Components/Assets/local_florist_24px.png";
import Messages from "../../Components/Assets/sms_24px_outlined.png";
import Notifications from "../../Components/Assets/notifications_24px_outlined.png";

export default class dashboard extends Component {
constructor(props) {
    super(props)

    this.state = {
        ...JSON.parse(localStorage.getItem("userData"))
    }
}

    render() {
        if(localStorage.getItem('userData')){
            return (
                <div className='dashboard-div'>
                    <aside className="dashboard-side-bar">
                        <ul>
                            <li><a href = "/dashboard" className = "side-bar-home"><img src={Home} alt=""/></a></li>
                            <li><a href = "/dashboardTransactions"
                            className = "side-bar-transactions"><img src={Transactions} alt=""/></a></li> 
                            <li><a href = "/dashboardProjects"
                            className = "side-bar-projects"><img src={Projects} alt=""/></a></li>
                            <li><a href = "/dashboardMessages"
                            className = "side-bar-messages"><img src={Messages} alt=""/></a></li>
                            <li><a href = "/dashboardNotifications"
                            className = "side-bar-notifications" ><img src={Notifications} alt=""/></a></li>
                        </ul>
                    </aside>

                    <div className="welcome-message-div">
                        <h1 className="welcome-message">Dashboard</h1>
                        <h2>Home</h2>
                    </div>

                    <div className="income-board-div">
                        <div className="total-income-div" >
                            <h6>Total Income</h6>
                            <h3>$100</h3>
                            <h5 className="total-income-h6">45%</h5>
                        </div>
                        <div className="total-income-div" >
                            <h6>Total Deposit</h6>
                            <h3>$2000</h3>
                            <h5 className="total-deposit-h6">20%</h5>
                        </div>
                        <div className="total-income-div" >
                            <h6>Total Profit</h6>
                            <h3>$500</h3>
                            <h5 className="total-profit-h6">75%</h5>
                        </div>
                        <div className="total-income-div" >
                            <h6>Total Withdrawals</h6>
                            <h3>$100</h3>
                        </div>
                    </div>

                    <div className="user-data-div">
                        <div className="dashboard-profile-img-div">
                            <img src={this.state.profileImg} alt=""/>
                        </div>

                        <div className="dashboard-profile-details-div">
                            <h2 className="name">{this.state.firstName} {this.state.lastName}</h2>
                            <h2 className="email">{this.state.email}</h2>
                            <h2 className="address">{this.state.address}</h2>
                            <h2 className="contact">{this.state.phone}</h2>
                            <h2 className="track">{this.state.track}</h2>
                        </div>
                    </div>

                    <div className="total-profit-chart-div">
                        <div className="profit-chart-div">
                            <h6>Total Profit</h6>
                            <h3>75%</h3>
                            <h6>$500</h6>
                        </div>

                        <div className="dashboard-profile-details-div">

                        </div>
                    </div>
                </div>
            );
        }else{
            return (
            Redirect("/login")
            );
        }
    }
}
