import React from 'react';
import moment from 'moment';
import profile from '../data/profile.json';

function getDuration(duration) {
  const years = parseInt(duration / 12)
  const months = (duration > 12) ? duration % 12 : duration
  return (years > 0 ? years + " year" + (years > 1 ? "s" : "") + " and " : "")
    + (months > 0 ? months + " month" + (months > 1 ? "s" : "") : "")
}

class Education extends React.Component {
  render() {
    return (
      <section className="resume-section" id='education'>
        <div className="resume-section-content">
          {profile.studies.map(function (study, i) {
            return (
              <div className="row mt-5 mb-5" key={i}>
                <div className="col-2">
                  <a href={study.url} target="new" title="School Web Site">
                    <img src={study.logo} alt={study.school} className="study-logo" />
                  </a>
                </div>
                <div className="col-10">
                  <h3>{study.school}</h3>
                  {
                    study.awards.map(function (object, i) {
                      moment.locale('en')
                      let startDate = moment(object.startDate)
                      let timeEnd = moment(object.endDate)
                      let duration = moment.duration(timeEnd.diff(startDate))
                      duration = Number(duration.asMonths().toPrecision(1))
                      return (
                        <div className="row m-3" key={i}>
                          <div className="col">
                            <div className="row">
                              <div className="col">
                                <h5 className="mb-2">{object.degree}</h5>
                              </div>
                              <div className="col text-right">
                                <small className="text-info">
                                  {moment(object.startDate).format("MMM YYYY")}
                                  {" - "}
                                  {moment(object.endDate).format("MMM YYYY")}
                                  {" (" + getDuration(duration) + ")"}
                                </small>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col">
                                <p>{object.emphasis}</p>
                              </div>
                              <div className="col text-right">
                                <small>GPA: {object.gpa}</small>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            )
          })}
        </div>
      </section>
    )
  }
}
export default Education;