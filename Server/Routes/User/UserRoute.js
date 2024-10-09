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


//Route to add User
Router.post('/signup',UserSignup)

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

module.exports = Router

