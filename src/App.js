import React, {Component} from 'react';
import {Route, NavLink} from 'react-router-dom';
import './App.css';
import Main from './component/Main/Main';
import Collection from './component/Collection/Collection';
import Quiz from './component/Quiz/Quiz';

class ButtonNav extends Component {
  render() {
    return (
      <div>
        <NavLink to="/quiz"><div className="navButton mar">퀴즈</div></NavLink>
        <NavLink to="/collection"><div className="navButton">도감</div></NavLink>
      </div>
    );
  }
}

class App extends Component{
  render(){

    return (
      <div className="app">
        <div className="nav">
          <NavLink to="/" className="home">채채당</NavLink>
          <ButtonNav/>
        </div>
        <Route path="/" component={Main} exact={true}/>
        <Route path="/collection" component={Collection}/>
        <Route path="/quiz" component={Quiz}/>
      </div>
    );
  };
}

export default App;
