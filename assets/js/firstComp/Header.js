import React, { Component} from 'react'

export default class Header extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
  }
  render () {
    return (
      <header>
      <div className="logo"> logo </div>

      <nav className="theNav">
        <a className="btn" href="#">Create ads</a>
        <a className="btn" href="#">About us</a>
        <a className="btn" href="#">Login</a>
        <a className="btn" id="register-btn" href="#">Register</a>
      </nav>

      </header>
    );
  }
}
