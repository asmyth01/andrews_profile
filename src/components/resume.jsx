import React, { Component } from 'react'

export default class Resume extends Component {
  render() {
    return (
    <section className="section" id="resume">
    <div className="container">
    <h2 className="mb-5"><span className="text-danger">My</span> Resume</h2>
    <div className="row">
        <div className="col-md-6 col-lg-4">
        <div className="card">
            <div className="card-header">
            <div className="mt-2">
                <h4>Experience</h4>
                <span className="line" />  
            </div>
            </div>
            <div className="card-body">
            <h6 className="title text-danger">2023 - Present</h6>
            <h6 className="subtitle text-dark">Zillow - Senior Software Development Engineer</h6>
            <p className="subtitle">Designed, built, tested, scaled, and managed CI/CD of tier 1 microservices and geospatial search platform. Mentored junior teammates. Helped set team priorities and standards.</p>
            <hr />
            <h6 className="title text-danger">2019 - 2023</h6>
            <p>Front-end Developer</p>
            <h6 className="subtitle text-dark">Zillow - Software Development Engineer</h6>
            <p className="subtitle">Helped developed new search platform, managed geospatial data, created derived data products,developed ETL workflows, built new geotagging platform.</p>
            <hr />
            <h6 className="title text-danger">2016 - 2019</h6>
            <h6 className="subtitle text-dark">Zillow - GIS Manager</h6>
            <p className="subtitle">Hired and mentored 6 direct reports. Set team goals, priorities, standards. Evangelized for GIS throughout the company. Vetted and onboarded new data vendors.</p>
            <h6 className="title text-danger">2014 - 2016</h6>
            <h6 className="subtitle text-dark">Zillow - GIS Analyst II</h6>
            <p className="subtitle">Edited region boundaries, triaged customer reports, automated workflows with Python, analysed geospatial data in SQL and Python, managed a database of 800,000 region boundaries.</p>
            </div>
        </div>
        </div>
        <div className="col-md-6 col-lg-4">
        <div className="card">
            <div className="card-header">
            <div className="mt-2">
                <h4>Education</h4>
                <span className="line" />  
            </div>
            </div>
            <div className="card-body">
            <h6 className="title text-danger">Starting Jan 2024</h6>
            <h6 className="subtitle text-dark">University of Washington, Seattle WA</h6>
            <p className="subtitle">Certificate in Machine Learning (ML). Three quarters of courses in ML topics.</p>
            <hr />
            <h6 className="title text-danger">2011 - 2012</h6>
            <h6 className="subtitle text-dark">University of Washington, Seattle WA</h6>
            <p className="subtitle">Certificate in Geographic Information Systems (GIS). Three quarters, with capstone project.</p>
            <hr />
            <h6 className="title text-danger">2007 - 2011</h6>
            <h6 className="subtitle text-dark">Tufts University, Medford MA</h6>
            <p className="subtitle">Bachelor of Science in Environmental Science, History. Dean's List. 3.49 GPA.</p>
            </div>
        </div>
        </div>
        <div className="col-lg-4">
        <div className="card">
            <div className="card-header">
            <div className="pull-left">
                <h4 className="mt-2">Programming Langauges</h4>
                <span className="line" />  
            </div>
            </div>
            <div className="card-body pb-2">
            <h6>Java</h6>
            <div className="progress mb-3">
                <div className="progress-bar bg-danger" role="progressbar" style={{width: '100%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
            </div>
            <h6>SQL</h6>
            <div className="progress mb-3">
                <div className="progress-bar bg-danger" role="progressbar" style={{width: '100%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
            </div>
            <h6>Python</h6>
            <div className="progress mb-3">
                <div className="progress-bar bg-danger" role="progressbar" style={{width: '100%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
            </div>
            <h6>Scala</h6>
            <div className="progress mb-3">
                <div className="progress-bar bg-danger" role="progressbar" style={{width: '80%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
            </div>
            <h6>C#</h6>
            <div className="progress mb-3">
                <div className="progress-bar bg-danger" role="progressbar" style={{width: '60%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
            </div>
            <h6>JavaScript / React</h6>
            <div className="progress mb-3">
                <div className="progress-bar bg-danger" role="progressbar" style={{width: '50%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
            </div>
            <h6>HTML5 &amp; CSS3</h6>
            <div className="progress mb-3">
                <div className="progress-bar bg-danger" role="progressbar" style={{width: '50%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
            </div>
            <h6>GraphQL</h6>
            <div className="progress mb-3">
                <div className="progress-bar bg-danger" role="progressbar" style={{width: '40%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
            </div>
            
            
            
            </div>
        </div>
        <div className="card">
            <div className="card-header">
            <div className="pull-left">
                <h4 className="mt-2">Spoken Languages</h4>
                <span className="line" />  
            </div>
            </div>
            <div className="card-body pb-2">
            <h6>English</h6>
            <div className="progress mb-3">
                <div className="progress-bar bg-danger" role="progressbar" style={{width: '100%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
            </div>
            <h6>Spanish</h6>
            <div className="progress mb-3">
                <div className="progress-bar bg-danger" role="progressbar" style={{width: '90%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
            </div>
            <h6>Italian</h6>
            <div className="progress mb-3">
                <div className="progress-bar bg-danger" role="progressbar" style={{width: '60%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
            </div>
            <h6>French</h6>
            <div className="progress mb-3">
                <div className="progress-bar bg-danger" role="progressbar" style={{width: '50%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
            </div>
            <h6>German</h6>
            <div className="progress mb-3">
                <div className="progress-bar bg-danger" role="progressbar" style={{width: '40%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
            </div>
            <h6>Mandarin</h6>
            <div className="progress mb-3">
                <div className="progress-bar bg-danger" role="progressbar" style={{width: '20%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
            </div>
            </div>
        </div>
        </div>
    </div>
    </div>
    </section>)
}
}