import React, {Component} from 'react';
import './Quiz.scss';
import Left from './Left';
import Right from './Right';

class Quiz extends Component{
    render(){
        return(
            <div className="quiz">
                <Left/>
                <Right/>
            </div>
        );
    };
}

export default Quiz;