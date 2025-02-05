const mongoose = require('mongoose')

const LessonSchema = new mongoose.Schema({
    title: {
        type: String,
        //required:true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    videoUrl: {
        type: String,
        //required:true
    },
    quiz: [
        {
            question: String,
            answer: [String],
            correctAnswer: String
        }
    ]
})

const reviewSchema = new mongoose.Schema({
    comment:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    user:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required:true
        },
})

const CourseSchema = new mongoose.Schema({
    title: {
        type: String,
        //required:true,
        trim: true
    },
    description: {
        type: String,
        //required:true,
        trim: true
    },
    instructor: {
        type: String,
        //required:true
    },
    category: {
        type: String,
        //required:true
    },
    lessons: [LessonSchema],
    duration: {
        type: String,
        //required:true
    },
    price: {
        type: Number,
        //required:true,
        default: 0
    },
    imageUrl: {
        type: String,
        //required:true
    },
    learningOutcomes: {
        type: [String],
    },
    bought:{
        type:Boolean,
        default:false
    },
    reviews:[reviewSchema]
}, { timestamps: true })

const Course = mongoose.model('Course', CourseSchema)

module.exports = Course;