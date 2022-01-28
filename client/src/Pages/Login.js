import {React,useEffect,useState} from 'react';
import { Navigate } from "react-router-dom";
import { getAllUsers } from '../Utiles/Login';

export default function Login() {
    const [users,setUsers]  = useState([]);
    const [email,setEmail]  = useState("");
    const [password,setPassword]  = useState("");
useEffect(() => {
    getAllUsers().then((res)=>{
        setUsers(res.data);
    }).catch((err)=>{console.log("error")})
}, [])


const checkLogin=()=>{
    console.log(email,password)
    users.forEach((user)=>{
        console.log(user)
        if (user.email === email){
            if(user.password===password){
                console.log("Autheticated user");
                <Navigate to="/student" />            
            }else{
                console.log("Invalid Password")
            }
        }
    })
}

    return (

        <div class="row m-2" style={{height:"100vh"}}>
        <div class="col md-6 mt-5" >
            
            <img src= "a.jpeg"></img>
        </div>
        <div class="col md-6">
        <div style={{height:"70%"}}>
            <div class="border border-grey rounded p-3 d-flex justify-content-center" style={{ width:"25rem",background:"white"}}>
                <div>
                    <h1>Portal</h1>
                    <br></br>
                    <form>
                      <input type="text"  placeholder='Enter emailID or phone no.' size="25" 
                      onChange={(e)=>{
                          console.log(e.target.value)
                        setEmail(e.target.value)}}></input> 
                      <br />
                      <br />
                    <input type="password"  placeholder='Enter Password' size="25"
                    onChange={(e)=>{
                        console.log(e.target.value)
                      setPassword(e.target.value)}}
                    /> 
                    
                    <br />
                      <br />
                    <button type='submit' class="rounded" style={{ width:"100%",background:"rgba(64,93,230"}}
                    onClick={(e)=>{
                        e.preventDefault();
                        checkLogin()}}
                    >Login</button>
                    </form>
                    <br />
                    <hr ></hr>
                    OR
                    <br />
                    <br />
                    <button type='submit' class="rounded" style={{ width:"100%"}}>Sign in using Google</button>
                    <br />
                    <br />
                    <a href='/forgot-password'>Forgot password?</a>
                    
                    </div>

            </div>
        </div>
        <div style={{height:"30%"}}>
        <div class="border border-grey rounded p-3 d-flex justify-content-center" style={{ width:"25rem",background:"white"}}>
                <div>
                Don't have an acount? <a href="/signup">Sign up</a>    
                </div>

            </div>

        </div>
        </div>
    </div>

    )
}
