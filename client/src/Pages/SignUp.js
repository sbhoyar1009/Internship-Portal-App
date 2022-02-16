import React from 'react'
import { useState } from 'react'
import {Formik,Form,ErrorMessage,useField} from 'formik'; 
import * as Yup from 'yup';
import { TextField } from './TextField';
import { Navigate } from 'react-router-dom';
import {signup} from "../Utiles/Login";

export default function SignUp() {

const [details,setDetails] = useState({
    "email": "",
    "mobileno" : "",
    "password" : ""
})

const validate = Yup.object({
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
      mobileno : Yup.string()
      .max(10,"Mobile no must be a 10 digit no")
      .required("Mobile No is required"),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required')
  })

const onSubmit = (e)=>{
    e.preventDefault();
     console.log(details);
     signup(details).then((res)=>{
       console.log("User created successfully");
     }).catch((err)=>{
       console.log("some error occured")
     })

    //  <Navigate to="/login" />  
    // console.log("OnSubmit is called");
    
}



    return (
        <div class="d-flex justify-content-center">
            <div class="d-flex flex-column">
            <div style={{height:"70%"}}>
            <div class="border border-grey rounded p-3 d-flex justify-content-center" style={{ width:"25rem",background:"white"}}>
                <Formik
                // initialValues={{
                //     email:"",
                //     mobileno :"",
                //     password : "",
                //     confirmPassword : ""
                // }}
                validationSchema={validate}
                >
                    {formik=>(
                <div>
                    <h1>Portal</h1>
                    <br></br>
                    <h6 style={{color:"grey"}} >Register to unlock all the internships offered by your college</h6>
                    <br />
                    <Form onSubmit={onSubmit}>
                      <TextField placeholder="Enter your Email ID" name="email" type="email" size="25"
                      onChange={(e)=>{
                          // console.log(e.target.value);
                          setDetails({"email" : e.target.value});

                      }} />
                     
                      <TextField placeholder="Enter your mobileno" name="mobileno" type="text" size="25"
                      onChange={(e)=>{
                        // console.log(e.target.value);
                        details.mobileno = e.target.value;
                    }}
                    />
        
                      <TextField placeholder="Enter password" name="password" type="password" size="25"
                    onChange={(e)=>{
                        // console.log(e.target.value);
                        details.password = e.target.value;
                    }}
                    /> 
                   
                      <TextField placeholder="Re-enter password" name="confirmPassword" type="password" size="25"/> 
                    {/* You are a {" "}
                    <input type="radio" id="html" name="fav_language" value="HTML"></input>
                    <label for="html">Student</label> {" "}
                    <input type="radio" id="css" name="fav_language" value="CSS"></input>
                    <label for="css">Faculty</label> */}
                    <button type='submit' class="rounded" style={{ width:"60%",background:"rgba(64,93,230"}}>Sign Up</button>

                    </Form>
                    <br />
                
                    </div>
                    )}
                    </Formik>
            </div>
            
        </div>
        <br />
        <div style={{height:"30%"}} class="mt-5">
        <div class="border border-grey rounded p-3 d-flex justify-content-center" style={{ width:"25rem",background:"white"}}>
                <div>
                Already have an acount? <a href="/">Login</a>    
                </div>

            </div>
        </div>
        </div>
            </div>
    )
}
