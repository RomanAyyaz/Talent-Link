const express = require('express')
const { companySignup } = require('../../Controllers/CompanyRegistration/CompanySignUp')
const { OtpVerification } = require('../../Controllers/CompanyRegistration/OtpVerification')
const { companySignIn } = require('../../Controllers/CompanyRegistration/CompanySignIn')
const { companyInformation , upload } = require('../../Controllers/CompanyProfile/CompanyInformation')
const Router = express.Router()

                            // Company Register Routes
//Register Company
Router.post('/registerCompany',companySignup)

//Company otp verification
Router.post('/otpVerification',OtpVerification)

//Company Login
Router.post('/companySignIn',companySignIn)

                            // Company profile Routes
//Company Information
Router.put('/companyInformation/:id',upload.single('companyLogo'),companyInformation)
module.exports = Router