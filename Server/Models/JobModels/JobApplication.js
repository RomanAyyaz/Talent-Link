const mongoose = require('mongoose');

let JobApplicationSchema = new mongoose.Schema({
    jobId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job',
        required: true,
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:true
    },
    resume:{
        type:String,
    },
    coverLetter:{
        type:String,
    },
    appliedAt:{
        type:Date,
        default:Date.now
    }
},{timestamps:true})

let JobApplication = mongoose.model('jobApplication',JobApplicationSchema)

module.exports = JobApplication