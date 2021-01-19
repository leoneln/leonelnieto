import React from 'react';
import profile from "../data/profile.json"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import * as Brands from '@fortawesome/free-brands-svg-icons'


const brandList = Object.keys(Brands)
  .filter((key) => key !== 'fas' && key !== 'prefix')
  .map((icon) => Brands[icon]);

library.add(...brandList)

class Skills extends React.Component {
  state = {}
  render() {
    return (
      <section className="resume-section" id="skills">
        <div className="resume-section-content">
          <h3 className="mb-5">My Skills</h3>
          <div className="row">
            {profile.skills.map((skill, i) => {
              return (
                <div key={i} className="col-md-5 m-3">
                  <div className="row">
                    <div className="col-sm-1 mx-auto my-auto p-0">
                      <FontAwesomeIcon icon={[skill.iconprefix, skill.icon]} size="2x" />
                    </div>
                    <div className="col-sm-11">
                      <div className="progress-wrap">
                        <h4 className="pb-3">{skill.title}</h4>
                        <div className="progress">
                          <div className={skill.color}
                            role="progressbar"
                            style={{ width: skill.proficiency }}
                            aria-valuenow="80"
                            aria-valuemin="0"
                            aria-valuemax="100"><span className="progess-percent">{skill.proficiency}</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;