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
    },
    summery:{
        type:String
    },
    experience:[
        {
            title:String,
            companyName:String,
            city:String,
            state:String,
            startDate:String,
            endDate:String,
            currentlyWorking:String,
            workSummery: String
        }
    ],
    education:[
        {
            universityName:String,
            startDate:String,
            endDate:String,
            degree:String,
            major:String,
            description:String
        }
    ],
    skills:[
        {
            name:String,
            rating:Number
        }
    ]
},{timestamps:true})

const Resume = mongoose.model("Resume",ResumeSchema)

module.exports = Resume