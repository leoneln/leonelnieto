import React from 'react'
import posts from '../data/blogs.json'
import moment from 'moment'
import { NavLink } from 'react-router-dom'

function getDuration(duration) {
  const years = parseInt(duration / 365.25)
  const months = (duration > 30) ? Math.round(duration / 30) : ''
  const days = Math.round(duration)
  return (years > 0 ? years + " year" + (years > 1 ? "s" : "") + " and " : "") +
    (months > 0 ? months + " month" + (months > 1 ? "s " : " and ") : "") +
    (days > 0 ? days + " day" + (days > 1 ? "s" : "") : "")
}

class BlogPost extends React.Component {
  state = {}
  render() {
    return (
      <section className="container">
        <div className="row">
          <div className="col-sm mx-auto">
            <h1 className="my-4 text-center">Just some documenting</h1>
            <p className="text-center">Here is some thoughts</p>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-sm-3 g-4">
          {posts.published.map((post, i) => {
            moment.locale('en')
            let postedDate = moment(post.postDate)
            let today = moment(new Date())
            let duration = moment.duration(today.diff(postedDate))
            duration = Number(duration.asDays())
            return (
              <div className="col p-4" key={i}>
                <div className="card h-100">
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
              </div>
            )
          })
          }
        </div>
      </section>
    );
  }
}

export default BlogPost;