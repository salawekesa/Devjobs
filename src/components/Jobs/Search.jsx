import React from 'react'

function Search() {
  return (
    <div>
    <div className='Search-container'>
    <div className='Search-bar'>
    <div className='Search_1'>
      <input type='text' placeholder='Filter by title'></input>
    </div>
    <div className='Search_2'>
      <input type='text' placeholder='Filter by location'></input>
    </div>
    
    <div className='Search_3'>
      <label for="filter-by">Filter by</label> 
        <select name="filter-by" id="filter-by"> 
            <option value="FullTime">FullTime</option> 
            <option value="PartTime">PartTime</option> 
            <option value="Freelancer">Freelancer</option> 
            <option value="Contract">Contract</option> 
        </select>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Search