import React from 'react'
import Header from './Header'

export default function Student() {
  const spaces = 5;
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
    <tr>
      <th scope="row">1</th>
      <td>ABC Company</td>
      <td>Teacher John Doe</td>
      <td>Registerations open</td>
        <td>5.1.2022</td>
        <td><a href="/details">Click Here</a></td>
        <td>Full Stack Developer</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>ABC Company</td>
      <td>Teacher John Doe</td>
      <td>Registerations open</td>
        <td>5.1.2022</td>
        <td><a href="/details">Click Here</a></td>
        <td>Full Stack Developer</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>ABC Company</td>
      <td>Teacher John Doe</td>
      <td>Registerations open</td>
        <td>5.1.2022</td>
        <td><a href="/details">Click Here</a></td>
        <td>Full Stack Developer</td>
    </tr>

  </tbody>
</table>
</div>

        </div>
    )
}
