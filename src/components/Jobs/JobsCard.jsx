import React from 'react'
import jobs from './data.json'
import './jobs.css';
import { Router } from 'react-router-dom';


function JobsCard() {
  return (
    <Router>
      <switch>
      <div className='job-wrapper'>
      <div className='job-card'>
      {jobs.map((job) => (
          <div key={job.id} className='job'>

              <div className="logoimg" style={{backgroundColor:`${job.logoBackground}`}}>
                <img src={job.logo}/>
              </div>
              <p>{job.postedAt} <span> . </span> {job.contract}</p>
              <h2 style={{color:'black'}}> {job.position}</h2>
              <p>{job.company}</p>
              <Route exact path="/" component={JobList} />
              <Route path="/jobs/:id" component={JobDetail} />
              <h4 style={{marginTop:'2rem', fontSize:'16px'}}>{job.location}</h4>
          </div>
      ) )}
      </div>
  </div>
      </switch>
    </Router>
    
  )
}

export default JobsCard