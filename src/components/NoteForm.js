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
        Edit: (getitem) => {
            dispatch({ type: "Edit", getitem })
        },
        changeEditStatus: () => {
            dispatch({ type: "Change_Edit_Status"})
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(class NoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noteTitle: this.props.item.noteTitle || "",
            noteTitleContent: this.props.item.noteTitleContent || ""
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
        if(this.props.item){
            let editObject = {...this.props.item , 
                noteTitle: this.state.noteTitle,
                noteTitleContent: this.state.noteTitleContent
            };          
            this.props.Edit(editObject);   
            this.props.changeEditStatus();

        }else{
            let obj = { ...this.state };
            this.props.addDataStore(obj);
        }
    }
    render() {        
        console.log(this.props.item);             
        return (
            <div className="col-sm-4">
                <h3 className="text-info">Sửa nội dung note</h3>
                <form action="">
                    <div className="form-group">
                        <label htmlFor="noteTitle">Tiêu đề note</label>
                        <input type="text" onChange={this.isChange.bind(this)} className="form-control" name="noteTitle" id="noteTitle" aria-describedby="helpIdNotetitle" placeholder="Tiêu đề note" defaultValue={this.props.item.noteTitle} />
                        <small id="helpIdNotetitle" className="form-text text-muted">Điền tiêu đề vào đây</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="noteTitleContent">Content note</label>
                        <textarea type="text" onChange={this.isChange.bind(this)} className="form-control" name="noteTitleContent" id="noteTitleContent" aria-describedby="helpIdNotetitleContent" placeholder="Content note" defaultValue={this.props.item.noteTitleContent} />
                        <small id="helpIdNotetitleContent" className="form-text text-muted">Điền Content vào đây</small>
                    </div>
                    <button type="reset" onClick={this.addData.bind(this)} className="btn btn-primary btn-block">Save</button>
                </form>
            </div>

        )
    }
})

