import React from 'react'

export default function Student() {
    return (
        <div class=" d-flex justify-content-center" style={{width:"90%"}}> 
        <div>
            <table class="table table-light">
  <thead >
    <tr>
      <th scope="col">Sr.No </th>
      <th scope="col">Internship ID</th>
      <th scope="col">Company Name</th>
      <th scope="col">Posted by</th>
      <th scope="col">Current Status</th>
      <th scope="col">Last Updated on</th>
      <th scope="col">Details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>

      <td>ABC Company</td>
      <td>John Doe</td>
      <td>Registerations open</td>
        <td>5.1.2022</td>
        <td><a href="/details">Click Here</a></td>
        
    </tr>
    
  </tbody>
</table>
</div>

        </div>
    )
}
