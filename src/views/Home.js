import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import '../CSS/stylesheet.css';
import pic from '../Images/jennifer-edit.png'


class Home extends Component {


    render() {

        return (
            <div className='layout-size'>
            <div className='grid-container'>

                <div className="name-job">
                    <h1 className="name">Jennifer Hobbs</h1>
                    <h2 className="job">Junior Developer</h2>
                </div>

                <Link
                    className='nav1 navigation'
                    to={{
                        pathname: "/",
                    }}>Home
        </Link>

                <Link
                    className='nav2 navigation'
                    to="/Projects">Projects
        </Link>
                <Link
                    className='nav3 navigation'
                    to="/Skills">Skills
        </Link>
                <div className="information">
                    <img className="Home-page" src={pic} alt="profile pic"/>
                </div>
                <div className="linkedin footer"><a className="footer" href='https://www.linkedin.com/in/jennifer-g-hobbs/'>LinkedIn</a></div>
                <div className="git footer"><a className="footer" href='https://github.com/Jen-Hobbs'>GitHub</a></div>
            </div>
            </div>
        );
    }
}

export default Home;