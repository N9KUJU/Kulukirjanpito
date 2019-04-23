import React, { Component } from 'react';
import './App.css';


import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Kulukortti from './components/Kulukortti/Kulukortti';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="content">
        <Kulukortti />
        <Kulukortti />
        <Kulukortti />
        <Kulukortti />
        <Kulukortti />
        <Kulukortti />
        <Kulukortti />
        <Kulukortti />
        <Kulukortti />
        <Kulukortti />
        <Kulukortti />
        <Kulukortti />
        <Kulukortti />
        <Kulukortti />
        <Kulukortti />
        <Kulukortti />
        </div>
        <Menu />
      </div>
    );
  }
}


export default App;
