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
                        <div className="title"><span className="title_big">채찍채찍 당근</span>
                        <br/><span className="title_small">당근으로 여러분의 전공 실력을 키워보세요!</span></div>
                        <div className="button-layout">
                            <NavLink to="/quiz"><div className="button">퀴즈</div></NavLink>
                            <NavLink to="/collection"><div className="button btn_design">당근 도감</div></NavLink>
                        </div>
                    </div>
                    <div className="right">
                        <div className="backgronud-illustration">
                
                        </div>
                    </div>
                </div>
                
                {/* <Team/> */}
            </div>
        );
    };
}

export default Main;