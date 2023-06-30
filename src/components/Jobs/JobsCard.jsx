import React from 'react';
import jobs from './data.json';
import './jobs.css';


function JobsCard() {
  return (
        <div className='job-wrapper'>
          <div className='job-card'>
            {jobs.map((job) => (
              <div key={job.id} className='job'>
                <div className="logoimg" style={{ backgroundColor: `${job.logoBackground}` }}>
                  <img src={job.logo} alt="Company Logo" />
                </div>
                <p>{job.postedAt} <span> . </span> {job.contract}</p>
                <h2 style={{ textDecoration: 'none', color: 'black' }}>{job.position}</h2>
                <p>{job.company}</p>
                <h4 style={{ marginTop: '2rem', fontSize: '16px' }}>{job.location}</h4>
              </div>
            ))}
          </div>
        </div>
  );
}

export default JobsCard;
