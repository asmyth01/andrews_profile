import React, { Component } from "react";

export default class Header extends Component {
    render() {
        return (
        <header className="header">
        <div className="container">
          <ul className="social-icons pt-3">
            <li className="social-item"><a className="social-link text-light" href="#"><i className="ti-facebook" aria-hidden="true" /></a></li>
            <li className="social-item"><a className="social-link text-light" href="#"><i className="ti-twitter" aria-hidden="true" /></a></li>
            <li className="social-item"><a className="social-link text-light" href="#"><i className="ti-google" aria-hidden="true" /></a></li>
            <li className="social-item"><a className="social-link text-light" href="#"><i className="ti-instagram" aria-hidden="true" /></a></li>
            <li className="social-item"><a className="social-link text-light" href="#"><i className="ti-github" aria-hidden="true" /></a></li>
          </ul>  
          <div className="header-content">
            <h1 className="header-title">Andrew Smyth</h1>
            <h6 className="header-mono">Senior Software Engineer | GIS Expert</h6>
            <h6 className="title text-danger">(This Site is Under Construction!)</h6>
            <button className="btn btn-primary btn-rounded"><i className="ti-printer pr-2" />Print Resume</button>
          </div>
        </div>
      </header>
        )
    }
}