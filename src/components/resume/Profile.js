import React from 'react'
import profile from '../data/profile.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Profile extends React.Component {

  render() {
    return <div className="container-fluid p-0">
      <section className="resume-section" id='about'>
        <div className="resume-section-content">
          <h1 className="mb-0">Leonel <span className="blue-text">Nieto</span></h1>
          <div className="subheading mb-5">
            <p>3441 W. Brookway Drive · West Valley City Utah, 84119 · (801) 674-2989 · leonelnieto@gmail.com</p>
          </div>
          <p>{profile.summary}</p>
          <ul className="list-inline list-social-icons mb-0">
            <li className="list-inline-item">
              <a href="https://www.facebook.com/leonele.nieto" className="blue-hover">
                <span className="fa-stack fa-lg">
                  <FontAwesomeIcon icon={['fab', 'facebook']} size="2x" color="black" className="social-icon" />
                </span>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://twitter.com/leonelenieto">
                <span className="fa-stack fa-lg">
                  <FontAwesomeIcon icon={['fab', 'twitter']} size="2x" color="black" className="social-icon" />
                </span>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://www.linkedin.com/in/leonelnieto">
                <span className="fa-stack fa-lg">
                  <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" color="black" className="social-icon" />
                </span>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://github.com/leoneln">
                <span className="fa-stack fa-lg">
                  <FontAwesomeIcon icon={['fab', 'github']} size="2x" color="black" className="social-icon" />
                </span>
              </a>
            </li>
          </ul>
        </div>
      </section>

    </div>
  }
}
export default Profile;