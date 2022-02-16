import {React,useState,useEffect} from 'react'
import Header from './Header'
import { useParams } from 'react-router-dom';
import { getInternshipDetails } from '../Utiles/Internship';
export default function Details() {
    const [internship,setInternship] = useState({});
    const InternshipID = useParams();
    useEffect(()=>{
        getInternshipDetails(InternshipID.id).then((res)=>{
            let internshipDetails = res.data;
            setInternship(internshipDetails);
            console.log(internshipDetails);
        })
    },[])
    return (
        <div>
            <Header />
            <div className="m-4">
                <strong>Requirement Description</strong>
                <p>
                {internship.description}
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
                    Registeration link : <a href="https://www.goggle.com/" target="_blank">dummyLink</a>
                </p>
                <strong>Last Date : </strong>11.11.2021
                    <p>After applying, click here to recieve updates...</p>
            </div>
            <div>
                <p>
                <a href='abc'>Click here</a> to view who else has applied to this internship. <br />
                    
                </p>
                <p>Company is open to provide <strong>{internship.stipendAmount}</strong> as a stipend for <strong>x</strong> months</p>
            </div>
        </div>
    )
}
