const express = require('express')
const Router = express.Router()
const { AddCourse , upload} = require('../../Controllers/Instructor/AddCourse')

//Route for Adding New Course

Router.post('/course',upload.single('imageUrl'),AddCourse)



module.exports = Router 