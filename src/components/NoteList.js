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
    
  render() {
      console.log(this.state.dataFirebase);
    return (
        <div className="col">
            <div id="notelist" role="tablist" aria-multiselectable="true">
                <NoteItem />
            </div>
        </div>
    )
  }
}
