import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './Nav.css';

class Nav extends Component {
    render() {
      return (
        <div className="nav">
            <NavLink to="/" className="home">채찍채찍 당근</NavLink>
              <div className="Btndesign">
                <NavLink to="/quiz"><div className="navButton">퀴즈</div></NavLink>
                <NavLink to="/collection"><div className="navButton">당근 도감</div></NavLink>
                <NavLink to="/member"><div className="navButton">팀원 소개</div></NavLink>
              </div>
          </div>
      );
    }
}

export default Nav;