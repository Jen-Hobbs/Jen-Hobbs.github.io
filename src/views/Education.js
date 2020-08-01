import React, {Component} from 'react';
import EducationInfo from '../model/EducationInformation.json';

class Education extends Component{
    render(){
        return(
            <ul className="education">
                    {EducationInfo.education.map((school) => {
                        return (
                            <li key={school.degree}>
                                <h3 className="education">{school.name}</h3>
                                <h4 className="education">{school.degree}</h4>
                                <h5 className="education">{school.startDate} - {school.endDate}</h5>
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
        )
    }
}
export default Education;