const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        requried : true
    },
    mobileno : {
        type : String,
        required : true
    },
    role : {
        type : String,
        default : "Student"
    }
});
module.exports = User = mongoose.model("User",UserSchema);