import React from 'react';
import { Container, Row, Col, Media } from 'reactstrap';
import moment from 'moment';
import profile from './data/profile.json';

class Education extends React.Component {
  render() {
    return <Container>
      <Row>
        <Col>
          {profile.studies.map(function (study, i) {
            return <Media key={i}>
              <Media left top href={study.url}>
                <Media object src={study.logo} alt={study.institude} />
              </Media>
              <Media body>
                <Media heading>
                  <a href={study.url}>{study.institude}</a>
                </Media>
                {
                  [
                    {
                      "key": "Title",
                      "value": study.title,
                    },
                    {
                      "key": "Graduation Year",
                      "value": study.graduationYear
                    },
                    {
                      "key": "Duration",
                      "value": study.durationInYears + " years(s)"
                    }
                  ].map(function (object, i) {
                    return <div>
                      <Row>
                        <Col className="formLabel">{object.key}:</Col>
                      </Row>
                      <Row>
                        <Col>{object.value}</Col>
                      </Row>
                    </div>
                  })
                }
              </Media>
            </Media>
          })}
        </Col>
      </Row>
      <br />
      <br />
      <Row>
        <Col>
          <h4>Certifications</h4>
          <hr />
          {profile.certifications.map(function (certification, i) {
            const verfication = certification.verficationLink ?
              <Row>
                <Col>
                  <a className="certificationLink" href={certification.verficationLink}>See certificate</a>
                </Col>
              </Row> : "";
            return <Media key={i}>
              <Media left top href={certification.url}>
                <Media object src={certification.logo} alt={certification.title} />
              </Media>
              <Media body>
                <Media heading>
                  <a href={certification.url}>{certification.title}</a>
                </Media>
                <Row>
                  <Col>{moment(certification.issueDate).format('MMM YYYY')} - {(certification.expiryDate) ? moment(certification.expiryDate).format('MMM YYYY') : 'Present'}</Col>
                </Row>
                <Row>
                  <Col>{certification.issuer}</Col>
                </Row>
                {verfication}
              </Media>
            </Media>
          })}
        </Col>
      </Row>
    </Container>
  }
}
export default Education;