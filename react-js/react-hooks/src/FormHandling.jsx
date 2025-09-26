// https://jsonplaceholder.typicode.com/?utm_source=chatgpt.com

import { useReducer } from "react"

function formReducer(state, action){
    switch (action.type){
        case "UPDATE_FIELD":
            return {
                ...state,
                [action.field]: action.value
            }
        case "RESET":
            return initialState;
        default:
            return state;

    }
}

const initialState = {
    email: "",
    mobile: "",
    password:"",
    confirm_password:""
}

function RegisterForm(){
    const [formState, dispatch] = useReducer(formReducer, initialState);

    // input changes handler
    const handleChange = (e) => {
        dispatch({
            type:"UPDATE_FIELD",
            field:e.target.name,
            value:e.target.value,
        })
    }

    // check value
    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        if(!formState.email.includes("@")){
            alert("Please enter a valid email.")
            return
        }
        if(formState.mobile.length !== 10){
            alert("mobile number must be 10 digits.")
            return
        }
        if(formState.password.length < 8){
            alert("Password must be at least 8 digits.")
            return
        }
        if(formState.confirm_password !== formState.password){
            alert("Password and confirm password does not match")
            return
        }


        console.log("Registration successfully Done.", formState);
        alert('Registration successfully Done.')

    }

    return (
        <>
        <form action="" onSubmit={handleSubmit}>
            <h2>User Registration</h2>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" onChange={handleChange} name="email" value={formState.email} required/>
            </div>
            <div>
                <label htmlFor="mobile">Mobile</label>
                <input type="mobile" onChange={handleChange}  value={formState.mobile} name="mobile" required/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" onChange={handleChange} value={formState.password} name="password" required/>
            </div>
            <div>
                <label htmlFor="confirm_password">Confirm Password</label>
                <input type="confirm_password" onChange={handleChange} value={formState.confirm_password} name="confirm_password" required/>
            </div>
            <button type="submit">Register</button>
            <button type="reset">Reset</button>
            {/* <button onClick={dispatch({type: 'RESET'})}></button> */}
        </form>
        </>
    )
}

export default RegisterForm