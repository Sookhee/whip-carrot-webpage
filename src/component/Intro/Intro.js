import React, {Component} from 'react';
import './Intro.scss';

class Intro extends Component{
    render(){
        return(
            <div className="intro">
                <div className="wrap">
                    <div className="title">퀴즈</div>
                    <div className="sub">정답을 맞히신 분들께 추첨을 통해 선물을 드립니다!</div>
                </div>
                <hr/>
            </div>
        );
    };
}

export default Intro;