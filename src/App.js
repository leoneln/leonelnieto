import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar.js';
import Home from './components/home/Home.js';
import ScrollTop from './components/ScrollTop.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faBars, faWindowClose, faDatabase, faSitemap, faChartLine, faChalkboardTeacher, faServer, faAngleUp, faMagnifyingGlassChart,faMemory,faBrain,faPeopleRoof,faSquarePollVertical} from '@fortawesome/free-solid-svg-icons';
import Footer from './components/Footer';
import { Route, HashRouter } from 'react-router-dom';
import Resume from './components/resume/Resume';
import './components/resume/Resume.css';
import Blog from './components/blog/Blog'
import './components/blog/Blog.css'
import BlogPage from './components/blog/BlogPage';


library.add(fab, faBars, faWindowClose, faDatabase, faSitemap, faChartLine, faChalkboardTeacher, faServer, faAngleUp,faMagnifyingGlassChart,faMemory,faBrain,faPeopleRoof,faSquarePollVertical);
//library.add(...all); <<FontAwesomeIcon icon={faMemory} />

class App extends Component {
  render() {
    return (
      <div className="App" id="top-page">
        <HashRouter>
          <Route exact path="/" component={NavBar} />
          <Route exact path='/' component={Home} />
          <Route exact path='/' component={Footer} />
          <ScrollTop />
          <Route exact path='/Blog' component={Blog} />
          <Route exact path='/Resume' component={Resume} />
          <Route exact path='/Blog/Post/:postId' component={BlogPage} />
        </HashRouter>
      </div>
    );
  }
}
export default App;
