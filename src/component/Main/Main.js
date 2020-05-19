import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './Main.scss';

class Main extends Component{
    render(){
        return(
            <div className="main">
                <div className="background"></div>
                <div className="content">
                    <div className="title">채찍채찍 당근</div>
                    <div className="sub-title">귀여운 당근 친구들과 함께 여러분의 전공 실력을 키워보세요!</div>
                    <NavLink to="/collection" className="main-button collection">당근 도감</NavLink>
                    <NavLink to="/quiz" className="main-button quiz">퀴즈</NavLink>
                </div>
            </div>
        );
    };
}

export default Main;