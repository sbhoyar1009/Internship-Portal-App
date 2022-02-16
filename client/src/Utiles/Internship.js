import axios from 'axios';

export const getAllInternships =  async() =>{
    return await axios.get("/all-internships");
}

export const getInternshipDetails =  async(id) =>{
    return await axios.get(`/single-internship/${id}`);
}

export const postInternship = async(details) =>{
    return await axios.post("/internship",{details})
}