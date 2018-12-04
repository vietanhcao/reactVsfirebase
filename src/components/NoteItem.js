import React, { Component } from 'react'
import { connect } from 'react-redux';
const mapStateToProps = (state, ownProps) => {
    return {
        edistsatus: state.isEdit
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeEditStatus: () => {
            dispatch({ type: 'Change_Edit_Status' });
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(class NoteItem extends Component {
    twoAction(){
        this.props.changeEditStatus.call(this);
        //truyen noi dung can sua len store
        console.log(this.props.note);
        
    }
    render() {      
        return (
            <div className="card">
                <div className="card-header d-flex justify-content-between align-items-center" role="tab" id="note1">
                    <h5 className="mb-0">
                        <a data-toggle="collapse" data-parent="#notelist" href={"#number" + this.props.i} aria-expanded="true" aria-controls="noteContent1">
                            {this.props.noteTitle}
                        </a>
                    </h5>
                    <div className="d-flex align-items-center">
                        <button type="button" onClick={this.twoAction.bind(this)} className="btn btn-secondary">sửa</button>
                        <button type="button" className="btn btn-danger">xóa</button>
                    </div>
                </div>
                <div id={"number" + this.props.i} className="collapse in" role="tabpanel" aria-labelledby="note1">
                    <div className="card-body">
                        {this.props.noteTitleContent}
                    </div>
                </div>
            </div>
        )
    }
})
