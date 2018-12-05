import React, { Component } from 'react'
import { Alert, AlertContainer } from "react-bs-notifier";
import { connect } from 'react-redux';


const mapStateToProps = (state, ownProps) => {
  return {
    alertShow: state.alertShow
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(class AlertInfor extends Component {
  render() {
    if(!this.props.alertShow){
      return false;
    }
    return (
      <AlertContainer>
        <Alert type="info">Hello, world</Alert>
      </AlertContainer>
    )
  }
})
