import React from 'react';
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Nav extends React.Component {
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
    let show = "collapse navbar-collapse";
    if (this.state.menuOpen) {
      show = "collapse navbar-collapse show"
    }
    return (
      <nav className="navbar navbar-expand-lg aside-bg-gray fixed-top" id="sideNav">
        <NavLink className="navbar-brand js-scroll-trigger"
          to="/">
          <span className="d-block d-lg-none">Leonel Nieto</span>
          <span className="d-none d-lg-block">
            <img className="img-fluid img-profile rounded-circle mx-auto mb-2"
              src="../img/self-leonelnieto-small.jpg"
              alt="" />
          </span>
        </NavLink>
        <div className="navbar-toggler"
          onClick={() => this.toggleMenu()}
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {this.state.menuOpen ? <FontAwesomeIcon className="" icon="window-close" /> : <FontAwesomeIcon className="" icon="bars" size="1x" />}
        </div>
        <div className={show} id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link js-scroll-trigger"
                to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={1000}
                to="about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={1000}
                to="experience">Experience</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={1000}
                to="education">Education</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={1000}
                to="skills">Skills</Link>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link js-scroll-trigger"
                to="/Blog">Blog</NavLink>
            </li>
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={1000}
                to="awardsCerts">Awards</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={1000}
                to="otherWork">Other Work</Link>
            </li>
          </ul>
        </div>
      </nav >
    )
  }
}

export default Nav;