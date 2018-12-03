import React, { Component } from 'react'

export default class NoteList extends Component {
  render() {
    return (
        <div className="col">
            <div id="notelist" role="tablist" aria-multiselectable="true">
                <div className="card">
                    <div className="card-header" role="tab" id="note1">
                        <h5 className="mb-0">
                            <a data-toggle="collapse" data-parent="#notelist" href="#noteContent1" aria-expanded="true" aria-controls="noteContent1">
                                ghi chu 2/12/2018
          </a>
                        </h5>
                    </div>
                    <div id="noteContent1" className="collapse in" role="tabpanel" aria-labelledby="note1">
                        <div className="card-body">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, eos. Dolor eligendi et minima nulla quod facilis labore tenetur explicabo sint quidem nesciunt vel, illum doloremque expedita maxime deserunt totam!
        </div>
                    </div>
                </div>
                {/* end card */}
                <div className="card">
                    <div className="card-header" role="tab" id="note2">
                        <h5 className="mb-0">
                            <a data-toggle="collapse" data-parent="#notelist" href="#noteContent2" aria-expanded="true" aria-controls="noteContent2">
                                ghi chu 23/12/2018
          </a>
                        </h5>
                    </div>
                    <div id="noteContent2" className="collapse in" role="tabpanel" aria-labelledby="note2">
                        <div className="card-body">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, eos. Dolor eligendi et minima nulla quod facilis labore tenetur explicabo sint quidem nesciunt vel, illum doloremque expedita maxime deserunt totam!
        </div>
                    </div>
                </div>
            </div>
        </div>

    )
  }
}
