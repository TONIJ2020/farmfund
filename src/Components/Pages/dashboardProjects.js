import React, { Component } from 'react';
import '../Styles/dashboardProjects.css';
import Home from '../../Components/Assets/home_24px.png';
import Transactions from "../../Components/Assets/timeline_24px_outlined.png";
import Projects from "../../Components/Assets/local_florist_24px.png";
import Messages from "../../Components/Assets/sms_24px_outlined.png";
import Notifications from "../../Components/Assets/notifications_24px_outlined.png";
import Okoro1 from '../../Components/Assets/okoro1.png';
import Uche1 from '../../Components/Assets/uche1.png';
import Adaobi1 from '../../Components/Assets/adaobi1.png';
import Okoro2 from '../../Components/Assets/okoro2.png';
import Uche2 from '../../Components/Assets/uche2.png';
import Adaobi2 from '../../Components/Assets/adaobi2.png';
import ProgressBar from '../ProgressBar/ProgressBar';

export default class dashboardProjects extends Component {
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
                    <h2>Projects</h2>
                </div>
                
                <div className="projects-coll">
                    <div className="dash-projects-div">
                        <div className="dash-farmer-div">
                            <h2>FUNDED</h2>
                            <div>
                                <img src={Okoro1} alt="" />
                            </div>
                            <div>
                                <h1>Okoro Fish Farm</h1>
                                <p>Mechanized fish farm with dryer for preservation after harvesting</p>
                                <h3>Needed: 500000 Naira<ProgressBar value={60} max={100}/></h3>
                                <h5>Raised: 300000 Naira</h5>
                            </div>
                        </div>

                        <div className="dash-farmer-div" >
                            <h2>FUNDED</h2>
                            <div>
                                <img src={Uche1} alt="" />
                            </div>
                            <div>
                                <h1>Uche Cassava Farm</h1>
                                <p>Mechanized cassava farm with dryer and grinder for processing</p>
                                <h3>Needed: 200000 Naira<ProgressBar value={90} max={100}/></h3>
                                <h5>Raised: 180000 Naira</h5>
                            </div>
                        </div>

                        <div className="dash-farmer-div" >
                            <h2>CONSULTANT</h2>
                            <div>
                                <img src={Adaobi1} alt="" />
                            </div>
                            <div>
                                <h1>Adaobi Rice Farm</h1>
                                <p>Mechanized Rice farm with boiler and dryer ready for processing</p>
                                <h3>Needed: 800000 Naira<ProgressBar value={38} max={100}/></h3>
                                <h5>Raised: 300000 Naira</h5>
                            </div>
                        </div>

                        <div className="dash-farmer-div">
                            <h2>FUNDED</h2>
                            <div>
                                <img src={Okoro2} alt="" />
                            </div>
                            <div>
                                <h1>Okoro Fish Farm</h1>
                                <p>Mechanized fish farm with dryer for preservation after harvesting</p>
                                <h3>Needed: 500000 Naira<ProgressBar value={60} max={100}/></h3>
                                <h5>Raised: 300000 Naira</h5>
                            </div>
                        </div>

                        <div className="dash-farmer-div" >
                            <h2>FUNDED</h2>
                            <div>
                                <img src={Adaobi2} alt="" />
                            </div>
                            <div>
                                <h1>Adaobi Rice Farm</h1>
                                <p>Mechanized Rice farm with boiler and dryer ready for processing</p>
                                <h3>Needed: 800000 Naira<ProgressBar value={38} max={100}/></h3>
                                <h5>Raised: 300000 Naira</h5>
                            </div>
                        </div>

                        <div className="dash-farmer-div" >
                            <h2>CONSULTANT</h2>
                            <div>
                                <img src={Uche2} alt="" />
                            </div>
                            <div>
                                <h1>Uche Cassava Farm</h1>
                                <p>Mechanized cassava farm with dryer and grinder for processing</p>
                                <h3>Needed: 200000 Naira<ProgressBar value={90} max={100}/></h3>
                                <h5>Raised: 180000 Naira</h5>
                            </div>
                        </div>

                        <div className="dash-farmer-div">
                            <h2>FUNDED</h2>
                            <div>
                                <img src={Okoro2} alt="" />
                            </div>
                            <div>
                                <h1>Okoro Fish Farm</h1>
                                <p>Mechanized fish farm with dryer for preservation after harvesting</p>
                                <h3>Needed: 500000 Naira<ProgressBar value={60} max={100}/></h3>
                                <h5>Raised: 300000 Naira</h5>
                            </div>
                        </div>

                        <div className="dash-farmer-div" >
                            <h2>FUNDED</h2>
                            <div>
                                <img src={Adaobi2} alt="" />
                            </div>
                            <div>
                                <h1>Adaobi Rice Farm</h1>
                                <p>Mechanized Rice farm with boiler and dryer ready for processing</p>
                                <h3>Needed: 800000 Naira<ProgressBar value={38} max={100}/></h3>
                                <h5>Raised: 300000 Naira</h5>
                            </div>
                        </div>

                        <div className="dash-farmer-div" >
                            <h2>CONSULTANT</h2>
                            <div>
                                <img src={Uche2} alt="" />
                            </div>
                            <div>
                                <h1>Uche Cassava Farm</h1>
                                <p>Mechanized cassava farm with dryer and grinder for processing</p>
                                <h3>Needed: 200000 Naira<ProgressBar value={90} max={100}/></h3>
                                <h5>Raised: 180000 Naira</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
