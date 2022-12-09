import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import './css/style.css'

const EmployeeTable = () => {

  const addEmployee = useSelector(state => state.list)
  console.log("addEmployee", addEmployee)

  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(false);
  const [getId, setGetId] = useState("")
  const [isDisable, setIsDisable] = useState(false)
  const [isDisablePrev, setIsDisablePrev] = useState(false)

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordPerPage] = useState(5);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  const currentRecords = addEmployee.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(addEmployee.length / recordsPerPage)
  const editEmployee = (id) => {
    dispatch({ type: "SET_EDIT_EMPLOYEE", payload: id })
  }

  const addMoreEmployee = () => {
    dispatch({ type: "SET_EDIT_EMPLOYEE", payload: 0 })
  }

  const deleteEmployee = (id) => {
    setGetId(id)
    setShow(true)
  }

  const confirmDelete = () => {
    dispatch({ type: "DELETE_EMPLOYEE", payload: getId })
    toast.error("Employee Deleted")
  }

  const nextPage = () => {

    if (currentPage !== nPages) {
      setCurrentPage(currentPage + 1)
      setIsDisablePrev(false)

    } else {
      setIsDisable(true)
    }

  }

  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1)
      setIsDisable(false)
    } else {
      setIsDisablePrev(true)
    }

  }

  const searchField = (e) => {
    setSearch(e.target.value)
    if (search === "") {
      setRecordPerPage(5)
    } else if (search.length === 1) {
      setRecordPerPage(5)
    } else {
      setRecordPerPage(addEmployee.length)
    }
    console.log(search)
  }


  return (
    <>
      <div className="col-md-12">
        <input type="text" onChange={searchField}
          className='form-control mb-3 w-25 search-bar' placeholder='Search Employee' />

        <div className='table-parent'>
          <div className="btn-right">
            <div className="three"><h1>Employee List</h1></div>
            <button onClick={addMoreEmployee} type="submit" className='btn my-btn py-1 px-3' >Add Employee</button>
          </div>

          <table className="table w-100">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Picture</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>

            </thead>
            <tbody>

              {currentRecords?.filter((employee) => {
                if (search === "") {
                  return employee
                } else if (
                  employee?.personal_details?.first_name?.toLowerCase().includes(search.toLowerCase()) ||

                  employee?.personal_details?.last_name?.toLowerCase().includes(search.toLowerCase()) ||

                  employee?.personal_details?.email?.toLowerCase().includes(search.toLowerCase()) ||

                  employee?.personal_details?.birthday.includes(search.toLowerCase()) ||

                  employee?.company_details?.company_name.toLowerCase().includes(search.toLowerCase()) ||

                  employee?.company_details?.company_location.toLowerCase().includes(search.toLowerCase()) ||

                  employee?.company_details?.designation.toLowerCase().includes(search.toLowerCase()) ||

                  employee?.company_details?.start_working_date.includes(search.toLowerCase()) ||

                  employee?.company_details?.end_working_date.includes(search.toLowerCase()) ||

                  employee?.education_details?.university_name.toLowerCase().includes(search.toLowerCase()) ||

                  employee?.education_details?.degree_name.toLowerCase().includes(search.toLowerCase()) ||

                  employee?.education_details?.admission_date.includes(search.toLowerCase()) ||

                  employee?.education_details?.passout_date.includes(search.toLowerCase()) ||

                  employee?.education_details?.grade.toLowerCase().includes(search.toLowerCase()) ||

                  employee?.education_details?.what_you_learnt.toLowerCase().includes(search.toLowerCase()) || 

                  employee?.bank_details?.account_holder_name.toLowerCase().includes(search.toLowerCase()) ||

                  employee?.bank_details?.bank_name.toLowerCase().includes(search.toLowerCase()) ||
                  
                  employee?.bank_details?.ifsc_code.toLowerCase().includes(search.toLowerCase())           
                  )
                  return employee
                }).map((employee) => {
                return (
                  <tr key={employee?.id}>
                    <td>{employee?.id}</td>
                    <td>{employee?.personal_details?.profile_photo ? <img src={employee?.personal_details?.profile_photo} width="50px" height="50px" style={{ borderRadius: "50px" }} /> : <img src="https://www.shareicon.net/data/512x512/2016/07/26/802026_man_512x512.png" alt='profile-image' className='profile-pic' width="50px" height="50px" />}</td>
                    <td>{employee?.personal_details?.first_name}</td>
                    <td >{employee?.personal_details?.last_name}</td>
                    <td><button type="submit" onClick={() => editEmployee(employee.id)} className='btn btn-success py-1 px-4' >Edit</button></td>
                    <td><button onClick={() => deleteEmployee(employee.id)} data-bs-toggle={show ? "modal" : null} data-bs-target={show ? "#myModal" : null} type="submit" className='btn btn-danger py-1 px-4'>Delete</button>
                      <div className="modal fade" id="myModal" key={employee.id}>
                        <div className="modal-dialog modal-dialog-centered">
                          <div className="modal-content">
                            <div className="modal-body text-center">
                              <h5>Are you sure..?</h5>
                              <div className='mt-4'></div>
                              <button onClick={confirmDelete} type="button" className="btn btn-danger py-1 px-4" data-bs-dismiss="modal">Yes</button>&nbsp;
                              <button type="button" className="btn my-btn-basic py-1 px-4" data-bs-dismiss="modal">No</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>

                )
              })}

            </tbody>
          </table>
        </div>

        <div className="pagination">
          <button type="submit" onClick={prevPage} className='btn btn-success py-1 px-4' disabled={isDisablePrev}> <i className="fa-solid fa-chevron-left"></i> Prev</button>
          <button className='btn btn-current-page'>{currentPage}</button>
          <button type="submit" onClick={nextPage} className='btn btn-success py-1 px-4' disabled={isDisable}>Next <i className="fa-solid fa-chevron-right"></i></button>
        </div>
      </div>



    </>
  )
}

export default EmployeeTable