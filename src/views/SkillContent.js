import SkillInfo from '../model/SkillsInformation.json';
import React, { Component } from 'react';
import SkillInfomation from '../model/SkillsInformation.json';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

class SkillContent extends Component{
    render(){
        return(
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
        )
    }
}
export default SkillContent;