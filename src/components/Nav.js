import React, { Component } from 'react'

export default class Nav extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-5">
            <a className="navbar-brand" href="/">Test</a>
            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
            <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavId">
                <ul className="navbar-nav mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Xem danh sách node</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                        <div className="dropdown-menu" aria-labelledby="dropdownId">
                            <a className="dropdown-item" href="/">Action 1</a>
                            <a className="dropdown-item" href="/">Action 2</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>

    )
  }
}
