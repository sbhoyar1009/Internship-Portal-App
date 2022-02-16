import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';
import { getAllInternships } from '../Utiles/Internship';
import Header from './Header'

export default function Student() {
  const [internships,setInternships] = useState([]);
  const spaces = 5;

  useEffect (() =>{
          getAllInternships().then((res)=>{
            setInternships(res.data);
            console.log(res.data);
          })
  },[])
    return (
        // <div class=" d-flex justify-content-center" style={{width:"90%"}}> 
        <div>
        <Header />
        <div class="m-5"> 
            <table class="table table-striped table-bordered">
  <thead >
    <tr>
      <th scope="col">Sr.No </th>
      {/* <th scope="col">Internship ID</th> */}
      <th scope="col">Company Name</th>
      <th scope="col">Posted by</th>
      <th scope="col">Current Status</th>
      <th scope="col">Last Updated on</th>
      <th scope="col">Details</th>
      <th scope="col">Domain</th>
    </tr>
  </thead>
  <tbody>
    {internships.length>0?
    internships.map((internship,index)=>{
      {{console.log(internship.companyName)}}
      return(
        <tr>
        <th scope="row">{index+1}</th>
         <td>{internship.companyName}</td>
         <td>Teacher John Doe</td>
         <td>Registerations open</td>
           <td>{new Date(internship.PostedAt).toLocaleDateString("en-US")}</td>
           <td><Link to={"/details/"+(internship._id)}> Click Here</Link></td>
           <td>AI/ML</td>
       </tr>)
    }):" Nothing to display"}
  </tbody>
</table>
</div>

        </div>
    )
}
