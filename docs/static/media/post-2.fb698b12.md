# Did you document that?

![Documentation](https://leonieto.website/img/technical%20documentation.jpg)

Documentation is the bane of my existance. But I am the first to admit, it has saved my life more than once, weather it was an email I had to refer back to or a steps to follow to fix an error. One of my recent goals was to document as much as I can but the question was how, and where. Enter github, gitpages and MarkDown. 

- I created a directory on my web page source files that will contain all the date needed for each documentation. Each post will require two elements. 
    1. A post entry on a `blogs.json` file
    2. The post with standard naming such as `post-x.md`
- The post file will contain documentation written in MarkDown. I follow [this](https://www.markdownguide.org/) simple guide with plenty of formatting flexibility. 
- I then created a set of reach components under a directory called blog
    - This simple brings the components together `Blog.js`
    ```javascript
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
    ```
    - `BlogPage.js` is rending the conents of the makrdown file. Here I am using [ReactMarkdown](https://github.com/remarkjs/react-markdown)
    ```javascript
      import React from 'react'
      import Navbar from './Navbar'
      import ReactMarkdown from 'react-markdown'
      class BlogPage extends React.Component {
        constructor(props) {
          super(props)
          this.state = { post: null }
        }
        async componentDidMount() {
          const postId = this.props.match.params.postId
          const file = await import(`../data/post-${postId}.md`)
          const response = await fetch(file.default)
          const text = await response.text()
          this.setState({
            post: text
          })
        }
        render() {
          return (
            <div className="blog-body">
              <Navbar />
              <section className="container">
                <div className="row">
                  <div className="col-lg-8 mx-auto">
                    <ReactMarkdown source={this.state.post} />
                  </div>
                </div>
              </section>
            </div>
          );
        }
      }
      export default BlogPage;
    ```
    - `BlogPost.js` parses the `blogs.json` file and renders each entry as a blog post. Note that the blog post id is passed as a components props. (is that the right term?)
    ```javascript
      import React from 'react'
      import posts from '../data/blogs.json'
      import moment from 'moment'
      import { NavLink } from 'react-router-dom'

      function getDuration(duration) {
        const years = parseInt(duration / 365.25)
        const months = (duration > 30) ? duration % 30 : duration
        const days = (duration > 365.25) ? duration % 365.25 : duration
        return (years > 0 ? years + " year" + (years > 1 ? "s" : "") + " and " : "") + 
          (months > 1 ? months + " month " + (months > 1 ? "s" : "and ") : "") + 
          (days > 0 ? days + " day" + (days > 1 ? "s" : "") : "")
      }

      class BlogPost extends React.Component {
        state = {}
        render() {
          return (
            <section className="container">
              <div className="row">
                <div className="col-md-8 mx-auto">
                  <h1 className="my-4 text-center">Just some documenting</h1>
                  <p className="text-center">Here is some thoughts</p>
                  {posts.published.map((post, i) => {
                    moment.locale('en')
                    let postedDate = moment(post.postDate)
                    let today = moment(new Date())
                    let duration = moment.duration(today.diff(postedDate))
                    duration = Number(duration.asDays().toPrecision(1))
                    return (
                      <div className="card mb-4" key={i}>
                        <img className="card-img-top" src={post.image} alt="Representing the post" />
                        <div className="card-body">
                          <h2 className="card-title">{post.title}</h2>
                          <p className="card-text">{post.intro}</p>
                          <NavLink to={"/Blog/Post/" + post.postId} className="btn btn-primary">Read More &rarr;</NavLink>
                        </div>
                        <div className="card-footer text-muted">
                          {moment(post.postDate).format("MMMM Do YYYY")}
                          {" - "}
                          {getDuration(duration)}
                        </div>
                      </div>
                    )
                  })
                  }
                </div>
              </div>
            </section>
          );
        }
      }

      export default BlogPost;
    ```
That is most of it, except for for the navbar. If you are reading this its all thanks to the componets above.


Photo by [Sigmund]("https://unsplash.com/@sigmund?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/technical-documentation?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText)