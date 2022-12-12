import React, { useState, useEffect } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import EmployeeTable from './EmployeeTable'
import { useDispatch, useSelector } from 'react-redux'
import { toast, ToastContainer } from 'react-toastify';
import {number, string, object} from "yup";


const employee_obj ={
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

const EmployeeDetail = () => {
    const globleState = useSelector(state => state);
    const formValid = object({

        first_name : string().required("First name is required")
    })

    const [personalDetail, setPerosnalDetail] = useState(employee_obj);

    const [selectedType, setSelectedType] = useState('personal_details');

    const personalDetailFields = (e, key) => {
        const { name, value } = e.target
        setPerosnalDetail((preValue) => {
            let new_value = { ...preValue };
            if (name === 'profile_photo') {
                new_value[key][name] = URL.createObjectURL(e.target.files[0]);
            } else {
                new_value[key][name] = value;
            }
            return new_value;
        })
        console.log(personalDetail)

    }

    const addEmployee = useSelector((state) => state.list);
    const dispatch = useDispatch();

    const validations = (type) => {
        let valid = true;
        if (type === 'personal_details') {
            if (!personalDetail[type]?.first_name || !personalDetail[type]?.last_name || !personalDetail[type]?.email || !personalDetail[type]?.phone || !personalDetail[type]?.birthday || !personalDetail[type]?.gender) {
               valid = false;
            }

        } else if (type === 'company_details') {
            if (!personalDetail[type]?.company_name || !personalDetail[type]?.company_location || !personalDetail[type]?.start_working_date || !personalDetail[type]?.end_working_date || !personalDetail[type]?.designation) {
                valid = false;
            }
        } else if (type === 'education_details') {
            if (!personalDetail[type]?.university_name || !personalDetail[type]?.degree_name || !personalDetail[type]?.admission_date || !personalDetail[type]?.passout_date || !personalDetail[type]?.grade || !personalDetail[type]?.what_you_learnt) {
                valid = false;
            }
        } else if (type === 'bank_details') {
            if (!personalDetail[type]?.account_holder_name || !personalDetail[type]?.bank_name || !personalDetail[type]?.account_number || !personalDetail[type]?.ifsc_code) {
                valid = false;

            }


        }

        if (!valid) {
            toast.warning("Please fill all the details", {
                theme: "colored"
            })
        }
        return valid;
    }
    const submitPersonalDetail = () => {


        const data = { ...personalDetail };

        if (data.id > 0) {
            dispatch({ type: "UPDATE_EMPLOYEE", payload: data })
            toast.success("Employee Updated", {
                theme: "colored"
            })
        }
        else {
            data.id = addEmployee.length ? (addEmployee[addEmployee.length - 1].id + 1) : 1
            dispatch({ type: "ADD_EMPLOYEE", payload: data })
            toast.success("Employee Added", {
                theme: "colored"
            })

        }

        dispatch({ type: "SET_EDIT_EMPLOYEE", payload: 0 })
        setPerosnalDetail(JSON.parse(JSON.stringify(employee_obj)))
        setSelectedType('personal_details')



    }

    useEffect(() => {
        let selectedData = employee_obj;
        globleState?.list?.map((value) => {
            if (value.id === globleState.selectedId) {
                selectedData = value;
            }
        })
        setPerosnalDetail(JSON.parse(JSON.stringify(selectedData)))
        setSelectedType('personal_details')
    }, [globleState.selectedId])


    return (
        <>
            <div className="container-fluid mt-5 mb-3">
                <div className="row">
                    <div className="col-md-5 col-12 col-sm-12">

                        <div>

                            {
                                selectedType === 'bank_details' ?
                                    <div className="form-section mb-3">
                                        <form>
                                            <div className="three ml-5 mb-3">
                                                {globleState.selectedId > 0 ? <h1>Edit Bank Detail <span className='form-serial-no'>4/4</span></h1> : <h1>Bank Detail <span className='form-serial-no'>4/4</span></h1>}
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-12 col-md-6 col-sm-6 col-xs-12">
                                                    <div className="form-group mb-2">
                                                        <label>Account Holder Name:</label>
                                                        <input onChange={(e) => personalDetailFields(e, 'bank_details')} type="text" value={personalDetail?.bank_details?.account_holder_name} name="account_holder_name" className="form-control" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-6 col-sm-6 col-xs-12">
                                                    <div className="form-group mb-2">
                                                        <label >Bank Name: </label>
                                                        <input onChange={(e) => personalDetailFields(e, 'bank_details')} type="text" value={personalDetail?.bank_details?.bank_name} name="bank_name" className="form-control" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <div className="form-group mb-2">
                                                        <label >Account Number:</label>
                                                        <input onChange={(e) => personalDetailFields(e, 'bank_details')} type="number" value={personalDetail?.bank_details?.account_number} name="account_number" className="form-control" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <div className="form-group mb-2">
                                                        <label >Confirm Account Number:</label>
                                                        <input onChange={(e) => personalDetailFields(e, 'bank_details')} type="number" value={personalDetail?.bank_details?.confirm_account_number} name="confirm_account_number" className="form-control" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <div className="form-group mb-2">
                                                        <label >IFSC Code:</label>
                                                        <input onChange={(e) => personalDetailFields(e, 'bank_details')} type="text" value={personalDetail?.bank_details?.ifsc_code} name="ifsc_code" className="form-control" />

                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 submit">
                                                    <button onClick={() => validations('bank_details') ? submitPersonalDetail() : null} type='button' className='btn btn-success mt-3  py-1 px-4'>Submit</button>
                                                    &nbsp;&nbsp;
                                                    <button type='button' className='btn my-btn-basic py-1 px-4 mt-3' onClick={() => setSelectedType('education_details')}>Back</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div> : null
                            }



                            {selectedType === 'education_details' ?
                                <div className="form-section">
                                    <form>
                                        <div className="three ml-5 mb-3">
                                            {globleState.selectedId > 0 ? <h1>Edit Education Detail <span className='form-serial-no'>3/4</span></h1> : <h1>Education Detail <span className='form-serial-no'>3/4</span></h1>}
                                        </div><div className="row">
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                <div className="form-group mb-2">
                                                    <label >University Name:</label>
                                                    <input onChange={(e) => personalDetailFields(e, 'education_details')} type="text" value={personalDetail?.education_details?.university_name} name="university_name" className="form-control" required />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                <div className="form-group mb-2">
                                                    <label >Degree Name: </label>
                                                    <input onChange={(e) => personalDetailFields(e, 'education_details')} value={personalDetail?.education_details?.degree_name} type="text" name="degree_name" className="form-control" required />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <div className="form-group mb-2">
                                                    <label >Addmision Date:</label>
                                                    <input onChange={(e) => personalDetailFields(e, 'education_details')} type="date" value={personalDetail?.education_details?.admission_date} name="admission_date" className="form-control" required />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <div className="form-group mb-2">
                                                    <label >Passout Date:</label>
                                                    <input onChange={(e) => personalDetailFields(e, 'education_details')} value={personalDetail?.education_details?.passout_date} type="date" name="passout_date" className="form-control" />

                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <div className="form-group mb-2">
                                                    <label >Grade:</label>
                                                    <input onChange={(e) => personalDetailFields(e, 'education_details')} type="text" name="grade" value={personalDetail?.education_details?.grade} className="form-control" required />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <div className="form-group mb-2">
                                                    <label >What You Learnt Here:</label>
                                                    <textarea onChange={(e) => personalDetailFields(e, 'education_details')} name="what_you_learnt" className='form-control' value={personalDetail?.education_details?.what_you_learnt} cols="30" rows="2"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 submit">
                                                <button onClick={() => validations('education_details') ? setSelectedType('bank_details') : null} type='button' className='btn btn-success mt-2  py-1 px-4'>Next</button>&nbsp;&nbsp;
                                                <button type='button' className='btn my-btn-basic py-1 px-4 mt-3' onClick={() => setSelectedType('company_details')}>Back</button>
                                            </div>
                                        </div>
                                    </form>
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
                                                <input onChange={(e) => personalDetailFields(e, 'company_details')} type="text" name="company_name" value={personalDetail?.company_details?.company_name} className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-6 col-sm-6 col-xs-12">
                                            <div className="form-group mb-2">
                                                <label >Company Location: </label>
                                                <input onChange={(e) => personalDetailFields(e, 'company_details')} type="text" name="company_location" value={personalDetail?.company_details?.company_location} className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="form-group mb-2">
                                                <label >Start Working Date:</label>
                                                <input onChange={(e) => personalDetailFields(e, 'company_details')} type="date" name="start_working_date" value={personalDetail?.company_details?.start_working_date} className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="form-group mb-2">
                                                <label >End Working Date:</label>
                                                <input onChange={(e) => personalDetailFields(e, 'company_details')} type="date" name="end_working_date" value={personalDetail?.company_details?.end_working_date} className="form-control" />

                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="form-group mb-2">
                                                <label >Designation:</label>
                                                <input onChange={(e) => personalDetailFields(e, 'company_details')} type="text" value={personalDetail?.company_details?.designation} name="designation" className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 submit">

                                            <button onClick={() => validations('company_details') ? setSelectedType('education_details') : null} type='button' className='btn btn-success mt-3  py-1 px-4'>Next</button>&nbsp;&nbsp;
                                            <button type='button' className='btn my-btn-basic py-1 px-4 mt-3' onClick={() => setSelectedType('personal_details')}>Back</button>

                                        </div>
                                    </div>
                                </div>
                                :
                                null
                            }


                            {selectedType === 'personal_details' ?
                                <div className="form-section">
                                    <form>
                                        <div className="three ml-5 mb-3">
                                            {globleState.selectedId > 0 ? <h1>Edit Personal Detail <span className='form-serial-no'>1/4</span></h1> : <h1>Personal Detail <span className='form-serial-no'>1/4</span></h1>}
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 mt-4 mb-3">
                                                <label>Profile Photo:</label>
                                                <input onChange={(e) => personalDetailFields(e, 'personal_details')} type="file" name="profile_photo" className='form-control' />
                                            </div>
                                            <div className="col-md-6 profile-parent mt-2">
                                                {personalDetail?.personal_details?.profile_photo ? <img src={personalDetail?.personal_details?.profile_photo} className='profile-pic' width="100px" height="100px" /> : <img src="https://www.shareicon.net/data/512x512/2016/07/26/802026_man_512x512.png" className='profile-pic' width="100px" height="100px" />}

                                            </div>
                                        </div>


                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                <div className="form-group mb-2">
                                                    <label htmlFor='first_name'>First Name:</label>
                                                    <input onChange={(e) => personalDetailFields(e, 'personal_details')} type="text" name="first_name" value={personalDetail.personal_details?.first_name} className="form-control" id='first_name' />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                <div className="form-group mb-2">
                                                    <label>Last Name: </label>
                                                    <input onChange={(e) => personalDetailFields(e, 'personal_details')} type="text" name="last_name" value={personalDetail.personal_details?.last_name} className="form-control" required />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <div className="form-group mb-2">
                                                    <label >Email Address:</label>
                                                    <input onChange={(e) => personalDetailFields(e, 'personal_details')} type="email" name="email" value={personalDetail.personal_details?.email} className="form-control" required />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <div className="form-group mb-2">
                                                    <label >Mobile Number:</label>
                                                    <input onChange={(e) => personalDetailFields(e, 'personal_details')} type="tel" value={personalDetail.personal_details?.phone} name="phone" className="form-control" />

                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <div className="form-group mb-2">
                                                    <label >Date Of Birth:</label>
                                                    <input onChange={(e) => personalDetailFields(e, 'personal_details')} type="date" name="birthday" value={personalDetail.personal_details?.birthday} className="form-control" required />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <div className="form-group mb-2">
                                                    <label >Gender:</label>
                                                    <select onChange={(e) => personalDetailFields(e, 'personal_details')} value={personalDetail.personal_details?.gender} name="gender" className="form-control" required>
                                                        <option defaultValue>---Select Gender---</option>
                                                        <option >Male</option>
                                                        <option>Female</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>


                                    </form>
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 submit">

                                            <button onClick={() => validations('personal_details') ? setSelectedType('company_details') : null} type='button' className='btn btn-success mt-3  py-1 px-4'>Next</button>

                                        </div>
                                    </div>
                                </div> : null
                            }
                        </div>








                    </div>
                    <div className="col-md-7 col-12 col-sm-12">
                        <EmployeeTable />
                    </div>
                </div>


            </div>
            <ToastContainer />
        </>
    )
}

export default EmployeeDetail