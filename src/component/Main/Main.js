import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './Main.scss';
import Team from './Team/Team';

class Main extends Component{
    render(){
        return(
            <div className="main">
                <div className="flex-wrap">
                    <div className="left">
                        <div className="title">채찍채찍당근과 함께<br/>여러분의 전공 실력을 쑥쑥! 키워보세요 :D</div>
                        <NavLink to="/quiz"><div className="button">퀴즈</div></NavLink>
                        <NavLink to="/collection"><div className="button">도감</div></NavLink>
                    </div>
                    <div className="right">
                        <div className="backgronud-illustration">
                
                        </div>
                    </div>
                </div>
                
                <Team/>
            </div>
        );
    };
}

export default Main;