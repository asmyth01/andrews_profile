import React, { Component } from 'react'

export default class HiringBanner extends Component {
  render() {
    return (
    <section className="section bg-dark py-5">
        <div className="container text-center">
          <h2 className="text-light mb-5 font-weight-normal">Open to Hiring Opportunities</h2>
          <h5 className="text-light mb-5 font-weight-normal">Recruiters reach out on <a href="https://www.linkedin.com/in/andrew-j-smyth">LinkedIn</a></h5>
        </div>
      </section>
    )
}
}