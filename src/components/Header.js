import React, { useContext } from 'react';
import Avatar_7 from '../assets/SuperAdmin/images/profile_img.png';
import { useHistory } from 'react-router-dom';
import { UserContext } from "../App";

export default function Header() {
    const history = useHistory()
    const { state, dispatch } = useContext(UserContext)
    return (
        <header class="page-topbar" id="header">
            <div className="navbar navbar-fixed">
                <nav
                    className="navbar-main navbar-color nav-collapsible sideNav-lock navbar-dark gradient-45deg-indigo-purple no-shadow">
                    <div className="nav-wrapper">
                        <ul className="navbar-list right">
                            {/* <li><a className="waves-effect waves-block waves-light notification-button"
                                data-target="notifications-dropdown"><i className="material-icons">notifications_none<small
                                    className="notification-badge">5</small></i></a></li> */}
                            <li><a className="waves-effect waves-block waves-light profile-button"
                                data-target="profile-dropdown"><span className="avatar-status avatar-online"><img
                                    src={Avatar_7} alt="avatar" /><i></i></span></a></li>
                            {/* <li><a className="waves-effect waves-block waves-light sidenav-trigger" href="#"
                                data-target="slide-out-right"><i className="material-icons">settings</i></a></li> */}
                            <li>

                            </li>
                        </ul>
                        {/* 
                        <ul className="dropdown-content" id="notifications-dropdown">
                            <li>
                                <h6>NOTIFICATIONS<span className="new badge">5</span></h6>
                            </li>
                            <li className="divider"></li>
                            <li><a className="black-text" href="#!"><span
                                className="material-icons icon-bg-circle cyan small">add_shopping_cart</span> A new order has
                been placed!</a>
                                <time className="media-meta grey-text darken-2" datetime="2015-06-12T20:50:48+08:00">2 hours ago</time>
                            </li>
                            <li><a className="black-text" href="#!"><span className="material-icons icon-bg-circle red small">stars</span>
                Completed the task</a>
                                <time className="media-meta grey-text darken-2" datetime="2015-06-12T20:50:48+08:00">3 days ago</time>
                            </li>
                            <li><a className="black-text" href="#!"><span
                                className="material-icons icon-bg-circle teal small">settings</span> Settings updated</a>
                                <time className="media-meta grey-text darken-2" datetime="2015-06-12T20:50:48+08:00">4 days ago</time>
                            </li>
                            <li><a className="black-text" href="#!"><span
                                className="material-icons icon-bg-circle deep-orange small">today</span> Director meeting
                started</a>
                                <time className="media-meta grey-text darken-2" datetime="2015-06-12T20:50:48+08:00">6 days ago</time>
                            </li>
                            <li><a className="black-text" href="#!"><span
                                className="material-icons icon-bg-circle amber small">trending_up</span> Generate monthly
                report</a>
                                <time className="media-meta grey-text darken-2" datetime="2015-06-12T20:50:48+08:00">1 week ago</time>
                            </li>
                        </ul> */}

                        <ul className="dropdown-content" id="profile-dropdown">
                            <li><a className="grey-text text-darken-1" href="user-profile-page.html"><i
                                className="material-icons">person_outline</i>Profile</a></li>
                            <li><a className="grey-text text-darken-1" onClick={() => {
                                localStorage.clear()
                                dispatch({ type: "CLEAR" })
                                history.push("/")
                            }}><i
                                className="material-icons">keyboard_tab</i>Logout</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
    {/* <!-- END: Header--></header> */ }
}

