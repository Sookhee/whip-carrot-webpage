import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './Nav.css';

class Nav extends Component {
    render() {
      return (
        <div className="nav">  
            <NavLink to="/" className="home">채찍채찍 당근</NavLink>
              <div className="Btndesign">
                <NavLink to="/quiz" activeStyle={{color:'#ff8448'}} className="navButton">퀴즈</NavLink>
                <NavLink to="/collection" activeStyle={{color:'#ff8448'}} className="navButton">당근 도감</NavLink>
                <NavLink to="/member" activeStyle={{color:'#ff8448'}} className="navButton">팀원 소개</NavLink>
              </div>
          </div>
      );
    }
}

export default Nav;