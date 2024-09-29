const mongoose = require('mongoose')

const ResumeSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    }
},{timestamps:true})

const Resume = mongoose.model("Resume",ResumeSchema)

module.exports = Resume