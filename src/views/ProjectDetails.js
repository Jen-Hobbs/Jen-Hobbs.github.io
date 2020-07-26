import React, {Component} from 'react';

class ProjectDetails extends Component{
    constructor(props){
        super(props)
        this.state = {width: 0}

    }
    componentDidMount(){
        this.setState({width: window.innerWidth});
    }
    render(){
        console.log("hello world");
        return(
            <div>
                <p>{this.state.width}</p>
            </div>
        )
    }
}
export default ProjectDetails;