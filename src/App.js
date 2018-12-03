import React, { Component } from 'react';
import './App.css';
import { firebaseConnect } from './firebaseConnect';
// import * as firebase from 'firebase';
import Nav from './components/Nav';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
class App extends Component {
  constructor(props) {
    super(props);
    this.state ={}
  }
  addData(item){
    firebaseConnect.push(item)
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <div className="container">
          <div className="row">
            <NoteList />
            <NoteForm addData={this.addData.bind(this)} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
