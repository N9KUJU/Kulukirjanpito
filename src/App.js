import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import testdata from './testdata';
import firebase, { provider, auth } from './firebase';

import Header from './components/Header/Header';
import Items from './components/Items/Items';
import Stats from './components/Stats/Stats';
import Settings from './components/Settings/Settings';
import Menu from './components/Menu/Menu';
import AddItem from './components/AddItem/AddItem';
import EditItem from './components/EditItem/EditItem';
import Content from './components/Content/Content';
import Button from './components/buttons';

class App extends Component {

    constructor(props) {
      super(props);
      this.state = {
        data: testdata,
        selectList: ["Puhelin", "Sähkö", "Vero", "Vesi", "Bensiini"],
        user: null,
        error: null
      }
      this.dbRef = firebase.firestore();
      this.handleFormSubmit = this.handleFormSubmit.bind(this);
      this.handleSelectListForm = this.handleSelectListForm.bind(this);
      this.handleDeleteItem = this.handleDeleteItem.bind(this);
      this.login = this.login.bind(this);
      this.logout = this.logout.bind(this);
    }

    componentDidMount() {

      auth.onAuthStateChanged((user) => {
        if (user) {
          this.setState({
            user: user
          });
          this.refData = this.dbRef.collection("users").doc(user.uid).collection('data');
        
        this.refData.orderBy("maksupaiva", "desc").onSnapshot((docs) => {
          let data = [];
          docs.forEach((doc) => {
            let docdata = doc.data();
            data.push(docdata);
          });
          this.setState({
            data: data
          });
        });
      }
      });
    }

  handleFormSubmit(newdata) {
    this.refData.doc(newdata.id).set(newdata);
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
    this.refData.doc(id).delete().then().catch(error => {console.error("Virhe taitoa poistettaessa: ", error)});
  }

  login() {
    auth.signInWithPopup(provider).then((result) => {
      const user = result.user;
      this.setState({
        user: user,
        error: null
      });
      // ...
    }).catch((error) => {
      const errorMessage = error.message;
      this.setState({
        error: errorMessage
      });
    });
  }


  logout() {
    auth.signOut().then(() => {
      this.setState({
        user: null
      });
      this.refData = null;
    });
  }

  render() {

    if (!this.state.user) {
      return (
        <Router>
          <div className="App">
            <Header />
            <Content>
              <div className="app_welcome">
                <div>Et ole vielä kirjautunut sisään.</div>
                <div><Button primary onClick={this.login}>Kirjaudu sisään</Button></div>
                <div>{this.state.error ? <p>{this.state.error}</p> :null }</div>
              </div>
            </Content>
            <Menu />
          </div>
        </Router>
      );
    }

    return (
      <Router>
      <div className="App">
        <Header />
        <Route path="/" exact render={() => <Items data={this.state.data} />} />
        <Route path="/stats" render={() => <Stats data={this.state.data} /> } />
        <Route path="/settings" render={() => <Settings selectList={this.state.selectList} onFormSubmit={this.handleSelectListForm} 
                                                                                            onLogout={this.logout} 
                                                                                            user={this.state.user} /> } />
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
