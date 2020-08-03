import SkillInfo from '../model/SkillsInformation.json';
import React, { Component } from 'react';
import SkillInfomation from '../model/SkillsInformation.json';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell } from 'recharts';

const colors = [];
function set_colors(hex){
    hex = hex.replace(/^\s*#|\s*$/g, '');

    if(hex.length == 3){
        hex = hex.replace(/(.)/g, '$1$1');
    }

    var r = parseInt(hex.substr(0, 2), 16),
        g = parseInt(hex.substr(2, 2), 16),
        b = parseInt(hex.substr(4, 2), 16);
    let percent = 70 / SkillInfomation.skills.length;

    for(let x = 0; x < SkillInfomation.skills.length; x++){
        colors.push('#' +
        ((0|(1<<8) + r + (256 - r) * percent*x / 100).toString(16)).substr(1) +
        ((0|(1<<8) + g + (256 - g) * percent*x / 100).toString(16)).substr(1) +
        ((0|(1<<8) + b + (256 - b) * percent*x / 100).toString(16)).substr(1))
        
    }
    
}

class SkillContent extends Component{
    render(){
        
        set_colors("#d2a5ff");
        console.log(colors);
        return(
            <ResponsiveContainer className="skills" width="100%" height={350}>
                <BarChart
                    margin={{ top: 0, right: 20, left: 20, bottom: 20 }}
                    layout="vertical"
                    data={SkillInfomation.skills.sort(function(a, b){
                        return( b.star - a.star)
                    })}
                >
                    <Bar dataKey="star">
                        {
                            SkillInfomation.skills.map((entry, index)=>(
                                <Cell key={`cell-${index}`} fill={colors[index]}/>
                                
                            ))
                        }
                        </Bar>
                
                    <XAxis axis-line="false" reversed={true} orientation="top" type="number" ticks={[1, 2, 3, 4]} domain={[0, 5]}/>
                    <YAxis orientation="right" type="category" dataKey="skill"/>
                </BarChart>
                </ResponsiveContainer>
        )
    }
}
export default SkillContent;