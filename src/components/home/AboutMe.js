import React from 'react';
import { NavLink } from 'react-router-dom';

class AboutMe extends React.Component {
  state = {}
  render() {
    return (
      <section className="content-section bg-light" id="aboutme">
        <div className="container text-center">
          <div className="content-section-heading">
            <h2>About me</h2>
          </div>
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <p className="lead mb-5">Sriving to developing strong skills in data analytics, information technology, database administration, leadership and program evaluation. My passion is all things related to data analytics, technology, social and behavioral science, demography and economics. I enjoy learning in general, and as such I often read research articles, training tutorials, and take new challenges with gusto. My goal is to become a data analytics and technology expert and to be able to use my social science background to help solve pressing social problems, such as economic inequality, racism, discrimination and health disparities by levering insights from data analyses and information technology.</p>
              <NavLink className="btn btn-dark btn-xl" to="/Resume">Resume</NavLink>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutMe;