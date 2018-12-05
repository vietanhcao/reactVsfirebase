import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import { connect } from 'react-redux';
import NoteFormadd from './components/NoteFormadd';
import AlertInfor from './components/AlertInfor';
class App extends Component {
  showForm(){
    if(this.props.isEdit){
      return <NoteForm />
    }
  }
  showFormAdd(){
    if(this.props.isAdd){
      return <NoteFormadd />
    }
  }
  render() {
    return (
      <div className="App">
        <Nav />
        <AlertInfor />
        <div className="container">
          <div className="row">
            {
              this.showFormAdd.call(this)
            }
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
    isEdit: state.isEdit,
    isAdd: state.isAdd
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

