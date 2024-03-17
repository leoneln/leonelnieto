import React from 'react'
import profile from '../data/profile.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Profile extends React.Component {
    
  render() {
    return <div className="container-fluid p-0">
      <section className="resume-section" id='about'>
        <div className="resume-section-content">
          <h1 className="mb-0">Leonel <span className="blue-text">Nieto</span></h1>
          <h5>{profile.tags[Math.floor(Math.random() * profile.tags.length)]}</h5>
          <div className="subheading mb-5">
            <p>{profile.address} · {profile.phone} · {profile.email}</p>
          </div>
          <p>{profile.summary}</p>
          <ul className="list-inline list-social-icons mb-0">
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