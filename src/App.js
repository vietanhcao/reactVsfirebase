import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { firebaseConnect } from './firebaseConnect';
import * as firebase from 'firebase';
class App extends Component {
  pushData(){
    let dataConnect = firebase.database().ref('dataForNote');
    dataConnect.push({
      title: "ghi chu so 3",
      content: "noi dung ghi chu so 3"
    })
  }
  removeData(id){
    let dataConnect = firebase.database().ref('dataForNote');
    dataConnect.child(id).remove();
  }
  render() {
    console.log(firebaseConnect);
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <button onClick={this.pushData.bind(this)} > Click de thêm mới </button>
        <button onClick={this.removeData.bind(this,'-LSlm-HSyPtIneeeqi_q')} > Click de xoa du lieu  </button>
      </div>
    );
  }
}

export default App;
