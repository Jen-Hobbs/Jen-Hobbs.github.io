import React, { Component } from 'react';
import Navigation from './Navigation';
import Education from './Education';
import SkillContent from './SkillContent';



class Skills extends Component {
    render() {
        return (
            <div className="main">
                <Navigation />
                <div className="main-alignment">
                <h1 className="skills">Knowledge Base</h1>
                <div className="skills-layout">
                <div>
                <h2 className="skills">Skills</h2>
                <SkillContent/>
                </div>
                <div>
                <h2 className="skills">Education</h2>
                <Education/>
                </div>
                </div>
            </div>
            </div>
        );
    }
}

export default Skills;
