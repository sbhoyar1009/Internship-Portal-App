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
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
</div>

        </div>
    )
}
