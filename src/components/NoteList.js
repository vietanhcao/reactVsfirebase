import React, { Component } from 'react'
import { firebaseConnect } from '../firebaseConnect';
import NoteItem from './NoteItem';
export default class NoteList extends Component {
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
    getData(){     
        if(this.state.dataFirebase.length !== 0){
            return this.state.dataFirebase.map((value, index) => <NoteItem key={index}
                        i={index}
                        id={value.id}
                        note={value}
                        noteTitle={value.noteTitle}
                        noteTitleContent={value.noteTitleContent} />
            )
        }
    }
    render() {
        return (
            <div className="col">
                <div id="notelist" role="tablist" aria-multiselectable="true">
                    {
                        this.getData.call(this)
                    }
                </div>
            </div>
        )
    }
}
