import React, { Component } from 'react'
import { connect } from 'react-redux';
const mapStateToProps = (state, ownProps) => {
    return {
        item: state.editItem
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addDataStore: (nhanvao) => {
            dispatch({ type: "AddData", nhanvao })
        },
        changeAdd: () => {
            dispatch({ type: "Change_Add_Status" })
        },
        changeAlterOn: () => {
            dispatch({ type: "Change_Alter_On" })
        },
        changeAlterOff: () => {
            dispatch({ type: "Change_Alter_Off" })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(class NoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noteTitle: "",
            noteTitleContent: ""
        }
    }
    isChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }
    addData() {
        let obj = { ...this.state };
        this.props.addDataStore(obj);
        this.props.changeAdd();
        this.props.changeAlterOn();
        
    }
    render() {
        console.log(this.props.item);
        return (
            <div className="col-sm-3">
                <h3 className="text-info">Thêm nội dung note</h3>
                <form action="">
                    <div className="form-group">
                        <label htmlFor="noteTitle">Tiêu đề note</label>
                        <input type="text" onChange={this.isChange.bind(this)} className="form-control" name="noteTitle" id="noteTitle" aria-describedby="helpIdNotetitle" placeholder="Tiêu đề note"  />
                        <small id="helpIdNotetitle" className="form-text text-muted">Điền tiêu đề vào đây</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="noteTitleContent">Content note</label>
                        <textarea type="text" onChange={this.isChange.bind(this)} className="form-control" name="noteTitleContent" id="noteTitleContent" aria-describedby="helpIdNotetitleContent" placeholder="Content note" />
                        <small id="helpIdNotetitleContent" className="form-text text-muted">Điền Content vào đây</small>
                    </div>
                    <button type="reset" onClick={this.addData.bind(this)} className="btn btn-primary btn-block mb-2">Save</button>
                </form>
            </div>

        )
    }
})

