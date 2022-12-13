import React from 'react'

const BankDetails = () => {
  return (
    <>
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
                                    </div> 
    </>
  )
}

export default BankDetails