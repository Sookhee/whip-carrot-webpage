import React, {Component} from 'react';
import './Intro.scss';

class Intro extends Component{
    render(){
        return(
            <div className="intro">
                <div className="wrap">
                    <div className="title">{this.props.title}</div>
                    <div className="sub">{this.props.sub}</div>
                </div>
                <hr/>
            </div>
        );
    };
}

export default Intro;