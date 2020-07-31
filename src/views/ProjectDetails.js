import React, {Component} from 'react';
import Navigation from './Navigation';
import information from '../model/ProjectsInformation.json';

class ProjectDetails extends Component{
    constructor(props){
        super(props)
        this.state = {
            info : null
        }
        this.setContent = this.setContent.bind(this);
    }
    componentDidMount(){
        this.setContent();
    }
    componentDidUpdate(prevProps){
        if(prevProps.match.params.showTitle !== this.props.match.params.showTitle){
            this.setContent();
        }
    }
    setContent(){
        for(let x = 0; x < information.projects.length; x++){
            if(this.props.match != null){
                
                if(information.projects[x].showTitle ===  this.props.match.params.showTitle){
                    this.setState({info: information.projects[x]});
                    
                }
            }
            
            
        }
    }
    render(){
        return(
            <div>
                <h1>Work in progress</h1>
                {this.state.info != null &&(
                    <div>
                        <p>{this.state.info.showTitle}</p>
                        <p>{this.state.info.description}</p>
                        <ul>
                            {this.state.info.pictures.map((info)=>{
                                return(
                                    <img className="ProjectDetails" src={require("../Images/" + info)}/>
                                )
                            })}
                        </ul>
                    </div>
                )} 
            </div>
        )
    }
}
export default ProjectDetails;