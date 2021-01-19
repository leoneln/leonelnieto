import React from 'react'
import Nav from './Nav'
import Profile from './Profile'
import Experience from './Experience'
import Education from './Education'
import Skills from './Skills'
import AwardsCerts from './AwardsCerts'
import OtherWork from './OtherWork'


class Resume extends React.Component {
  state = {}
  render() {
    return (
      <div className="resumeBody">
        <Nav />
        <Profile />
        <Experience />
        <Education />
        <Skills />
        <AwardsCerts />
        <OtherWork />
      </div>
    )
  }

}

export default Resume;