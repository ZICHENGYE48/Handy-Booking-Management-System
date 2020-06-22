import React, { Component } from 'react';
import './Header.css';
import search from '../../img/search.png';
import notification from '../../img/notification.png'

class Header extends Component{
    render(){
    return (
    <div className="header">
        <div className="search-icon">
            <img src={search} alt="search icon"></img>
        </div>
        <div className="notification-icon">
        <img src={notification} alt="notification icon"></img>
        </div>
        <div className="username">Username</div>
    </div>
    )
    }
}

export default Header;