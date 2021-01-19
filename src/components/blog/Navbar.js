import React from 'react'
import { NavLink, Link } from 'react-router-dom'

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    }
    this.toggleMenu = this.toggleMenu.bind(this);
    this.curElm = React.createRef();
  }
  toggleMenu() {
    this.setState({
      menuOpen: !this.state.menuOpen
    })
  }
  render() {
    let show = "collapse navbar-collapse"
    if (this.state.menuOpen) {
      show = "collapse navbar-collapse show"
    }
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/">Leonel Nieto</Link>
          <div onClick={() => this.toggleMenu()} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </div>
          <div className={show} id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <NavLink className="nav-link" to="/Blog">Home
              <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Resume">Resume</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;