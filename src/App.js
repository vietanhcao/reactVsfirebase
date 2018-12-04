import React, { Component } from 'react';
import './App.css';
// import * as firebase from 'firebase';
import Nav from './components/Nav';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import { connect } from 'react-redux';
class App extends Component {
  showForm(){
    if(this.props.isEdit){
      return <NoteForm />
    }
  }
  render() {
    return (
      <div className="App">
        <Nav />
        <div className="container">
          <div className="row">
            <NoteList />
            {
              this.showForm.call(this)
            }
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    isEdit: state.isEdit
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeEditStatus: () => {
      dispatch({type: 'Change_Edit_Status'})
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)

