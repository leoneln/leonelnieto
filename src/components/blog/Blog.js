import React from 'react'
import { Route, HashRouter } from 'react-router-dom';
import Navbar from './Navbar'
import BlogPost from './BlogPost'

class Blog extends React.Component {
  state = {}
  render() {
    return (
      <div className="blog-body">
        <HashRouter>
          <Route exact path="/Blog" component={Navbar} />
          <Route exact path="/Blog" component={BlogPost} />
        </HashRouter>
      </div>
    );
  }
}

export default Blog;