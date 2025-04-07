const mongoose = require('mongoose')

const jobSchema = new mongoose.Schema({
    jobTitle: {
        type: String,
        // required:true,
        trim: true
    },
    jobDescription: {
        type: String,
        // required:true,
        trim: true
    },
    workingSchedule: {
        type: String,
        // required:true,
        trim: true
    },
    workingDays: {
        type: String,
        // required:true,
        trim: true
    },
    salaryMin: {
        type: String,
        // required:true,
        trim: true
    },
    salaryMax: {
        type: String,
        // required:true,
        trim: true
    },
    employmentType: {
        type: String,
        // required:true,
        trim: true
    },
    location: {
        type: String,
        // required:true,
        trim: true
    },
    experience: {
        type: String,
        // required:true,
        trim: true
    },
    qualification: {
        type: String,
        // required:true,
        trim: true
    },
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        // required: true,
        ref: 'Company',
    }

}, { timestamps: true })


let Job = mongoose.model('job', jobSchema)
module.exports = Job