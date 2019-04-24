import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';


import Header from './components/Header/Header';
import Items from './components/Items/Items';
import Stats from './components/Stats/Stats';
import Settings from './components/Settings/Settings';
import Menu from './components/Menu/Menu';


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Header />
        <Route path="/" exact component={Items} />
        <Route path="/stats" component={Stats} />
        <Route path="/settings" component={Settings} />
        <Menu />
      </div>
      </Router>
    );
  }
}


export default App;
