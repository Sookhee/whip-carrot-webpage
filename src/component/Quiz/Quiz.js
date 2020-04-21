import React, {Component} from 'react';
import './Quiz.scss';
import Right from './Right';
import Intro from '../Intro/Intro';

class Quiz extends Component{

    render(){
        return(
            <div>
                <Intro title="퀴즈" sub="정답을 맞히신 분들께 추첨을 통해 선물을 드립니다!"/>
                <Right/>
            </div>
        );
    };
}

export default Quiz;