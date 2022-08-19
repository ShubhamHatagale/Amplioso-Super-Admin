// import React, { Component } from 'react'
// import { Redirect } from 'react-router-dom'
// export default class Protected extends Component {
//     render() {
//         const Components = this.props.data;
//         const isAuthenticated = localStorage.getItem('user');
//         return isAuthenticated ? (
//             Components) : (
//             <Redirect to={{ pathname: '/login' }} />
//         );
//     }
// }
import React from 'react'
import { Redirect } from 'react-router-dom'
export default function Protected({ children }) {
    // const Components = props.comp;
    // console.log(Components);
    const isAuthenticated = localStorage.getItem('user');
    return isAuthenticated ? (
        children) : (
        <Redirect to={{ pathname: '/login' }} />
    );
}

