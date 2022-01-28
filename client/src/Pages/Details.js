import React from 'react'
import Header from './Header'
export default function Details() {
    return (
        <div>
            <Header />
            <div className="m-4">
                <strong>Job Description</strong>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
                took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
                but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the r
                elease of Letraset sheets containing Lorem Ipsum passages, 
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </p>
                <p>
                    <strong>Posted by</strong> Teacher John Doe <br />
                    <strong>Contact Info :</strong> +91-1234567890 <br />
                    <strong>Company Name : </strong> ABC Company
                </p>
            </div>
            <div class="mb-3">
                <strong>Current Status : </strong>Registrations Open
                <p>
                    Registeration link : <a href='Lorem-ipsum'>dummyLink</a>
                </p>
                <strong>Last Date : </strong>11.11.2021
                    <p>After applying, click here to recieve updates...</p>
                    <label>Planning on applying to the internship &nbsp;</label>
                    <input type="checkbox" ></input>
            </div>
            <div>
                <p>
                <a href='abc'>Click here</a> to view who else has applied to this internship. <br />
                    
                </p>
            </div>
        </div>
    )
}
