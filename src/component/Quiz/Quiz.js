import React, {Component} from 'react';
import './Quiz.scss';
import Intro from '../Intro/Intro';

class Quiz extends Component{
    render(){
        return(
            <div className="quiz">
                <Intro/>
            </div>
        );
    };
}

export default Quiz;