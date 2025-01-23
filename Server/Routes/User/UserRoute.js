const express = require('express')
const Router = express.Router()
const {UserSignup} = require('../../Controllers/UserAuthentication/UserSignup')
const {UserSignin} = require('../../Controllers/UserAuthentication/UserSignin')
const {OtpVerification} = require('../../Controllers/UserAuthentication/OtpVerification')
const {OtpSent} = require('../../Controllers/UserAuthentication/OtpSent')
const {ChangePassword} = require('../../Controllers/UserAuthentication/PassswordChange')
const {AddResume} = require('../../Controllers/ResumeBuilder/AddResume')
const { addPersonalDetails } = require('../../Controllers/ResumeBuilder/AddPersonalDetails')
const { addSummery } = require('../../Controllers/ResumeBuilder/AddSummery')
const { addExperience } = require('../../Controllers/ResumeBuilder/AddExperience')
const { addEducation } = require('../../Controllers/ResumeBuilder/AddEducation')
const { addSkills } = require('../../Controllers/ResumeBuilder/AddSkills')
const { getResume } = require('../../Controllers/ResumeBuilder/GetResumeData')
const { themeChange } = require('../../Controllers/ResumeBuilder/ThemeChange')
const { getAllResumes } = require('../../Controllers/ResumeBuilder/GetAllResumesData')
const { deleteResume } = require('../../Controllers/ResumeBuilder/DeleteResume')
const { addCertification } = require('../../Controllers/ResumeBuilder/AddCertification')
const { addProject } = require('../../Controllers/ResumeBuilder/AddProject')
const {getAllCourses} = require('../../Controllers/Course/GetAllCourses')
const { getCourseData } = require('../../Controllers/Course/GetCourseData')
const { updateUser } = require('../../Controllers/UserProfile/UpdateUser')
const { userProjects , upload } = require('../../Controllers/UserProfile/UserProjects')
const { deleteUserProject } = require('../../Controllers/UserProfile/DeleteUserProject')

//Route to add User
Router.post('/signup',UserSignup)

//Route to update the user
Router.put('/updateUser/:id',updateUser)

//User Projects (multiple images)
Router.put('/projects/:id', upload.array('projectImages'), userProjects);

//Delete user project 
Router.delete('/projects/:userId/:projectId/deleteProject',deleteUserProject)

//Route to login User
Router.post('/signin',UserSignin)

//Route to Otp Verification
Router.post('/otpVerification',OtpVerification)

//Route to send Otp for password change
Router.put('/otpsent',OtpSent)

//Route for password change 
Router.put('/ChangePassword',ChangePassword)

//Route for Adding new Resume
Router.post('/Resume',AddResume)

//Route for adding Personal details to resume
Router.put('/Resume/:id/personaldetail',addPersonalDetails)

//Route for adding Summery to resume
Router.put('/Resume/:id/summery',addSummery)

//Route for adding Experience to resume
Router.put('/Resume/:id/experience',addExperience)

//Route for adding Education to resume
Router.put('/Resume/:id/education',addEducation)

//Route for adding certification 
Router.put('/Resume/:id/project',addProject)

//Route for adding certification 
Router.put('/Resume/:id/certification',addCertification)

//Route for adding Skills to resume
Router.put('/Resume/:id/skills',addSkills)

//Route for Changing the theme of  resume
Router.put('/Resume/:id/theme',themeChange)

//Route for getting the to resume
Router.get('/Resume/:id',getResume)

//Route for getting all the resumes 
Router.get('/Resume',getAllResumes)

//Route for Deleting the Resume
Router.delete('/Resume/:id',deleteResume)


                    //    User courses routes
//Route for all courses 
Router.get('/courses',getAllCourses)

//Route for getting the data of specific course

Router.get('/courseData/:id',getCourseData)

module.exports = Router

