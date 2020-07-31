import React, { Component } from 'react';
import Navigation from './Navigation';
import Education from '../model/EducationInformation.json';
import SkillInfomation from '../model/SkillsInformation.json';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';



class Skills extends Component {
    render() {
        console.log(SkillInfomation.skills.sort(function(a, b){
            return(a.star - b.star)
        }));
        return (
            <div className="main">
                <Navigation />
                <h1>Work in progress</h1>
                <div className="skills-layout">
                <div>
                <h2>Skills</h2>
                
                <ResponsiveContainer width="80%" height={350}>
                <BarChart
                    layout="vertical"
                    data={SkillInfomation.skills.sort(function(a, b){
                        return( b.star - a.star)
                    })}
                >
                    <Bar dataKey="star" fill='#8884d8'/>
                    <XAxis type="number" ticks={[1, 2, 3, 4]} domain={[0, 5]}/>
                    <YAxis type="category" dataKey="skill"/>
                </BarChart>
                </ResponsiveContainer>
                </div>
                <div>
                <h2>Education</h2>
                <ul>
                    {Education.education.map((school) => {
                        return (
                            <li key={school.degree}>
                                <h3>{school.name}</h3>
                                <h4>{school.degree}</h4>
                                <h5>{school.startDate} - {school.endDate}</h5>
                                <ul>
                                    {school.information.map((info) => {
                                        return (
                                            <li key={info.info}>{info.info}</li>
                                        )

                                    })}
                                </ul>
                            </li>
                        )

                    })}
                </ul>
                </div>
            </div>
            </div>
        );
    }
}

export default Skills;
