import React, {Component} from 'react';
import {Route, NavLink} from 'react-router-dom';
import './App.css';
import Nav from './component/Nav/Nav';
import Footer from './component/Footer/Footer';
import Main from './component/Main/Main';
import Collection from './component/Collection/Collection';
import Quiz from './component/Quiz/Quiz';
import Member from './component/Main/Team/Member';
import Team from './component/Main/Team/Team';

class App extends Component{
  render(){

    return (
      <div className="app">
        <Route path="/" component={Nav}/>
        <Route path="/" component={Main} exact={true}/>
        <Route path="/collection" component={Collection}/>
        <Route path="/quiz" component={Quiz}/>
        <Route path="/member" component={Team}/>
        {/* <Footer/> */}
      </div>
    );
  };
}

export default App;
