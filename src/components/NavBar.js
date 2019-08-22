import React from 'react';
import { Nav, NavLink } from 'reactstrap';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class NavBar extends React.Component {
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
    console.log(this.state.menuOpen);
    var active = "";
    if (this.state.menuOpen) {
      active = "active"
    }
    return (
      <>
        <NavLink className="menu-toggle rounded p-0" href="#" onClick={() => this.toggleMenu()}>
          {this.state.menuOpen ? <FontAwesomeIcon icon="window-close" /> : <FontAwesomeIcon icon="bars" size="1x" />}
        </NavLink>
        <Nav id="sidebar-wrapper" className={active}>
          <ul className="sidebar-nav">
            <li className="sidebar-brand">
              <Link className="js-scroll-trigger"
                activeClass="active"
                to="top-page"
                spy={true}
                smooth={true}
                duration={1000}>Leonel Nieto</Link>
            </li>
            <li className="sidebar-nav-item">
              <Link className="js-scroll-trigger"
                activeClass="active"
                to="aboutme"
                spy={true}
                smooth={true}
                duration={1000}>About Me</Link>
            </li>
            <li className="sidebar-nav-item">
              <Link className="js-scroll-trigger"
                activeClass="active"
                to="expertize"
                spy={true}
                smooth={true}
                duration={1000}>Expertize</Link>
            </li>
            <li className="sidebar-nav-item">
              <Link className="js-scroll-trigger"
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                duration={1000}>Projects</Link>
            </li>
            <li className="sidebar-nav-item">
              <Link className="js-scroll-trigger"
                activeClass="active"
                to="socialMedia"
                spy={true}
                smooth={true}
                duartion={1000}>Social Media</Link>
            </li>
          </ul>
        </Nav>
      </>
    );
  }
}

export default NavBar;
