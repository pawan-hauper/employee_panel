import React from 'react'

const EducationDetail = () => {
  return (
    <>
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

</div> 
    </>
  )
}

export default EducationDetail