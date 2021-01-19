import React from 'react'
import profile from '../data/profile.json'

class OtherWork extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <section className="resume-section" id="otherWork">
        <div className="resume-section-content">
          {profile.otherWork.map((work, i) => {
            return (
              <div className="row" key={i}>
                <h3 className="mb-3 block">{work.title}</h3>
                {work.details.map((details, i) => {
                  return (
                    <div className="col-md-12" key={i}>
                      <div className="list-group">
                        <a href={details.link} target="new" className="list-group-item list-group-item-action flex-column align-items-start m-3">
                          <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">{details.title}</h5>
                            <small className="text-muted">{details.date}</small>
                          </div>
                          <p className="mb-1">{details.subtitle}</p>
                        </a>
                      </div>
                    </div>
                  )
                })
                }
              </div>
            )
          })
          }
        </div>
      </section>
    );
  }
}

export default OtherWork;