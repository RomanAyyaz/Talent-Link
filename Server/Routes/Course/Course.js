const express = require('express')
const Router = express.Router()
const { AddCourse , upload} = require('../../Controllers/Course/AddCourse')
const { getCourseData } = require('../../Controllers/Course/GetCourseData')
const { addLecture,uploadVideo  } = require('../../Controllers/Course/AddLecture')

//Route for Adding New Course

Router.post('/add-course',upload.single('imageUrl'),AddCourse)

//Route for geting data of one specific Course

Router.get('/courseData/:id',getCourseData)

//Route for adding lectures to course 

Router.put('/add-Lecture/:id',uploadVideo.single('video'), addLecture)

module.exports = Router 