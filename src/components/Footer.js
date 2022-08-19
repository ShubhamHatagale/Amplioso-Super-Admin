import React, { Component } from 'react'

export default class Footer extends Component {
    componentDidMount() {
        const M = window.M;
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.collapsible');
            var instances = M.Collapsible.init(elems);
        });
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.sidenav-main');
            var instances = M.Sidenav.init(elems);
        });
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.notification-button');
            var instances = M.Dropdown.init(elems);
        });
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.profile-button');
            var instances = M.Dropdown.init(elems);
        });
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.modal');
            var instances = M.Modal.init(elems);
        })
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.notification-button');
            var instances = M.Dropdown.init(elems);
        });
    }


    render() {
        return (
            <footer
                className="page-footer footer footer-static footer-dark gradient-45deg-indigo-purple gradient-shadow navbar-border navbar-shadow">
                <div className="footer-copyright">
                    <div className="container" ><span>&copy; 2021 <a href="#">Amplioso</a> All rights reserved.</span><span
                        className="right hide-on-small-only">Powered by <a href="#">Conversant Technologies</a></span></div>
                </div>
            </footer>
        )
    }
}

// const Footer = () => {
//     return (
//         <footer
//             className="page-footer footer footer-static footer-dark gradient-45deg-indigo-purple gradient-shadow navbar-border navbar-shadow">
//             <div className="footer-copyright">
//                 <div className="container" ><span>&copy; 2021 <a href="#">Amplioso</a> All rights reserved.</span><span
//                     className="right hide-on-small-only">Design and Developed by <a href="#">Conversant</a></span></div>
//             </div>
//         </footer>
//     )
// }
// export default Footer;
