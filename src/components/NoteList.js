import React, { Component } from 'react'
import { firebaseConnect } from '../firebaseConnect';
import NoteItem from './NoteItem';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    return {
        isAdd: state.isAdd
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeAdd: () => {
            dispatch({ type: "Change_Add_Status"})
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(class NoteList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataFirebase: []
        }
    }
    componentWillMount = () => {
        firebaseConnect.on('value', (notes) => {
            let array = [];
            for (let value in notes.val()) {
                array.push({
                    id: value,
                    noteTitle: notes.val()[value].noteTitle,
                    noteTitleContent: notes.val()[value].noteTitleContent
                })
            }
            this.setState({ dataFirebase: array });
        })
    }
    isChange() {
        this.props.changeAdd.call(this);
    }

    hienthinut() {
        if (!this.props.isAdd) {
            return <button type="button" onClick={this.isChange.bind(this)} className="btn btn-info mb-2">Thêm</button>
        } else {
            return <button type="button" onClick={this.isChange.bind(this)} className="btn btn-warning mb-2">Đóng</button>
        }
    }
    render() {
        return (
            <div className="col">
                {this.hienthinut.call(this)}
                <div id="notelist" role="tablist" aria-multiselectable="true">
                    {
                        this.state.dataFirebase.map((value, index) => <NoteItem key={index}
                            i={index}
                            id={value.id}
                            note={value}
                            noteTitle={value.noteTitle}
                            noteTitleContent={value.noteTitleContent} />)
                    }
                </div>
            </div>
        )
    }
}
)