const express = require('express');
const { companySignup } = require('../../Controllers/CompanyRegistration/CompanySignUp');
const { OtpVerification } = require('../../Controllers/CompanyRegistration/OtpVerification');
const { companySignIn } = require('../../Controllers/CompanyRegistration/CompanySignIn');
const { companyInformation, upload: uploadSingle } = require('../../Controllers/CompanyProfile/CompanyInformation');
const { BusinessOverView } = require('../../Controllers/CompanyProfile/CompanyBusinessOverview');
const { socialMediaLinks } = require('../../Controllers/CompanyProfile/CompanySocialMediaLinks');
const { companyRepresentatives } = require('../../Controllers/CompanyProfile/CompanyRepresentatives');
const { companyProjects, upload } = require('../../Controllers/CompanyProfile/CompanyProjects'); // Make sure CompanyProjects.js exports these
const Router = express.Router();


// Company register routes
Router.post('/registerCompany', companySignup);
Router.post('/otpVerification', OtpVerification);
Router.post('/companySignIn', companySignIn);

// Company profile Routes
Router.put('/companyInformation/:id', uploadSingle.single('companyLogo'), companyInformation);
Router.put('/companyBusinessOverview/:id', BusinessOverView);
Router.put('/socialMediaLinks/:id', socialMediaLinks);
Router.put('/representatives/:id', companyRepresentatives);

// Company Projects (multiple images)
Router.put('/projects/:id', upload.array('projectImages'), companyProjects);

module.exports = Router;
