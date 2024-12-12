const express = require('express')
const Router = express.Router()
const { AddCourse , upload} = require('../../Controllers/Course/AddCourse')
const { getCourseData } = require('../../Controllers/Course/GetCourseData')
const { addLecture,uploadVideo  } = require('../../Controllers/Course/AddLecture')
const { deleteLecture } = require('../../Controllers/Course/DeleteLecture')

//Route for Adding New Course
Router.post('/add-course',upload.single('imageUrl'),AddCourse)

//Route for geting data of one specific Course
Router.get('/courseData/:id',getCourseData)

//Route for adding lectures to course 
Router.put('/add-Lecture/:id',uploadVideo.single('video'), addLecture)

//Route to delete specific element from the lessons array 
Router.put('/delete-lecture/:id',deleteLecture)

module.exports = Router 