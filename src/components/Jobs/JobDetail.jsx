import React from 'react';
import { useParams } from 'react-router-dom';
import jobs from './data.json';

function JobDetail() {
  const { position } = useParams();
  const job = jobs.find((job) => job.position === position);


  return (
    <div>
      <h2>{job.position}</h2>
      <p>{job.company}</p>
      <p>{job.location}</p>
      <p>{job.description}</p>
      {/* Add any other job details you want to display */}
    </div>
  );
}

export default JobDetail;
