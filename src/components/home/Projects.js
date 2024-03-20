import React from 'react';
import Project from '../../components/projects/Project.js';
import img_analytics from '../img/analytics.jpeg';
import img_adult_com from '../img/adult_computer_classes.jpg';
import img_data_analytics from '../img/data_analytics.jpeg';
import img_data_viz from '../img/data_vizualization.jpeg';
import img_screen_code from '../img/screen_with_code.jpg';
import img_the_pi from '../img/thepi.jpg';

class Projects extends React.Component {
  render() {
    return (
      <section className="content-section" id="projects">
        <div className="container">
          <div className="content-section-heading text-center">
            <h2 className="mb-0">Projects</h2>
            <p className="mb-5 lead">Recent Stuff Worth Mentioning</p>
          </div>
          <div className="row no-gutters">
            <div className="col-lg-6">
              <Project
                projectTitle="Business Intelligence"
                projectDescription="A class project tasked with exploring industry leading business intelligence platforms."
                projectImage={img_analytics}
                projectLink="#"
                projectImageAlt="Business Intelligence Infographic" />
            </div>
            <div className="col-lg-6">
              <Project
                projectTitle="Computer Skills for all"
                projectDescription="Computer skills are essential. I volunteer to teach basic computer skills to any adult willing to learn."
                projectImage={img_adult_com}
                projectLink="#"
                projectImageAlt="Students in a classroom with laptops" />
            </div>
            <div className="col-lg-6">
              <Project
                projectTitle="BI Maturity"
                projectDescription="A project to asses the bussiness maturity of an organization and develop a plan to create a data aware culture."
                projectImage={img_data_analytics}
                projectLink="#"
                projectImageAlt="Poiting at an org chart" />
            </div>
            <div className="col-lg-6">
              <Project
                projectTitle="Programing with Raspberry Pi"
                projectDescription="A project to create temperature and humidity sensor."
                projectImage={img_the_pi}
                projectLink="#"
                projectImageAlt="Custom made raspberry pi enclousure" />
            </div>
            <div className="col-lg-6">
              <Project
                projectTitle="Data Visualization"
                projectDescription="Tableau Public Profile with some example work."
                projectImage={img_data_viz}
                projectLink="#"
                projectImageAlt="Line chart" />
            </div>
            <div className="col-lg-6">
              <Project
                projectTitle="The Employee Portal"
                projectDescription="Large self initiated project to create a time tracking and scheduling system."
                projectImage={img_screen_code}
                projectLink="#"
                projectImageAlt="Screen with code" />
            </div>
          </div>
        </div>
      </section>

    );
  }
}

export default Projects;