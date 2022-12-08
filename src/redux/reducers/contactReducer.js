const initialState = {
    selectedId: 0, list: [
        {
            id: 1, personal_details: {
                first_name: "Jatin",
                last_name: "Parmar",
                email: "jatin.parmar@hauper.com",
                phone: 1213,
                birthday: "1998-08-23",
                gender: "Male"
            },
            company_details: {
                company_name: "Hauper Technologies",
                company_location: "Ahemdabad",
                start_working_date: "28-11-2022",
                end_working_date: "20-11-2050",
                designation: "asd"
            },
            education_details: {
                university_name: "Frameboxx Institute",
                degree_name: "Web Developement",
                admission_date: "2018",
                passout_date: "2019",
                grade: "A+",
                what_you_learnt: "Programming"
            },
            bank_details: {
                account_holder_name: "Pawan Vishwakarma",
                bank_name: "ICICI",
                account_number: 9876543210,
                confirm_account_number: 9876543210,
                ifsc_code: "ICIC000123"
            }
        },
        {

            id: 2, personal_details: {
                first_name: "Pawan",
                last_name: "Vishwakarma",
                email: "pawan.vishwakarma@hauper.com",
                phone: 1213,
                birthday: "1998-08-23",
                gender: "Male"
            },
            company_details: {
                company_name: "Hauper Technologies",
                company_location: "Ahemdabad",
                start_working_date: "28-11-2022",
                end_working_date: "20-11-2050",
                designation: "asd"
            },
            education_details: {
                university_name: "Frameboxx Institute",
                degree_name: "Web Developement",
                admission_date: "2018",
                passout_date: "2019",
                grade: "A+",
                what_you_learnt: "Programming"
            },
            bank_details: {
                account_holder_name: "Pawan Vishwakarma",
                bank_name: "ICICI",
                account_number: 9876543210,
                confirm_account_number: 9876543210,
                ifsc_code: "ICIC000123"
            }
        },
        {
            id: 3, personal_details: {
                first_name: "Firoz",
                last_name: "Hussain",
                email: "pawan.vishwakarma@hauper.com",
                phone: 1213,
                birthday: "1998-08-23",
                gender: "Male"
            },
            company_details: {
                company_name: "Hauper Technologies",
                company_location: "Ahemdabad",
                start_working_date: "28-11-2022",
                end_working_date: "20-11-2050",
                designation: "asd"
            },
            education_details: {
                university_name: "Frameboxx Institute",
                degree_name: "Web Developement",
                admission_date: "2018",
                passout_date: "2019",
                grade: "A+",
                what_you_learnt: "Programming"
            },
            bank_details: {
                account_holder_name: "Pawan Vishwakarma",
                bank_name: "ICICI",
                account_number: 9876543210,
                confirm_account_number: 9876543210,
                ifsc_code: "ICIC000123"
            }
        }
    ]
};
const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_EMPLOYEE":
            state.list = [...state.list, action.payload];
            return state;
        case "UPDATE_EMPLOYEE":
            let new_state = { ...state }
            new_state.list?.forEach((employee, key) => {
                if (employee.id === action.payload.id) {
                    new_state.list[key] = action.payload
                }
            });
            return new_state;
        case "DELETE_EMPLOYEE":
            const filterEmployee = state.list.filter((employee) => employee.id !== action.payload ? employee : null);
            state.list = filterEmployee;
            return { ...state };
        case "SET_EDIT_EMPLOYEE":
            state.selectedId = action.payload;
            return { ...state };
        default:
            return state;
    }
};

export default contactReducer;  