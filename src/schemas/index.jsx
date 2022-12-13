import * as Yup from "yup";




export const empoyeeSchema = Yup.object({
    personal_details : Yup.object({
        first_name: Yup.string().min(3,"Must be at least 3 characters").max(15).required("Please enter first name"),
        last_name: Yup.string().min(3, "Must be at least 3 characters").max(15).required("Please enter last name"),
        email: Yup.string().email("Email must be valid").required('Please enter email'),
        phone: Yup.string("Must be 10 numbers").required('Please enter phone number'),
        birthday: Yup.string().required("Please select birthday date"),
        gender: Yup.string().required('Please select gender'),
    }),
   
    company_name: Yup.string().min(5, "Must be at least 5 characters").required('Please enter company name') ,
    company_location: Yup.string().min(3, "Must be at least 3 characters").required('Please enter location'),
    start_working_date: Yup.string().required('Please select start date'),
    end_working_date: Yup.string().required('Please select start date'),
    designation: Yup.string().min(5, "Must be at least 5 characters").required('Please enter designation'),
    university_name: Yup.string().min(5, "Must be at least 3 characters").required('Please enter university name'),
    degree_name: Yup.string().min(5, "Must be at least 3 characters").required('Please enter degree'),
    admission_date: Yup.string().required('Please select admission date'),
    passout_date: Yup.string().required('Please select admission date'),
    grade: Yup.string().required('Please enter grade'),
    what_you_learnt: Yup.string().required('Please enter what you learnt'),
    account_holder_name: Yup.string().min(3, "Must be at least 3 characters").max(25).required('Please account holder name grade'),
    bank_name: Yup.string().min(3, "Must be at least 3 characters").max(25).required('Please enter bank name '),
    account_number: Yup.string().required('Please enter account number'),
    confirm_account_number: Yup.string().required('Passwork must match'),
    ifsc_code: Yup.string().required('Please enter ifsc code'),

})