import React, { Component } from 'react'

export default class Nav extends Component {
  render() {
    return (
        <div className="container-fluid">
        <div id="about" className="row about-section">
          <div className="col-lg-4 about-card">
            <h3 className="font-weight-light">Who am I ?</h3>
            <span className="line mb-5" />
            <h5 className="mb-3">Senior Software Dev / GIS professional</h5>
            <p className="mt-20">I have 11 years of coding experience in a variety of lanauges, especially Python and Java.</p>
            <p className="mt-20">My experience is wide, but my speciality is Geographic Information Systems (GIS). I love looking at problems from a geospatial perspective.</p>
          </div>
          <div className="col-lg-4 about-card">
            <h3 className="font-weight-light">My Expertise</h3>
            <span className="line mb-5" />
            <div className="row">
              <div className="col-1 text-danger pt-1"><i className="ti-widget icon-lg" /></div>
              <div className="col-10 ml-auto mr-3">
                <h6>Backend Development</h6>
                <p className="subtitle">Building scalable microservices.</p>
                <hr />
              </div>
            </div>
            <div className="row">
              <div className="col-1 text-danger pt-1"><i className="ti-paint-bucket icon-lg" /></div>
              <div className="col-10 ml-auto mr-3">
                <h6>Data Management</h6>
                <p className="subtitle">Designing and building databases, data pipelines, and workflows. Expert at storing and serving geospatial data.</p>
                <hr />
              </div>
            </div>
            <div className="row">
              <div className="col-1 text-danger pt-1"><i className="ti-stats-up icon-lg" /></div>
              <div className="col-10 ml-auto mr-3">
                <h6>GIS Analysis</h6>
                <p className="subtitle">Almost ten years of experience analyzing a database of 150 million+ homes and 800,000 regions.</p>
                <hr />
              </div>
            </div>
          </div>
          <div className="col-lg-4 about-card">
          <h3 className="font-weight-light">My Work</h3>
            <span className="line mb-5" />
            <div className="row">
              <div className="col-1 text-danger pt-1"><i className="ti-widget icon-lg" /></div>
              <div className="col-10 ml-auto mr-3">
                <h6>Github</h6>
                <p className="subtitle">Check out my code on <a href="https://github.com/asmyth01">Github.</a></p>
                <hr />
              </div>
              <div className="col-10 ml-auto mr-3">
                <h6>Linkedin</h6>
                <p className="subtitle">View my Linkedin <a href="www.linkedin.com/in/andrew-j-smyth">profile</a> for a more detailed resume.</p>
                <hr />
              </div>
              <div className="col-10 ml-auto mr-3">
                <h6>Medium</h6>
                <p className="subtitle">I occasionally write articles on <a href="https://medium.com/@penguinboy561">Medium</a>. Click to read the latest.</p>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
    }
}
