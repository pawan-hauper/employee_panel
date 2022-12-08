import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import './css/style.css'

const EmployeeTable = () => {
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(false);
  const [getId, setGetId] = useState("")


  const addEmployee = useSelector(state => state.list)
  console.log("addEmployee", addEmployee)

  const dispatch = useDispatch();


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

  return (
    <>
      <div className="col-md-12">
        <input type="text" onChange={(e) => setSearch(e.target.value)} className='form-control mb-3 w-25 search-bar' placeholder='Search Employee' />

        <div className='table-parent'>
          <div className="btn-right">
            <div className="three"><h1>Employee List</h1></div>
            <button onClick={addMoreEmployee} type="submit" className='btn my-btn py-1 px-3' >Add Employee</button>

          </div>

          <table className="table w-100">
            <thead>
              <tr>
                <th>S.No</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>

            </thead>

            <tbody>

              {addEmployee.filter((employee) => {
                if (search === "") {
                  return employee
                } else if (employee?.personal_details?.first_name.toLowerCase().includes(search.toLowerCase()) || employee?.personal_details?.last_name.toLowerCase().includes(search.toLowerCase())) {
                  return employee
                }
              }).map((employee) => {
                return (
                  <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.personal_details?.first_name}</td>
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



      </div>



    </>
  )
}

export default EmployeeTable