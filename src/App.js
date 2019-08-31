import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar.js';
import Header from './components/Header.js';
import AboutMe from './components/AboutMe.js';
import Expertize from './components/Expertize.js';
import Projects from './components/Projects.js';
import ScrollTop from './components/ScrollTop.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faBars, faWindowClose, faDatabase, faSitemap, faChartLine, faChalkboardTeacher, faServer, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import Footer from './components/Footer';


library.add(fab, faBars, faWindowClose, faDatabase, faSitemap, faChartLine, faChalkboardTeacher, faServer, faAngleUp);

class App extends Component {
  render() {
    return (
      <div className="App" id="top-page">
        <NavBar />
        <Header />
        <AboutMe />
        <Expertize />
        <Projects />
        <Footer />
        <ScrollTop />
      </div>
    );
  }
}
export default App;
