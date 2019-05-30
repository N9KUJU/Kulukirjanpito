import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import testdata from './testdata';

import Header from './components/Header/Header';
import Items from './components/Items/Items';
import Stats from './components/Stats/Stats';
import Settings from './components/Settings/Settings';
import Menu from './components/Menu/Menu';
import AddItem from './components/AddItem/AddItem';
import EditItem from './components/EditItem/EditItem';


class App extends Component {

    constructor(props) {
      super(props);
      this.state = {
        data: testdata,
        selectList: ["Puhelin", "Sähkö", "Vero", "Vesi", "Bensiini"]
      }
      this.handleFormSubmit = this.handleFormSubmit.bind(this);
      this.handleSelectListForm = this.handleSelectListForm.bind(this);
      this.handleDeleteItem = this.handleDeleteItem.bind(this);
    }

  handleFormSubmit(newdata) {
    let storeddata = this.state.data.slice();
    const index = storeddata.findIndex(item => item.id === newdata.id);
    if (index >= 0) {
      storeddata[index] =  newdata;
    } else {
      storeddata.push(newdata);
    }
      storeddata.sort((a,b) => { 
      const aDate = new Date(a.maksupaiva);
      const bDate = new Date(b.maksupaiva);
      return bDate.getTime() - aDate.getTime();
     } );
    this.setState({
      data: storeddata
    });
  }  

  handleSelectListForm(newitem) {
    let selectList = this.state.selectList.slice();
    selectList.push(newitem);
    selectList.sort();
    this.setState({
      selectList: selectList
    });
  }

  handleDeleteItem(id) {
    let storeddata = this.state.data.slice();
    storeddata = storeddata.filter(item => item.id !== id);
    this.setState({
      data: storeddata
    });
  }

  render() {
    return (
      <Router>
      <div className="App">
        <Header />
        <Route path="/" exact render={() => <Items data={this.state.data} />} />
        <Route path="/stats" render={() => <Stats data={this.state.data} /> } />
        <Route path="/settings" render={() => <Settings selectList={this.state.selectList} onFormSubmit={this.handleSelectListForm} /> } />
        <Route path="/add" render={() => <AddItem onFormSubmit={this.handleFormSubmit} selectList={this.state.selectList} />} />
        <Route path="/edit/:id" render={(props) => <EditItem data={this.state.data} 
                                                             selectList={this.state.selectList} 
                                                             onFormSubmit={this.handleFormSubmit}
                                                             onDeleteItem={this.handleDeleteItem} 
                                                             {...props} />} />

        <Menu />
      </div>
      </Router>
    );
  }
}


export default App;
