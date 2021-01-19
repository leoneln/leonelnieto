import React from 'react';
import profile from "../data/profile.json";
import moment from "moment";

function getDuration(duration) {
  const years = parseInt(duration / 12);
  const months = (duration > 12) ? duration % 12 : duration;
  return (years > 0 ? years + "year" + (years > 1 ? "s" : "") + " and " : "") + (months > 0 ? months + " month" + (months > 1 ? "s" : "") : "")
}

class Experience extends React.Component {
  render() {
    return (
      <section className="resume-section" id='experience'>
        <div className="resume-section-content">
          <h2 className="mb-5">Work Experience</h2>
          {profile.experiences.map(function (experience, i) {

            return (
              <div className="col mb-5" key={i}>
                <h3>{experience.companyName}</h3>
                {experience.roles.map(function (role, i) {
                  moment.locale('en');
                  let startDate = moment(role.startDate);
                  let timeEnd = moment(role.currentJob ? new Date() : moment(role.endDate));
                  let duration = moment.duration(timeEnd.diff(startDate));
                  duration = Number(duration.asMonths().toPrecision(1));
                  return (
                    <div className="row m-1" key={i}>
                      <div className="col">
                        <div className="row">
                          <div className="col">
                            <h5 className="mb-2">{role.title}</h5>
                          </div>
                          <div className="col text-right">
                            <span className="text-info">
                              {moment(role.startDate).format('MMM YYYY')} {' - '}
                              {role.currentJob ? 'Present' : moment(role.endDate).format('MMM YYYY')}
                              {' '}({getDuration(duration)})
                          </span>
                          </div>
                        </div>
                        <p className="lead">{role.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            );
          })}
        </div>
      </section>
    )
  }
}
export default Experience;