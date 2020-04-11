import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './Nav.css';

class Nav extends Component {
    render() {
      return (
        <div className="nav">
            <NavLink to="/" className="home">채채당</NavLink>
              <div className="Btndesign">
                <NavLink to="/quiz"><div className="navButton">퀴즈</div></NavLink>
                <NavLink to="/collection"><div className="navButton">도감</div></NavLink>
              </div>
          </div>
      );
    }
}

export default Nav;