import React, { Component } from 'react';
import '../src/App.css';
import NavBar from '../src/components/NavBar.js';
import Home from '../src/components/home/Home.js';
import ScrollTop from '../src/components/ScrollTop.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faBars, faWindowClose, faDatabase, faSitemap, faChartLine, faChalkboardTeacher, faServer, faAngleUp, faMagnifyingGlassChart,faMemory,faBrain,faPeopleRoof,faSquarePollVertical} from '@fortawesome/free-solid-svg-icons';
import Footer from '../src/components/Footer';
import { Route, HashRouter } from 'react-router-dom';
import Resume from '../src/components/resume/Resume';
import '../src/components/resume/Resume.css';
import Blog from '../src/components/blog/Blog'
import '../src/components/blog/Blog.css'
import BlogPage from '../src/components/blog/BlogPage';


library.add(fab, faBars, faWindowClose, faDatabase, faSitemap, faChartLine, faChalkboardTeacher, faServer, faAngleUp,faMagnifyingGlassChart,faMemory,faBrain,faPeopleRoof,faSquarePollVertical);

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
