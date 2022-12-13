import React, { useState } from 'react'
import '../css/style.css'



const PersonalDetail = () => {

    return (
        <>


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


</div> 


        </>
    )
}

export default PersonalDetail