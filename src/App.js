import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Kulukortti />
        <Kulukortti />
      </div>
    );
  }
}

function Kulukortti(props) {
  return (
    <div className="kulukortti">
      <div className="kulukortti__rivi">
        <div className="kulukortti__tyyppi">Sähkö</div>
        <div className="kulukortti__summa">437,50 €</div>
      </div>
      <div className="kulukortti__rivi">
        <div className="kulukortti__maksupäivä">20.3.2019</div>
        <div className="kulukortti__ajanjakso">1.12.2018-28.2.2019</div>
      </div>
      <div className="kulukortti__rivi"> 
        <div className="kulukortti__maksunsaaja">Fortum</div>
        <div className="kulukortti__keskiarvo">145,83 € / kk</div>
      </div> 
    </div>

  );
}

export default App;
