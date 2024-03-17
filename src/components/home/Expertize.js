import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Expertize extends React.Component {
  state = {}
  render() {
    return (
      <section className="content-section" id="expertize">
        <div className="container-fluid text-center white-bg-faded">
          <div className="content-section-heading">
            <h2>Skills and Experience</h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 mx-auto m-0 p-0">
              <span className="service-icon rounded-cirle mx-auto mb-3">
                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass-chart" />
              </span>
              <h4>
                <strong className="">Data Analytics</strong>
              </h4>
              <p className="">Proficient in analyzing complex datasets to derive actionable insights for addressing social issues.</p>
            </div>
            <div className="col-lg-4 col-md-6 mx-auto m-0 p-0">
              <span className="service-icon rounded-cirle mx-auto mb-3">
                <FontAwesomeIcon icon="fa-solid fa-memory" />
              </span>
              <h4>
                <strong className="">Information Technology</strong>
              </h4>
              <p className="">Skilled in leveraging technology for data collection, storage, analysis, and visualization to extract meaningful insights.</p>
            </div>
            <div className="col-lg-4 col-md-6 mx-auto m-0 p-0">
              <span className="service-icon rounded-cirle mx-auto mb-3">
                <FontAwesomeIcon icon="fa-solid fa-brain" />
              </span>
              <h4>
                <strong className="">Social Science Background</strong>
              </h4>
              <p className="">Deep understanding of human behavior, societal dynamics, and demographic trends to contextualize data analyses within social contexts.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 mx-auto m-0 p-0">
              <span className="service-icon rounded-cirle mx-auto mb-3">
                <FontAwesomeIcon icon="chart-line" />
              </span>
              <h4>
                <strong className="">Data-Driven Assessment and Evaluation</strong>
              </h4>
              <p className="">Experienced in assessing institutional programs for effectiveness and driving continuous improvement. Proficient in data-driven evaluation to inform strategic decisions and enhance institutional effectiveness.</p>
            </div>
            <div className="col-lg-4 col-md-6 mx-auto m-0 p-0">
              <span className="service-icon rounded-cirle mx-auto mb-3">
                <FontAwesomeIcon icon="fa-solid fa-people-roof" />
              </span>
              <h4>
                <strong className="">Leadership and Management</strong>
              </h4>
              <p className="">Strong leadership and management capabilities in guiding teams through data-driven projects and effectively communicating findings to stakeholders.</p>
            </div>
            <div className="col-lg-4 col-md-6 mx-auto m-0 p-0">
              <span className="service-icon rounded-cirle mx-auto mb-3">
                <FontAwesomeIcon icon="fa-solid fa-square-poll-vertical" />
              </span>
              <h4>
                <strong className="">Data Visualization Expertise</strong>
              </h4>
              <p className="">I specialize in creating dynamic dashboards and visualizations with diverse business intelligence tools. Through a blend of creativity and technical expertise, I translate complex data into actionable insights, enabling stakeholders to make informed decisions confidently.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Expertize;