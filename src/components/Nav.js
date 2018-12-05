import React, { Component } from 'react'

export default class Nav extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-5">
            <a className="navbar-brand" href="/">Test</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>   
            <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavId">
                <ul className="navbar-nav mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Xem danh sách node</a>
                    </li>
                </ul>
            </div>
        </nav>

    )
  }
}
