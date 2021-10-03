import React, { Component } from 'react';
import '../Styles/dashboardTransactions.css';
import Home from '../../Components/Assets/home_24px.png';
import Transactions from "../../Components/Assets/timeline_24px_outlined.png";
import Projects from "../../Components/Assets/local_florist_24px.png";
import Messages from "../../Components/Assets/sms_24px_outlined.png";
import Notifications from "../../Components/Assets/notifications_24px_outlined.png";

export default class dashboardTransactions extends Component {
    render() {
        return (
            <div className="transactions-page">
                <aside className="dashboard-side-bar1">
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

                <div className="welcome-message1-div">
                    <h1 className="welcome-message1">Dashboard</h1>
                    <h2>Transactions</h2>
                </div>
                
                <div className="coll">
                    <h2>Transactions</h2>
                    <div className="transactions coll3">
                        <div className="coll0">
                            <h1>FUND</h1>
                            <p>12-08-2021 23:00 AM</p>
                            <p>Uche Cassava Farm</p>
                        </div>
                        <div className="coll1">
                            <h2>+$100</h2>
                        </div>
                    </div>

                    <div className="transactions coll3">
                        <div className="coll0">
                            <h1>FUND</h1>
                            <p>12-08-2021 23:00 AM</p>
                            <p>Uche Cassava Farm</p>
                        </div>
                        <div className="coll1">
                            <h2>+$300</h2>
                        </div>
                    </div>

                    <div className="transactions coll3">
                        <div className="coll0">
                            <h1>FUND</h1>
                            <p>12-08-2021 23:00 AM</p>
                            <p>Uche Cassava Farm</p>
                        </div>
                        <div className="coll1">
                            <h2>+$150</h2>
                        </div>
                    </div>

                    <div className="transactions coll3">
                        <div className="coll0">
                            <h1>Withdrawal</h1>
                            <p>12-08-2021 23:00 AM</p>
                            <p>Uche Cassava Farm</p>
                        </div>
                        <div className="coll1">
                            <h2>-$50</h2>
                        </div>
                    </div>

                    <div className="transactions coll3">
                        <div className="coll0">
                            <h1>Withdrawal</h1>
                            <p>12-08-2021 23:00 AM</p>
                            <p>Uche Cassava Farm</p>
                        </div>
                        <div className="coll1">
                            <h2>-$20</h2>
                        </div>
                    </div>

                    <div className="transactions coll3">
                        <div className="coll0">
                            <h1>FUND</h1>
                            <p>12-08-2021 23:00 AM</p>
                            <p>Uche Cassava Farm</p>
                        </div>
                        <div className="coll1">
                            <h2>+$150</h2>
                        </div>
                    </div>

                    <div className="transactions coll3">
                        <div className="coll0">
                            <h1>Withdrawal</h1>
                            <p>12-08-2021 23:00 AM</p>
                            <p>Uche Cassava Farm</p>
                        </div>
                        <div className="coll1">
                            <h2>-$50</h2>
                        </div>
                    </div>

                    <div className="transactions coll3">
                        <div className="coll0">
                            <h1>Withdrawal</h1>
                            <p>12-08-2021 23:00 AM</p>
                            <p>Uche Cassava Farm</p>
                        </div>
                        <div className="coll1">
                            <h2>-$20</h2>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
