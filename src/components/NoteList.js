import React, { Component } from 'react'
import { firebaseConnect } from '../firebaseConnect';
import NoteItem from './NoteItem';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    return {
        prop: state.prop
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
            dataFirebase: [],
            trangthai: true
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
        this.setState({
            trangthai: !this.state.trangthai
        });
        this.props.changeAdd.call(this);
    }

    hienthinut() {
        if (this.state.trangthai) {
            return <button type="button" onClick={this.isChange.bind(this)} className="btn btn-info">Thêm</button>
        } else {
            return <button type="button" onClick={this.isChange.bind(this)} className="btn btn-warning">Đóng</button>
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
 