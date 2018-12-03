import React, { Component } from 'react';
import './App.css';
import { firebaseConnect } from './firebaseConnect';
import * as firebase from 'firebase';
import Nav from './components/Nav';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
class App extends Component {

  render() {
    console.log(firebaseConnect);
    
    return (
      <div className="App">
        <Nav />
        <div className="container">
          <div className="row">
            <NoteList />
            <NoteForm />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
