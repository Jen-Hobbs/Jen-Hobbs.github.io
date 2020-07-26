import React, { Component } from 'react';
import Navigation from './Navigation';
import ProjectInfo from '../model/ProjectsInformation.json'
import ProjectDetails from './ProjectDetails';
import {Route, Link} from 'react-router-dom';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.handleResize = this.handleResize.bind(this);
        this.state = {
            information: ProjectInfo.projects,
            width : window.innerWidth
        };
        
        window.addEventListener('resize', this.handleResize);
    }
    handleResize(){
        this.setState({width: window.innerWidth});
    }
    componentWillUnmount(){
        window.removeEventListener('resize', this.handleResize);
    }
    render() {
        console.log(this.state);
        return (
            
            <div className="main">
                <Navigation />
                
                <div className="layout-size main">
                    <h1>Projects</h1>
                    <ul className="project">
                        {this.state.information.map((project) => {
                            return (
                                <div>
                                    {this.state.width < 800 && (
                                    <Link to={{pathname: '/Projects/' + project.showTitle }} className="project" key={project.showTitle}> 
                                        <img className="project-img" src={require("../Images/"+ project.img)} alt={project.img}/>
                                        <h2 className="project-title">{project.showTitle}</h2>
                                        <ul className="project-languages">
                                            {project.languages.map((language) => {
                                                return (
                                                    <li className="language" key={language}>{language}</li>
                                                )
                                            })}
                                        </ul>
                                    </Link>
                                    )}
                                </div>
                            );
                        })}
                    </ul>
                </div>
                
                
            </div>

        );
    }
}

export default Projects;
