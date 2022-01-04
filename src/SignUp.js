import React from 'react'

export default function SignUp() {
    return (
        <div class="d-flex justify-content-center">
            <div class="d-flex flex-column">
            <div style={{height:"70%"}}>
            <div class="border border-grey rounded p-3 d-flex justify-content-center " style={{ width:"25rem",background:"white"}}>
                <div>
                    <h1>Portal</h1>
                    <br></br>
                    <h6 style={{color:"grey"}} >Register to unlock all the internships offered by your college</h6>
                    <br />
                    <form>
                      <input type="text"  placeholder='Enter official email' size="25"></input> 
                      <br />
                      <br />
                      <input type="text"  placeholder='Enter Mobile No.' size="25"></input> 
                      <br />
                      <br />
                    <input type="password"  placeholder='Enter Password' size="25"/> 
                    <br />
                      <br />

                    <input type="password"  placeholder='Confirm Password' size="25"/> 
                    <br />
                    <br />
                    You are a {" "}
                    <input type="radio" id="html" name="fav_language" value="HTML"></input>
                    <label for="html">Student</label> {" "}
                    <input type="radio" id="css" name="fav_language" value="CSS"></input>
<                       label for="css">Faculty</label>
                      <br />
                      <br/>
                    <button type='submit' class="rounded" style={{ width:"60%",background:"rgba(64,93,230"}}>Login</button>
                
                    </form>
                    <br />
                
                    </div>

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
