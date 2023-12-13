import React, { Component } from "react";

export default class MyServices extends Component {
    render() {
        return (
      <section className="section" id="portfolio">
        <div className="container">
          <h2 className="mb-5 pb-4"><span className="text-danger">My</span> Portfolio</h2>
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <div className="card mb-5">
                <div className="card-header has-icon">
                  <i className="ti-vector text-danger" aria-hidden="true" />
                </div>
                <div className="card-body px-4 py-3">
                  <h5 className="mb-3 card-title text-dark"><a href="https://asmyth01.github.io/geo-adjacency/index.html">geo-adjacency</a></h5>
                  <p className="subtitle">A Python library I wrote for finding adjacency relationships between non-intersecting geometries. Answers questions like, "which buildings are next to sewage treatment plants?"</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="card mb-5">
                <div className="card-header has-icon">
                  <i className="ti-write text-danger" aria-hidden="true" />
                </div>
                <div className="card-body px-4 py-3">
                  <h5 className="mb-3 card-title text-dark"><a href="https://github.com/asmyth01/geo-adjacency/">This Profile Website</a></h5>
                  <p className="subtitle">I wrote this personal website as a demo to develop my React skills. It's adapted from the John Doe Wordpress template. Click to view the source code.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="card mb-5">
                <div className="card-header has-icon">
                  <i className="ti-package text-danger" aria-hidden="true" />
                </div>
                <div className="card-body px-4 py-3">
                  <h5 className="mb-3 card-title text-dark"><a href="https://www.linkedin.com/in/andrew-j-smyth/overlay/50054907/single-media-viewer/?profileId=ACoAAAX60ZUBiAYlXpCrPXNgPuKuODBTO7moHMU">Seattle Magazine</a></h5>
                  <p className="subtitle">I ran a site suitability analysis and produced a map for Seattle magazine showing the best places to live car-free in Seattle.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
        )
    }
}