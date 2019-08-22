import React from 'react';
import { NavLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer text-center" id="socialMedia">
        <div className="container">
          <ul className="list-inline mb-5">
            <li className="list-inline-item">
              <NavLink className="social-link rounded text-white mr-3 p-0" href="https://github.com/leoneln">
                <FontAwesomeIcon icon={faGithub} />
              </NavLink>
            </li>
            <li className="list-inline-item">
              <NavLink className="social-link rounded text-white mr-3 p-0" href="https://www.linkedin.com/in/leonelnieto">
                <FontAwesomeIcon icon={faLinkedin} />
              </NavLink>
            </li>
          </ul>
        </div>
      </footer>
    )
  }
}
export default Footer;