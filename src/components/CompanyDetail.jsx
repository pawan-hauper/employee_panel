import React from 'react'

const CompanyDetail = () => {
    return (
        <>
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
        </>
    )
}

export default CompanyDetail