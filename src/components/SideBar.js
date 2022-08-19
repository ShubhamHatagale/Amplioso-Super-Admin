import React, { Component, useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom'
import Logo from '../assets/SuperAdmin/images/logo.png';
import Home from './Home';

// export default function SideBar() {
//     const history = useHistory()
//     const [isActive, setisActive] = useState(false)


//     const ViewEmployee = () => {
//         history.push({
//             pathname: "/",
//             state: { detail: isActive },
//         });
//     };
//     const handleToggle = () => {
//         this.setState({
//             isActive: !this.state.isActive,
//         });
//         localStorage.setItem("sidebar", !this.state.isActive)
//     };

class Sidebar extends Component {
    constructor() {
        super();
        this.state = {
            isHovered: false,
            isActive: false,
            showSide: true
        };
        this.handleHover = this.handleHover.bind(this);
        this.handleToggle = this.handleToggle.bind(this)
    }
    handleHover = () => {
        this.setState(prevState => ({
            isHovered: !prevState.isHovered
        }));
    }
    handleToggle = () => {
        this.setState({
            isActive: !this.state.isActive,
            showSide: !this.state.showSide
        });
        localStorage.setItem("sidebar", !this.state.isActive)
    };


    render() {
        const btnClass = this.state.isHovered ? "nav-expanded" : "nav-collapsed";
        const isActive = this.state.isActive ? "nav-lock" : "";
        const isActiveradio = this.isActive ? "radio_button_checked" : "radio_button_unchecked";
        const radioState = this.state.isActive ? "" : "main-full";
        return (
            <div>
                {/* <Home data={radioState} /> */}
                <aside className={"sidenav-main nav-collapsible sidenav-light sidenav-active-square "
                    //  + btnClass + isActive
                }
                //   onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}
                >
                    <div className="brand-sidebar">
                        <h1 className="logo-wrapper"><a className="brand-logo darken-1" to="index.html">
                            <img className="hide-on-med-and-down" src={Logo} alt="Amplioso logo" />
                            {/* <img className="hide-on-med-and-down" src={logoclass1} alt="Amplioso logo" /> */}
                            <span
                                className="logo-text hide-on-med-and-down">Amplioso</span></a><a className="navbar-toggler" to="#">
                                <i className="material-icons abc" onClick={this.handleToggle}>{isActiveradio}</i>
                            </a></h1>
                    </div>
                    <ul className="sidenav sidenav-collapsible leftside-navigation collapsible sidenav-fixed menu-shadow" id="slide-out"
                        data-menu="menu-navigation" data-collapsible="menu-accordion">
                        <li className=" bold">
                            <Link className="waves-effect waves-cyan active" to="/" >
                                <i className="material-icons">dvr</i><span className="menu-title" data-i18n="Dashboard">Dashboard
                                </span>
                            </Link>
                        </li>
                        <li className="bold"><Link className="waves-effect waves-cyan " to="/user/view"><i className="material-icons">person_outline</i><span className="menu-title" data-i18n="Templates">User Management</span></Link></li>
                        <li className="bold"><Link className="collapsible-header waves-effect waves-cyan " ><i
                            className="material-icons">domain</i><span className="menu-title" data-i18n="Templates">Masters Management</span></Link>
                            <div className="collapsible-body">
                                <ul className="collapsible collapsible-sub" data-collapsible="accordion">
                                    <li><Link to="/companies/view"><i className="material-icons">radio_button_unchecked</i><span
                                        data-i18n="Invoice List">Companies</span></Link> </li>
                                    <li><Link to="/role/view"><i className="material-icons">radio_button_unchecked</i><span
                                        data-i18n="Invoice List">Role</span></Link> </li>
                                    <li><Link to="/countries/view"><i className="material-icons">radio_button_unchecked</i><span
                                        data-i18n="Invoice List">Countries</span></Link> </li>
                                    <li><Link to="/employee/view"><i className="material-icons">radio_button_unchecked</i><span
                                        data-i18n="Invoice List">Employee Strength</span></Link> </li>
                                    <li><Link to="/averageemployee/view"><i className="material-icons">radio_button_unchecked</i><span
                                        data-i18n="Invoice List">Average Employee</span></Link> </li>
                                    <li><Link to="/feedback/view"><i className="material-icons">radio_button_unchecked</i><span
                                        data-i18n="Invoice List">FeedBack Frequency</span></Link> </li>
                                    <li><Link to="/package/view"><i className="material-icons">radio_button_unchecked</i><span
                                        data-i18n="Invoice List">Packages</span></Link> </li>
                                    <li><Link to="/coupon/view"><i className="material-icons">radio_button_unchecked</i><span
                                        data-i18n="Invoice List">Coupons</span></Link> </li>
                                    <li><Link to="/sector/view"><i className="material-icons">radio_button_unchecked</i><span
                                        data-i18n="Invoice List">Sector</span></Link> </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </aside>
            </div >
        )
    }
    //     }

}
export default Sidebar