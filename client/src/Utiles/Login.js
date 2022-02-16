import axios from 'axios';

export const getAllUsers =  async() =>{
    return await axios.get("/users");
}

export const signup = async (details) =>{
    return await axios.post("/signup",{details})
}