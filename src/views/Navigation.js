import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import profile from '../Images/jennifer-edit.png'




class Navigation extends Component {
    render() {

        return (
            <div className="navigation-area">
                <div className="layout-size navigation-layout">
                <Link
                    
                    className='home navigation-profile-layout'
                    to={{
                        pathname: "/",
                    }}>
                        <img className="navigation-layout-img" src={profile} alt="profile-pic"/>
                        <h2 className="name">Jennifer Hobbs</h2>
                        <h4 className="job">Junior Developer</h4></Link>
                
                <Link
                    className='navigation nav2'
                    to="/Projects">Projects</Link>
                <Link
                    className='navigation nav3'
                    to="/Skills">Skills</Link>
                <Link
                    className='navigation nav1'
                    to='/'>
                        Home
                    </Link>
                    </div>
                
            </div>
        );
    }
}
export default Navigation;