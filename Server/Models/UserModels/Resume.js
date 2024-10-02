const mongoose = require('mongoose')

const ResumeSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    firstName:{
        type:String
    },
    lastName:{
        type:String,
    },
    jobTitle:{
        type:String
    },
    address:{
        type:String
    },
    phone:{
        type:Number
    },
    email:{
        type:String
    }
},{timestamps:true})

const Resume = mongoose.model("Resume",ResumeSchema)

module.exports = Resume