import React, {Component} from 'react';
import './Quiz.scss';
import Intro from '../Intro/Intro';

class Quiz extends Component{
    render(){
        return(
            <div className="quiz">
                <Intro title="퀴즈" sub="정답을 맞히신 분들께 추첨을 통해 선물을 드립니다!"/>
            </div>
        );
    };
}

export default Quiz;