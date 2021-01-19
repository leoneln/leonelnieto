import React from 'react'
import profile from '../data/profile.json'

class AwardsCerts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <section className="resume-section" id="awardsCerts">
        <div className="resume-section-content">
          <h2 className="mb-5">
            Awards and Certifications
          </h2>
          <div className="row">
            <ul>
              {profile.awards.map((award, i) => {
                return (
                  <li key={i}><h5>{award.title + " - " + award.awardYear}</h5>
                    <p>{award.subtext}</p>
                  </li>
                )
              })
              }
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default AwardsCerts;