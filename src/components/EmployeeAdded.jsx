import React from 'react'
import { useState } from 'react'
import EmployeeDetail from './EmployeeDetail'

const EmployeeAdded = () => {
 
  return (
    <>
    <div className="employee-added">
        <div className="added-content">
         <img src="https://cdn-icons-png.flaticon.com/512/5290/5290058.png" alt="success-image" width='80px'/>
        <h2>Employee Added</h2>
        <p>Go to Employee list for Details</p>
        {/* <button type='button' className='btn btn-success  py-1 px-4'>Add more employee</button> */}
        </div>
    </div>
   
    </>
  )
}

export default EmployeeAdded