import React from 'react';
//import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Expertize extends React.Component {
  state = {}
  render() {
    return (
      <section className="content-section callout" id="expertize">
        <div className="container-fluid text-center white-bg-faded">
          <div className="content-section-heading">
            <h2>Experience</h2>
            <p className="lead">I have gained experience in the following areas</p>
          </div>
          <div className="row">
            <div className="col-lg-2 col-md-6 md-5 mb-lg-0 mx-auto m-0 p-0">
              <span className="service-icon rounded-cirle mx-auto mb-3">
                <FontAwesomeIcon icon="database" />
              </span>
              <h4>
                <strong className="">Database, Data Storage & ETL</strong>
              </h4>
              <p className="">Design and develop databases in MSSQL and MySQL. Extract, Transform and Load tools.</p>
            </div>
            <div className="col-lg-2 col-md-6 md-5 mb-lg-0 mx-auto m-0 p-0">
              <span className="service-icon rounded-cirle mx-auto mb-3">
                <FontAwesomeIcon icon="sitemap" />
              </span>
              <h4>
                <strong className="">Website & WebApp Development</strong>
              </h4>
              <p className="">Experience with HTML, Node, React, JS, PHP</p>
            </div>
            <div className="col-lg-2 col-md-6 md-5 mb-lg-0 mx-auto m-0 p-0">
              <span className="service-icon rounded-cirle mx-auto mb-3">
                <FontAwesomeIcon icon="chart-line" />
              </span>
              <h4>
                <strong className="">Business Intelligence & Analytics</strong>
              </h4>
              <p className="">Power BI, R, Python, SAP, SAS, Tableau and Cognos</p>
            </div>
            <div className="col-lg-2 col-md-6 md-5 mb-lg-0 mx-auto m-0 p-0">
              <span className="service-icon rounded-cirle mx-auto mb-3">
                <FontAwesomeIcon icon="server" />
              </span>
              <h4>
                <strong className="">Server Administration and Networking</strong>
              </h4>
              <p className="">Experience with Linux and Windows server management and networking</p>
            </div>
            <div className="col-lg-2 col-md-6 md-5 mb-lg-0 mx-auto m-0 p-0">
              <span className="service-icon rounded-cirle mx-auto mb-3">
                <FontAwesomeIcon icon="chalkboard-teacher" />
              </span>
              <h4>
                <strong className="">Research, Management & Leadership</strong>
              </h4>
              <p className="">Quantitative and qualitative research, non-profit leadership and program management</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Expertize;