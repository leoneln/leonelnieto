import React from 'react';
import Header from './Header';
import AboutMe from './AboutMe';
import Expertize from './Expertize';
import Projects from './Projects'
import Giffy from './Giffy';

class Home extends React.Component {
  state = {}
  render() {
    return (
      <>
        <Header />
        <AboutMe />
        <Expertize />
        <Projects />
        <Giffy />
      </>
    );
  }
}

export default Home;
