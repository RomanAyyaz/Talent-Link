const express = require('express')
const { companySignup } = require('../../Controllers/CompanyRegistration/CompanySignUp')
const { OtpVerification } = require('../../Controllers/CompanyRegistration/OtpVerification')
const { companySignIn } = require('../../Controllers/CompanyRegistration/CompanySignIn')
const Router = express.Router()

//Register Company
Router.post('/registerCompany',companySignup)

//Company otp verification
Router.post('/otpVerification',OtpVerification)

//Company Login
Router.post('/companySignIn',companySignIn)

module.exports = Router