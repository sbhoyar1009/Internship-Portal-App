import React from 'react'

export default function ForgotPassword() {
    return (
        <div class="d-flex justify-content-center">
            <div class="d-flex flex-column">
            <div style={{height:"70%"}}>
            <div class="border border-grey rounded p-3 d-flex justify-content-center " style={{ width:"25rem",background:"white"}}>
                <div>
                    <img src="forgot-password.png" height="20%"></img>
                    <br></br>
                    <h5>Trouble Logging In ?</h5>
                    <h6 style={{color:"grey"}} >Enter New Password with registered email ID</h6>
                    <br />
                    <form>
                      <input type="text"  placeholder='Enter email or contact no.' size="25"></input> 
                      <br />
                      <br/>
                      <input type="password"  placeholder='Enter New Password' size="25"/> 
                    <br />
                      <br />

                    <input type="password"  placeholder='Confirm Password' size="25"/> 
                    <br />
                    <br />
                    <button type='submit' class="rounded" style={{ width:"60%",background:"rgba(64,93,230"}}>Send Login Link</button>
                
                    </form>
                    <br />
                    <hr />
                    OR
                    <br />
                    <a href='/signup' style={{textDecoration:"none",color:'black'}}><strong>Create a new account</strong></a>
                
                    </div>

            </div>
        </div>
        <br />
        <div style={{height:"30%"}} class="mt-5">
        <div class="border border-grey rounded p-3 d-flex justify-content-center" style={{ width:"25rem",background:"white"}}>
                <div>
<a href="/" style={{textDecoration:"none",color:'black'}}>Back to Login</a>    
                </div>

            </div>
        </div>
        </div>
            </div>
    )
}
