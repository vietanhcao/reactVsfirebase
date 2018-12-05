import React, { Component } from 'react'
import { Alert, AlertContainer } from "react-bs-notifier";
import { connect } from 'react-redux';


const mapStateToProps = (state, ownProps) => {
  return {
    alertShow: state.alertShow,
    alertContent: state.alertContent,
    alertType: state.alertType
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeAlterOff: () => {
      dispatch({ type: "Change_Alter_Off" })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(class AlertInfor extends Component {
  handleDismiss(){
    this.props.changeAlterOff();
  }
  render() {  
    if(!this.props.alertShow){
      return false;
    }
    return (
      <AlertContainer position="bottom-right">
        <Alert  type={this.props.alertType} onDismiss={this.handleDismiss.bind(this)} timeout={1000} > 
          {this.props.alertContent} </Alert>
      </AlertContainer>
    )
  }
})
