import React, {Component} from 'react';
import {Route, NavLink} from 'react-router-dom';
import './App.css';
import Footer from './component/Footer/Footer';
import Main from './component/Main/Main';
import Collection from './component/Collection/Collection';
import Quiz from './component/Quiz/Quiz';

class App extends Component{
  render(){

    return (
      <div className="app">
        <div className="nav">
          <NavLink to="/" className="home">채채당</NavLink>
        </div>
        <Route path="/" component={Main} exact={true}/>
        <Route path="/collection" component={Collection}/>
        <Route path="/quiz" component={Quiz}/>
        <Footer/>
      </div>
    );
  };
}

export default App;
