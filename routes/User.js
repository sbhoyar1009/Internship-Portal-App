const express = require("express");
const router = express.Router({ mergeParams: true });
const User = require("../models/User");

router.post("/signup",(req,res)=>{
let details  = req.body;
console.log(details)
let newUser = new User(details);
newUser.save((err,r)=>{
    if (err){
        console.log("Invalid user details");
    }else{
    console.log(`User ${newUser.email} saved sucessfully`)
    }
})
User.save(details);
})

router.get("/users",(req,res)=>{
    User.find({},(req,user)=>{
        res.send(user)
    })
})

router.put("/forget-password",(req,res)=>{
    let newPassword = req.body;
    User.findOneAndUpdate({"email":newPassword.email},{password : newPassword.password},(err,r)=>{
        res.send("Password updated !!")
    })
        
    // {
    //     "emai" : "sbhoyar1009@gmail.com",
    //     "password" : "6666"
    // }
})

module.exports = router;