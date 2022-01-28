import React from 'react'
import Header from './Header'

export default function PostAnInternship() {
    return (
        <div>
            <div>
                <Header />

            </div>
            <div class="align-items-center">
<form>
    <div >
        <label>Enter the name of the company </label> &nbsp;&nbsp;&nbsp;
    <input type='text' size="30"></input>
    </div>
<br />
<div class="d-flex align-items-center" style={{marginLeft:"25rem"}}>
<label>Enter description </label> &nbsp;&nbsp;&nbsp;
    <textarea type='text' cols="60" rows="6" />
    </div>
    <br />
    <div class="mb-5">
        <label>Add a registeration link </label> &nbsp;&nbsp;&nbsp;
    <input type='text' size="30"></input>
    </div>
    <button type='submit'>Post an internship</button>
</form>
</div>
        </div>
    )
}
