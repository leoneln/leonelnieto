import React from 'react';
import { NavLink } from 'reactstrap';

class Project extends React.Component {
  render() {
    return (
      <NavLink className="portfolio-item p-0" href={this.props.projectLink}>
        <span className="caption">
          <span className="caption-content">
            <h2>{this.props.projectTitle}</h2>
            <p>{this.props.projectDescription}</p>
          </span>
        </span>
        <img className="img-fluid" src={this.props.projectImage}
          alt={this.props.projectImageAlt} />
      </NavLink>
    );
  }
}

export default Project;
