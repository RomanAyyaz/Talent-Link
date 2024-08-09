const express = require('express')
const Router = express.Router()
const {UserSignup} = require('../../Controllers/User/UserSignup')
const {UserSignin} = require('../../Controllers/User/UserSignin')
const {OtpVerification} = require('../../Controllers/User/OtpVerification')
const {OtpSent} = require('../../Controllers/User/OtpSent')
const {ChangePassword} = require('../../Controllers/User/PassswordChange')



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

module.exports = Router

