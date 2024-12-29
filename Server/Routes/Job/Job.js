const express = require('express');
const { postJob } = require('../../Controllers/Job/PostJob');
const { allJobs } = require('../../Controllers/Job/AllJobs');
const { deleteJob } = require('../../Controllers/Job/DeleteJob');
const { jobData } = require('../../Controllers/Job/JobData');
const { updateJob } = require('../../Controllers/Job/UpdateJob');
const { addApplication } = require('../../Controllers/Job/AddApplication');

const Router = express.Router();


//Route for adding the 
Router.post('/postJob',postJob)
//Routes for getting all the jobs for a specific company will change this route later
Router.get('/allJobs',allJobs)
//Route for deleting a job
Router.delete('/deleteJob/:id',deleteJob)
//Route for getting the data of a specific job
Router.get('/jobData/:id',jobData)
//Route for updating the job data
Router.put('/updateJob/:id',updateJob)
//Route for getting all the data of jobs
Router.get('/allJobs',allJobs)
//Router for adding application to the job
Router.post('/addApplication',addApplication)

module.exports = Router