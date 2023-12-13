import React, { Component } from 'react'

export default class Numbers extends Component {
  render() {
    return (
        <section className="section bg-dark text-center">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-6 col-lg-3">
              <div className="row ">
                <div className="col-5 text-right text-light border-right py-3">
                  <div className="m-auto"><i className="ti-alarm-clock icon-xl" /></div>
                </div>
                <div className="col-7 text-left py-3">
                  <h1 className="text-danger font-weight-bold font40">11</h1>
                  <p className="text-light mb-1">Years Coding</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="row">
                <div className="col-5 text-right text-light border-right py-3">
                  <div className="m-auto"><i className="ti-layers-alt icon-xl" /></div>
                </div>
                <div className="col-7 text-left py-3">
                  <h1 className="text-danger font-weight-bold font40">6</h1>
                  <p className="text-light mb-1">Hackweek Wins</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="row">
                <div className="col-5 text-right text-light border-right py-3">
                  <div className="m-auto"><i className="ti-heart-broken icon-xl" /></div>
                </div>
                <div className="col-7 text-left py-3">
                  <h1 className="text-danger font-weight-bold font40">1 mil+</h1>
                  <p className="text-light mb-1">Geometries managed</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="row">
                <div className="col-5 text-right text-light border-right py-3">
                  <div className="m-auto"><i className="ti-face-smile icon-xl" /></div>
                </div>
                <div className="col-7 text-left py-3">
                  <h1 className="text-danger font-weight-bold font40">7,000+</h1>
                  <p className="text-light mb-1">Cups of tea drunk</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>)}}