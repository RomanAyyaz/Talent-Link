const mongoose = require('mongoose')

const CourseSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        trim:true
    },
    instructor:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
        default:0
    },
    imageUrl:{
        type:String,
        required:true
    },
    learningOutcomes:{
        type:[String],
    }

},{timestamps:true})

const Course = mongoose.model('Course',CourseSchema)

module.exports = Course