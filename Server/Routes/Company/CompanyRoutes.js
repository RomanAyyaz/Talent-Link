const express = require('express')
const { companySignup } = require('../../Controllers/CompanyRegistration/CompanySignUp')
const { OtpVerification } = require('../../Controllers/CompanyRegistration/OtpVerification')
const { companySignIn } = require('../../Controllers/CompanyRegistration/CompanySignIn')
const { companyInformation , upload } = require('../../Controllers/CompanyProfile/CompanyInformation')
const { BusinessOverView } = require('../../Controllers/CompanyProfile/CompanyBusinessOverview')
const { socialMediaLinks } = require('../../Controllers/CompanyProfile/CompanySocialMediaLinks')
const { companyRepresentatives } = require('../../Controllers/CompanyProfile/CompanyRepresentatives')
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

//Company Business Overview
Router.put('/companyBusinessOverview/:id',BusinessOverView)

//Company social Media Links
Router.put('/socialMediaLinks/:id',socialMediaLinks)

//Company Representatives 
Router.put('/representatives/:id',companyRepresentatives)

module.exports = Router