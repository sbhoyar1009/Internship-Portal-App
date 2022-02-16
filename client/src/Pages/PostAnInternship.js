import {React,useState} from 'react'
import {postInternship}  from '../Utiles/Internship';
import Header from './Header'

export default function PostAnInternship() {
    const [details,setDetails] = useState({});

    const onSubmit = (e) =>{
        e.preventDefault();
        postInternship(details).then((res)=>{
            console.log("Posted successfully");
        })
    }

    return (
        <div>
            <div>
                <Header />

            </div>
            <div class="container p-5 border shadow">
<form onSubmit={onSubmit}>
    <div class="row">
        <div class="col-3">
        <label>Enter the name of the company </label> 
        </div>
        <div class="col-3">
    <input type='text' size="30" onChange={(e)=>setDetails({...details,"companyName":e.target.value})}></input>
        </div>
        </div>
        <br />
        <div class="row">
        <div class="col-3">
<label>Enter description </label> 
</div>
<div class="col-3">
    <textarea type='text' cols="60" rows="6" onChange={(e)=>setDetails({...details,"description":e.target.value})}/>
    </div>
    </div>


    <br />
    <div class="row">
        <div class="col-3">
        <label>Add a registeration link </label> 
        </div>
        <div class="col-3">
        <input type='text' size="30" onChange={(e)=>setDetails({...details,"formLink":e.target.value})}></input>
        </div>
       
    </div>
    <br />
    <div class="row">
        <div class="col-3">
        <label>Enter domain </label>
        </div>
        <div class="col-3">
        <select style={{width:"225px"}}>
    <option value = "">None</option>
        <option value = "AI/ML">AI/ML</option>
        <option value = "AI/ML">SDE</option>
    </select>
        </div>
  
    </div>
    <br/>
    <div class="row">
        <div class="col-3">
        <label>Stipend amount (in INR) </label> 
        </div>
        <div class="col-3">
    <input type='text' size="30" onChange={(e)=>setDetails({...details,"stipendAmount":e.target.value})}></input>
        </div>
        <div class="col-3">
        <label>Duration (in months) </label> 
        </div>
        <div class="col-3">
    <input type='text' size="30" onChange={(e)=>setDetails({...details,"duration":e.target.value})}></input>
        </div>
        </div>
        <br />
        <br />
    <button class="btn btn-primary" type='submit' onClick={(e)=>setDetails({...details,"PostedAt":new Date()})}>Post an internship</button>
</form>
</div>
        </div>
    )
}
