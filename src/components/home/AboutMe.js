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
              <p className="lead mb-5">Dedicated to honing skills in data analytics, information technology, database administration, leadership, management, and program evaluation. As a data-driven social scientist, my passion lies at the intersection of data analytics, technology, social and behavioral science, demography, and economics. I thrive on continuous learning, regularly immersing myself in research articles, training tutorials, and new challenges. My overarching objective is to become a proficient data analytics and technology expert, leveraging my background in social science to address critical social issues like socioeconomic and education inequalities, racism, discrimination, and health disparities through data-driven insights and information technology solutions.</p>
              <NavLink className="btn btn-dark btn-xl" to="/Resume">Resume</NavLink>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutMe;