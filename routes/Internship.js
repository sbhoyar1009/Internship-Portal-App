const express = require("express");
const Internship = require("../models/Internship");
const router = express.Router({ mergeParams: true });

router.post("/internship",(req,res)=>{
let details  = req.body.details;
console.log(details)
let newInternship = new Internship(details);
newInternship.save((err,r)=>{
    if (err){
        console.log("Invalid details");
    }else{
    console.log(`Offer for  ${newInternship.companyName} saved sucessfully`)
    }
})

})

router.get("/all-internships",(req,res)=>{
    Internship.find({},(err,internships)=>{
            res.send(internships);
    })    
})

router.get("/single-internship/:id",(req,res)=>{
    let InternshipID = req.params.id;
    console.log(InternshipID)
    Internship.findById(InternshipID,(err,internshipDetails)=>{
        res.send(internshipDetails);
    })
})

module.exports = router;