import * as yup from "yup";

const userScheme = yup.object().shape({
    
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


})