const { Mongoose, trusted } = require("mongoose");

const Internship = new Mongoose.schema({
    "companyName" : {
        type: String,
        required : true
    },
    "postedBy" : {
        type : String,
        required : true
    },
    "currentStatus" : {
        type : String 
    },
    "isActive" : {
        type : Boolean
    },
    "description" : {
        type : String
    },
    "appliedBy" : {
        type : Array
    },
    "LastUpdatedOn" : {
        type : Date
    }
 });

 module.exports = Internship = Mongoose.model("Internship",InternshipSchema)