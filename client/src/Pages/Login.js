import React from 'react';

export default function Login() {
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
                      <input type="text"  placeholder='Enter emailID or phone no.' size="25"></input> 
                      <br />
                      <br />
                    <input type="password"  placeholder='Enter Password' size="25"/> 
                    
                    <br />
                      <br />
                    <button type='submit' class="rounded" style={{ width:"100%",background:"rgba(64,93,230"}}>Login</button>
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