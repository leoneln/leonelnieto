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