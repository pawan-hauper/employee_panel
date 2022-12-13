import React, { useState, useEffect } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import EmployeeTable from './EmployeeTable'
import { useDispatch, useSelector } from 'react-redux'
import { toast, ToastContainer } from 'react-toastify';
import { number, string, object } from "yup";
import { Formik, useFormik } from 'formik';
import { empoyeeSchema } from '../schemas';




const EmployeeDetail = () => {

    const employee_obj = {
        id: 0,
        personal_details: {
            profile_photo: "",
            first_name: "",
            last_name: "",
            email: "",
            phone: "",
            birthday: "",
            gender: ""
        },
        company_details: {
            company_name: "",
            company_location: "",
            start_working_date: "",
            end_working_date: "",
            designation: ""
        },
        education_details: {
            university_name: "",
            degree_name: "",
            admission_date: "",
            passout_date: "",
            grade: "",
            what_you_learnt: ""
        },
        bank_details: {
            account_holder_name: "",
            bank_name: "",
            account_number: "",
            confirm_account_number: "",
            ifsc_code: ""
        }

    };

    const globleState = useSelector(state => state);

    const [selectedType, setSelectedType] = useState('personal_details');

    const addEmployee = useSelector((state) => state.list);

    const dispatch = useDispatch();

    const formik = useFormik({

        initialValues: employee_obj,
        validationSchema: empoyeeSchema,
        onSubmit: (values) => {

            const data = { ...values };
            console.log("submit", data)
            if (data.id > 0) {
                dispatch({ type: "UPDATE_EMPLOYEE", payload: data })
                toast.success("Employee Updated", {
                    theme: "colored"
                })
            }
            else {
                data.id = addEmployee.length ? (addEmployee[addEmployee.length - 1].id + 1) : 1
                dispatch({ type: "ADD_EMPLOYEE", payload: data })
                setSelectedType('personal_details')
                toast.success("Employee Added", {
                    theme: "colored"
                })

            }

            dispatch({ type: "SET_EDIT_EMPLOYEE", payload: 0 })
            setSelectedType('personal_details')


        },
        onChange: (values) => {
            console.log("formik Values", formik.values)
        }
    })

    useEffect(() => {
        let selectedData = employee_obj;
        globleState?.list?.map((value) => {
            if (value.id === globleState.selectedId) {
                selectedData = value;
            }
        })
        setSelectedType('personal_details')
        formik.setValues(selectedData)
    }, [globleState.selectedId])





    return (

        <>
            <div className="container-fluid mt-5 mb-3">
                <div className="row">
                    <div className="col-md-5 col-12 col-sm-12">

                        <form onSubmit={formik?.handleSubmit}>


                            {selectedType === 'personal_details' ?
                                <div className="form-section">

                                    <div className="three ml-5 mb-3">
                                        {globleState.selectedId > 0 ? <h1>Edit Personal Detail <span className='form-serial-no'>1/4</span></h1> : <h1>Personal Detail <span className='form-serial-no'>1/4</span></h1>}
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 mt-4 mb-3">
                                            <label>Profile Photo:</label>
                                            <input onChange={(e) => formik.handleChange(e, 'personal_details')} type="file" name="personal_details.profile_photo" className='form-control' />
                                        </div>
                                        <div className="col-md-6 profile-parent mt-2">
                                            {formik?.values.personal_details?.pro ? <img src={formik?.values.personal_details?.profile_photo} className='profile-pic' width="100px" height="100px" /> : <img src="https://www.shareicon.net/data/512x512/2016/07/26/802026_man_512x512.png" className='profile-pic' width="100px" height="100px" />}

                                        </div>
                                    </div>


                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                            <div className="form-group mb-2">
                                                <label htmlFor='first_name'>First Name:</label>
                                                <input onChange={formik?.handleChange} type="text" name="personal_details.first_name" value={formik?.values.personal_details?.first_name} className="form-control" id='first_name' onBlur={formik.handleBlur} />



                                                {
                                                    formik.errors.personal_details && formik.touched.personal_details ?
                                                        <span className='form-errors'>{formik.errors.personal_details.first_name}</span> : null
                                                }

                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                            <div className="form-group mb-2">
                                                <label>Last Name: </label>
                                                <input onChange={(e) => formik.handleChange(e, 'personal_details')} type="text" name="personal_details.last_name" value={formik?.values.personal_details.last_name} className="form-control" />
                                                {
                                                    formik.errors.personal_details && formik.touched.personal_details ? (
                                                        <span className='form-errors'>{formik.errors.personal_details.last_name}</span>) : null
                                                }

                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="form-group mb-2">
                                                <label >Email Address:</label>
                                                <input onChange={(e) => formik.handleChange(e, 'personal_details')} type="email" name="personal_details.email" value={formik?.values.personal_details.email} className="form-control" required />

                                                {
                                                    formik.errors.personal_details && formik.touched.personal_details ? (
                                                        <span className='form-errors'>{formik.errors.personal_details.email}</span>) : null
                                                }
                                               

                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="form-group mb-2">
                                                <label >Mobile Number:</label>
                                                <input onChange={(e) => formik.handleChange(e, 'personal_details')} type="number" value={formik?.values.personal_details.phone} name="personal_details.phone" className="form-control" />
                                                {
                                                    formik.errors.personal_details && formik.touched.personal_details ? (
                                                        <span className='form-errors'>{formik.errors.personal_details.phone}</span>) : null
                                                }

                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="form-group mb-2">
                                                <label >Date Of Birth:</label>
                                                <input onChange={(e) => formik.handleChange(e, 'personal_details')} type="date" name="personal_details.birthday" value={formik?.values.personal_details.birthday} className="form-control" required />
                                                {
                                                    formik.errors.personal_details && formik.touched.personal_details ? (
                                                        <span className='form-errors'>{formik.errors.personal_details.birthday}</span>) : null
                                                }

                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="form-group mb-2">
                                                <label >Gender:</label>
                                                <select onChange={(e) => formik.handleChange(e, 'personal_details')} value={formik?.values.personal_details.gender} name="personal_details.gender" className="form-control" required>
                                                    <option defaultValue>---Select Gender---</option>
                                                    <option >Male</option>
                                                    <option>Female</option>
                                                </select>
                                                {
                                                    formik.errors.personal_details && formik.touched.personal_details ? (
                                                        <span className='form-errors'>{formik.errors.personal_details.gender}</span>) : null
                                                }

                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 submit">
                                            {/* <button onClick={() => validations('personal_details') ? setSelectedType('company_details') : null} type='button' className='btn btn-success mt-3  py-1 px-4'>Next</button> */}

                                            <button onClick={() => setSelectedType('company_details')} type='button' className='btn btn-success mt-3  py-1 px-4'>Next</button>

                                        </div>
                                    </div>


                                </div> : null
                            }

                            {selectedType === 'company_details' ?

                                <div className='form-section experience_form'>
                                    <div className="three ml-5 mb-3">
                                        {globleState.selectedId > 0 ? <h1>Edit Experience Detail <span className='form-serial-no'>2/4</span></h1> : <h1>Experience Detail <span className='form-serial-no'>2/4</span></h1>}
                                    </div><div className="row">
                                        <div className="col-lg-12 col-md-6 col-sm-6 col-xs-12">
                                            <div className="form-group mb-2">
                                                <label >Company Name:</label>
                                                <input onChange={(e) => formik.handleChange(e, 'company_details')} type="text" name="company_details.company_name" value={formik?.values.company_details.company_name} className="form-control" />
                                                {
                                                    formik.errors.company_details && formik.touched.company_details ? (
                                                        <span className='form-errors'>{formik.errors.company_details.company_name}</span>) : null
                                                }

                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-6 col-sm-6 col-xs-12">
                                            <div className="form-group mb-2">
                                                <label >Company Location: </label>
                                                <input onChange={(e) => formik.handleChange(e, 'company_details')} type="text" name="company_details.company_location" value={formik?.values.company_details.company_location} className="form-control" />
                                                {
                                                    formik.errors.company_details && formik.touched.company_details ? (
                                                        <span className='form-errors'>{formik.errors.company_details.company_location}</span>) : null
                                                }

                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="form-group mb-2">
                                                <label >Start Working Date:</label>
                                                <input onChange={(e) => formik.handleChange(e, 'company_details')} type="date" name="company_details.start_working_date" value={formik?.values.company_details.start_working_date} className="form-control" />
                                                {
                                                    formik.errors.company_details && formik.touched.company_details ? (
                                                        <span className='form-errors'>{formik.errors.company_details.start_working_date}</span>) : null
                                                }

                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="form-group mb-2">
                                                <label >End Working Date:</label>
                                                <input onChange={(e) => formik.handleChange(e, 'company_details')} type="date" name="company_details.end_working_date" value={formik?.values.company_details.end_working_date} className="form-control" />
                                                {
                                                    formik.errors.company_details && formik.touched.company_details ? (
                                                        <span className='form-errors'>{formik.errors.company_details.end_working_date}</span>) : null
                                                }

                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="form-group mb-2">
                                                <label >Designation:</label>
                                                <input onChange={(e) => formik.handleChange(e, 'company_details')} type="text" value={formik?.values.company_details.designation} name="company_details.designation" className="form-control" />

                                                {
                                                    formik.errors.company_details && formik.touched.company_details ? (
                                                        <span className='form-errors'>{formik.errors.company_details.designation}</span>) : null
                                                }

                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 submit">

                                            {/* <button onClick={() => validations('company_details') ? setSelectedType('education_details') : null} type='button' className='btn btn-success mt-3  py-1  px-4'>Next</button>&nbsp;&nbsp; */}

                                            <button onClick={() => setSelectedType('education_details')} type='button' className='btn btn-success mt-3  py-1 px-4'>Next</button>&nbsp;&nbsp;

                                            <button type='button' className='btn my-btn-basic py-1 px-4 mt-3' onClick={() => setSelectedType('personal_details')}>Back</button>

                                        </div>
                                    </div>
                                </div>
                                :
                                null
                            }

                            {selectedType === 'education_details' ?
                                <div className="form-section">

                                    <div className="three ml-5 mb-3">
                                        {globleState.selectedId > 0 ? <h1>Edit Education Detail <span className='form-serial-no'>3/4</span></h1> : <h1>Education Detail <span className='form-serial-no'>3/4</span></h1>}
                                    </div><div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                            <div className="form-group mb-2">
                                                <label >University Name:</label>
                                                <input onChange={(e) => formik.handleChange(e, 'education_details')} type="text" value={formik?.values.education_details.university_name} name="education_details.university_name" className="form-control" required />
                                                {
                                                    formik.errors.education_details && formik.touched.education_details ? (
                                                        <span className='form-errors'>{formik.errors.education_details.university_name}</span>) : null
                                                }

                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                            <div className="form-group mb-2">
                                                <label >Degree Name: </label>
                                                <input onChange={(e) => formik.handleChange(e, 'education_details')} value={formik?.values.education_details.degree_name} type="text" name="education_details.degree_name" className="form-control" required />
                                                {
                                                    formik.errors.education_details && formik.touched.education_details ? (
                                                        <span className='form-errors'>{formik.errors.education_details.degree_name}</span>) : null
                                                }

                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="form-group mb-2">
                                                <label >Addmision Date:</label>
                                                <input onChange={(e) => formik.handleChange(e, 'education_details')} type="date" value={formik?.values.education_details.admission_date} name="education_details.admission_date" className="form-control" required />

                                                {
                                                    formik.errors.education_details && formik.touched.education_details ? (
                                                        <span className='form-errors'>{formik.errors.education_details.admission_date}</span>) : null
                                                }

                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="form-group mb-2">
                                                <label >Passout Date:</label>
                                                <input onChange={(e) => formik.handleChange(e, 'education_details')} value={formik?.values.education_details.passout_date} type="date" name="education_details.passout_date" className="form-control" />
                                               {
                                                    formik.errors.education_details && formik.touched.education_details ? (
                                                        <span className='form-errors'>{formik.errors.education_details.passout_date}</span>) : null
                                                }


                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="form-group mb-2">
                                                <label >Grade:</label>
                                                <input onChange={(e) => formik.handleChange(e, 'education_details')} type="text" name="education_details.grade" value={formik?.values.education_details.grade} className="form-control" required />
                                                {
                                                    formik.errors.education_details && formik.touched.education_details ? (
                                                        <span className='form-errors'>{formik.errors.education_details.grade}</span>) : null
                                                }

                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="form-group mb-2">
                                                <label >What You Learnt Here:</label>
                                                <textarea onChange={(e) => formik.handleChange(e, 'education_details')} name="education_details.what_you_learnt" className='form-control' value={formik?.values.education_details.what_you_learnt} cols="30" rows="2"></textarea>
                                                {
                                                    formik.errors.education_details && formik.touched.education_details ? (
                                                        <span className='form-errors'>{formik.errors.education_details.what_you_learnt}</span>) : null
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 submit">

                                            {/* <button onClick={() => validations('education_details') ? setSelectedType('bank_details') : null} type='button' className='btn btn-success mt-2  py-1 px-4'>Next</button>&nbsp;&nbsp; */}

                                            <button onClick={() => setSelectedType('bank_details')} type='button' className='btn btn-success mt-2  py-1 px-4'>Next</button>&nbsp;&nbsp;

                                            <button type='button' className='btn my-btn-basic py-1 px-4 mt-3' onClick={() => setSelectedType('company_details')}>Back</button>
                                        </div>
                                    </div>

                                </div> : null
                            }


                            {
                                selectedType === 'bank_details' ?
                                    <div className="form-section mb-3">
                                        <div className="three ml-5 mb-3">
                                            {globleState.selectedId > 0 ? <h1>Edit Bank Detail <span className='form-serial-no'>4/4</span></h1> : <h1>Bank Detail <span className='form-serial-no'>4/4</span></h1>}
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12 col-md-6 col-sm-6 col-xs-12">
                                                <div className="form-group mb-2">
                                                    <label>Account Holder Name:</label>
                                                    <input onChange={formik?.handleChange} type="text" value={formik?.values.bank_details.account_holder_name} name="bank_details.account_holder_name" className="form-control" />
                                                    {
                                                    formik.errors.bank_details && formik.touched.bank_details ? (
                                                        <span className='form-errors'>{formik.errors.bank_details.account_holder_name}</span>) : null
                                                }

                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-6 col-sm-6 col-xs-12">
                                                <div className="form-group mb-2">
                                                    <label >Bank Name: </label>
                                                    <input onChange={(e) => formik.handleChange(e, 'bank_details')} type="text" value={formik?.values.bank_details.bank_name} name="bank_details.bank_name" className="form-control" />
                                                    {
                                                    formik.errors.bank_details && formik.touched.bank_details ? (
                                                        <span className='form-errors'>{formik.errors.bank_details.bank_name}</span>) : null
                                                }

                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <div className="form-group mb-2">
                                                    <label >Account Number:</label>
                                                    <input onChange={(e) => formik.handleChange(e, 'bank_details')} type="number" value={formik?.values.bank_details.account_number} name="bank_details.account_number" className="form-control" />
                                                    {
                                                    formik.errors.bank_details && formik.touched.bank_details ? (
                                                        <span className='form-errors'>{formik.errors.bank_details.account_number}</span>) : null
                                                }
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <div className="form-group mb-2">
                                                    <label >Confirm Account Number:</label>
                                                    <input onChange={(e) => formik.handleChange(e, 'bank_details')} type="number" value={formik?.values.bank_details.confirm_account_number} name="bank_details.confirm_account_number" className="form-control" />
                                                    {
                                                    formik.errors.bank_details && formik.touched.bank_details ? (
                                                        <span className='form-errors'>{formik.errors.bank_details.confirm_account_number}</span>) : null
                                                }
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <div className="form-group mb-2">
                                                    <label >IFSC Code:</label>
                                                    <input onChange={(e) => formik.handleChange(e, 'bank_details')} type="text" value={formik?.values.bank_details.ifsc_code} name="bank_details.ifsc_code" className="form-control" />
                                                    {
                                                    formik.errors.bank_details && formik.touched.bank_details ? (
                                                        <span className='form-errors'>{formik.errors.bank_details.ifsc_code}</span>) : null
                                                }     </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 submit">


                                                {/* <button onClick={() => validations('bank_details')} type='button' className='btn btn-success mt-3  py-1 px-4'>Submit</button>
                                                    &nbsp;&nbsp; */}

                                                <button type='submit' className='btn btn-success mt-3  py-1 px-4'>Submit</button>
                                                &nbsp;&nbsp;
                                                <button type='button' className='btn my-btn-basic py-1 px-4 mt-3' onClick={() => setSelectedType('education_details')}>Back</button>
                                            </div>
                                        </div>
                                    </div> : null
                            }









                        </form>








                    </div>
                    <div className="col-md-7 col-12 col-sm-12">
                        <EmployeeTable />
                    </div>
                </div>


            </div>
        </>
    )
}

export default EmployeeDetail