const mongoose = require("mongoose");

const InternshipSchema = new mongoose.Schema({
    "companyName" : {
        type: String,
        required : true
    },
    // "postedBy" : {
    //     type : String,
    //     required : true
    // },
    "currentStatus" : {
        type : String,
        default : "Active"
    },
    "description" : {
        type : String
    },
    "appliedBy" : {
        type : Array
    },
    "PostedAt" : {
        type : Date
    },
    "formLink" : {
        type: String
    },
    "stipendAmount" :{
        type : String
    }
 });

 module.exports = Internship = mongoose.model("Internship",InternshipSchema)

// {  "companyName" : "LoremIpsum",
//   "description" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
//  "formLink" : "www.abcxyz.com"}
