const express = require('express')
const Router = express.Router()
const {UserSignup} = require('../../Controllers/UserAuthentication/UserSignup')
const {UserSignin} = require('../../Controllers/UserAuthentication/UserSignin')
const {OtpVerification} = require('../../Controllers/UserAuthentication/OtpVerification')
const {OtpSent} = require('../../Controllers/UserAuthentication/OtpSent')
const {ChangePassword} = require('../../Controllers/UserAuthentication/PassswordChange')
const {AddResume} = require('../../Controllers/ResumeBuilder/AddResume')


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



module.exports = Router

