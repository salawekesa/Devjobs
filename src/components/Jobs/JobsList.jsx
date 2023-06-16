import React, { useState } from 'react';
import './jobs.css';
import './data.json'
import JobsCard from './JobsCard';
import Search from './Search';

const JobsList = () => {

  //   const [jobs,setjobs] = useState()
  //   const [isLoading,setisLoading] = useState()
  //   const [error,setError] = useState()
    
  //   useEffect(()=>{
  //     const fetchjobs = async()=>{
  //       const results = await fetch("https://dummyjson.com/todos")
  //       const res = await results.json()
  //       console.log(res)
  //       console.log("hello");
  //     }
  //     fetchjobs()
  // }
    
  //   )

  return (
  
    <div>
        <Search/>
        <div className='Jobs'>
          <JobsCard/>
        </div>
    </div>
  )
}

export default JobsList